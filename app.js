/* ================= FIREBASE AUTH & FIRESTORE SYNC ================= */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyD7BTffOTeGVrVXFmWw6YKzgsjdos2iL-s",
  authDomain: "learnenglishproject-bf5a1.firebaseapp.com",
  databaseURL: "https://learnenglishproject-bf5a1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "learnenglishproject-bf5a1",
  storageBucket: "learnenglishproject-bf5a1.firebasestorage.app",
  messagingSenderId: "653462583307",
  appId: "1:653462583307:web:bc8cbb317bec7b7b96ef0e"
};

let db = null;
let auth = null;
let currentUser = null;
let syncTimeout = null;
let isFirstTime = true;

function getEmptyProgressState() {
  return {
    masteredIds: [],
    dictProgressStore: {
      lastLessonIdx: 0,
      byLessonKey: {}
    },
    listeningProgressStore: {
      currentSentenceIdx: 0,
      maxSentenceIdx: 0
    },
    grammarProgressStore: {
      lastTense: 'pres_simple',
      byTense: {}
    },
    speaking_progress: 0,
    mistakes: []
  };
}

function applyProgressStateToUI(state) {
  masteredIds = Array.isArray(state.masteredIds) ? state.masteredIds : [];
  dictProgressStore = {
    lastLessonIdx: Number.isInteger(state.dictProgressStore?.lastLessonIdx)
      ? state.dictProgressStore.lastLessonIdx
      : 0,
    byLessonKey: normalizeLessonProgressMap(state.dictProgressStore?.byLessonKey)
  };
  listeningProgressStore = normalizeListeningProgress(state.listeningProgressStore);
  grammarProgressStore = {
    lastTense: typeof state.grammarProgressStore?.lastTense === 'string'
      ? state.grammarProgressStore.lastTense
      : 'pres_simple',
    byTense:
      state.grammarProgressStore?.byTense && typeof state.grammarProgressStore.byTense === 'object'
        ? state.grammarProgressStore.byTense
        : {}
  };
  mistakes = Array.isArray(state.mistakes) ? state.mistakes : [];

  const safeSpeakIdx =
    Number.isInteger(state.speaking_progress) && state.speaking_progress >= 0
      ? state.speaking_progress
      : 0;
  if (typeof speakIdx !== 'undefined') {
    speakIdx = safeSpeakIdx;
  }
  if (typeof SPEAKING_IDX_KEY !== 'undefined') {
    localStorage.setItem(SPEAKING_IDX_KEY, String(safeSpeakIdx));
  }

  currentTense = grammarProgressStore.lastTense || 'pres_simple';
  currentDictIdx = 0;
  grammarIdx = 0;

  localStorage.setItem('mastered_vocab_ids', JSON.stringify(masteredIds));
  localStorage.setItem(DICT_PROGRESS_KEY, JSON.stringify(dictProgressStore));
  localStorage.setItem(LISTENING_PROGRESS_KEY, JSON.stringify(listeningProgressStore));
  localStorage.setItem(GRAMMAR_PROGRESS_KEY, JSON.stringify(grammarProgressStore));
  localStorage.setItem('eng_mistakes', JSON.stringify(mistakes));

  initVocabQueue(false);
  initLessonSelect();
  initGrammar();
  if (typeof initSpeaking === 'function') {
    initSpeaking();
  }
  renderNotebook();
}

function initFirebase() {
  if (!window.firebase || !FIREBASE_CONFIG.apiKey || FIREBASE_CONFIG.apiKey === "YOUR_API_KEY") {
    updateAuthUI();
    return;
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  auth = firebase.auth();
  db = firebase.firestore();

  auth.onAuthStateChanged(async (user) => {
    const prevUser = currentUser;
    currentUser = user || null;
    updateAuthUI();

    if (currentUser) {
      await loadUserProgressFromFirestore(currentUser.uid);
    } else if (prevUser) {
      // Đã đăng xuất: giữ nguyên dữ liệu trên Firestore của account cũ,
      // chỉ reset vị trí/trạng thái đang hiển thị về trạng thái trắng sạch
      clearTimeout(syncTimeout);
      applyProgressStateToUI(getEmptyProgressState());
    }
  });
}

function updateAuthUI() {
  const statusEl = document.getElementById('auth-status');
  const loginBtn = document.getElementById('google-login-btn');
  const logoutBtn = document.getElementById('google-logout-btn');

  if (currentUser) {
    if (statusEl) {
      statusEl.innerText = `👤 ${currentUser.displayName || currentUser.email}`;
    }
    if (loginBtn) loginBtn.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'inline-flex';
  } else {
    if (statusEl) statusEl.innerText = 'Chưa đăng nhập (máy này)';
    if (loginBtn) loginBtn.style.display = 'inline-flex';
    if (logoutBtn) logoutBtn.style.display = 'none';
  }
}

async function signInWithGoogle() {
  if (!auth) {
    return alert('Chưa cấu hình FIREBASE_CONFIG hợp lệ trong app.js!');
  }
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  } catch (err) {
    alert('Đăng nhập Google thất bại: ' + err.message);
  }
}

async function signOutGoogle() {
  if (!auth) return;
  try {
    clearTimeout(syncTimeout);
    await auth.signOut();
  } catch (err) {
    alert('Đăng xuất thất bại: ' + err.message);
  }
}

function normalizeLessonProgressMap(rawMap) {
  if (!rawMap || typeof rawMap !== 'object') return {};
  const clean = {};
  Object.keys(rawMap).forEach((k) => {
    const item = rawMap[k] || {};
    clean[k] = {
      sentenceIdx: Number.isInteger(item.sentenceIdx) && item.sentenceIdx >= 0 ? item.sentenceIdx : 0,
      maxVisitedIdx: Number.isInteger(item.maxVisitedIdx) && item.maxVisitedIdx >= 0 ? item.maxVisitedIdx : 0
    };
  });
  return clean;
}

function normalizeListeningProgress(raw) {
  const src = raw && typeof raw === 'object' ? raw : {};
  return {
    currentSentenceIdx: Number.isInteger(src.currentSentenceIdx) && src.currentSentenceIdx >= 0 ? src.currentSentenceIdx : 0,
    maxSentenceIdx: Number.isInteger(src.maxSentenceIdx) && src.maxSentenceIdx >= 0 ? src.maxSentenceIdx : 0
  };
}

async function loadUserProgressFromFirestore(uid) {
  if (!db || !uid) return;
  try {
    const docRef = db.collection('users').doc(uid);
    const snap = await docRef.get();

    if (snap.exists) {
      const data = snap.data() || {};
      applyProgressStateToUI({
        masteredIds: Array.isArray(data.mastered_vocab_ids) ? data.mastered_vocab_ids : [],
        dictProgressStore: data.dict_progress || { lastLessonIdx: 0, byLessonKey: {} },
        listeningProgressStore: data.listening_progress || { currentSentenceIdx: 0, maxSentenceIdx: 0 },
        grammarProgressStore: data.grammar_progress || { lastTense: 'pres_simple', byTense: {} },
        speaking_progress:
          Number.isInteger(data.speaking_progress) && data.speaking_progress >= 0
            ? data.speaking_progress
            : 0,
        mistakes: Array.isArray(data.mistakes) ? data.mistakes : []
      });
    } else {
      applyProgressStateToUI(getEmptyProgressState());
      await pushProgressNow(uid);
    }
  } catch (err) {
    console.error('Lỗi tải dữ liệu từ Firestore:', err);
  }
}

async function pushProgressNow(uid) {
  if (!db || !uid) return;
  try {
    const safeSpeakIdx =
      typeof speakIdx !== 'undefined' && Number.isInteger(speakIdx) && speakIdx >= 0
        ? speakIdx
        : 0;

    const payload = {
      email: currentUser?.email || '',
      displayName: currentUser?.displayName || '',
      mastered_vocab_ids: masteredIds,
      dict_progress: dictProgressStore,
      listening_progress: listeningProgressStore,
      grammar_progress: grammarProgressStore,
      speaking_progress: safeSpeakIdx,
      mistakes: mistakes,
      updated_at: firebase.firestore.FieldValue.serverTimestamp()
    };

    if (typeof spokenHistory !== 'undefined' && Array.isArray(spokenHistory)) {
      payload.spoken_history = spokenHistory;
    }
    if (typeof grammarDoneMap !== 'undefined' && grammarDoneMap && typeof grammarDoneMap === 'object') {
      payload.grammar_done_map = grammarDoneMap;
    }

    await db.collection('users').doc(uid).set(payload, { merge: true });
  } catch (err) {
    console.error('Lỗi lưu dữ liệu lên Firestore:', err);
  }
}

function syncProgressToCloud() {
  if (!currentUser || !db) return;
  clearTimeout(syncTimeout);
  syncTimeout = setTimeout(() => {
    pushProgressNow(currentUser.uid);
  }, 500);
}

/* ================= GLOBAL STATE & PROGRESS ================= */
const DICT_PROGRESS_KEY = 'sweden_dict_progress_v1';
const LISTENING_PROGRESS_KEY = 'sweden_listening_progress_v1';
const GRAMMAR_PROGRESS_KEY = 'sweden_grammar_progress_v1';

let masteredIds = JSON.parse(localStorage.getItem('mastered_vocab_ids')) || [];

let vocabQueue = [];
let queueIdx = 0;
let vocabMode = 'quiz';
let currentVocab = null;
let isReviewingMastered = false;

let lessons = LESSONS_DATA;
let currentLesson = lessons[0];
let currentDictIdx = 0;

function loadDictSavedProgress() {
  try {
    const raw = JSON.parse(localStorage.getItem(DICT_PROGRESS_KEY));
    if (raw && typeof raw === 'object') {
      return {
        lastLessonIdx: Number.isInteger(raw.lastLessonIdx) ? raw.lastLessonIdx : 0,
        byLessonKey: normalizeLessonProgressMap(raw.byLessonKey)
      };
    }
  } catch (e) {}
  return { lastLessonIdx: 0, byLessonKey: {} };
}

function loadListeningSavedProgress() {
  try {
    const raw = JSON.parse(localStorage.getItem(LISTENING_PROGRESS_KEY));
    return normalizeListeningProgress(raw);
  } catch (e) {}
  return { currentSentenceIdx: 0, maxSentenceIdx: 0 };
}

function loadGrammarSavedProgress() {
  try {
    const raw = JSON.parse(localStorage.getItem(GRAMMAR_PROGRESS_KEY));
    if (raw && typeof raw === 'object') {
      return {
        lastTense: typeof raw.lastTense === 'string' ? raw.lastTense : 'pres_simple',
        byTense: raw.byTense && typeof raw.byTense === 'object' ? raw.byTense : {}
      };
    }
  } catch (e) {}
  return { lastTense: 'pres_simple', byTense: {} };
}

let dictProgressStore = loadDictSavedProgress();
let listeningProgressStore = loadListeningSavedProgress();
let grammarProgressStore = loadGrammarSavedProgress();

let currentTense = grammarProgressStore.lastTense || 'pres_simple';
let filteredGrammar = [];
let grammarIdx = 0;

let currentSpeak = SPEAKING_DATA[0];

let mistakes = JSON.parse(localStorage.getItem('eng_mistakes')) || [];

/* ================= DRAWER MENU & NAVIGATION ================= */
function openMenu() {
  const drawer = document.getElementById('drawer-menu');
  const backdrop = document.getElementById('menu-backdrop');
  if (drawer) drawer.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
}

function closeMenu() {
  const drawer = document.getElementById('drawer-menu');
  const backdrop = document.getElementById('menu-backdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
}

function toggleMenu() {
  const drawer = document.getElementById('drawer-menu');
  if (!drawer) return;
  if (drawer.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

function switchTab(tabId, btnEl) {
  document.querySelectorAll('.tab-content').forEach((tc) => tc.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach((b) => b.classList.remove('active'));

  const targetEl = document.getElementById('tab-' + tabId);
  if (targetEl) targetEl.classList.add('active');
  if (btnEl) btnEl.classList.add('active');

  if (tabId === 'vocab-store') renderVocabStore('unmastered');
  if (tabId === 'notebook') renderNotebook();

  closeMenu();
}

window.onload = function () {
  initVocabQueue();
  initLessonSelect();
  initGrammar();
  initSpeaking();
  renderVerbs(IRREGULAR_VERBS);
  initFirebase();
};

/* --- 1. VOCAB QUEUE LOGIC --- */
function getPoolSource() {
  const lvl = document.getElementById('vocab-level').value;
  const top = document.getElementById('vocab-topic').value;
  let pool = VOCAB_DATA.filter(
    (v) =>
      (lvl === 'all' || v.level === lvl) &&
      (top === 'all' || v.topic === top) &&
      !masteredIds.includes(v.id)
  );
  if (pool.length === 0) {
    pool = VOCAB_DATA.filter((v) => (lvl === 'all' || v.level === lvl) && (top === 'all' || v.topic === top));
  }
  return pool;
}

function initVocabQueue(autoSpeak = true) {
  isReviewingMastered = false;
  document.getElementById('vocab-mode-title').innerText = 'Cài đặt bài học từ vựng (Hàng đợi 10 từ xoay vòng)';
  document.getElementById('normal-vocab-filters').style.display = 'grid';
  document.getElementById('vocab-mode-switcher').style.display = 'grid';
  document.getElementById('exit-review-btn').style.display = 'none';
  document.getElementById('master-action-btn').style.display = 'inline-flex';

  const pool = getPoolSource().sort(() => 0.5 - Math.random());
  vocabQueue = pool.slice(0, 10);
  queueIdx = 0;
  renderVocab(autoSpeak);
}

function startReviewMastered() {
  const masteredWords = VOCAB_DATA.filter((v) => masteredIds.includes(v.id));
  if (masteredWords.length === 0) {
    return alert('Chưa có từ nào được đánh dấu là Đã thuộc để ôn tập!');
  }
  isReviewingMastered = true;
  vocabQueue = [...masteredWords].sort(() => 0.5 - Math.random());
  queueIdx = 0;

  document.getElementById('vocab-mode-title').innerText = `🔄 Đang ôn tập toàn bộ từ Đã thuộc (${vocabQueue.length} từ)`;
  document.getElementById('normal-vocab-filters').style.display = 'none';
  document.getElementById('vocab-mode-switcher').style.display = 'none';
  document.getElementById('exit-review-btn').style.display = 'block';
  document.getElementById('master-action-btn').style.display = 'none';

  switchTab('vocab', document.querySelectorAll('.nav-btn')[0]);
  renderVocab();
}

function exitReviewMode() {
  initVocabQueue();
}

function setVocabMode(mode) {
  vocabMode = mode;
  document.getElementById('mode-quiz-btn').className = mode === 'quiz' ? 'btn btn-primary' : 'btn btn-secondary';
  document.getElementById('mode-type-btn').className = mode === 'type' ? 'btn btn-primary' : 'btn btn-secondary';
  document.getElementById('v-quiz-area').style.display = mode === 'quiz' ? 'block' : 'none';
  document.getElementById('v-type-area').style.display = mode === 'type' ? 'block' : 'none';
  renderVocab();
}

function renderVocab(autoSpeak = true) {
  if (vocabQueue.length === 0) {
    document.getElementById('v-prompt').innerText = '🎉 Hoàn thành danh sách!';
    document.getElementById('v-phonetic').innerText = isReviewingMastered
      ? 'Bạn đã ôn tập xong tất cả từ đã thuộc.'
      : 'Hệ thống đang tải hàng đợi mới.';
    document.getElementById('vocab-counter').innerText = '0/0';
    if (!isReviewingMastered) setTimeout(initVocabQueue, 1500);
    return;
  }
  currentVocab = vocabQueue[queueIdx % vocabQueue.length];
  document.getElementById('vocab-counter').innerText = `${(queueIdx % vocabQueue.length) + 1}/${vocabQueue.length}`;
  document.getElementById('v-badge').innerText = `Bậc ${currentVocab.level} • ${currentVocab.topic.toUpperCase()}`;
  document.getElementById('v-feedback').className = 'feedback-box';

  if(autoSpeak)
    speakText(currentVocab.en);

  if (vocabMode === 'quiz') {
    document.getElementById('v-prompt').innerText = currentVocab.en;
    document.getElementById('v-phonetic').innerText = currentVocab.phonetic;
    if (Object.hasOwn(currentVocab, "termNote"))
      document.getElementById('v-termNote').innerText = currentVocab.termNote;
    else
      document.getElementById('v-termNote').innerText = "";
    const others = VOCAB_DATA.filter((x) => x.id !== currentVocab.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    const choices = [...others, currentVocab].sort(() => 0.5 - Math.random());
    const letters = ['A', 'B', 'C', 'D'];
    document.getElementById('v-quiz-area').innerHTML = choices
      .map(
        (c, i) =>
          `<button class="option-btn" onclick="checkQuizVocab(this, ${c.id === currentVocab.id})"><b>${letters[i]}.</b> ${c.vi}</button>`
      )
      .join('');
  } else {
    document.getElementById('v-prompt').innerText = currentVocab.vi;
    document.getElementById('v-phonetic').innerText = '(Gõ từ tiếng Anh tương ứng)';
    document.getElementById('v-input').value = '';
  }
}

function checkQuizVocab(btn, isCorrect) {
  const fb = document.getElementById('v-feedback');
  if (isCorrect) {
    btn.classList.add('correct');
    fb.className = 'feedback-box show fb-ok';
    fb.innerHTML = `✅ Chính xác! <b>${currentVocab.en}</b> = ${currentVocab.vi}`;
    speakText(currentVocab.en);
  } else {
    btn.classList.add('wrong');
    fb.className = 'feedback-box show fb-err';
    fb.innerHTML = `❌ Sai rồi! Đáp án đúng là: <b>${currentVocab.vi}</b>`;
    addMistake(`Từ vựng: ${currentVocab.en} -> ${currentVocab.vi}`);
  }
}

function checkTypedVocab() {
  const val = document.getElementById('v-input').value.trim().toLowerCase();
  const ans = currentVocab.en.toLowerCase();
  const fb = document.getElementById('v-feedback');
  if (val === ans) {
    fb.className = 'feedback-box show fb-ok';
    fb.innerHTML = `✅ Tuyệt vời! <b>${currentVocab.en}</b> ${currentVocab.phonetic}`;
    speakText(currentVocab.en);
  } else {
    fb.className = 'feedback-box show fb-err';
    fb.innerHTML = `❌ Chưa đúng. Từ chuẩn là: <b>${currentVocab.en}</b> ${currentVocab.phonetic}`;
    addMistake(`Gõ từ: ${currentVocab.vi} -> ${currentVocab.en}`);
  }
}

function nextVocabQueue() {
  queueIdx++;
  renderVocab();
}

function markCurrentAsMastered() {
  if (!currentVocab) return;
  if (!masteredIds.includes(currentVocab.id)) {
    masteredIds.push(currentVocab.id);
    localStorage.setItem('mastered_vocab_ids', JSON.stringify(masteredIds));
    syncProgressToCloud();
  }
  vocabQueue.splice(queueIdx % vocabQueue.length, 1);

  const pool = getPoolSource().filter((v) => !vocabQueue.some((q) => q.id === v.id));
  if (pool.length > 0) {
    const nextWord = pool[Math.floor(Math.random() * pool.length)];
    vocabQueue.push(nextWord);
  }

  if (vocabQueue.length === 0) {
    initVocabQueue();
  } else {
    queueIdx = queueIdx % vocabQueue.length;
    renderVocab();
  }
}

/* --- KHO TỪ VỰNG & ÔN TẬP --- */
function renderVocabStore(filterType) {
  const listEl = document.getElementById('vocab-store-list');
  const titleEl = document.getElementById('store-list-title');
  const statsEl = document.getElementById('store-stats');

  statsEl.innerText = `${VOCAB_DATA.length} tổng số`;
  const targetList = VOCAB_DATA.filter((v) =>
    filterType === 'mastered' ? masteredIds.includes(v.id) : !masteredIds.includes(v.id)
  );

  titleEl.innerText =
    filterType === 'mastered' ? `📚 Từ đã thuộc (${targetList.length})` : `📖 Từ chưa thuộc (${targetList.length})`;

  if (targetList.length === 0) {
    listEl.innerHTML = `<p style="text-align:center; padding:20px; color:var(--muted);">Không có từ nào trong mục này.</p>`;
    return;
  }

  listEl.innerHTML = targetList
    .map(
      (v) => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:10px; border-bottom:1px solid var(--border);">
        <div>
          <b>${v.en}</b> <span style="font-size:12px; color:var(--muted);">${v.phonetic}</span><br/>
          <span style="font-size:13px; color:var(--primary);">${v.vi}</span> <span class="tag">Bậc ${v.level}</span>
        </div>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-sm btn-secondary" onclick="speakText('${v.en}')">🔊 Nghe</button>
          <button class="btn btn-sm ${masteredIds.includes(v.id) ? 'btn-success' : 'btn-secondary'}" onclick="toggleStoreMaster(${v.id}, '${filterType}')">
            ${masteredIds.includes(v.id) ? 'Đã thuộc' : 'Chưa thuộc'}
          </button>
        </div>
      </div>
    `
    )
    .join('');
}

function toggleStoreMaster(id, filterType) {
  const idx = masteredIds.indexOf(id);
  if (idx > -1) {
    masteredIds.splice(idx, 1);
  } else {
    masteredIds.push(id);
  }
  localStorage.setItem('mastered_vocab_ids', JSON.stringify(masteredIds));
  syncProgressToCloud();
  renderVocabStore(filterType);
  if (!isReviewingMastered) initVocabQueue();
}

/* --- 2 & 3. DICTATION & LISTENING TRACKING --- */
function getLessonKey(lesson, idx) {
  return lesson && lesson.id ? String(lesson.id) : `lesson_${idx}`;
}

function saveCurrentListeningSentence() {
  const safeSentenceIdx = Math.max(currentDictIdx, 0);
  const prevMax = listeningProgressStore.maxSentenceIdx || 0;
  listeningProgressStore = {
    currentSentenceIdx: safeSentenceIdx,
    maxSentenceIdx: Math.max(prevMax, safeSentenceIdx)
  };
  localStorage.setItem(LISTENING_PROGRESS_KEY, JSON.stringify(listeningProgressStore));
  syncProgressToCloud();
}

function renderDictBookmarkBar() {
  const txtEl = document.getElementById('dict-bookmark-text');
  const savedLessonIdx = Math.min(Math.max(dictProgressStore.lastLessonIdx || 0, 0), lessons.length - 1);
  const savedLesson = lessons[savedLessonIdx];
  if (!savedLesson) return;

  const key = getLessonKey(savedLesson, savedLessonIdx);
  const entry = dictProgressStore.byLessonKey[key] || { sentenceIdx: 0, maxVisitedIdx: 0 };
  const totalSentences = Array.isArray(savedLesson.sentences) ? savedLesson.sentences.length : 0;
  const sentenceNum = totalSentences > 0 ? Math.min((entry.sentenceIdx || 0) + 1, totalSentences) : 1;

  if (txtEl) {
    txtEl.innerText = `Đang học tới: Hội thoại #${savedLessonIdx + 1} (${savedLesson.title}) • Câu #${sentenceNum}/${totalSentences}`;
  }
}

function saveCurrentDictPosition({ updateActiveBookmark = true } = {}) {
  const lessonIdx = lessons.indexOf(currentLesson);
  const safeLessonIdx = lessonIdx >= 0 ? lessonIdx : 0;
  const total = currentLesson && Array.isArray(currentLesson.sentences) ? currentLesson.sentences.length : 0;
  const safeSentenceIdx = total > 0 ? Math.min(Math.max(currentDictIdx, 0), total - 1) : 0;

  const key = getLessonKey(currentLesson, safeLessonIdx);
  const prevEntry = dictProgressStore.byLessonKey[key] || { sentenceIdx: 0, maxVisitedIdx: 0 };
  const nextMaxVisited = Math.max(prevEntry.maxVisitedIdx || 0, safeSentenceIdx);

  if (updateActiveBookmark) {
    dictProgressStore.lastLessonIdx = safeLessonIdx;
  }
  dictProgressStore.byLessonKey[key] = {
    sentenceIdx: safeSentenceIdx,
    maxVisitedIdx: nextMaxVisited
  };

  localStorage.setItem(DICT_PROGRESS_KEY, JSON.stringify(dictProgressStore));
  renderDictBookmarkBar();
  syncProgressToCloud();
}

function loadSelectedLesson() {
  const sel = document.getElementById('lesson-select');
  const idx = sel ? parseInt(sel.value, 10) : 0;
  const safeIdx = Number.isNaN(idx) ? 0 : Math.min(Math.max(idx, 0), lessons.length - 1);

  currentLesson = lessons[safeIdx];
  const key = getLessonKey(currentLesson, safeIdx);
  const entry = dictProgressStore.byLessonKey[key] || { sentenceIdx: 0 };
  const total = currentLesson && Array.isArray(currentLesson.sentences) ? currentLesson.sentences.length : 0;
  currentDictIdx = total > 0 ? Math.min(Math.max(entry.sentenceIdx || 0, 0), total - 1) : 0;

  // Chỉ lưu vị trí của bài vừa mở, KHÔNG ghi đè mốc bài đang học chính
  saveCurrentDictPosition({ updateActiveBookmark: false });
  updateDictUI();
}

// function resumeSavedDictPosition() {
//   const maxIdx = Math.max(lessons.length - 1, 0);
//   const savedLessonIdx = Math.min(Math.max(Number(dictProgressStore.lastLessonIdx) || 0, 0), maxIdx);
//   const targetLesson = lessons[savedLessonIdx];
//   if (!targetLesson) return;

//   currentLesson = targetLesson;
//   const key = getLessonKey(currentLesson, savedLessonIdx);
//   const entry = dictProgressStore.byLessonKey[key] || { sentenceIdx: 0, maxVisitedIdx: 0 };
//   const total = Array.isArray(currentLesson.sentences) ? currentLesson.sentences.length : 0;
//   currentDictIdx = total > 0 ? Math.min(Math.max(Number(entry.sentenceIdx) || 0, 0), total - 1) : 0;

//   const sel = document.getElementById('lesson-select');
//   if (sel) sel.value = String(savedLessonIdx);

//   updateDictUI();
// }

function initLessonSelect() {
  const sel = document.getElementById('lesson-select');
  if (sel) {
    sel.innerHTML = lessons
      .map((l, idx) => {
        const key = getLessonKey(l, idx);
        const entry = dictProgressStore.byLessonKey[key];
        const total = Array.isArray(l.sentences) ? l.sentences.length : 0;
        const mark = entry && total > 0
          ? ` — [Đang ở câu ${Math.min((entry.sentenceIdx || 0) + 1, total)}/${total}]`
          : '';
        return `<option value="${idx}">${l.title}${mark}</option>`;
      })
      .join('');
  }

  const startLessonIdx = Math.min(Math.max(dictProgressStore.lastLessonIdx || 0, 0), lessons.length - 1);
  currentLesson = lessons[startLessonIdx];
  if (sel) sel.value = String(startLessonIdx);

  const key = getLessonKey(currentLesson, startLessonIdx);
  const entry = dictProgressStore.byLessonKey[key] || { sentenceIdx: 0 };
  const total = currentLesson && Array.isArray(currentLesson.sentences) ? currentLesson.sentences.length : 0;
  currentDictIdx = total > 0 ? Math.min(Math.max(entry.sentenceIdx || 0, 0), total - 1) : 0;

  updateDictUI();
}

function refreshLessonDropdownLabels() {
  const sel = document.getElementById('lesson-select');
  if (!sel) return;
  const currentVal = sel.value;
  sel.innerHTML = lessons
    .map((l, idx) => {
      const key = getLessonKey(l, idx);
      const entry = dictProgressStore.byLessonKey[key];
      const total = Array.isArray(l.sentences) ? l.sentences.length : 0;
      const mark = entry && total > 0
        ? ` — [Đang ở câu ${Math.min((entry.sentenceIdx || 0) + 1, total)}/${total}]`
        : '';
      return `<option value="${idx}">${l.title}${mark}</option>`;
    })
    .join('');
  sel.value = currentVal;
}

function updateDictUI() {
  const lessonIdx = lessons.indexOf(currentLesson);
  const safeLessonIdx = lessonIdx >= 0 ? lessonIdx : 0;
  const key = getLessonKey(currentLesson, safeLessonIdx);
  const entry = dictProgressStore.byLessonKey[key] || { sentenceIdx: 0, maxVisitedIdx: 0 };
  const maxVisitedIdx = entry.maxVisitedIdx || 0;

  const prog = document.getElementById('dict-progress');
  if (prog) {
    prog.innerText = `• ${currentLesson.title} • Câu ${currentDictIdx + 1} / ${currentLesson.sentences.length}`;
  }

  const inp = document.getElementById('dict-input');
  if (inp) inp.value = '';
  const res = document.getElementById('dict-result');
  if (res) res.style.display = 'none';

  const scriptBox = document.getElementById('full-script-box');
  if (scriptBox) {
    scriptBox.innerHTML = currentLesson.sentences
      .map((s, i) => {
        const isCurrent = i === currentDictIdx;
        const isPassed = i < maxVisitedIdx && !isCurrent;
        const badge = isCurrent
          ? `<span class="script-badge-current">📍 Đang học</span>`
          : isPassed
            ? `<span class="script-badge-done">✓ Đã qua</span>`
            : '';

        return `<div class="script-item ${isCurrent ? 'active-line' : ''}" onclick="jumpToDict(${i})">
          <div class="script-item-head">
            <b>#${i + 1}:</b>
            ${badge}
          </div>
          <div>${s.en}</div>
          <span style="color:var(--muted)">🇻🇳 ${s.vi}</span>
        </div>`;
      })
      .join('');
  }

  refreshLessonDropdownLabels();
  renderDictBookmarkBar();
}

function playCurrentAudio(rate) {
  const item = currentLesson.sentences[currentDictIdx];
  if (item) {
    saveCurrentDictPosition();
    saveCurrentListeningSentence();
    speakText(item.en, rate);
  }
}

function jumpToDict(i) {
  currentDictIdx = i;
  saveCurrentDictPosition();
  saveCurrentListeningSentence();
  updateDictUI();
  playCurrentAudio(1.0);
}

function nextDictSentence() {
  if (currentDictIdx < currentLesson.sentences.length - 1) {
    currentDictIdx++;
    saveCurrentDictPosition();
    saveCurrentListeningSentence();
    updateDictUI();
    playCurrentAudio(1.0);
  }
}

function prevDictSentence() {
  if (currentDictIdx > 0) {
    currentDictIdx--;
    saveCurrentDictPosition();
    saveCurrentListeningSentence();
    updateDictUI();
    playCurrentAudio(1.0);
  }
}

function toggleFullScript() {
  const box = document.getElementById('full-script-box');
  if (box) box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

function handleDictKey(e) {
  if (e.ctrlKey) {
    e.preventDefault();
    playCurrentAudio(1.0);
  }
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    checkDictation();
  }
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    prevDictSentence();
  }
  if (e.key === 'ArrowRight') {
    e.preventDefault();
    nextDictSentence();
  }
}

function checkDictation() {
  saveCurrentDictPosition();
  const item = currentLesson.sentences[currentDictIdx];
  const userWords = document.getElementById('dict-input').value.trim().split(/\s+/);
  const rawTarget = item.en.split(/\s+/);

  const html = rawTarget
    .map((w, i) => {
      const cleanT = w.replace(/[.,!?]/g, '').toLowerCase();
      const cleanU = (userWords[i] || '').replace(/[.,!?]/g, '').toLowerCase();
      if (cleanT === cleanU) return `<span class="word-ok">${w}</span>`;
      return `<span class="word-err">${userWords[i] || '___'}</span> <span class="word-ok">(${w})</span>`;
    })
    .join(' ');

  const res = document.getElementById('dict-result');
  res.style.display = 'block';
  res.innerHTML = `<div>${html}</div><div style="margin-top:6px; font-size:13px; color:var(--muted)">🇻🇳 ${item.vi}</div>`;
}

/* --- 4. GRAMMAR (LƯU CÂU ĐANG HỌC THEO TỪNG THÌ) --- */
const GRAMMAR_DONE_KEY = 'sweden_grammar_done_v1';
let grammarDoneMap = JSON.parse(localStorage.getItem(GRAMMAR_DONE_KEY)) || {};
let shuffledGrammarByTense = {};

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function toRoman(num) {
  const romans = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];
  let n = Math.max(1, num);
  let res = '';
  for (const [val, sym] of romans) {
    while (n >= val) {
      res += sym;
      n -= val;
    }
  }
  return res;
}

function getGrammarQuestionKey(tenseId, qObj, fallbackIdx) {
  if (qObj && qObj.id !== undefined) return `${tenseId}_${qObj.id}`;
  return `${tenseId}__${qObj ? qObj.q : fallbackIdx}`;
}

function updateGrammarDoneCount() {
  const el = document.getElementById('g-done-count');
  if (el) el.innerText = String(Object.keys(grammarDoneMap).length);
}

function saveGrammarDoneMap() {
  localStorage.setItem(GRAMMAR_DONE_KEY, JSON.stringify(grammarDoneMap));
  updateGrammarDoneCount();
  const panel = document.getElementById('grammar-review-panel');
  if (panel && panel.style.display !== 'none') {
    renderGrammarReview();
  }
  if (typeof syncProgressToCloud === 'function') {
    syncProgressToCloud();
  }
}

function recordGrammarAttempt(qObj, chosenIdx) {
  const tenseIdx = Array.isArray(TENSES) ? TENSES.findIndex((t) => t.id === currentTense) : -1;
  const tenseObj = tenseIdx >= 0 ? TENSES[tenseIdx] : { id: currentTense, name: currentTense };
  const qKey = getGrammarQuestionKey(currentTense, qObj, grammarIdx);

  grammarDoneMap[qKey] = {
    key: qKey,
    tenseId: currentTense,
    tenseName: tenseObj.name,
    tenseOrder: tenseIdx >= 0 ? tenseIdx : 999,
    q: qObj.q,
    opts: Array.isArray(qObj.opts) ? [...qObj.opts] : [],
    ans: qObj.ans,
    lastChosenIdx: chosenIdx,
    whyRight: qObj.whyRight || '',
    whyWrong: qObj.whyWrong || '',
    updatedAt: Date.now()
  };

  saveGrammarDoneMap();
}

function saveGrammarProgress() {
  grammarProgressStore.lastTense = currentTense;
  grammarProgressStore.byTense[currentTense] = grammarIdx;
  localStorage.setItem(GRAMMAR_PROGRESS_KEY, JSON.stringify(grammarProgressStore));
  if (typeof syncProgressToCloud === 'function') {
    syncProgressToCloud();
  }
}

function initGrammarUIOnly() {
  const coreEl = document.getElementById('core-tenses');
  const otherEl = document.getElementById('other-tenses');
  if (coreEl && Array.isArray(TENSES)) {
    coreEl.innerHTML = TENSES.filter((t) => t.core)
      .map(
        (t) =>
          `<span class="tense-pill core ${t.id === currentTense ? 'active' : ''}" onclick="selectTense('${t.id}')">${t.name}</span>`
      )
      .join('');
  }
  if (otherEl && Array.isArray(TENSES)) {
    otherEl.innerHTML = TENSES.filter((t) => !t.core)
      .map(
        (t) =>
          `<span class="tense-pill ${t.id === currentTense ? 'active' : ''}" onclick="selectTense('${t.id}')">${t.name}</span>`
      )
      .join('');
  }
}

function initGrammar() {
  currentTense = grammarProgressStore.lastTense || currentTense;
  const coreEl = document.getElementById('core-tenses');
  const otherEl = document.getElementById('other-tenses');
  if (coreEl && Array.isArray(TENSES)) {
    coreEl.innerHTML = TENSES.filter((t) => t.core)
      .map(
        (t) =>
          `<span class="tense-pill core ${t.id === currentTense ? 'active' : ''}" onclick="selectTense('${t.id}')">${t.name} (300)</span>`
      )
      .join('');
  }
  if (otherEl && Array.isArray(TENSES)) {
    otherEl.innerHTML = TENSES.filter((t) => !t.core)
      .map(
        (t) =>
          `<span class="tense-pill ${t.id === currentTense ? 'active' : ''}" onclick="selectTense('${t.id}')">${t.name} (100)</span>`
      )
      .join('');
  }
  updateGrammarDoneCount();
  selectTense(currentTense);
}

function selectTense(tId) {
  currentTense = tId;
  initGrammarUIOnly();
  const tObj = Array.isArray(TENSES) ? TENSES.find((t) => t.id === tId) : null;
  if (tObj) {
    const nameEl = document.getElementById('g-tense-name');
    const badgeEl = document.getElementById('g-target-badge');
    const formulaEl = document.getElementById('g-formula');
    if (nameEl) nameEl.innerText = tObj.name;
    if (badgeEl) badgeEl.innerText = `Bộ ${tObj.target} câu`;
    if (formulaEl) formulaEl.innerText = tObj.formula;
  }

  const baseList = Array.isArray(GRAMMAR_QUESTIONS)
    ? GRAMMAR_QUESTIONS.filter((q) => q.tense === tId)
    : [];
  const sourceList = baseList.length > 0 ? baseList : (GRAMMAR_QUESTIONS || []);

  // Xáo trộn lại mỗi lần chọn thì để câu hỏi không theo thứ tự cố định
  shuffledGrammarByTense[tId] = shuffleArray(sourceList);
  filteredGrammar = shuffledGrammarByTense[tId];

  const savedIdx = grammarProgressStore.byTense ? grammarProgressStore.byTense[tId] : 0;
  grammarIdx = Number.isInteger(savedIdx) && savedIdx >= 0 ? savedIdx : 0;

  saveGrammarProgress();
  renderGrammarQ();
}

function renderGrammarQ() {
  if (!Array.isArray(filteredGrammar) || filteredGrammar.length === 0) return;
  const qObj = filteredGrammar[grammarIdx % filteredGrammar.length];
  document.getElementById('g-question').innerText = `Câu ${(grammarIdx % filteredGrammar.length) + 1}: ${qObj.q}`;
  document.getElementById('g-feedback').className = 'feedback-box';
  const letters = ['A', 'B', 'C', 'D'];
  document.getElementById('g-options').innerHTML = qObj.opts
    .map(
      (opt, idx) =>
        `<button class="option-btn" onclick="checkGrammar(this, ${idx === qObj.ans}, ${idx})"><b>${letters[idx]}.</b> ${opt}</button>`
    )
    .join('');
}

function formatWhyWrong(whyWrongText, correctIdx) {
  if (!whyWrongText) return '';

  // Tách các mục theo " - Đáp án " (hoặc giữ nguyên nếu không có mẫu này)
  const parts = whyWrongText
    .split(/\s*-\s*(?=Đáp án\s+[A-D]\b)/i)
    .map(s => s.trim())
    .filter(Boolean);

  if (parts.length <= 1) {
    return `<div class="essence-box">${whyWrongText}</div>`;
  }

  const letters = ['A', 'B', 'C', 'D'];
  const correctLetter = typeof correctIdx === 'number' ? letters[correctIdx] : String(correctIdx || '').toUpperCase();

  const itemsHtml = parts.map((part, idx) => {
    const match = part.match(/^Đáp án\s+([A-D])\s*(\([^)]*\))?\s*:\s*(.*)$/i);
    const letter = match ? match[1].toUpperCase() : letters[idx] || '';
    const optWord = match && match[2] ? ` ${match[2]}` : '';
    const desc = match ? match[3] : part;

    const isRightOpt = correctLetter ? letter === correctLetter : /đúng\s*vì/i.test(desc);

    return `
      <li class="analysis-item ${isRightOpt ? 'is-correct' : 'is-wrong'}">
        <div class="item-top">
          <span class="badge ${isRightOpt ? 'badge-correct' : 'badge-wrong'}">
            ${isRightOpt ? '✓ Đúng' : '✕ Sai'}
          </span>
          <strong class="opt-name">${letter}${optWord}</strong>
        </div>
        <p class="item-desc">${desc}</p>
      </li>
    `;
  }).join('');

  return `<ul class="option-analysis-list">${itemsHtml}</ul>`;
}

function checkGrammar(btn, isCorrect, chosenIdx) {
  const qObj = filteredGrammar[grammarIdx % filteredGrammar.length];
  const chosenOpt = qObj.opts[chosenIdx];
  const fb = document.getElementById('g-feedback');

  // Đổi 'qObj.ans' thành tên trường lưu đáp án đúng trong qObj của bạn (vd: qObj.correct, qObj.answer...)
  const correctIdx = qObj.ans ?? qObj.correct ?? qObj.answer;

  recordGrammarAttempt(qObj, chosenIdx);

  if (isCorrect) {
    btn.classList.add('correct');
    fb.className = 'feedback-box show fb-ok';
    fb.innerHTML = `
      <div class="feedback-header">
        <span>✅</span>
        <strong>Chính xác tuyệt đối!</strong>
      </div>
      <div class="essence-box">
        <span class="essence-label">Vì sao đúng:</span>
        <span>${qObj.whyRight || ''}</span>
      </div>
    `;
  } else {
    btn.classList.add('wrong');
    fb.className = 'feedback-box show fb-err';
    fb.innerHTML = `
      <div class="feedback-header">
        <span>❌</span>
        <strong>Chưa chính xác!</strong>
      </div>
      <div class="feedback-section-title">Phân tích lỗi sai:</div>
      ${formatWhyWrong(qObj.whyWrong, correctIdx)}
      <div class="essence-box">
        <span class="essence-label">💡 Bản chất đúng:</span>
        <span>${qObj.whyRight || ''}</span>
      </div>
    `;
    addMistake(`Ngữ pháp: ${qObj.q} (Bạn chọn sai: ${chosenOpt})`);
  }
}

function nextGrammar() {
  grammarIdx++;
  saveGrammarProgress();
  renderGrammarQ();
}

function toggleGrammarReview(forceState) {
  const panel = document.getElementById('grammar-review-panel');
  if (!panel) return;
  const nextShow = typeof forceState === 'boolean' ? forceState : panel.style.display === 'none';
  panel.style.display = nextShow ? 'block' : 'none';
  if (nextShow) {
    renderGrammarReview();
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// function clearGrammarHistory() {
//   grammarDoneMap = {};
//   saveGrammarDoneMap();
// }

function onReviewCheckboxChange(encodedKey, optIdx, checkboxEl) {
  const qKey = decodeURIComponent(encodedKey);
  const item = grammarDoneMap[qKey];
  if (!item) return;

  const cardEl = document.getElementById(`g-rev-card-${CSS.escape(qKey)}`);
  const fbEl = document.getElementById(`g-rev-fb-${CSS.escape(qKey)}`);
  if (!cardEl || !fbEl) return;

  const allBoxes = cardEl.querySelectorAll('input[type="checkbox"]');
  allBoxes.forEach((box, idx) => {
    if (idx !== optIdx) box.checked = false;
  });

  const optLabels = cardEl.querySelectorAll('.g-check-option');
  optLabels.forEach((lbl) => lbl.classList.remove('is-right', 'is-wrong'));

  if (!checkboxEl.checked) {
    fbEl.className = 'g-review-feedback';
    fbEl.innerHTML = '';
    return;
  }

  const letters = ['A', 'B', 'C', 'D'];
  const isRight = optIdx === item.ans;

  item.lastChosenIdx = optIdx;
  localStorage.setItem(GRAMMAR_DONE_KEY, JSON.stringify(grammarDoneMap));
  if (typeof syncProgressToCloud === 'function') {
    syncProgressToCloud();
  }

  if (isRight) {
    optLabels[optIdx].classList.add('is-right');
    fbEl.className = 'g-review-feedback show ok';
    fbEl.innerHTML = `✅ <b>Đúng!</b> Bạn chọn <b>${letters[optIdx]}. ${item.opts[optIdx]}</b>.${item.whyRight ? `<br/>${item.whyRight}` : ''}`;
  } else {
    optLabels[optIdx].classList.add('is-wrong');
    if (optLabels[item.ans]) optLabels[item.ans].classList.add('is-right');
    fbEl.className = 'g-review-feedback show err';
    fbEl.innerHTML = `❌ <b>Sai!</b> Bạn chọn <b>${letters[optIdx]}. ${item.opts[optIdx]}</b> — Đáp án đúng là <b>${letters[item.ans]}. ${item.opts[item.ans]}</b>.${item.whyWrong ? `<br/><b>Lỗi sai:</b> ${item.whyWrong}` : ''}${item.whyRight ? `<br/><b>Giải thích:</b> ${item.whyRight}` : ''}`;
  }
}

function renderGrammarReview() {
  const container = document.getElementById('grammar-review-content');
  if (!container) return;
  updateGrammarDoneCount();

  const items = Object.values(grammarDoneMap);
  if (!items.length) {
    container.innerHTML = `<div style="text-align:center; padding:24px; color:var(--muted);">Bạn chưa làm câu ngữ pháp nào. Hãy chọn đáp án ở bài tập phía trên để lưu vào danh sách ôn tập nhé!</div>`;
    return;
  }

  const grouped = {};
  items.forEach((it) => {
    const tId = it.tenseId || 'other';
    if (!grouped[tId]) {
      grouped[tId] = {
        tenseId: tId,
        tenseName: it.tenseName || tId,
        tenseOrder: Number.isFinite(it.tenseOrder) ? it.tenseOrder : 999,
        questions: []
      };
    }
    grouped[tId].questions.push(it);
  });

  const sortedGroups = Object.values(grouped).sort((a, b) => a.tenseOrder - b.tenseOrder);
  const letters = ['A', 'B', 'C', 'D'];

  container.innerHTML = sortedGroups
    .map((grp, gIdx) => {
      const roman = toRoman(gIdx + 1);
      const qHtml = grp.questions
        .map((qItem, qIdx) => {
          const encodedKey = encodeURIComponent(qItem.key);
          const optsHtml = (qItem.opts || [])
            .map((optText, oIdx) => {
              const isChecked = qItem.lastChosenIdx === oIdx;
              let stateClass = '';
              if (isChecked) {
                stateClass = oIdx === qItem.ans ? 'is-right' : 'is-wrong';
              }
              return `
                <label class="g-check-option ${stateClass}">
                  <input
                    type="checkbox"
                    ${isChecked ? 'checked' : ''}
                    onchange="onReviewCheckboxChange('${encodedKey}', ${oIdx}, this)"
                  />
                  <span><b>${letters[oIdx]}.</b> ${optText}</span>
                </label>
              `;
            })
            .join('');

          let initialFbClass = 'g-review-feedback';
          let initialFbHtml = '';
          if (Number.isInteger(qItem.lastChosenIdx) && qItem.lastChosenIdx >= 0) {
            const ok = qItem.lastChosenIdx === qItem.ans;
            initialFbClass = `g-review-feedback show ${ok ? 'ok' : 'err'}`;
            initialFbHtml = ok
              ? `✅ <b>Đúng!</b> Lần chọn gần nhất: <b>${letters[qItem.lastChosenIdx]}. ${qItem.opts[qItem.lastChosenIdx]}</b>.`
              : `❌ <b>Sai!</b> Lần chọn gần nhất: <b>${letters[qItem.lastChosenIdx]}. ${qItem.opts[qItem.lastChosenIdx]}</b> — Đúng là <b>${letters[qItem.ans]}. ${qItem.opts[qItem.ans]}</b>.`;
          }

          return `
            <div class="g-review-card" id="g-rev-card-${qItem.key}">
              <div class="g-review-q">Câu ${qIdx + 1}: ${qItem.q}</div>
              <div class="g-review-opts">${optsHtml}</div>
              <div class="${initialFbClass}" id="g-rev-fb-${qItem.key}">${initialFbHtml}</div>
            </div>
          `;
        })
        .join('');

      return `
        <div class="g-tense-group">
          <div class="g-tense-group-title">${roman}. ${grp.tenseName} (${grp.questions.length} câu đã làm)</div>
          ${qHtml}
        </div>
      `;
    })
    .join('');
}

/* --- 5. SPEAKING & PRONUNCIATION SCORING (>= 80 TO ADVANCE) --- */
const SPOKEN_HISTORY_KEY = 'sweden_spoken_history_v1';
const SPEAKING_IDX_KEY = 'sweden_speaking_idx_v1';
const PASS_SCORE_THRESHOLD = 80;

let speakIdx = parseInt(localStorage.getItem(SPEAKING_IDX_KEY), 10) || 0;
if (!Number.isInteger(speakIdx) || speakIdx < 0) speakIdx = 0;

let spokenHistory = JSON.parse(localStorage.getItem(SPOKEN_HISTORY_KEY)) || [];
let lastSpeakingScore = 0;
let canAdvanceSpeaking = false;
let mainSpeakingScore = 0;
let mainCanAdvanceSpeaking = false;
let pendingReturnToCurrentSpeak = false;
let activePracticeTarget = null;
let repracticeTargetObj = null;
let pendingPassedRecord = null;
let isRepracticingFromHistory = false;
let repracticeRecordId = null;

function initSpeaking() {
  const savedIdx = parseInt(localStorage.getItem(SPEAKING_IDX_KEY), 10);
  speakIdx = Number.isInteger(savedIdx) && savedIdx >= 0 ? savedIdx : 0;
  renderSpeaking();
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.innerText = val;
}

function normalizePronText(str) {
  return String(str || '')
    .toLowerCase()
    .replace(/[^a-z0-9'\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function levenshteinDistance(a, b) {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
}

function scorePronunciation(targetEn, saidText) {
  const normTarget = normalizePronText(targetEn);
  const normSaid = normalizePronText(saidText);

  if (!normTarget || !normSaid) {
    return { score: 0, passed: false, matchedWords: [], missingWords: normTarget ? normTarget.split(' ') : [] };
  }

  const targetWords = normTarget.split(' ');
  const saidWords = normSaid.split(' ');
  const saidSet = new Set(saidWords);

  const matchedWords = targetWords.filter((w) => saidSet.has(w));
  const missingWords = targetWords.filter((w) => !saidSet.has(w));
  const wordRatio = matchedWords.length / targetWords.length;

  const dist = levenshteinDistance(normTarget, normSaid);
  const maxLen = Math.max(normTarget.length, normSaid.length);
  const charRatio = maxLen > 0 ? Math.max(0, 1 - dist / maxLen) : 0;

  const rawScore = Math.round((wordRatio * 0.65 + charRatio * 0.35) * 100);
  const score = Math.max(0, Math.min(100, rawScore));

  return {
    score,
    passed: score >= PASS_SCORE_THRESHOLD,
    matchedWords,
    missingWords
  };
}

function updateNextSpeakingButtonUI() {
  const btn = document.getElementById('next-speaking-btn');
  if (!btn) return;
  if (canAdvanceSpeaking) {
    btn.classList.remove('btn-locked');
    btn.innerText = `Mẫu câu tiếp theo ➔ (Đã đạt ${lastSpeakingScore}/100)`;
  } else {
    btn.classList.add('btn-locked');
    btn.innerText = `🔒 Mẫu câu tiếp theo (Cần ≥ ${PASS_SCORE_THRESHOLD}/100 điểm)`;
  }
}

function renderSpeaking() {
  if (!Array.isArray(SPEAKING_DATA) || SPEAKING_DATA.length === 0) return;
  currentSpeak = SPEAKING_DATA[speakIdx % SPEAKING_DATA.length];
  lastSpeakingScore = 0;
  canAdvanceSpeaking = false;
  mainSpeakingScore = 0;
  mainCanAdvanceSpeaking = false;
  pendingReturnToCurrentSpeak = false;
  activePracticeTarget = null;
  repracticeTargetObj = null;
  pendingPassedRecord = null;
  isRepracticingFromHistory = false;
  repracticeRecordId = null;

  setText('sp-topic', currentSpeak.topic);
  setText('sp-sentence', `"${currentSpeak.en}"`);
  setText('sp-meaning', currentSpeak.vi);

  const resEl = document.getElementById('sp-result');
  if (resEl) {
    resEl.className = 'feedback-box';
    resEl.innerHTML = '';
  }

  updateNextSpeakingButtonUI();
  renderSpokenHistory();
}

function nextSpeaking() {
  if (pendingReturnToCurrentSpeak) {
    pendingReturnToCurrentSpeak = false;
    lastSpeakingScore = 0;
    canAdvanceSpeaking = false;
    mainSpeakingScore = 0;
    mainCanAdvanceSpeaking = false;
    renderSpeaking();
    return;
  }

  if (!mainCanAdvanceSpeaking) {
    const fb = document.getElementById('sp-result');
    if (fb) {
      fb.className = 'feedback-box show fb-err';
      fb.innerHTML = `⛔ Bạn mới đạt <b>${mainSpeakingScore}/100</b> điểm cho câu hiện tại. Hãy bấm <b>🎙️ Bấm để nói</b> đọc câu này đạt tối thiểu <b>${PASS_SCORE_THRESHOLD}/100</b> điểm mới được qua câu tiếp theo!`;
    }
    return;
  }

  if (pendingPassedRecord) {
    addSpokenRecord(
      pendingPassedRecord.said,
      pendingPassedRecord.evalResult,
      pendingPassedRecord.targetObj
    );
  }
  pendingPassedRecord = null;

  speakIdx++;
  localStorage.setItem(SPEAKING_IDX_KEY, String(speakIdx));
  if (typeof syncProgressToCloud === 'function') {
    syncProgressToCloud();
  }
  renderSpeaking();
}

function saveSpokenHistory() {
  localStorage.setItem(SPOKEN_HISTORY_KEY, JSON.stringify(spokenHistory));
  renderSpokenHistory();
  if (typeof syncProgressToCloud === 'function') {
    syncProgressToCloud();
  }
}

function addSpokenRecord(saidText, evalResult, targetObj) {
  const cleanSaid = String(saidText || '').trim();
  if (!cleanSaid) return;

  const targetEn = targetObj && targetObj.en ? targetObj.en : (currentSpeak ? currentSpeak.en : '');
  const targetVi = targetObj && targetObj.vi ? targetObj.vi : (currentSpeak ? currentSpeak.vi : '');
  const topic = targetObj && targetObj.topic ? targetObj.topic : (currentSpeak ? currentSpeak.topic : '');
  const timeNow = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  const normTarget = normalizePronText(targetEn);

  const existingIdx = normTarget
    ? spokenHistory.findIndex((r) => normalizePronText(r.targetEn) === normTarget)
    : -1;

  if (existingIdx !== -1) {
    spokenHistory[existingIdx] = {
      ...spokenHistory[existingIdx],
      said: cleanSaid,
      score: evalResult.score,
      passed: evalResult.passed,
      time: timeNow
    };
    saveSpokenHistory();
    return;
  }

  const record = {
    id: Date.now() + '_' + Math.random().toString(36).slice(2, 7),
    said: cleanSaid,
    score: evalResult.score,
    passed: evalResult.passed,
    targetEn,
    targetVi,
    topic,
    time: timeNow
  };

  spokenHistory.unshift(record);
  spokenHistory = spokenHistory.slice(0, 60);
  saveSpokenHistory();
}

function replaySpokenText(text, rate = 0.95, event) {
  if (event) event.stopPropagation();
  if (!text) return;
  speakText(text, rate);
}

function practiceFromHistory(recordId) {
  const item = spokenHistory.find((r) => r.id === recordId);
  if (!item || !item.targetEn) return;

  const targetFromHistory = {
    en: item.targetEn,
    vi: item.targetVi || '',
    topic: item.topic || 'Ôn từ lịch sử'
  };

  pendingReturnToCurrentSpeak = false;
  isRepracticingFromHistory = true;
  repracticeRecordId = recordId;
  activePracticeTarget = targetFromHistory;
  repracticeTargetObj = targetFromHistory;

  setText('sp-topic', `Đọc lại: ${targetFromHistory.topic}`);
  setText('sp-sentence', `"${targetFromHistory.en}"`);
  setText('sp-meaning', targetFromHistory.vi || '(Đọc lại câu mẫu này để chấm điểm)');
  startSpeechRecognition(targetFromHistory);
}

/* function clearSpokenHistory() {
  spokenHistory = [];
  saveSpokenHistory();
} */

function renderSpokenHistory() {
  const listEl = document.getElementById('spoken-history-list');
  const countEl = document.getElementById('spoken-history-count');
  if (!listEl) return;

  if (countEl) countEl.innerText = String(spokenHistory.length);

  if (!spokenHistory.length) {
    listEl.innerHTML = `<div class="spoken-empty">Chưa có câu nào được ghi nhận. Bấm "🎙️ Bấm để nói" để bắt đầu nhé!</div>`;
    return;
  }

  listEl.innerHTML = spokenHistory
    .map((item) => {
      const passed = Number(item.score) >= PASS_SCORE_THRESHOLD;
      const badgeClass = passed ? 'spoken-score-pass' : 'spoken-score-fail';
      const statusText = passed ? `✅ Đạt (${item.score}/100)` : `❌ Chưa đạt (${item.score}/100)`;
      const escapedSaid = String(item.said || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      const escapedTarget = String(item.targetEn || item.said || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");

      return `
        <div class="spoken-history-item">
          <div class="spoken-history-main">
            <div class="spoken-score-row">
              <span class="spoken-score-badge ${badgeClass}">${statusText}</span>
              <span style="font-size:11px; color:var(--muted);">${item.time || ''}</span>
            </div>
            <div class="spoken-said-text">Bạn đọc: "${item.said}"</div>
            <div class="spoken-target-sub">
              ${item.targetEn ? `Mẫu chuẩn: <b>${item.targetEn}</b>` : ''}${item.targetVi ? ` • ${item.targetVi}` : ''}
            </div>
          </div>
          <div class="spoken-history-actions">
            <button type="button" class="btn btn-sm btn-secondary" onclick="replaySpokenText('${escapedTarget}', 0.9, event)">🔊 Nghe mẫu</button>
            <button type="button" class="btn btn-sm btn-primary" onclick="replaySpokenText('${escapedSaid}', 0.95, event)">🗣️ Nghe câu đọc</button>
            <button type="button" class="btn btn-sm btn-warning" onclick="practiceFromHistory('${item.id}')">🎙️ Đọc chấm lại</button>
          </div>
        </div>
      `;
    })
    .join('');
}

function startSpeechRecognition(explicitTarget = null) {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRec) return alert('Trình duyệt chưa hỗ trợ nhận diện giọng nói. Hãy dùng Google Chrome!');

  const targetObj = explicitTarget || activePracticeTarget || repracticeTargetObj || currentSpeak;
  const targetEn = targetObj ? targetObj.en : '';

  const rec = new SpeechRec();
  rec.lang = 'en-US';
  const micBtn = document.getElementById('mic-btn');
  micBtn.classList.add('mic-pulse');
  micBtn.innerText = '🎙️ Đang nghe...';

  rec.onresult = (e) => {
    const said = e.results[0][0].transcript;
    const evalResult = scorePronunciation(targetEn, said);

    const wasRepracticing = isRepracticingFromHistory;
    const currentRecordId = repracticeRecordId;

    if (wasRepracticing) {
      if (evalResult.passed && currentRecordId) {
        const idx = spokenHistory.findIndex((r) => r.id === currentRecordId);
        if (idx !== -1) {
          spokenHistory[idx] = {
            ...spokenHistory[idx],
            said,
            score: evalResult.score,
            passed: true,
            time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
          };
          saveSpokenHistory();
        }
        pendingReturnToCurrentSpeak = true;
        lastSpeakingScore = evalResult.score;
        canAdvanceSpeaking = true;
        updateNextSpeakingButtonUI();
      } else {
        pendingReturnToCurrentSpeak = false;
        lastSpeakingScore = mainSpeakingScore;
        canAdvanceSpeaking = mainCanAdvanceSpeaking;
        updateNextSpeakingButtonUI();
      }
    } else {
      pendingReturnToCurrentSpeak = false;
      mainSpeakingScore = evalResult.score;
      mainCanAdvanceSpeaking = evalResult.passed;
      lastSpeakingScore = evalResult.score;
      canAdvanceSpeaking = evalResult.passed;
      updateNextSpeakingButtonUI();

      if (evalResult.passed) {
        pendingPassedRecord = {
          said,
          evalResult,
          targetObj
        };
      } else {
        pendingPassedRecord = null;
      }
    }

    activePracticeTarget = null;
    repracticeTargetObj = null;
    isRepracticingFromHistory = false;
    repracticeRecordId = null;

    const fb = document.getElementById('sp-result');
    fb.className = evalResult.passed ? 'feedback-box show fb-ok' : 'feedback-box show fb-err';

    const missingHint = evalResult.missingWords.length
      ? `<div style="margin-top:6px; font-size:12.5px;">Từ cần đọc rõ hơn: <b>${evalResult.missingWords.join(', ')}</b></div>`
      : '';

    const nextHint = wasRepracticing
      ? (evalResult.passed
          ? `<div style="margin-top:6px; font-size:12.5px;">✅ Đã cập nhật điểm câu ôn! Bấm <b>Mẫu câu tiếp theo</b> để quay về đọc tiếp câu chính hiện tại.</div>`
          : `<div style="margin-top:6px; font-size:12.5px;">⚠️ Cần đạt ít nhất <b>${PASS_SCORE_THRESHOLD}/100</b> điểm để đạt câu ôn này. Hãy thử đọc lại nhé!</div>`)
      : evalResult.passed
        ? `<div style="margin-top:6px; font-size:12.5px;">🎉 Đạt chuẩn ≥ ${PASS_SCORE_THRESHOLD}/100! Bấm <b>Mẫu câu tiếp theo</b> để lưu vào lịch sử và qua câu mới.</div>`
        : `<div style="margin-top:6px; font-size:12.5px;">⚠️ Cần đạt ít nhất <b>${PASS_SCORE_THRESHOLD}/100</b> điểm để qua câu tiếp theo. Hãy thử đọc lại nhé!</div>`;

    fb.innerHTML = `
      <div><b>Điểm phát âm: ${evalResult.score}/100</b> ${evalResult.passed ? '✅ ĐẠT' : '❌ CHƯA ĐẠT'}</div>
      <div style="margin-top:4px;">🗣️ Bạn đọc: <b>"${said}"</b></div>
      <div style="margin-top:2px; font-size:12.5px;">🎯 Mẫu chuẩn: <i>"${targetEn}"</i></div>
      ${missingHint}
      ${nextHint}
    `;
  };

  rec.onerror = () => alert('Không nghe rõ, thử lại gần mic hơn.');
  rec.onend = () => {
    micBtn.classList.remove('mic-pulse');
    micBtn.innerText = '🎙️ Bấm để nói';
  };
  rec.start();
}

/* --- 6. VERBS --- */
function renderVerbs(list) {
  const tbody = document.getElementById('verb-table-body');
  if (tbody) {
    tbody.innerHTML = list
      .map((v) => `<tr><td><b>${v.v1}</b></td><td>${v.v2}</td><td>${v.v3}</td><td>${v.vi}</td></tr>`)
      .join('');
  }
}

function filterVerbs() {
  const kw = document.getElementById('verb-search').value.toLowerCase();
  renderVerbs(
    IRREGULAR_VERBS.filter(
      (v) =>
        v.v1.includes(kw) ||
        v.v2.includes(kw) ||
        v.v3.includes(kw) ||
        v.vi.toLowerCase().includes(kw)
    )
  );
}

/* --- 7. NOTEBOOK --- */
function addMistake(text) {
  if (!mistakes.includes(text)) {
    mistakes.unshift(text);
    localStorage.setItem('eng_mistakes', JSON.stringify(mistakes.slice(0, 50)));
    syncProgressToCloud();
  }
}

function clearMistakes() {
  mistakes = [];
  localStorage.removeItem('eng_mistakes');
  syncProgressToCloud();
  renderNotebook();
}

/* function renderNotebook() {
  const mList = document.getElementById('mistake-list');
  if (mList)
    mList.innerHTML = mistakes.length
      ? mistakes.map((m) => `<div style="padding:6px 0; border-bottom:1px solid #eee;">• ${m}</div>`).join('')
      : 'Chưa có câu sai nào!';
  const cList = document.getElementById('cheatsheet-list');
  if (cList) {
    cList.innerHTML = CHEAT_SHEET.map(
      (c) =>
        `<div style="margin-bottom:10px;">
          <strong style="font-size:13px; color:var(--primary);">${c.cat}</strong>
          ${c.items
            .map(
              (i) => `<div style="padding:5px 8px; background:#f8fafc; border-radius:6px; margin-top:4px; font-size:13px; display:flex; justify-content:space-between;">
            <span>${i}</span> <span style="cursor:pointer;" onclick="speakText('${i.replace(/'/g, "\\'")}')">🔊</span>
          </div>`
            )
            .join('')}
        </div>`
    ).join('');
  }
} */

let speakCallCount = 0;

function speakText(text, rate = 0.95) {
  speakCallCount++;
  console.trace();

  if (isFirstTime) {
    isFirstTime = false;
    return;
  }
  if (!text || !('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = rate;

  const voices = window.speechSynthesis.getVoices() || [];
  const preferredVoice =
    voices.find((v) => /samantha/i.test(v.name) && /^en/i.test(v.lang)) ||
    voices.find((v) => /^en-US/i.test(v.lang) && !/compact/i.test(v.name)) ||
    voices.find((v) => /^en-US/i.test(v.lang)) ||
    voices.find((v) => /^en/i.test(v.lang));

  if (preferredVoice) {
    utter.voice = preferredVoice;
  }

  window.speechSynthesis.speak(utter);
}
/* --- DỊCH VIỆT <-> ANH & GIẢI THÍCH CHI TIẾT TỪ TIẾNG ANH --- */
let sdDirection = 'vi-en'; // 'vi-en' hoặc 'en-vi'

function swapTranslateDirection() {
  sdDirection = sdDirection === 'vi-en' ? 'en-vi' : 'vi-en';
  const labelEl = document.getElementById('sd-dir-label');
  const inputEl = document.getElementById('sd-input');
  if (labelEl) {
    labelEl.innerText = sdDirection === 'vi-en' ? 'Việt → Anh' : 'Anh → Việt';
  }
  if (inputEl) {
    inputEl.placeholder =
      sdDirection === 'vi-en'
        ? 'Nhập từ hoặc câu tiếng Việt (hoặc bấm ⇄ để dịch Anh → Việt)...'
        : 'Nhập từ hoặc câu tiếng Anh (hoặc bấm ⇄ để dịch Việt → Anh)...';
  }
}

function clearSmartTranslate() {
  const inputEl = document.getElementById('sd-input');
  const resEl = document.getElementById('sd-result');
  if (inputEl) inputEl.value = '';
  if (resEl) {
    resEl.innerHTML = `<div class="sd-placeholder">Gõ từ tiếng Anh hoặc tiếng Việt để xem bản dịch kèm phân tích từ loại, giải thích nghĩa chi tiết và ví dụ.</div>`;
  }
}

async function fetchTranslationText(text, sourceLang, targetLang) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Không kết nối được dịch vụ dịch');
  const data = await res.json();
  return data?.responseData?.translatedText || '';
}

function findLocalVocabMatch(enQuery) {
  const clean = String(enQuery || '').trim().toLowerCase();
  if (!clean || typeof VOCAB_DATA === 'undefined' || !Array.isArray(VOCAB_DATA)) return null;
  return VOCAB_DATA.find((item) => String(item.en || '').trim().toLowerCase() === clean) || null;
}

async function fetchEnglishWordDetails(enWord) {
  const word = String(enWord || '').trim().split(/\s+/)[0].replace(/[^a-zA-Z'-]/g, '');
  if (!word) return null;
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
    if (!res.ok) return null;
    const json = await res.json();
    const entry = Array.isArray(json) ? json[0] : null;
    if (!entry) return null;

    const phonetic =
      entry.phonetic ||
      (entry.phonetics || []).find((p) => p.text)?.text ||
      '';

    const meanings = (entry.meanings || []).slice(0, 2).map((m) => {
      const firstDef = (m.definitions && m.definitions[0]) || {};
      return {
        partOfSpeech: m.partOfSpeech || '',
        definitionEn: firstDef.definition || '',
        exampleEn: firstDef.example || ''
      };
    });

    return { word: entry.word || word, phonetic, meanings };
  } catch (_) {
    return null;
  }
}

function escapeJsSingle(str) {
  return String(str || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

async function runSmartTranslate() {
  const inputEl = document.getElementById('sd-input');
  const resEl = document.getElementById('sd-result');
  if (!inputEl || !resEl) return;

  const rawText = inputEl.value.trim();
  if (!rawText) {
    resEl.innerHTML = `<div class="sd-placeholder">Bạn chưa nhập nội dung cần dịch.</div>`;
    return;
  }

  resEl.innerHTML = `<div class="sd-placeholder">⏳ Đang dịch và phân tích chi tiết...</div>`;

  const isViToEn = sdDirection === 'vi-en';
  const sourceLang = isViToEn ? 'vi' : 'en';
  const targetLang = isViToEn ? 'en' : 'vi';

  try {
    const translated = await fetchTranslationText(rawText, sourceLang, targetLang);
    const englishTarget = isViToEn ? translated : rawText;

    const localMatch = findLocalVocabMatch(englishTarget);
    const dictDetails = await fetchEnglishWordDetails(englishTarget);

    let viExplanation = '';
    if (dictDetails && dictDetails.meanings.length > 0 && dictDetails.meanings[0].definitionEn) {
      try {
        viExplanation = await fetchTranslationText(dictDetails.meanings[0].definitionEn, 'en', 'vi');
      } catch (_) {
        viExplanation = '';
      }
    }
    let dictHtml = '';
    if (dictDetails && dictDetails.meanings.length > 0) {
      const itemsHtml = dictDetails.meanings
        .map((m, idx) => `
          <div style="${idx > 0 ? 'margin-top:8px; padding-top:8px; border-top:1px dashed #e2e8f0;' : ''}">
            <span class="sd-pos-tag">${m.partOfSpeech || 'từ vựng'}</span>
            <span>${m.definitionEn}</span>
            ${idx === 0 && viExplanation ? `<div style="margin-top:4px; color:#0f766e;"><b>Giải thích tiếng Việt:</b> ${viExplanation}</div>` : ''}
            ${m.exampleEn ? `<div style="margin-top:4px; font-style:italic; color:#475569;">Ví dụ: "${m.exampleEn}"</div>` : ''}
          </div>
        `)
        .join('');

      dictHtml = `
        <div class="sd-detail-card">
          <div style="font-weight:700; margin-bottom:6px;">
            📖 Giải thích từ "${dictDetails.word}" ${dictDetails.phonetic ? `<span style="font-weight:400; color:#64748b;">${dictDetails.phonetic}</span>` : ''}
          </div>
          ${itemsHtml}
        </div>
      `;
    } else if (!localMatch) {
      dictHtml = `
        <div class="sd-detail-card">
          <div style="font-weight:700; margin-bottom:4px;">💡 Giải thích ngữ cảnh</div>
          <div>Cụm/từ "<b>${englishTarget}</b>" được dùng ở dạng ${isViToEn ? 'tương đương bản dịch tiếng Anh phía trên' : 'tiếng Anh như bạn vừa nhập'}. Gõ từ đơn tiếng Anh nếu muốn xem phân tích từ loại và ví dụ chi tiết hơn.</div>
        </div>
      `;
    }

    const speakBtnHtml =
      typeof speakText === 'function' && englishTarget
        ? `<button type="button" class="btn btn-sm btn-secondary" onclick="speakText('${escapeJsSingle(englishTarget)}', 0.95)">🔊</button>`
        : '';

    resEl.innerHTML = `
      <div class="sd-translated-box">
        <div class="sd-translated-main">
          <span>${translated || '(Không có bản dịch)'}</span>
          ${speakBtnHtml}
        </div>
      </div>
      ${dictHtml}
    `;
  } catch (err) {
    resEl.innerHTML = `<div class="sd-placeholder">⚠️ Lỗi kết nối khi dịch: ${err.message}. Thử lại sau ít giây nhé.</div>`;
  }
}