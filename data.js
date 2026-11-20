// ============================================================================
// DỮ LIỆU MẪU HỌC TIẾNG THỤY ĐIỂN (SVENSKA) - SẴN SÀNG TEST & MỞ RỘNG DATA
// ============================================================================

// 1. DANH SÁCH NGỮ PHÁP TIẾNG THỤY ĐIỂN (TENSES)
const TENSES = [
  {
    id: "presens",
    name: "Presens (Thì Hiện tại)",
    core: true,
    target: 300,
    formula: "Infinitiv (Nguyên mẫu) + -r / -ar / -er",
    desc: "Dùng cho hành động đang diễn ra, thói quen hoặc sự thật hiển nhiên. Ví dụ: Jag jobbar (Tôi làm việc), Hon talar svenska (Cô ấy nói tiếng Thụy Điển)."
  },
  {
    id: "preteritum",
    name: "Preteritum (Thì Quá khứ đơn)",
    core: true,
    target: 300,
    formula: "Nhóm 1 (+ -ade), Nhóm 2 (+ -de/-te), Nhóm 3 (+ -dde)",
    desc: "Dùng cho hành động đã xảy ra và kết thúc tại một thời điểm xác định trong quá khứ. Ví dụ: Jag jobbade igår (Hôm qua tôi đã làm việc)."
  },
  {
    id: "perfekt",
    name: "Perfekt (Thì Hiện tại hoàn thành)",
    core: true,
    target: 300,
    formula: "har + Supinum (-at / -t / -tt / -it)",
    desc: "Dùng cho hành động xảy ra trong quá khứ không rõ thời điểm hoặc còn kết quả ở hiện tại. Ví dụ: Jag har bokat en tid (Tôi đã đặt lịch hẹn rồi)."
  },
  {
    id: "futurum",
    name: "Futurum (Thì Tương lai)",
    core: false,
    target: 100,
    formula: "ska / kommer att + Infinitiv",
    desc: "Dùng cho dự định (ska) hoặc dự đoán chắc chắn trong tương lai (kommer att). Ví dụ: Jag ska flytta till Sverige (Tôi sẽ chuyển đến Thụy Điển)."
  },
  {
    id: "en_ett",
    name: "Danh từ En & Ett (Mạo từ xác định)",
    core: false,
    target: 100,
    formula: "En -> -en / -n | Ett -> -et / -t",
    desc: "Tiếng Thụy Điển chia danh từ làm 2 giống: En (~75%) và Ett (~25%). Ví dụ: en nagel -> nageln (móng tay), ett bord -> bordet (cái bàn)."
  }
];

// 2. KHO TỪ VỰNG MẪU (Chủ đề Salon, Nail, Nối mi, Spa, Đời sống Thụy Điển, Gia đình)
const VOCAB_DATA = [
  { id: 1, en: "en tidsbokning", phonetic: "/en ˈtiːdsˌbuːknɪŋ/", vi: "việc đặt lịch hẹn", topic: "salon", level: "A1", termNote: "Dạng xác định: tidsbokningen" },
  { id: 2, en: "en kund", phonetic: "/en kɵnd/", vi: "khách hàng", topic: "salon", level: "A1", termNote: "Số nhiều: kunder (những khách hàng)" },
  { id: 3, en: "Välkommen in!", phonetic: "/ˈvɛːlˌkɔmːɛn ɪn/", vi: "Chào mừng quý khách vào tiệm!", topic: "salon", level: "A1", termNote: "Câu chào chuẩn khi khách bước vào salon" },
  { id: 4, en: "en nagel", phonetic: "/en ˈnɑːɡɛl/", vi: "móng tay / móng chân", topic: "nail", level: "A1", termNote: "Số nhiều: naglar | Làm móng: göra naglar" },
  { id: 5, en: "nagellack", phonetic: "/ˈnɑːɡɛlˌlak/", vi: "sơn móng tay", topic: "nail", level: "A1", termNote: "Gellack = Sơn gel" },
  { id: 6, en: "en nagelfil", phonetic: "/en ˈnɑːɡɛlˌfiːl/", vi: "dũa móng tay", topic: "nail", level: "A2", termNote: "Động từ dũa móng: fila naglarna" },
  { id: 7, en: "nagelband", phonetic: "/ˈnɑːɡɛlˌband/", vi: "da quanh móng (cuticle)", topic: "nail", level: "B1", termNote: "Nagelbandsolja = Dầu dưỡng viền móng" },
  { id: 8, en: "ögonfransar", phonetic: "/ˈøːɡɔnˌfransar/", vi: "lông mi", topic: "lash", level: "A2", termNote: "Fransförlängning = Nối mi" },
  { id: 9, en: "en pincett", phonetic: "/en pɪnˈsɛt/", vi: "cây nhíp (gắp mi)", topic: "lash", level: "A2", termNote: "Dùng trong nối mi Classic & Volume" },
  { id: 10, en: "ansiktsbehandling", phonetic: "/ˈansɪktsbɛˌhandlɪŋ/", vi: "chăm sóc da mặt", topic: "spa", level: "A2", termNote: "Chuyên ngành Spa" },
  { id: 11, en: "att fika", phonetic: "/at ˈfiːka/", vi: "uống cà phê và ăn bánh ngọt", topic: "sweden", level: "A1", termNote: "Vừa là danh từ (en fika) vừa là động từ" },
  { id: 12, en: "ett personnummer", phonetic: "/ɛt pæˈʂuːnˌnɵmːɛr/", vi: "số định danh cá nhân tại Thụy Điển", topic: "sweden", level: "A1", termNote: "Cực kỳ quan trọng để mở ngân hàng, khám bệnh" },
  { id: 13, en: "en familj", phonetic: "/en faˈmɪlj/", vi: "gia đình", topic: "personal_and_family", level: "A1", termNote: "Min familj = Gia đình của tôi" }
];

// 3. BÀI NGHE & CHÉP CHÍNH TẢ MẪU (LESSONS_DATA)
const LESSONS_DATA = [
  {
    id: "sv_lesson_1",
    title: "Bài 1: Đón khách tại tiệm Nail & Mi",
    sentences: [
      { en: "Hej och välkommen! Har du bokat tid?", vi: "Xin chào và chào mừng bạn! Bạn đã đặt lịch hẹn chưa?" },
      { en: "Ja, jag har en tid klockan två för gellack.", vi: "Vâng, tôi có lịch hẹn lúc 2 giờ để sơn gel." },
      { en: "Vilken färg vill du ha idag?", vi: "Hôm nay bạn muốn chọn màu sơn nào?" },
      { en: "Jag vill ha en ljusrosa färg, tack.", vi: "Tôi muốn màu hồng nhạt, cảm ơn bạn." }
    ]
  },
  {
    id: "sv_lesson_2",
    title: "Bài 2: Hỏi thăm đời sống & Fika",
    sentences: [
      { en: "Hur mår du idag?", vi: "Hôm nay bạn khỏe không?" },
      { en: "Jag mår bra, tack. Ska vi ta en fika?", vi: "Tôi khỏe, cảm ơn. Chúng ta đi uống cà phê ăn bánh nhé?" }
    ]
  }
];

// 4. CÂU HỎI NGỮ PHÁP MẪU (GRAMMAR_QUESTIONS)
const GRAMMAR_QUESTIONS = [
  {
    id: "g_sv_1",
    tense: "presens",
    q: "Jag _____ som nagelterapeut i Sverige.",
    opts: ["jobbar", "jobbade", "har jobbat", "jobba"],
    ans: 0,
    whyRight: "Diễn tả nghề nghiệp hiện tại nên dùng thì hiện tại (Presens): 'jobbar' (thêm -r vào động từ nguyên mẫu 'jobba').",
    whyWrong: "Đáp án A (jobbar): Đúng vì chia ở thì hiện tại (Presens) - Đáp án B (jobbade): Sai vì đây là thì quá khứ - Đáp án C (har jobbat): Sai vì đây là thì hiện tại hoàn thành - Đáp án D (jobba): Sai vì là động từ nguyên mẫu chưa chia"
  },
  {
    id: "g_sv_2",
    tense: "preteritum",
    q: "Igår _____ kunden en ny tid för fransförlängning.",
    opts: ["bokar", "bokade", "har bokat", "boka"],
    ans: 1,
    whyRight: "Có trạng từ 'Igår' (Hôm qua) chỉ thời điểm xác định trong quá khứ nên dùng thì quá khứ đơn (Preteritum): 'bokade'.",
    whyWrong: "Đáp án A (bokar): Sai vì chia ở hiện tại - Đáp án B (bokade): Đúng vì diễn tả hành động đã xảy ra hôm qua - Đáp án C (har bokat): Sai vì không dùng với mốc thời gian xác định 'igår' - Đáp án D (boka): Sai vì chưa chia thì"
  },
  {
    id: "g_sv_3",
    tense: "perfekt",
    q: "Hon _____ redan _____ sina naglar hos oss.",
    opts: ["har / fixat", "hade / fixar", "ska / fixat", "är / fixat"],
    ans: 0,
    whyRight: "Thì hiện tại hoàn thành (Perfekt) dùng cấu trúc 'har + Supinum (fixat)' với trạng từ 'redan' (đã ... rồi).",
    whyWrong: "Đáp án A (har / fixat): Đúng cấu trúc Perfekt - Đáp án B (hade / fixar): Sai vì sau 'hade' phải là Supinum - Đáp án C (ska / fixat): Sai vì sau 'ska' là nguyên mẫu - Đáp án D (är / fixat): Sai trợ động từ"
  },
  {
    id: "g_sv_4",
    tense: "futurum",
    q: "Nästa månad _____ vi flytta till Norrköping.",
    opts: ["ska", "har", "var", "hade"],
    ans: 0,
    whyRight: "Diễn tả kế hoạch/dự định trong tương lai ('Nästa månad' - tháng tới) dùng 'ska + động từ nguyên mẫu (flytta)'.",
    whyWrong: "Đáp án A (ska): Đúng vì diễn tả dự định tương lai - Đáp án B (har): Sai vì dùng cho Perfekt - Đáp án C (var): Sai vì là quá khứ của 'vara' - Đáp án D (hade): Sai vì là quá khứ của 'ha'"
  },
  {
    id: "g_sv_5",
    tense: "en_ett",
    q: "Chọn mạo từ đúng: Jag behöver _____ ny nagelfil.",
    opts: ["en", "ett", "de", "det"],
    ans: 0,
    whyRight: "'Nagelfil' (dũa móng) là danh từ giống chung (en-ord), nên đi với mạo từ 'en' -> 'en ny nagelfil'.",
    whyWrong: "Đáp án A (en): Đúng vì 'nagelfil' thuộc giống chung (en-ord) - Đáp án B (ett): Sai vì 'ett' chỉ dùng cho danh từ giống trung - Đáp án C (de): Sai vì dùng cho số nhiều - Đáp án D (det): Sai vì là đại từ chỉ định"
  }
];

// 5. DỮ LIỆU LUYỆN NÓI MẪU (SPEAKING_DATA)
const SPEAKING_DATA = [
  { id: 1, topic: "Đón tiếp khách hàng", en: "Hej! Välkommen till vår salong.", vi: "Xin chào! Chào mừng đến với tiệm của chúng tôi.", phonetic: "/hej ˈvɛːlˌkɔmːɛn tɪl voːr saˈlɔŋ/" },
  { id: 2, topic: "Mời nước khách", en: "Vill du ha något att dricka, kaffe eller vatten?", vi: "Bạn có muốn uống chút gì không, cà phê hay nước lọc?", phonetic: "/vɪl dʉː hɑː ˈnoːɡɔt at ˈdrɪkːa, ˈkafːɛ ˈɛlːɛr ˈvatːɛn/" },
  { id: 3, topic: "Thao tác nối mi / Spa", en: "Blunda och slappna av nu.", vi: "Hãy nhắm mắt lại và thư giãn nhé.", phonetic: "/ˈblɵnːda ɔ ˈslapːna ɑːv nʉː/" }
];

// 6. ĐỘNG TỪ BẤT QUY TẮC TIẾNG THỤY ĐIỂN (Infinitiv - Presens - Preteritum - Supinum - vi)
const IRREGULAR_VERBS = [
  { infinitiv: "vara", presens: "är", preteritum: "var", supinum: "varit", vi: "thì, là, ở" },
  { infinitiv: "ha", presens: "har", preteritum: "hade", supinum: "haft", vi: "có" },
  { infinitiv: "göra", presens: "gör", preteritum: "gjorde", supinum: "gjort", vi: "làm" },
  { infinitiv: "gå", presens: "går", preteritum: "gick", supinum: "gått", vi: "đi bộ, rời đi" },
  { infinitiv: "komma", presens: "kommer", preteritum: "kom", supinum: "kommit", vi: "đến" },
  { infinitiv: "säga", presens: "säger", preteritum: "sa / sade", supinum: "sagt", vi: "nói" },
  { infinitiv: "ta", presens: "tar", preteritum: "tog", supinum: "tagit", vi: "lấy, cầm, nhận" },
  { infinitiv: "ge", presens: "ger", preteritum: "gav", supinum: "gett / givit", vi: "đưa, tặng" },
  { infinitiv: "se", presens: "ser", preteritum: "såg", supinum: "sett", vi: "nhìn, thấy" },
  { infinitiv: "få", presens: "får", preteritum: "fick", supinum: "fått", vi: "được phép, nhận được" }
];

// 7. MẪU CÂU GIAO TIẾP NHANH (CHEAT_SHEET)
const CHEAT_SHEET = [
  {
    cat: "💅 Giao tiếp tại tiệm Nail & Nối mi",
    items: [
      "Hej och välkommen! (Xin chào và chào mừng quý khách!)",
      "Har du bokat tid? (Bạn đã đặt lịch hẹn chưa?)",
      "Vilken form och längd vill du ha? (Bạn muốn dáng móng/mi và độ dài như thế nào?)",
      "Säg till om det gör ont eller svider. (Hãy báo cho tôi biết nếu thấy đau hoặc cay mắt nhé.)",
      "Tack för idag och välkommen åter! (Cảm ơn bạn hôm nay và hẹn gặp lại!)"
    ]
  },
  {
    cat: "🇸🇪 Đời sống hàng ngày tại Thụy Điển",
    items: [
      "Ursäkta, talar du engelska? (Xin lỗi, bạn có nói tiếng Anh không?)",
      "Jag lär mig svenska just nu. (Hiện tại tôi đang học tiếng Thụy Điển.)",
      "Kan jag betala med kort eller Swish? (Tôi có thể thanh toán bằng thẻ hoặc Swish không?)"
    ]
  }
];
