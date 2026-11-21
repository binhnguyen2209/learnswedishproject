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
    name: "En- och ett-ord (Bestämd artikel)",
    core: false,
    target: 100,
    formula: "En -> -en / -n | Ett -> -et / -t",
    desc: "Tiếng Thụy Điển chia danh từ làm 2 giống: En (~75%) và Ett (~25%). Ví dụ: en nagel -> nageln (móng tay), ett bord -> bordet (cái bàn)."
  }
];

// 2. KHO TỪ VỰNG MẪU (Chủ đề Salon, Nail, Nối mi, Spa, Đời sống Thụy Điển, Gia đình)
const VOCAB_DATA = [
  {
    "id": 1,
    "en": "en tidsbokning",
    "phonetic": "/en ˈtiːdsˌbuːknɪŋ/",
    "vi": "việc đặt lịch hẹn",
    "topic": "salon",
    "level": "SFI B",
    "termNote": "Dạng xác định: tidsbokningen"
  },
  {
    "id": 2,
    "en": "en kund",
    "phonetic": "/en kɵnd/",
    "vi": "khách hàng",
    "topic": "salon",
    "level": "SFI B",
    "termNote": "Dạng xác định: kunden"
  },
  {
    "id": 3,
    "en": "en nagel",
    "phonetic": "/en ˈnɑːɡɛl/",
    "vi": "móng tay / móng chân",
    "topic": "salon",
    "level": "SFI B",
    "termNote": "Dạng xác định: nageln, số nhiều: naglar"
  },
  {
    "id": 4,
    "en": "en frans",
    "phonetic": "/en frans/",
    "vi": "sợi mi / lông mi",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: fransen, số nhiều: fransar"
  },
  {
    "id": 5,
    "en": "en nagelförlängning",
    "phonetic": "/en ˈnɑːɡɛlˌfœrˌlɛŋnɪŋ/",
    "vi": "nối móng / làm móng dài",
    "topic": "salon",
    "level": "SFI D",
    "termNote": "Dạng xác định: nagelförlängningen"
  },
  {
    "id": 6,
    "en": "en fransförlängning",
    "phonetic": "/en ˈfransˌfœrˌlɛŋnɪŋ/",
    "vi": "nối mi",
    "topic": "salon",
    "level": "SFI D",
    "termNote": "Dạng xác định: fransförlängningen"
  },
  {
    "id": 7,
    "en": "en salong",
    "phonetic": "/en saˈlɔŋ/",
    "vi": "tiệm làm đẹp / salon",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: salongen"
  },
  {
    "id": 8,
    "en": "en behandling",
    "phonetic": "/en beˈhɑːndlɪŋ/",
    "vi": "liệu trình / dịch vụ chăm sóc",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: behandlingen"
  },
  {
    "id": 9,
    "en": "en manikyr",
    "phonetic": "/en maniˈkyːr/",
    "vi": "chăm sóc móng tay / manikyr",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: manikyren"
  },
  {
    "id": 10,
    "en": "en pedikyr",
    "phonetic": "/en pediˈkyːr/",
    "vi": "chăm sóc móng chân / pedikyr",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: pedikyren"
  },
  {
    "id": 11,
    "en": "en massage",
    "phonetic": "/en maˈsɑːɧ/",
    "vi": "mát-xa / xoa bóp",
    "topic": "salon",
    "level": "SFI B",
    "termNote": "Dạng xác định: massagen"
  },
  {
    "id": 12,
    "en": "en hudvård",
    "phonetic": "/en ˈhʉːdˌvoːɖ/",
    "vi": "chăm sóc da",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: hudvården"
  },
  {
    "id": 13,
    "en": "en hygien",
    "phonetic": "/en hyˈɧiːɛn/",
    "vi": "vệ sinh",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: hygienen"
  },
  {
    "id": 14,
    "en": "ett lim",
    "phonetic": "/ɛt liːm/",
    "vi": "keo dán",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: limmet"
  },
  {
    "id": 15,
    "en": "en pincett",
    "phonetic": "/en pɪnˈsɛt/",
    "vi": "nhíp / nhíp nối mi",
    "topic": "salon",
    "level": "SFI D",
    "termNote": "Dạng xác định: pincetten"
  },
  {
    "id": 16,
    "en": "en fil",
    "phonetic": "/en fiːl/",
    "vi": "dũa móng",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: filen"
  },
  {
    "id": 17,
    "en": "ett nagellack",
    "phonetic": "/ɛt ˈnɑːɡɛlˌlak/",
    "vi": "sơn móng tay",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: nagellacket"
  },
  {
    "id": 18,
    "en": "en allergi",
    "phonetic": "/en alɛrˈɧiː/",
    "vi": "dị ứng",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: allergin"
  },
  {
    "id": 19,
    "en": "en skyddsutrustning",
    "phonetic": "/en ˈɧʏdsˌʉːtˌrɵsnɪŋ/",
    "vi": "đồ bảo hộ",
    "topic": "salon",
    "level": "SFI D",
    "termNote": "Dạng xác định: skyddsutrustningen"
  },
  {
    "id": 20,
    "en": "en kemikalie",
    "phonetic": "/en kemiˈkɑːli/",
    "vi": "hóa chất",
    "topic": "salon",
    "level": "SFI D",
    "termNote": "Dạng xác định: kemikalien"
  },
  {
    "id": 21,
    "en": "en stamlkund",
    "phonetic": "/en ˈstamˌkɵnd/",
    "vi": "khách quen",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: stamkunden"
  },
  {
    "id": 22,
    "en": "en dricks",
    "phonetic": "/en drɪks/",
    "vi": "tiền boa / tiền tip",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: dricksen"
  },
  {
    "id": 23,
    "en": "en stol",
    "phonetic": "/en stuːl/",
    "vi": "ghế ngồi",
    "topic": "salon",
    "level": "SFI B",
    "termNote": "Dạng xác định: stolen"
  },
  {
    "id": 24,
    "en": "en spegel",
    "phonetic": "/en ˈspeːɡɛl/",
    "vi": "gương",
    "topic": "salon",
    "level": "SFI B",
    "termNote": "Dạng xác định: spegeln"
  },
  {
    "id": 25,
    "en": "en handduk",
    "phonetic": "/en ˈhandˌdʉːk/",
    "vi": "khăn tắm / khăn lau",
    "topic": "salon",
    "level": "SFI B",
    "termNote": "Dạng xác định: handduken"
  },
  {
    "id": 26,
    "en": "en tvål",
    "phonetic": "/en tvoːl/",
    "vi": "xà phòng",
    "topic": "salon",
    "level": "SFI B",
    "termNote": "Dạng xác định: tvålen"
  },
  {
    "id": 27,
    "en": "en kräm",
    "phonetic": "/en krɛm/",
    "vi": "kem dưỡng",
    "topic": "salon",
    "level": "SFI B",
    "termNote": "Dạng xác định: krämen"
  },
  {
    "id": 28,
    "en": "en olja",
    "phonetic": "/en ˈɔlja/",
    "vi": "dầu dưỡng",
    "topic": "salon",
    "level": "SFI B",
    "termNote": "Dạng xác định: oljan"
  },
  {
    "id": 29,
    "en": "en kundservice",
    "phonetic": "/en ˈkɵndˌsœrvis/",
    "vi": "dịch vụ khách hàng",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: kundservicen"
  },
  {
    "id": 30,
    "en": "en boka",
    "phonetic": "/en ˈbuːka/",
    "vi": "đặt lịch (động từ: att boka)",
    "topic": "salon",
    "level": "SFI B",
    "termNote": "Hiện tại: bokar, quá khứ: bokade"
  },
  {
    "id": 31,
    "en": "jag",
    "phonetic": "/jɑːɡ/",
    "vi": "tôi",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Đại từ nhân xưng ngôi thứ nhất số ít"
  },
  {
    "id": 32,
    "en": "mig",
    "phonetic": "/mɛj/",
    "vi": "tôi (tân ngữ)",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng tân ngữ của jag"
  },
  {
    "id": 33,
    "en": "min",
    "phonetic": "/miːn/",
    "vi": "của tôi (tính từ sở hữu - en)",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dùng với danh từ en: min adress"
  },
  {
    "id": 34,
    "en": "mitt",
    "phonetic": "/mɪt/",
    "vi": "của tôi (tính từ sở hữu - ett)",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dùng với danh từ ett: mitt namn"
  },
  {
    "id": 35,
    "en": "mina",
    "phonetic": "/ˈmiːna/",
    "vi": "của tôi (số nhiều)",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dùng với số nhiều: mina vänner"
  },
  {
    "id": 36,
    "en": "ett namn",
    "phonetic": "/ɛt namːn/",
    "vi": "tên",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: namnet"
  },
  {
    "id": 37,
    "en": "en ålder",
    "phonetic": "/en ˈoːldɛr/",
    "vi": "tuổi",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: åldern"
  },
  {
    "id": 38,
    "en": "en födelsedag",
    "phonetic": "/en ˈføːdɛlsɛˌdɑːɡ/",
    "vi": "ngày sinh nhật",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: födelsedagen"
  },
  {
    "id": 39,
    "en": "ett ursprung",
    "phonetic": "/ɛt ˈʉːrˌsprɵŋ/",
    "vi": "nguồn gốc / xuất thân",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: ursprunget"
  },
  {
    "id": 40,
    "en": "ett språk",
    "phonetic": "/ɛt sproːk/",
    "vi": "ngôn ngữ / tiếng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: språket"
  },
  {
    "id": 41,
    "en": "svenska",
    "phonetic": "/ˈsvɛnska/",
    "vi": "tiếng Thụy Điển",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Không viết hoa tên ngôn ngữ trong tiếng Thụy Điển"
  },
  {
    "id": 42,
    "en": "engelska",
    "phonetic": "/ˈɛŋɛlska/",
    "vi": "tiếng Anh",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: engelskan"
  },
  {
    "id": 43,
    "en": "vietnamesiska",
    "phonetic": "/vɪɛtnamɛˈsiːska/",
    "vi": "tiếng Việt",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: vietnamesiskan"
  },
  {
    "id": 44,
    "en": "en känsla",
    "phonetic": "/en ˈɕɛnsla/",
    "vi": "cảm giác / cảm xúc",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: känslan"
  },
  {
    "id": 45,
    "en": "en tanke",
    "phonetic": "/en ˈtaŋkɛ/",
    "vi": "suy nghĩ",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: tanken"
  },
  {
    "id": 46,
    "en": "en dröm",
    "phonetic": "/en drœm/",
    "vi": "giấc mơ / ước mơ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: drömmen"
  },
  {
    "id": 47,
    "en": "ett mål",
    "phonetic": "/ɛt moːl/",
    "vi": "mục tiêu",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: målet"
  },
  {
    "id": 48,
    "en": "en plan",
    "phonetic": "/en plɑːn/",
    "vi": "kế hoạch",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: planen"
  },
  {
    "id": 49,
    "en": "en vana",
    "phonetic": "/en ˈvɑːna/",
    "vi": "thói quen",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: vanan"
  },
  {
    "id": 50,
    "en": "ett behov",
    "phonetic": "/ɛt beˈhuːv/",
    "vi": "nhu cầu",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: behovet"
  },
  {
    "id": 51,
    "en": "en önskan",
    "phonetic": "/en ˈœnskan/",
    "vi": "mong muốn / điều ước",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: önskan"
  },
  {
    "id": 52,
    "en": "en styrka",
    "phonetic": "/en ˈstʏrka/",
    "vi": "điểm mạnh / sức mạnh",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: styrkan"
  },
  {
    "id": 53,
    "en": "en svaghet",
    "phonetic": "/en ˈsvɑːɡheːt/",
    "vi": "điểm yếu",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: svagheten"
  },
  {
    "id": 54,
    "en": "självständig",
    "phonetic": "/ˈɕɛlvˌstɛndɪɡ/",
    "vi": "tự lập / độc lập",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Tính từ: självständigt, självständiga"
  },
  {
    "id": 55,
    "en": "nyfiken",
    "phonetic": "/ˈnyːˌfiːkɛn/",
    "vi": "tò mò / ham học hỏi",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: nyfiket, nyfikna"
  },
  {
    "id": 56,
    "en": "glad",
    "phonetic": "/ɡlɑːd/",
    "vi": "vui vẻ / mừng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: glatt, glada"
  },
  {
    "id": 57,
    "en": "trött",
    "phonetic": "/trœt/",
    "vi": "mệt mỏi",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: trött, trötta"
  },
  {
    "id": 58,
    "en": "lugn",
    "phonetic": "/lɵŋn/",
    "vi": "bình tĩnh / yên tĩnh",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: lugnt, lugna"
  },
  {
    "id": 59,
    "en": "nervös",
    "phonetic": "/nɛrˈvøːs/",
    "vi": "lo lắng / hồi hộp",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: nervöst, nervösa"
  },
  {
    "id": 60,
    "en": "stolt",
    "phonetic": "/stɔlt/",
    "vi": "tự hào",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: stolt, stolta"
  },
  {
    "id": 61,
    "en": "en familj",
    "phonetic": "/en faˈmiːlj/",
    "vi": "gia đình",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: familjen"
  },
  {
    "id": 62,
    "en": "en make",
    "phonetic": "/en ˈmɑːkɛ/",
    "vi": "chồng",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: maken"
  },
  {
    "id": 63,
    "en": "en maka",
    "phonetic": "/en ˈmɑːka/",
    "vi": "vợ",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: makan"
  },
  {
    "id": 64,
    "en": "en man",
    "phonetic": "/en mɑːn/",
    "vi": "người đàn ông / chồng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: mannen"
  },
  {
    "id": 65,
    "en": "en kvinna",
    "phonetic": "/en ˈkvɪna/",
    "vi": "người phụ nữ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: kvinnan"
  },
  {
    "id": 66,
    "en": "en partner",
    "phonetic": "/en ˈpɑːtnɛr/",
    "vi": "bạn đời / người đồng hành",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: partnern"
  },
  {
    "id": 67,
    "en": "en förälder",
    "phonetic": "/en fœrˈɛldɛr/",
    "vi": "cha hoặc mẹ",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Số nhiều thường dùng: föräldrar"
  },
  {
    "id": 68,
    "en": "en mamma",
    "phonetic": "/en ˈmama/",
    "vi": "mẹ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: mamman"
  },
  {
    "id": 69,
    "en": "en pappa",
    "phonetic": "/en ˈpapa/",
    "vi": "ba / bố",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: pappan"
  },
  {
    "id": 70,
    "en": "ett barn",
    "phonetic": "/ɛt bɑːrn/",
    "vi": "đứa trẻ / con",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: barnet"
  },
  {
    "id": 71,
    "en": "en bror",
    "phonetic": "/en bruːr/",
    "vi": "anh hoặc em trai",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: brodern"
  },
  {
    "id": 72,
    "en": "en syster",
    "phonetic": "/en ˈsʏstɛr/",
    "vi": "chị hoặc em gái",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: systern"
  },
  {
    "id": 73,
    "en": "en mormor",
    "phonetic": "/en ˈmuːrˌmuːr/",
    "vi": "bà ngoại",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: mormodern"
  },
  {
    "id": 74,
    "en": "en farmor",
    "phonetic": "/en ˈfɑːrˌmuːr/",
    "vi": "bà nội",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: farmodern"
  },
  {
    "id": 75,
    "en": "en morfar",
    "phonetic": "/en ˈmuːrˌfɑːr/",
    "vi": "ông ngoại",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: morfadern"
  },
  {
    "id": 76,
    "en": "en farfar",
    "phonetic": "/en ˈfɑːrˌfɑːr/",
    "vi": "ông nội",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: farfadern"
  },
  {
    "id": 77,
    "en": "en vän",
    "phonetic": "/en vɛn/",
    "vi": "bạn bè",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: vännen"
  },
  {
    "id": 78,
    "en": "en kompis",
    "phonetic": "/en ˈkɔmpɪs/",
    "vi": "bạn thân / bạn (thân mật)",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: kompisen"
  },
  {
    "id": 79,
    "en": "en granne",
    "phonetic": "/en ˈɡrane/",
    "vi": "hàng xóm",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: grannen"
  },
  {
    "id": 80,
    "en": "en släkting",
    "phonetic": "/en ˈslɛktɪŋ/",
    "vi": "họ hàng",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: släktingen"
  },
  {
    "id": 81,
    "en": "en kollega",
    "phonetic": "/en kɔˈleːɡa/",
    "vi": "đồng nghiệp",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: kollegan"
  },
  {
    "id": 82,
    "en": "en chef",
    "phonetic": "/en ɧeːf/",
    "vi": "sếp / quản lý",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: chefen"
  },
  {
    "id": 83,
    "en": "tillsammans",
    "phonetic": "/tɪlˈsamans/",
    "vi": "cùng nhau",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ chỉ sự cùng nhau"
  },
  {
    "id": 84,
    "en": "ensam",
    "phonetic": "/ˈeːnsam/",
    "vi": "cô đơn / một mình",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: ensamt, ensamma"
  },
  {
    "id": 85,
    "en": "älska",
    "phonetic": "/ˈɛlska/",
    "vi": "yêu / rất thích",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: älskar, quá khứ: älskade"
  },
  {
    "id": 86,
    "en": "ett hem",
    "phonetic": "/ɛt hɛm/",
    "vi": "tổ ấm / nhà",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: hemmet"
  },
  {
    "id": 87,
    "en": "en lägenhet",
    "phonetic": "/en ˈleːɡɛnheːt/",
    "vi": "căn hộ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: lägenheten"
  },
  {
    "id": 88,
    "en": "ett hus",
    "phonetic": "/ɛt hʉːs/",
    "vi": "ngôi nhà",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: huset"
  },
  {
    "id": 89,
    "en": "en hyra",
    "phonetic": "/en ˈhyːra/",
    "vi": "tiền thuê nhà",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: hyran"
  },
  {
    "id": 90,
    "en": "ett kontrakt",
    "phonetic": "/ɛt kɔnˈtrakt/",
    "vi": "hợp đồng",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: kontraktet"
  },
  {
    "id": 91,
    "en": "en nyckel",
    "phonetic": "/en ˈnʏkɛl/",
    "vi": "chìa khóa",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: nyckeln"
  },
  {
    "id": 92,
    "en": "en dörr",
    "phonetic": "/en dœr/",
    "vi": "cánh cửa",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: dörren"
  },
  {
    "id": 93,
    "en": "ett fönster",
    "phonetic": "/ɛt ˈfœnstɛr/",
    "vi": "cửa sổ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: fönstret"
  },
  {
    "id": 94,
    "en": "ett rum",
    "phonetic": "/ɛt rɵm/",
    "vi": "căn phòng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: rummet"
  },
  {
    "id": 95,
    "en": "ett kök",
    "phonetic": "/ɛt ɕøːk/",
    "vi": "nhà bếp",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: köket"
  },
  {
    "id": 96,
    "en": "ett badrum",
    "phonetic": "/ɛt ˈbɑːdˌrɵm/",
    "vi": "phòng tắm",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: badrummet"
  },
  {
    "id": 97,
    "en": "ett vardagsrum",
    "phonetic": "/ɛt ˈvɑːɖaɡsˌrɵm/",
    "vi": "phòng khách",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: vardagsrummet"
  },
  {
    "id": 98,
    "en": "ett sovrum",
    "phonetic": "/ɛt ˈsoːvˌrɵm/",
    "vi": "phòng ngủ",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: sovrummet"
  },
  {
    "id": 99,
    "en": "en säng",
    "phonetic": "/en sɛŋ/",
    "vi": "giường",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: sängen"
  },
  {
    "id": 100,
    "en": "ett bord",
    "phonetic": "/ɛt buːɖ/",
    "vi": "cái bàn",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: bordet"
  },
  {
    "id": 101,
    "en": "en kylskåp",
    "phonetic": "/en ˈɕyːlˌskoːp/",
    "vi": "tủ lạnh",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Thường dùng: ett kylskåp"
  },
  {
    "id": 102,
    "en": "en tvättmaskin",
    "phonetic": "/en ˈtvɛtmaˌɧiːn/",
    "vi": "máy giặt",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: tvättmaskinen"
  },
  {
    "id": 103,
    "en": "en tvättstuga",
    "phonetic": "/en ˈtvɛtˌstʉːɡa/",
    "vi": "phòng giặt chung",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Rất phổ biến ở khu căn hộ Thụy Điển"
  },
  {
    "id": 104,
    "en": "sopsortering",
    "phonetic": "/ˈsuːpˌsɔrːteːrɪŋ/",
    "vi": "phân loại rác",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: sopsorteringen"
  },
  {
    "id": 105,
    "en": "återvinning",
    "phonetic": "/ˈoːtɛrˌvɪnɪŋ/",
    "vi": "tái chế",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: återvinningen"
  },
  {
    "id": 106,
    "en": "en pant",
    "phonetic": "/en pant/",
    "vi": "tiền cọc vỏ lon/chai",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: panten"
  },
  {
    "id": 107,
    "en": "fika",
    "phonetic": "/ˈfiːka/",
    "vi": "giờ uống cà phê & ăn bánh thư giãn",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Nét văn hóa đặc trưng của Thụy Điển"
  },
  {
    "id": 108,
    "en": "lagom",
    "phonetic": "/ˈlɑːɡɔm/",
    "vi": "vừa đủ / điều độ",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Khái niệm văn hóa nổi tiếng ở Thụy Điển"
  },
  {
    "id": 109,
    "en": "mysig",
    "phonetic": "/ˈmyːsɪɡ/",
    "vi": "ấm cúng / dễ chịu",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: mysigt, mysiga"
  },
  {
    "id": 110,
    "en": "städa",
    "phonetic": "/ˈstɛːda/",
    "vi": "dọn dẹp",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: städar, quá khứ: städade"
  },
  {
    "id": 111,
    "en": "laga mat",
    "phonetic": "/ˈlɑːɡa mɑːt/",
    "vi": "nấu ăn",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Cụm động từ thông dụng"
  },
  {
    "id": 112,
    "en": "handla",
    "phonetic": "/ˈhandla/",
    "vi": "đi mua sắm",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: handlar, quá khứ: handlade"
  },
  {
    "id": 113,
    "en": "bo",
    "phonetic": "/buː/",
    "vi": "sống / cư trú",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: bor, quá khứ: bodde"
  },
  {
    "id": 114,
    "en": "flytta",
    "phonetic": "/ˈflʏta/",
    "vi": "chuyển chỗ ở / dọn nhà",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: flyttar, quá khứ: flyttade"
  },
  {
    "id": 115,
    "en": "trivas",
    "phonetic": "/ˈtriːvas/",
    "vi": "cảm thấy hợp / thoải mái (nơi ở/làm)",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Hiện tại: trivs, quá khứ: trivdes"
  },
  {
    "id": 116,
    "en": "ett jobb",
    "phonetic": "/ɛt jɔb/",
    "vi": "công việc / việc làm",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: jobbet"
  },
  {
    "id": 117,
    "en": "ett arbete",
    "phonetic": "/ɛt arˈbeːtɛ/",
    "vi": "công việc / lao động",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Trang trọng hơn 'jobb'"
  },
  {
    "id": 118,
    "en": "en anställning",
    "phonetic": "/en anˈstɛlnɪŋ/",
    "vi": "việc làm có hợp đồng / tuyển dụng",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: anställningen"
  },
  {
    "id": 119,
    "en": "ett anställningsavtal",
    "phonetic": "/ɛt anˈstɛlnɪŋsˌɑːvtɑːl/",
    "vi": "hợp đồng lao động",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: anställningsavtalet"
  },
  {
    "id": 120,
    "en": "en lön",
    "phonetic": "/en løːn/",
    "vi": "tiền lương",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: lönen"
  },
  {
    "id": 121,
    "en": "en skatt",
    "phonetic": "/en skat/",
    "vi": "thuế",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: skatten"
  },
  {
    "id": 122,
    "en": "en intervju",
    "phonetic": "/en ɪntɛrˈvjuː/",
    "vi": "buổi phỏng vấn",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: intervjun"
  },
  {
    "id": 123,
    "en": "en ansökan",
    "phonetic": "/en ˈanˌsøːkan/",
    "vi": "đơn ứng tuyển / hồ sơ xin việc",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: ansökan"
  },
  {
    "id": 124,
    "en": "en erfarenhet",
    "phonetic": "/en ɛrˈfɑːrɛnheːt/",
    "vi": "kinh nghiệm",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: erfarenheten"
  },
  {
    "id": 125,
    "en": "en utbildning",
    "phonetic": "/en ˈʉːtbɪldnɪŋ/",
    "vi": "đào tạo / học vấn",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: utbildningen"
  },
  {
    "id": 126,
    "en": "ett yrke",
    "phonetic": "/ɛt ˈʏrkɛ/",
    "vi": "nghề nghiệp",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: yrket"
  },
  {
    "id": 127,
    "en": "en arbetsplats",
    "phonetic": "/en ˈɑːrbɛtsˌplats/",
    "vi": "nơi làm việc",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: arbetsplatsen"
  },
  {
    "id": 128,
    "en": "en arbetstid",
    "phonetic": "/en ˈɑːrbɛtsˌtiːd/",
    "vi": "giờ làm việc",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: arbetstiden"
  },
  {
    "id": 129,
    "en": "en semester",
    "phonetic": "/en seˈmɛstɛr/",
    "vi": "kỳ nghỉ phép",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: semestern"
  },
  {
    "id": 130,
    "en": "en ledighet",
    "phonetic": "/en ˈleːdɪheːt/",
    "vi": "ngày nghỉ / sự nghỉ ngơi",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: ledigheten"
  },
  {
    "id": 131,
    "en": "ett uppehållstillstånd",
    "phonetic": "/ɛt ˈɵpɛˌhoːlsˌtɪlstoːnd/",
    "vi": "giấy phép cư trú",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Quan trọng khi chuyển sang Thụy Điển"
  },
  {
    "id": 132,
    "en": "ett arbetstillstånd",
    "phonetic": "/ɛt ˈɑːrbɛtsˌtɪlstoːnd/",
    "vi": "giấy phép lao động",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Quan trọng khi làm việc tại Thụy Điển"
  },
  {
    "id": 133,
    "en": "ett personnummer",
    "phonetic": "/ɛt ˈpɛːʂɔnˌnɵmːɛr/",
    "vi": "mã số định danh cá nhân Thụy Điển",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Gồm 10 chữ số (YYYYMMDD-XXXX)"
  },
  {
    "id": 134,
    "en": "en myndighet",
    "phonetic": "/en ˈmʏndɪheːt/",
    "vi": "cơ quan nhà nước",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: myndigheten"
  },
  {
    "id": 135,
    "en": "en försäkring",
    "phonetic": "/en fœrˈsɛkrɪŋ/",
    "vi": "bảo hiểm",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: försäkringen"
  },
  {
    "id": 136,
    "en": "ett konto",
    "phonetic": "/ɛt ˈkɔntu/",
    "vi": "tài khoản (ngân hàng)",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: kontot"
  },
  {
    "id": 137,
    "en": "en bank",
    "phonetic": "/en baŋk/",
    "vi": "ngân hàng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: banken"
  },
  {
    "id": 138,
    "en": "en Swish",
    "phonetic": "/en swɪɧ/",
    "vi": "ứng dụng chuyển tiền nhanh ở Thụy Điển",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Rất phổ biến trong đời sống Thụy Điển"
  },
  {
    "id": 139,
    "en": "ett BankID",
    "phonetic": "/ɛt bɛŋkɪˈdeː/",
    "vi": "xác thực danh tính điện tử Thụy Điển",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dùng phổ biến cho ngân hàng, y tế, cơ quan"
  },
  {
    "id": 140,
    "en": "arbeta",
    "phonetic": "/arˈbeːta/",
    "vi": "làm việc",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: arbetar, quá khứ: arbetade"
  },
  {
    "id": 141,
    "en": "jobba",
    "phonetic": "/ˈjɔba/",
    "vi": "làm việc (khẩu ngữ)",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: jobbar, quá khứ: jobbade"
  },
  {
    "id": 142,
    "en": "söka",
    "phonetic": "/ˈsøːka/",
    "vi": "tìm kiếm / nộp đơn xin",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: söker, quá khứ: sökte"
  },
  {
    "id": 143,
    "en": "lära sig",
    "phonetic": "/ˈlɛːra sɛj/",
    "vi": "học / tự học",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: lär sig, quá khứ: lärde sig"
  },
  {
    "id": 144,
    "en": "förstå",
    "phonetic": "/fœrˈstoː/",
    "vi": "hiểu",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: förstår, quá khứ: förstod"
  },
  {
    "id": 145,
    "en": "hjälpa",
    "phonetic": "/ˈjɛlpa/",
    "vi": "giúp đỡ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: hjälper, quá khứ: hjälpte"
  },
  {
    "id": 146,
    "en": "en tid",
    "phonetic": "/en tiːd/",
    "vi": "thời gian / giờ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: tiden"
  },
  {
    "id": 147,
    "en": "en timme",
    "phonetic": "/en ˈtɪmːɛ/",
    "vi": "giờ / tiếng đồng hồ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: timmen"
  },
  {
    "id": 148,
    "en": "en minut",
    "phonetic": "/en miˈnʉːt/",
    "vi": "phút",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: minuten"
  },
  {
    "id": 149,
    "en": "en sekund",
    "phonetic": "/en seˈkɵnd/",
    "vi": "giây",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: sekunden"
  },
  {
    "id": 150,
    "en": "en dag",
    "phonetic": "/en dɑːɡ/",
    "vi": "ngày",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: dagen"
  },
  {
    "id": 151,
    "en": "en vecka",
    "phonetic": "/en ˈvɛka/",
    "vi": "tuần",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: veckan"
  },
  {
    "id": 152,
    "en": "en månad",
    "phonetic": "/en ˈmoːnad/",
    "vi": "tháng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: månaden"
  },
  {
    "id": 153,
    "en": "ett år",
    "phonetic": "/ɛt oːr/",
    "vi": "năm",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: året"
  },
  {
    "id": 154,
    "en": "idag",
    "phonetic": "/ɪˈdɑːɡ/",
    "vi": "hôm nay",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ chỉ thời gian"
  },
  {
    "id": 155,
    "en": "igår",
    "phonetic": "/ɪˈɡoːr/",
    "vi": "hôm qua",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ chỉ thời gian"
  },
  {
    "id": 156,
    "en": "imorgon",
    "phonetic": "/ɪˈmɔrːɔn/",
    "vi": "ngày mai",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ chỉ thời gian"
  },
  {
    "id": 157,
    "en": "nu",
    "phonetic": "/nʉː/",
    "vi": "bây giờ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ chỉ thời gian"
  },
  {
    "id": 158,
    "en": "sen",
    "phonetic": "/seːn/",
    "vi": "sau đó / muộn",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ chỉ thời gian"
  },
  {
    "id": 159,
    "en": "tidigt",
    "phonetic": "/ˈtiːdɪt/",
    "vi": "sớm",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ/phó từ"
  },
  {
    "id": 160,
    "en": "alltid",
    "phonetic": "/ˈaltɪd/",
    "vi": "luôn luôn",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ tần suất"
  },
  {
    "id": 161,
    "en": "ofta",
    "phonetic": "/ˈɔfta/",
    "vi": "thường xuyên",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ tần suất"
  },
  {
    "id": 162,
    "en": "ibland",
    "phonetic": "/ɪˈbland/",
    "vi": "đôi khi",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ tần suất"
  },
  {
    "id": 163,
    "en": "aldrig",
    "phonetic": "/ˈaldrɪɡ/",
    "vi": "không bao giờ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ tần suất"
  },
  {
    "id": 164,
    "en": "en morgon",
    "phonetic": "/en ˈmɔrːɔn/",
    "vi": "buổi sáng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: morgonen"
  },
  {
    "id": 165,
    "en": "en eftermiddag",
    "phonetic": "/en ˈɛftɛrˌmɪdɑːɡ/",
    "vi": "buổi chiều",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: eftermiddagen"
  },
  {
    "id": 166,
    "en": "en kväll",
    "phonetic": "/en kvɛl/",
    "vi": "buổi tối",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: kvällen"
  },
  {
    "id": 167,
    "en": "en natt",
    "phonetic": "/en nat/",
    "vi": "ban đêm",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: natten"
  },
  {
    "id": 168,
    "en": "en helg",
    "phonetic": "/en hɛlj/",
    "vi": "cuối tuần",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: helgen"
  },
  {
    "id": 169,
    "en": "en vår",
    "phonetic": "/en voːr/",
    "vi": "mùa xuân",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: våren"
  },
  {
    "id": 170,
    "en": "en sommar",
    "phonetic": "/en ˈsɔmar/",
    "vi": "mùa hè",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: sommaren"
  },
  {
    "id": 171,
    "en": "en höst",
    "phonetic": "/en hœst/",
    "vi": "mùa thu",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: hösten"
  },
  {
    "id": 172,
    "en": "en vinter",
    "phonetic": "/en ˈvɪntɛr/",
    "vi": "mùa đông",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: vintern"
  },
  {
    "id": 173,
    "en": "måndag",
    "phonetic": "/ˈmoːnˌdɑːɡ/",
    "vi": "thứ Hai",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Các ngày trong tuần không viết hoa"
  },
  {
    "id": 174,
    "en": "fredag",
    "phonetic": "/ˈfreːˌdɑːɡ/",
    "vi": "thứ Sáu",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Thường gắn với 'fredagsmys'"
  },
  {
    "id": 175,
    "en": "lördag",
    "phonetic": "/ˈlœrˌdɑːɡ/",
    "vi": "thứ Bảy",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: lördagen"
  },
  {
    "id": 176,
    "en": "ett väder",
    "phonetic": "/ɛt ˈvɛːdɛr/",
    "vi": "thời tiết",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: vädret"
  },
  {
    "id": 177,
    "en": "en sol",
    "phonetic": "/en suːl/",
    "vi": "mặt trời / nắng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: solen"
  },
  {
    "id": 178,
    "en": "ett regn",
    "phonetic": "/ɛt rɛŋn/",
    "vi": "mưa",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: regnet"
  },
  {
    "id": 179,
    "en": "en snö",
    "phonetic": "/en snøː/",
    "vi": "tuyết",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: snön"
  },
  {
    "id": 180,
    "en": "en vind",
    "phonetic": "/en vɪnd/",
    "vi": "gió",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: vinden"
  },
  {
    "id": 181,
    "en": "ett moln",
    "phonetic": "/ɛt mɔln/",
    "vi": "đám mây",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: molnet"
  },
  {
    "id": 182,
    "en": "en temperatur",
    "phonetic": "/en tɛmpɛraˈtʉːr/",
    "vi": "nhiệt độ",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: temperaturen"
  },
  {
    "id": 183,
    "en": "kall",
    "phonetic": "/kal/",
    "vi": "lạnh",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: kallt, kalla"
  },
  {
    "id": 184,
    "en": "varm",
    "phonetic": "/varm/",
    "vi": "ấm / nóng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: varmt, varma"
  },
  {
    "id": 185,
    "en": "mörk",
    "phonetic": "/mœrk/",
    "vi": "tối",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Mùa đông ở Thụy Điển ngày ngắn, trời tối sớm"
  },
  {
    "id": 186,
    "en": "ljus",
    "phonetic": "/jʉːs/",
    "vi": "sáng / có ánh sáng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Mùa hè ở Thụy Điển ngày dài"
  },
  {
    "id": 187,
    "en": "en natur",
    "phonetic": "/en naˈtʉːr/",
    "vi": "thiên nhiên",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: naturen"
  },
  {
    "id": 188,
    "en": "en skog",
    "phonetic": "/en skuːɡ/",
    "vi": "rừng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: skogen"
  },
  {
    "id": 189,
    "en": "en sjö",
    "phonetic": "/en ɧøː/",
    "vi": "hồ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: sjön"
  },
  {
    "id": 190,
    "en": "ett hav",
    "phonetic": "/ɛt hɑːv/",
    "vi": "biển / đại dương",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: havet"
  },
  {
    "id": 191,
    "en": "en park",
    "phonetic": "/en park/",
    "vi": "công viên",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: parken"
  },
  {
    "id": 192,
    "en": "en blomma",
    "phonetic": "/en ˈblɔma/",
    "vi": "hoa",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: blomman"
  },
  {
    "id": 193,
    "en": "ett träd",
    "phonetic": "/ɛt trɛːd/",
    "vi": "cây",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: trädet"
  },
  {
    "id": 194,
    "en": "en luft",
    "phonetic": "/en lɵft/",
    "vi": "không khí",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: luften"
  },
  {
    "id": 195,
    "en": "en värld",
    "phonetic": "/en vɛːɖ/",
    "vi": "thế giới",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: världen"
  },
  {
    "id": 196,
    "en": "en stad",
    "phonetic": "/en stɑːd/",
    "vi": "thành phố",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: staden"
  },
  {
    "id": 197,
    "en": "en gata",
    "phonetic": "/en ˈɡɑːta/",
    "vi": "đường phố",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: gatan"
  },
  {
    "id": 198,
    "en": "en väg",
    "phonetic": "/en vɛːɡ/",
    "vi": "con đường / lối đi",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: vägen"
  },
  {
    "id": 199,
    "en": "en plats",
    "phonetic": "/en plats/",
    "vi": "nơi chốn / chỗ ngồi",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: platsen"
  },
  {
    "id": 200,
    "en": "en adress",
    "phonetic": "/en aˈdrɛs/",
    "vi": "địa chỉ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: adressen"
  },
  {
    "id": 201,
    "en": "en buss",
    "phonetic": "/en bɵs/",
    "vi": "xe buýt",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: bussen"
  },
  {
    "id": 202,
    "en": "ett tåg",
    "phonetic": "/ɛt toːɡ/",
    "vi": "tàu hỏa",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: tåget"
  },
  {
    "id": 203,
    "en": "en cykel",
    "phonetic": "/en ˈsʏkɛl/",
    "vi": "xe đạp",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: cykeln"
  },
  {
    "id": 204,
    "en": "en bil",
    "phonetic": "/en biːl/",
    "vi": "xe ô tô",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: bilen"
  },
  {
    "id": 205,
    "en": "ett flyg",
    "phonetic": "/ɛt flʏːɡ/",
    "vi": "chuyến bay / máy bay",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: flyget"
  },
  {
    "id": 206,
    "en": "en biljett",
    "phonetic": "/en bɪlˈjɛt/",
    "vi": "vé",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: biljetten"
  },
  {
    "id": 207,
    "en": "ett kort",
    "phonetic": "/ɛt kuːʈ/",
    "vi": "thẻ (ngân hàng/đi lại)",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: kortet"
  },
  {
    "id": 208,
    "en": "en station",
    "phonetic": "/en staˈɧuːn/",
    "vi": "nhà ga / trạm",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: stationen"
  },
  {
    "id": 209,
    "en": "en resa",
    "phonetic": "/en ˈreːsa/",
    "vi": "chuyến đi / việc đi lại",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: resan"
  },
  {
    "id": 210,
    "en": "en karta",
    "phonetic": "/en ˈkɑːta/",
    "vi": "bản đồ",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: kartan"
  },
  {
    "id": 211,
    "en": "nära",
    "phonetic": "/ˈnɛːra/",
    "vi": "gần",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ/phó từ"
  },
  {
    "id": 212,
    "en": "långt",
    "phonetic": "/lɔŋt/",
    "vi": "xa",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ/phó từ"
  },
  {
    "id": 213,
    "en": "framåt",
    "phonetic": "/ˈfrɑːmˌoːt/",
    "vi": "tiến về phía trước / thẳng",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Phó từ chỉ phương hướng"
  },
  {
    "id": 214,
    "en": "tillbaka",
    "phonetic": "/tɪlˈbɑːka/",
    "vi": "quay lại / trở về",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ chỉ phương hướng"
  },
  {
    "id": 215,
    "en": "åka",
    "phonetic": "/ˈoːka/",
    "vi": "đi (bằng phương tiện)",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: åker, quá khứ: åkte"
  },
  {
    "id": 216,
    "en": "gå",
    "phonetic": "/ɡoː/",
    "vi": "đi bộ / đi",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: går, quá khứ: gick"
  },
  {
    "id": 217,
    "en": "komma",
    "phonetic": "/ˈkɔma/",
    "vi": "đến / tới",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: kommer, quá khứ: kom"
  },
  {
    "id": 218,
    "en": "lämna",
    "phonetic": "/ˈlɛmna/",
    "vi": "rời đi / để lại",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Hiện tại: lämnar, quá khứ: lämnade"
  },
  {
    "id": 219,
    "en": "hitta",
    "phonetic": "/ˈhɪta/",
    "vi": "tìm thấy",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: hittar, quá khứ: hittade"
  },
  {
    "id": 220,
    "en": "vänta",
    "phonetic": "/ˈvɛnta/",
    "vi": "đợi / chờ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: väntar, quá khứ: väntade"
  },
  {
    "id": 221,
    "en": "en mat",
    "phonetic": "/en mɑːt/",
    "vi": "thức ăn / đồ ăn",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: maten"
  },
  {
    "id": 222,
    "en": "en frukost",
    "phonetic": "/en ˈfrʉːˌkɔst/",
    "vi": "bữa sáng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: frukosten"
  },
  {
    "id": 223,
    "en": "en lunch",
    "phonetic": "/en lɵnɧ/",
    "vi": "bữa trưa",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: lunchen"
  },
  {
    "id": 224,
    "en": "en middag",
    "phonetic": "/en ˈmɪdɑːɡ/",
    "vi": "bữa tối",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: middagen"
  },
  {
    "id": 225,
    "en": "ett vatten",
    "phonetic": "/ɛt ˈvatɛn/",
    "vi": "nước",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: vattnet"
  },
  {
    "id": 226,
    "en": "ett kaffe",
    "phonetic": "/ɛt ˈkafɛ/",
    "vi": "cà phê",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: kaffet"
  },
  {
    "id": 227,
    "en": "ett te",
    "phonetic": "/ɛt teː/",
    "vi": "trà",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: teet"
  },
  {
    "id": 228,
    "en": "en mjölk",
    "phonetic": "/en jœlk/",
    "vi": "sữa",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: mjölken"
  },
  {
    "id": 229,
    "en": "ett bröd",
    "phonetic": "/ɛt brøːd/",
    "vi": "bánh mì",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: brödet"
  },
  {
    "id": 230,
    "en": "ett ris",
    "phonetic": "/ɛt riːs/",
    "vi": "gạo / cơm",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: riset"
  },
  {
    "id": 231,
    "en": "en fisk",
    "phonetic": "/en fɪsk/",
    "vi": "cá",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: fisken"
  },
  {
    "id": 232,
    "en": "ett kött",
    "phonetic": "/ɛt ɕœt/",
    "vi": "thịt",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: köttet"
  },
  {
    "id": 233,
    "en": "en grönsak",
    "phonetic": "/en ˈɡrœnˌsɑːk/",
    "vi": "rau củ",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: grönsaken"
  },
  {
    "id": 234,
    "en": "en frukt",
    "phonetic": "/en frɵkt/",
    "vi": "trái cây",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: frukten"
  },
  {
    "id": 235,
    "en": "ett äpple",
    "phonetic": "/ɛt ˈɛplɛ/",
    "vi": "quả táo",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: äpplet"
  },
  {
    "id": 236,
    "en": "ett socker",
    "phonetic": "/ɛt ˈsɔkɛr/",
    "vi": "đường",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: sockret"
  },
  {
    "id": 237,
    "en": "ett salt",
    "phonetic": "/ɛt salt/",
    "vi": "muối",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: saltet"
  },
  {
    "id": 238,
    "en": "en affär",
    "phonetic": "/en aˈfɛːr/",
    "vi": "cửa hàng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: affären"
  },
  {
    "id": 239,
    "en": "en mataffär",
    "phonetic": "/en ˈmɑːtaˌfɛːr/",
    "vi": "cửa hàng thực phẩm / siêu thị",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: mataffären"
  },
  {
    "id": 240,
    "en": "ett pris",
    "phonetic": "/ɛt priːs/",
    "vi": "giá cả",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: priset"
  },
  {
    "id": 241,
    "en": "en krona",
    "phonetic": "/en ˈkruːna/",
    "vi": "đồng curon Thụy Điển (SEK)",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Số nhiều: kronor"
  },
  {
    "id": 242,
    "en": "pengar",
    "phonetic": "/ˈpɛŋar/",
    "vi": "tiền",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng số nhiều thông dụng"
  },
  {
    "id": 243,
    "en": "billig",
    "phonetic": "/ˈbɪlɪɡ/",
    "vi": "rẻ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: billigt, billiga"
  },
  {
    "id": 244,
    "en": "dyr",
    "phonetic": "/dyːr/",
    "vi": "đắt",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: dyrt, dyra"
  },
  {
    "id": 245,
    "en": "god",
    "phonetic": "/ɡuːd/",
    "vi": "ngon / tốt",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: gott, goda"
  },
  {
    "id": 246,
    "en": "hungrig",
    "phonetic": "/ˈhɵŋrɪɡ/",
    "vi": "đói",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: hungrigt, hungriga"
  },
  {
    "id": 247,
    "en": "törstig",
    "phonetic": "/ˈtœʂtɪɡ/",
    "vi": "khát",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: törstigt, törstiga"
  },
  {
    "id": 248,
    "en": "äta",
    "phonetic": "/ˈɛːta/",
    "vi": "ăn",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: äter, quá khứ: åt"
  },
  {
    "id": 249,
    "en": "dricka",
    "phonetic": "/ˈdrɪka/",
    "vi": "uống",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: dricker, quá khứ: drack"
  },
  {
    "id": 250,
    "en": "betala",
    "phonetic": "/beˈtɑːla/",
    "vi": "thanh toán / trả tiền",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: betalar, quá khứ: betalade"
  },
  {
    "id": 251,
    "en": "en hälsa",
    "phonetic": "/en ˈhɛlsa/",
    "vi": "sức khỏe",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: hälsan"
  },
  {
    "id": 252,
    "en": "en kropp",
    "phonetic": "/en krɔp/",
    "vi": "cơ thể",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: kroppen"
  },
  {
    "id": 253,
    "en": "ett huvud",
    "phonetic": "/ɛt ˈhʉːvʉd/",
    "vi": "đầu",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: huvudet"
  },
  {
    "id": 254,
    "en": "ett öga",
    "phonetic": "/ɛt ˈøːɡa/",
    "vi": "mắt",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: ögat, số nhiều: ögon"
  },
  {
    "id": 255,
    "en": "ett öra",
    "phonetic": "/ɛt ˈøːra/",
    "vi": "tai",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: örat, số nhiều: öron"
  },
  {
    "id": 256,
    "en": "en hand",
    "phonetic": "/en hand/",
    "vi": "bàn tay",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: handen, số nhiều: händer"
  },
  {
    "id": 257,
    "en": "en fot",
    "phonetic": "/en fuːt/",
    "vi": "bàn chân",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: foten, số nhiều: fötter"
  },
  {
    "id": 258,
    "en": "en rygg",
    "phonetic": "/en rʏɡ/",
    "vi": "lưng",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: ryggen"
  },
  {
    "id": 259,
    "en": "en nacke",
    "phonetic": "/en ˈnakɛ/",
    "vi": "gáy / cổ sau",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: nacken"
  },
  {
    "id": 260,
    "en": "en axel",
    "phonetic": "/en ˈaksɛl/",
    "vi": "vai",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: axeln"
  },
  {
    "id": 261,
    "en": "en hud",
    "phonetic": "/en hʉːd/",
    "vi": "làn da",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: huden"
  },
  {
    "id": 262,
    "en": "ett hår",
    "phonetic": "/ɛt hoːr/",
    "vi": "tóc",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: håret"
  },
  {
    "id": 263,
    "en": "en läkare",
    "phonetic": "/en ˈlɛːkarɛ/",
    "vi": "bác sĩ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: läkaren"
  },
  {
    "id": 264,
    "en": "ett apotek",
    "phonetic": "/ɛt apuˈteːk/",
    "vi": "hiệu thuốc",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: apoteket"
  },
  {
    "id": 265,
    "en": "en medicin",
    "phonetic": "/en mediˈsiːn/",
    "vi": "thuốc",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: medicinen"
  },
  {
    "id": 266,
    "en": "en värk",
    "phonetic": "/en vɛrk/",
    "vi": "sự đau nhức",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: värken"
  },
  {
    "id": 267,
    "en": "sjuk",
    "phonetic": "/ɧʉːk/",
    "vi": "ốm / bệnh",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: sjukt, sjuka"
  },
  {
    "id": 268,
    "en": "frisk",
    "phonetic": "/frɪsk/",
    "vi": "khỏe mạnh",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: friskt, friska"
  },
  {
    "id": 269,
    "en": "vila",
    "phonetic": "/ˈviːla/",
    "vi": "nghỉ ngơi",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: vilar, quá khứ: vilade"
  },
  {
    "id": 270,
    "en": "sova",
    "phonetic": "/ˈsuːva/",
    "vi": "ngủ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: sover, quá khứ: sov"
  },
  {
    "id": 271,
    "en": "hej",
    "phonetic": "/hɛj/",
    "vi": "xin chào",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Lời chào thông dụng nhất"
  },
  {
    "id": 272,
    "en": "hej då",
    "phonetic": "/hɛj doː/",
    "vi": "tạm biệt",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Lời chào tạm biệt thông dụng"
  },
  {
    "id": 273,
    "en": "tack",
    "phonetic": "/tak/",
    "vi": "cảm ơn",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: tacket"
  },
  {
    "id": 274,
    "en": "varsågod",
    "phonetic": "/vaˈʂoːˌɡuː/",
    "vi": "không có gì / xin mời",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dùng khi đưa đồ hoặc đáp lại lời cảm ơn"
  },
  {
    "id": 275,
    "en": "ursäkta",
    "phonetic": "/ˈʉːrˌsɛkta/",
    "vi": "xin lỗi (khi làm phiền / hỏi đường)",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dùng khi muốn gây chú ý hoặc xin lỗi nhẹ"
  },
  {
    "id": 276,
    "en": "förlåt",
    "phonetic": "/fœrˈloːt/",
    "vi": "xin lỗi (khi mắc lỗi)",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dùng khi xin lỗi vì sai sót"
  },
  {
    "id": 277,
    "en": "ja",
    "phonetic": "/jɑː/",
    "vi": "có / vâng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Trả lời khẳng định"
  },
  {
    "id": 278,
    "en": "nej",
    "phonetic": "/nɛj/",
    "vi": "không",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Trả lời phủ định"
  },
  {
    "id": 279,
    "en": "vad",
    "phonetic": "/vɑːd/",
    "vi": "cái gì / gì",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Từ để hỏi"
  },
  {
    "id": 280,
    "en": "vem",
    "phonetic": "/vɛm/",
    "vi": "ai",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Từ để hỏi"
  },
  {
    "id": 281,
    "en": "var",
    "phonetic": "/vɑːr/",
    "vi": "ở đâu",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Từ để hỏi chỉ vị trí"
  },
  {
    "id": 282,
    "en": "vart",
    "phonetic": "/vɑːʈ/",
    "vi": "đi đâu / về đâu",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Từ để hỏi chỉ hướng"
  },
  {
    "id": 283,
    "en": "varifrån",
    "phonetic": "/ˈvɑːrɪˌfroːn/",
    "vi": "từ đâu",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Từ để hỏi nguồn gốc"
  },
  {
    "id": 284,
    "en": "när",
    "phonetic": "/nɛːr/",
    "vi": "khi nào",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Từ để hỏi thời gian"
  },
  {
    "id": 285,
    "en": "varför",
    "phonetic": "/ˈvarfœr/",
    "vi": "tại sao",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Từ để hỏi nguyên nhân"
  },
  {
    "id": 286,
    "en": "hur",
    "phonetic": "/hʉːr/",
    "vi": "như thế nào / sao",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Từ để hỏi cách thức"
  },
  {
    "id": 287,
    "en": "vilken",
    "phonetic": "/ˈvɪlkɛn/",
    "vi": "cái nào / nào (en)",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Trung tính: vilket, số nhiều: vilka"
  },
  {
    "id": 288,
    "en": "hur mycket",
    "phonetic": "/hʉːr ˈmʏkɛ/",
    "vi": "bao nhiêu (không đếm được)",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dùng cho tiền, thời gian, lượng"
  },
  {
    "id": 289,
    "en": "hur många",
    "phonetic": "/hʉːr ˈmɔŋa/",
    "vi": "bao nhiêu (đếm được)",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dùng cho danh từ số nhiều đếm được"
  },
  {
    "id": 290,
    "en": "prata",
    "phonetic": "/ˈprɑːta/",
    "vi": "nói chuyện",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: pratar, quá khứ: pratade"
  },
  {
    "id": 291,
    "en": "tala",
    "phonetic": "/ˈtɑːla/",
    "vi": "nói / phát biểu",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Trang trọng hơn 'prata'"
  },
  {
    "id": 292,
    "en": "lyssna",
    "phonetic": "/ˈlʏsna/",
    "vi": "lắng nghe",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: lyssnar, quá khứ: lyssnade"
  },
  {
    "id": 293,
    "en": "höra",
    "phonetic": "/ˈhøːra/",
    "vi": "nghe thấy",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: hör, quá khứ: hörde"
  },
  {
    "id": 294,
    "en": "se",
    "phonetic": "/seː/",
    "vi": "nhìn / thấy",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: ser, quá khứ: såg"
  },
  {
    "id": 295,
    "en": "titta",
    "phonetic": "/ˈtɪta/",
    "vi": "nhìn / xem",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: tittar, quá khứ: tittade"
  },
  {
    "id": 296,
    "en": "läsa",
    "phonetic": "/ˈlɛːsa/",
    "vi": "đọc",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: läser, quá khứ: läste"
  },
  {
    "id": 297,
    "en": "skriva",
    "phonetic": "/ˈskriːva/",
    "vi": "viết",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: skriver, quá khứ: skrev"
  },
  {
    "id": 298,
    "en": "fråga",
    "phonetic": "/ˈfruːɡa/",
    "vi": "hỏi / câu hỏi",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Danh từ: en fråga; động từ: att fråga"
  },
  {
    "id": 299,
    "en": "svara",
    "phonetic": "/ˈsvɑːra/",
    "vi": "trả lời",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: svarar, quá khứ: svarade"
  },
  {
    "id": 300,
    "en": "behöva",
    "phonetic": "/beˈhøːva/",
    "vi": "cần",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: behöver, quá khứ: behövde"
  },
  {
    "id": 301,
    "en": "vilja",
    "phonetic": "/ˈvɪlja/",
    "vi": "muốn",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: vill, quá khứ: ville"
  },
  {
    "id": 302,
    "en": "kunna",
    "phonetic": "/ˈkɵna/",
    "vi": "có thể (kỹ năng/khả năng)",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: kan, quá khứ: kunde"
  },
  {
    "id": 303,
    "en": "få",
    "phonetic": "/foː/",
    "vi": "được phép / nhận được / có thể",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: får, quá khứ: fick"
  },
  {
    "id": 304,
    "en": "måste",
    "phonetic": "/ˈmɔstɛ/",
    "vi": "phải",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Động từ khuyết thiếu chỉ sự bắt buộc"
  },
  {
    "id": 305,
    "en": "skola",
    "phonetic": "/ˈskuːla/",
    "vi": "sẽ / dự định / phải",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: ska, quá khứ: skulle"
  },
  {
    "id": 306,
    "en": "vara",
    "phonetic": "/ˈvɑːra/",
    "vi": "là / thì / ở",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: är, quá khứ: var"
  },
  {
    "id": 307,
    "en": "ha",
    "phonetic": "/hɑː/",
    "vi": "có",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: har, quá khứ: hade"
  },
  {
    "id": 308,
    "en": "göra",
    "phonetic": "/ˈjøːra/",
    "vi": "làm",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: gör, quá khứ: gjorde"
  },
  {
    "id": 309,
    "en": "ta",
    "phonetic": "/tɑː/",
    "vi": "lấy / cầm",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: tar, quá khứ: tog"
  },
  {
    "id": 310,
    "en": "ge",
    "phonetic": "/jeː/",
    "vi": "cho / tặng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: ger, quá khứ: gav"
  },
  {
    "id": 311,
    "en": "få tag i",
    "phonetic": "/foː tɑːɡ iː/",
    "vi": "liên lạc được / tìm được",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Thành ngữ thông dụng"
  },
  {
    "id": 312,
    "en": "bra",
    "phonetic": "/brɑː/",
    "vi": "tốt / giỏi / ổn",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Không biến đổi theo giống/số"
  },
  {
    "id": 313,
    "en": "dålig",
    "phonetic": "/ˈdoːlɪɡ/",
    "vi": "kém / tệ / không tốt",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: dåligt, dåliga"
  },
  {
    "id": 314,
    "en": "stor",
    "phonetic": "/stuːr/",
    "vi": "lớn / to",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: stort, stora"
  },
  {
    "id": 315,
    "en": "liten",
    "phonetic": "/ˈliːtɛn/",
    "vi": "nhỏ / bé",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Trung tính: litet, số nhiều: små"
  },
  {
    "id": 316,
    "en": "ny",
    "phonetic": "/nyː/",
    "vi": "mới",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: nytt, nya"
  },
  {
    "id": 317,
    "en": "gammal",
    "phonetic": "/ˈɡamal/",
    "vi": "cũ / già",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Trung tính: gammalt, số nhiều: gamla"
  },
  {
    "id": 318,
    "en": "viktig",
    "phonetic": "/ˈvɪktɪɡ/",
    "vi": "quan trọng",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: viktigt, viktiga"
  },
  {
    "id": 319,
    "en": "svår",
    "phonetic": "/svoːr/",
    "vi": "khó",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: svårt, svåra"
  },
  {
    "id": 320,
    "en": "lätt",
    "phonetic": "/lɛt/",
    "vi": "dễ / nhẹ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: lätt, lätta"
  },
  {
    "id": 321,
    "en": "rolig",
    "phonetic": "/ˈruːlɪɡ/",
    "vi": "vui / thú vị",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: roligt, roliga"
  },
  {
    "id": 322,
    "en": "fin",
    "phonetic": "/fiːn/",
    "vi": "đẹp / thanh lịch / ổn",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: fint, fina"
  },
  {
    "id": 323,
    "en": "ren",
    "phonetic": "/reːn/",
    "vi": "sạch sẽ",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: rent, rena"
  },
  {
    "id": 324,
    "en": "smutsig",
    "phonetic": "/ˈsmɵtsɪɡ/",
    "vi": "bẩn",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: smutsigt, smutsiga"
  },
  {
    "id": 325,
    "en": "öppen",
    "phonetic": "/ˈœpɛn/",
    "vi": "mở / mở cửa",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: öppet, öppna"
  },
  {
    "id": 326,
    "en": "stängd",
    "phonetic": "/stɛŋd/",
    "vi": "đóng / đóng cửa",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: stängt, stängda"
  },
  {
    "id": 327,
    "en": "fri",
    "phonetic": "/friː/",
    "vi": "rảnh / tự do / miễn phí",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: fritt, fria"
  },
  {
    "id": 328,
    "en": "upptagen",
    "phonetic": "/ˈɵpˌtɑːɡɛn/",
    "vi": "bận rộn",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: upptaget, upptagna"
  },
  {
    "id": 329,
    "en": "säker",
    "phonetic": "/ˈsɛːkɛr/",
    "vi": "an toàn / chắc chắn",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: säkert, säkra"
  },
  {
    "id": 330,
    "en": "möjlig",
    "phonetic": "/ˈmœjlɪɡ/",
    "vi": "khả thi / có thể",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: möjligt, möjliga"
  },
  {
    "id": 331,
    "en": "riktig",
    "phonetic": "/ˈrɪktɪɡ/",
    "vi": "đúng / thực sự",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: riktigt, riktiga"
  },
  {
    "id": 332,
    "en": "fel",
    "phonetic": "/feːl/",
    "vi": "sai / lỗi",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Danh từ: ett fel; tính từ không đổi: fel"
  },
  {
    "id": 333,
    "en": "mycket",
    "phonetic": "/ˈmʏkɛ/",
    "vi": "nhiều / rất",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ/tính từ không đếm được"
  },
  {
    "id": 334,
    "en": "lite",
    "phonetic": "/ˈliːtɛ/",
    "vi": "một chút / ít",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ/tính từ"
  },
  {
    "id": 335,
    "en": "mer",
    "phonetic": "/meːr/",
    "vi": "nhiều hơn",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "So sánh hơn của mycket"
  },
  {
    "id": 336,
    "en": "mest",
    "phonetic": "/mɛst/",
    "vi": "nhiều nhất",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "So sánh nhất của mycket"
  },
  {
    "id": 337,
    "en": "också",
    "phonetic": "/ˈɔksoː/",
    "vi": "cũng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ"
  },
  {
    "id": 338,
    "en": "bara",
    "phonetic": "/ˈbɑːra/",
    "vi": "chỉ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ"
  },
  {
    "id": 339,
    "en": "redan",
    "phonetic": "/ˈreːdan/",
    "vi": "đã / rồi",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Phó từ chỉ thời gian"
  },
  {
    "id": 340,
    "en": "snart",
    "phonetic": "/snɑːʈ/",
    "vi": "sớm thôi / sắp",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ chỉ thời gian"
  },
  {
    "id": 341,
    "en": "hemma",
    "phonetic": "/ˈhɛma/",
    "vi": "ở nhà",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ chỉ trạng thái ở nhà"
  },
  {
    "id": 342,
    "en": "hem",
    "phonetic": "/hɛm/",
    "vi": "về nhà / đi về nhà",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ chỉ hướng về nhà"
  },
  {
    "id": 343,
    "en": "ute",
    "phonetic": "/ˈʉːtɛ/",
    "vi": "ở bên ngoài",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ chỉ trạng thái ngoài trời"
  },
  {
    "id": 344,
    "en": "inne",
    "phonetic": "/ˈɪnɛ/",
    "vi": "ở bên trong",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ chỉ vị trí trong nhà"
  },
  {
    "id": 345,
    "en": "på",
    "phonetic": "/poː/",
    "vi": "trên / ở / vào",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Giới từ phổ biến"
  },
  {
    "id": 346,
    "en": "i",
    "phonetic": "/iː/",
    "vi": "trong / ở",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Giới từ phổ biến"
  },
  {
    "id": 347,
    "en": "till",
    "phonetic": "/tɪl/",
    "vi": "đến / tới / cho",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Giới từ phổ biến"
  },
  {
    "id": 348,
    "en": "från",
    "phonetic": "/froːn/",
    "vi": "từ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Giới từ phổ biến"
  },
  {
    "id": 349,
    "en": "med",
    "phonetic": "/meːd/",
    "vi": "với / bằng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Giới từ phổ biến"
  },
  {
    "id": 350,
    "en": "utan",
    "phonetic": "/ˈʉːtan/",
    "vi": "không có / không cần",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Giới từ phổ biến"
  },
  {
    "id": 351,
    "en": "för",
    "phonetic": "/fœr/",
    "vi": "cho / vì / quá",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Giới từ/liên từ"
  },
  {
    "id": 352,
    "en": "om",
    "phonetic": "/ɔm/",
    "vi": "về / nếu / trong vòng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Giới từ/liên từ"
  },
  {
    "id": 353,
    "en": "efter",
    "phonetic": "/ˈɛftɛr/",
    "vi": "sau",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Giới từ/liên từ"
  },
  {
    "id": 354,
    "en": "före",
    "phonetic": "/ˈføːrɛ/",
    "vi": "trước",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Giới từ/phó từ"
  },
  {
    "id": 355,
    "en": "under",
    "phonetic": "/ˈɵndɛr/",
    "vi": "dưới / trong suốt",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Giới từ"
  },
  {
    "id": 356,
    "en": "över",
    "phonetic": "/ˈøːvɛr/",
    "vi": "trên / qua",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Giới từ"
  },
  {
    "id": 357,
    "en": "mellan",
    "phonetic": "/ˈmɛlan/",
    "vi": "giữa",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Giới từ"
  },
  {
    "id": 358,
    "en": "hos",
    "phonetic": "/huːs/",
    "vi": "ở chỗ / tại nhà hoặc nơi làm của ai",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Giới từ đặc trưng của tiếng Thụy Điển"
  },
  {
    "id": 359,
    "en": "och",
    "phonetic": "/ɔ/",
    "vi": "và",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Liên từ"
  },
  {
    "id": 360,
    "en": "men",
    "phonetic": "/mɛn/",
    "vi": "nhưng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Liên từ"
  },
  {
    "id": 361,
    "en": "eller",
    "phonetic": "/ˈɛlɛr/",
    "vi": "hoặc",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Liên từ"
  },
  {
    "id": 362,
    "en": "för att",
    "phonetic": "/ˈfœr at/",
    "vi": "để (chỉ mục đích)",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Liên từ chỉ mục đích"
  },
  {
    "id": 363,
    "en": "att",
    "phonetic": "/at/",
    "vi": "để / rằng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dấu hiệu nguyên thể hoặc liên từ"
  },
  {
    "id": 364,
    "en": "en / ett",
    "phonetic": "/eːn / ɛt/",
    "vi": "một (mạo từ không xác định)",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "En cho danh từ chung, ett cho trung tính"
  },
  {
    "id": 365,
    "en": "två",
    "phonetic": "/tvoː/",
    "vi": "hai",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Số đếm 2"
  },
  {
    "id": 366,
    "en": "tre",
    "phonetic": "/treː/",
    "vi": "ba",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Số đếm 3"
  },
  {
    "id": 367,
    "en": "fyra",
    "phonetic": "/ˈfyːra/",
    "vi": "bốn",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Số đếm 4"
  },
  {
    "id": 368,
    "en": "fem",
    "phonetic": "/fɛm/",
    "vi": "năm",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Số đếm 5"
  },
  {
    "id": 369,
    "en": "tio",
    "phonetic": "/ˈtiːu/",
    "vi": "mười",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Số đếm 10"
  },
  {
    "id": 370,
    "en": "hundra",
    "phonetic": "/ˈhɵndra/",
    "vi": "một trăm",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Số đếm 100"
  },
  {
    "id": 371,
    "en": "tusen",
    "phonetic": "/ˈtʉːsɛn/",
    "vi": "một nghìn",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Số đếm 1000"
  },
  {
    "id": 372,
    "en": "en dörrklocka",
    "phonetic": "/en ˈdœrˌklɔka/",
    "vi": "chuông cửa",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: dörrklockan"
  },
  {
    "id": 373,
    "en": "en brevlåda",
    "phonetic": "/en ˈbreːvˌloːda/",
    "vi": "hòm thư",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: brevlådan"
  },
  {
    "id": 374,
    "en": "ett brev",
    "phonetic": "/ɛt breːv/",
    "vi": "lá thư / công văn",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: brevet"
  },
  {
    "id": 375,
    "en": "ett paket",
    "phonetic": "/ɛt paˈkeːt/",
    "vi": "bưu kiện / gói hàng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: paketet"
  },
  {
    "id": 376,
    "en": "en räkning",
    "phonetic": "/en ˈrɛknɪŋ/",
    "vi": "hóa đơn",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: räkningen"
  },
  {
    "id": 377,
    "en": "en elräkning",
    "phonetic": "/en ˈeːlˌrɛknɪŋ/",
    "vi": "hóa đơn tiền điện",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: elräkningen"
  },
  {
    "id": 378,
    "en": "en värme",
    "phonetic": "/en ˈvɛrmɛ/",
    "vi": "sự ấm áp / hệ thống sưởi",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: värmen"
  },
  {
    "id": 379,
    "en": "ett element",
    "phonetic": "/ɛt eleˈmɛnt/",
    "vi": "bộ tản nhiệt / lò sưởi",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: elementet"
  },
  {
    "id": 380,
    "en": "en lampa",
    "phonetic": "/en ˈlampa/",
    "vi": "đèn",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: lampan"
  },
  {
    "id": 381,
    "en": "ett ljus",
    "phonetic": "/ɛt jʉːs/",
    "vi": "ánh sáng / cây nến",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: ljuset"
  },
  {
    "id": 382,
    "en": "en soffa",
    "phonetic": "/en ˈsɔfa/",
    "vi": "ghế sofa",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: soffan"
  },
  {
    "id": 383,
    "en": "en matta",
    "phonetic": "/en ˈmata/",
    "vi": "thảm",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: mattan"
  },
  {
    "id": 384,
    "en": "en gardin",
    "phonetic": "/en ɡarˈdiːn/",
    "vi": "rèm cửa",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: gardinen"
  },
  {
    "id": 385,
    "en": "en garderob",
    "phonetic": "/en ɡardɛˈruːb/",
    "vi": "tủ quần áo",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: garderoben"
  },
  {
    "id": 386,
    "en": "ett klädesplagg",
    "phonetic": "/ɛt ˈklɛːdɛsˌplaɡ/",
    "vi": "món đồ quần áo",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: klädesplagget"
  },
  {
    "id": 387,
    "en": "en jacka",
    "phonetic": "/en ˈjaka/",
    "vi": "áo khoác",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: jackan"
  },
  {
    "id": 388,
    "en": "en tröja",
    "phonetic": "/en ˈtrœja/",
    "vi": "áo len / áo thun dài tay",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: tröjan"
  },
  {
    "id": 389,
    "en": "ett par skor",
    "phonetic": "/ɛt pɑːr skuːr/",
    "vi": "một đôi giày",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Số ít: en sko"
  },
  {
    "id": 390,
    "en": "en mössa",
    "phonetic": "/en ˈmœsa/",
    "vi": "mũ len",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: mössan"
  },
  {
    "id": 391,
    "en": "en vante",
    "phonetic": "/en ˈvantɛ/",
    "vi": "găng tay",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Thường dùng số nhiều: vantar"
  },
  {
    "id": 392,
    "en": "en halsduk",
    "phonetic": "/en ˈhalsˌdʉːk/",
    "vi": "khăn quàng cổ",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: halsduken"
  },
  {
    "id": 393,
    "en": "ett paraply",
    "phonetic": "/ɛt paraˈplʏː/",
    "vi": "cây dù / ô",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: paraplyet"
  },
  {
    "id": 394,
    "en": "en väska",
    "phonetic": "/en ˈvɛska/",
    "vi": "túi xách / balo",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: väskan"
  },
  {
    "id": 395,
    "en": "en plånbok",
    "phonetic": "/en ˈploːnˌbuːk/",
    "vi": "ví tiền",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: plånboken"
  },
  {
    "id": 396,
    "en": "en mobil",
    "phonetic": "/en muˈbiːl/",
    "vi": "điện thoại di động",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: mobilen"
  },
  {
    "id": 397,
    "en": "en dator",
    "phonetic": "/en ˈdɑːtɔr/",
    "vi": "máy tính",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: datorn"
  },
  {
    "id": 398,
    "en": "ett internet",
    "phonetic": "/ɛt ˈɪntɛrˌnɛt/",
    "vi": "mạng internet",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: internet"
  },
  {
    "id": 399,
    "en": "ett lösenord",
    "phonetic": "/ɛt ˈløːsɛnˌuːɖ/",
    "vi": "mật khẩu",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: lösenordet"
  },
  {
    "id": 400,
    "en": "en arbetsgivare",
    "phonetic": "/en ˈɑːrbɛtsˌjiːvarɛ/",
    "vi": "người sử dụng lao động / chủ",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: arbetsgivaren"
  },
  {
    "id": 401,
    "en": "en arbetstagare",
    "phonetic": "/en ˈɑːrbɛtsˌtɑːɡarɛ/",
    "vi": "người lao động",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: arbetstagaren"
  },
  {
    "id": 402,
    "en": "ett företag",
    "phonetic": "/ɛt ˈfœːrɛˌtɑːɡ/",
    "vi": "công ty / doanh nghiệp",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: företaget"
  },
  {
    "id": 403,
    "en": "en bransch",
    "phonetic": "/en branɧ/",
    "vi": "ngành nghề / lĩnh vực",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: branschen"
  },
  {
    "id": 404,
    "en": "en kundkrets",
    "phonetic": "/en ˈkɵndˌkreːts/",
    "vi": "tệp khách hàng",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: kundkretsen"
  },
  {
    "id": 405,
    "en": "en kvalitet",
    "phonetic": "/en kvaliˈteːt/",
    "vi": "chất lượng",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: kvaliteten"
  },
  {
    "id": 406,
    "en": "en säkerhet",
    "phonetic": "/en ˈsɛːkɛrheːt/",
    "vi": "sự an toàn",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: säkerheten"
  },
  {
    "id": 407,
    "en": "en regel",
    "phonetic": "/en ˈreːɡɛl/",
    "vi": "quy định / quy tắc",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: regeln"
  },
  {
    "id": 408,
    "en": "ett ansvar",
    "phonetic": "/ɛt ˈanˌsvɑːr/",
    "vi": "trách nhiệm",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: ansvaret"
  },
  {
    "id": 409,
    "en": "ett samarbete",
    "phonetic": "/ɛt ˈsɑːmarˌbeːtɛ/",
    "vi": "sự hợp tác",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: samarbetet"
  },
  {
    "id": 410,
    "en": "en utveckling",
    "phonetic": "/en ʉtˈvɛklɪŋ/",
    "vi": "sự phát triển",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: utvecklingen"
  },
  {
    "id": 411,
    "en": "en framtid",
    "phonetic": "/en ˈframˌtiːd/",
    "vi": "tương lai",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: framtiden"
  },
  {
    "id": 412,
    "en": "ett nuvarande",
    "phonetic": "/ɛt ˈnʉːˌvɑːrandɛ/",
    "vi": "hiện tại",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: nuvarande"
  },
  {
    "id": 413,
    "en": "ett förflutet",
    "phonetic": "/ɛt fœrˈflʉːtɛt/",
    "vi": "quá khứ",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: förflutna"
  },
  {
    "id": 414,
    "en": "en möjlighet",
    "phonetic": "/en ˈmœjlɪheːt/",
    "vi": "cơ hội / khả năng",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: möjligheten"
  },
  {
    "id": 415,
    "en": "en utmaning",
    "phonetic": "/en ˈʉːtˌmɑːnɪŋ/",
    "vi": "thử thách",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: utmaningen"
  },
  {
    "id": 416,
    "en": "en lösning",
    "phonetic": "/en ˈløːsnɪŋ/",
    "vi": "giải pháp",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: lösningen"
  },
  {
    "id": 417,
    "en": "ett beslut",
    "phonetic": "/ɛt beˈslʉːt/",
    "vi": "quyết định",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: beslutet"
  },
  {
    "id": 418,
    "en": "en start",
    "phonetic": "/en stɑːʈ/",
    "vi": "sự khởi đầu",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: starten"
  },
  {
    "id": 419,
    "en": "ett slut",
    "phonetic": "/ɛt slʉːt/",
    "vi": "sự kết thúc",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: slutet"
  },
  {
    "id": 420,
    "en": "en nagelvård",
    "phonetic": "/en ˈnɑːɡɛlˌvoːɖ/",
    "vi": "chăm sóc móng",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: nagelvården"
  },
  {
    "id": 421,
    "en": "en gellack",
    "phonetic": "/en ˈjɛlˌlak/",
    "vi": "sơn gel",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: gellacket"
  },
  {
    "id": 422,
    "en": "en akryl",
    "phonetic": "/en aˈkryːl/",
    "vi": "bột đắp / acrylic",
    "topic": "salon",
    "level": "SFI D",
    "termNote": "Dạng xác định: akrylen"
  },
  {
    "id": 423,
    "en": "en fransk manikyr",
    "phonetic": "/en fransk maniˈkyːr/",
    "vi": "móng kiểu Pháp (French)",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: franska manikyren"
  },
  {
    "id": 424,
    "en": "en nagelband",
    "phonetic": "/en ˈnɑːɡɛlˌband/",
    "vi": "da quanh móng / biểu bì",
    "topic": "salon",
    "level": "SFI D",
    "termNote": "Dạng xác định: nagelbandet"
  },
  {
    "id": 425,
    "en": "en nagelklippare",
    "phonetic": "/en ˈnɑːɡɛlˌklɪparɛ/",
    "vi": "kềm cắt móng",
    "topic": "salon",
    "level": "SFI D",
    "termNote": "Dạng xác định: nagelklipparen"
  },
  {
    "id": 426,
    "en": "en desinfektion",
    "phonetic": "/en dɛsɪnfɛkˈɧuːn/",
    "vi": "sát trùng / khử khuẩn",
    "topic": "salon",
    "level": "SFI D",
    "termNote": "Dạng xác định: desinfektionen"
  },
  {
    "id": 427,
    "en": "steril",
    "phonetic": "/steˈriːl/",
    "vi": "tiệt trùng / vô trùng",
    "topic": "salon",
    "level": "SFI D",
    "termNote": "Tính từ: sterilt, sterila"
  },
  {
    "id": 428,
    "en": "en bänk",
    "phonetic": "/en bɛŋk/",
    "vi": "ghế dài / băng ghế",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: bänken"
  },
  {
    "id": 429,
    "en": "en lampa för naglar",
    "phonetic": "/en ˈlampa fœr ˈnɑːɡlar/",
    "vi": "đèn hơ móng",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Cụm từ chuyên ngành nail"
  },
  {
    "id": 430,
    "en": "en böjning",
    "phonetic": "/en ˈbœjnɪŋ/",
    "vi": "độ cong (mi/móng)",
    "topic": "salon",
    "level": "SFI D",
    "termNote": "Dạng xác định: böjningen"
  },
  {
    "id": 431,
    "en": "en längd",
    "phonetic": "/en lɛŋd/",
    "vi": "độ dài",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Dạng xác định: längden"
  },
  {
    "id": 432,
    "en": "en tjocklek",
    "phonetic": "/en ˈɕɔkˌleːk/",
    "vi": "độ dày",
    "topic": "salon",
    "level": "SFI D",
    "termNote": "Dạng xác định: tjockleken"
  },
  {
    "id": 433,
    "en": "naturlig",
    "phonetic": "/naˈtʉːɭɪɡ/",
    "vi": "tự nhiên",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Tính từ: naturligt, naturliga"
  },
  {
    "id": 434,
    "en": "mjuk",
    "phonetic": "/mjʉːk/",
    "vi": "mềm mại",
    "topic": "salon",
    "level": "SFI C",
    "termNote": "Tính từ: mjukt, mjuka"
  },
  {
    "id": 435,
    "en": "ett samhälle",
    "phonetic": "/ɛt ˈsamˌhɛlːɛ/",
    "vi": "xã hội",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: samhället"
  },
  {
    "id": 436,
    "en": "en kultur",
    "phonetic": "/en kɵlˈtʉːr/",
    "vi": "văn hóa",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: kulturen"
  },
  {
    "id": 437,
    "en": "en tradition",
    "phonetic": "/en tradiˈɧuːn/",
    "vi": "truyền thống",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: traditionen"
  },
  {
    "id": 438,
    "en": "en högtid",
    "phonetic": "/en ˈhœɡˌtiːd/",
    "vi": "ngày lễ / dịp lễ",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: högtiden"
  },
  {
    "id": 439,
    "en": "jul",
    "phonetic": "/jʉːl/",
    "vi": "Giáng sinh",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: julen"
  },
  {
    "id": 440,
    "en": "midsommar",
    "phonetic": "/ˈmɪdˌsɔmar/",
    "vi": "lễ Giữa Hè ở Thụy Điển",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Ngày lễ truyền thống lớn ở Thụy Điển"
  },
  {
    "id": 441,
    "en": "en kanelbulle",
    "phonetic": "/en kaˈneːlˌbɵlːɛ/",
    "vi": "bánh cuộn quế",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Món bánh gắn liền với fika"
  },
  {
    "id": 442,
    "en": "en köttbulle",
    "phonetic": "/en ˈɕœtˌbɵlːɛ/",
    "vi": "viên thịt Thụy Điển",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Thường dùng số nhiều: köttbullar"
  },
  {
    "id": 443,
    "en": "en smörgås",
    "phonetic": "/en ˈsmœrˌɡoːs/",
    "vi": "bánh mì mở mặt / sandwich",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: smörgåsen"
  },
  {
    "id": 444,
    "en": "en ost",
    "phonetic": "/en ʉːst/",
    "vi": "phô mai",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: osten"
  },
  {
    "id": 445,
    "en": "ett smör",
    "phonetic": "/ɛt smœr/",
    "vi": "bơ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: smöret"
  },
  {
    "id": 446,
    "en": "ett ägg",
    "phonetic": "/ɛt ɛɡ/",
    "vi": "quả trứng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: ägget"
  },
  {
    "id": 447,
    "en": "en potatis",
    "phonetic": "/en puˈtɑːtɪs/",
    "vi": "khoai tây",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: potatisen"
  },
  {
    "id": 448,
    "en": "en lök",
    "phonetic": "/en løːk/",
    "vi": "hành tây",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: löken"
  },
  {
    "id": 449,
    "en": "en vitlök",
    "phonetic": "/en ˈvɪtˌløːk/",
    "vi": "tỏi",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: vitlöken"
  },
  {
    "id": 450,
    "en": "en chili",
    "phonetic": "/en ˈɕɪli/",
    "vi": "ớt",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: chilin"
  },
  {
    "id": 451,
    "en": "en buljong",
    "phonetic": "/en bɵˈljɔŋ/",
    "vi": "nước dùng",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: buljongen"
  },
  {
    "id": 452,
    "en": "en soppa",
    "phonetic": "/en ˈsɔpa/",
    "vi": "súp / canh",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: soppan"
  },
  {
    "id": 453,
    "en": "en sallad",
    "phonetic": "/en saˈlad/",
    "vi": "salad / rau trộn",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: salladen"
  },
  {
    "id": 454,
    "en": "en efterrätt",
    "phonetic": "/en ˈɛftɛrˌrɛt/",
    "vi": "món tráng miệng",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: efterrätten"
  },
  {
    "id": 455,
    "en": "en restaurang",
    "phonetic": "/en rɛstɔˈraŋ/",
    "vi": "nhà hàng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: restaurangen"
  },
  {
    "id": 456,
    "en": "ett kafé",
    "phonetic": "/ɛt kaˈfeː/",
    "vi": "quán cà phê",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: kaféet"
  },
  {
    "id": 457,
    "en": "en meny",
    "phonetic": "/en meˈnyː/",
    "vi": "thực đơn",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: menyn"
  },
  {
    "id": 458,
    "en": "en nota",
    "phonetic": "/en ˈnuːta/",
    "vi": "hóa đơn tính tiền (ở quán ăn)",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: notan"
  },
  {
    "id": 459,
    "en": "en kö",
    "phonetic": "/en ɕøː/",
    "vi": "hàng chờ / xếp hàng",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: kön"
  },
  {
    "id": 460,
    "en": "en ingång",
    "phonetic": "/en ˈɪnˌɡɔŋ/",
    "vi": "lối vào",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: ingången"
  },
  {
    "id": 461,
    "en": "en utgång",
    "phonetic": "/en ˈʉːtˌɡɔŋ/",
    "vi": "lối ra",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: utgången"
  },
  {
    "id": 462,
    "en": "en toalett",
    "phonetic": "/en tuaˈlɛt/",
    "vi": "nhà vệ sinh",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: toaletten"
  },
  {
    "id": 463,
    "en": "en polis",
    "phonetic": "/en pʊˈliːs/",
    "vi": "cảnh sát",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: polisen"
  },
  {
    "id": 464,
    "en": "en ambulans",
    "phonetic": "/en ambɵˈlans/",
    "vi": "xe cứu thương",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: ambulansen"
  },
  {
    "id": 465,
    "en": "en nödsituation",
    "phonetic": "/en ˈnøːdˌsɪtɵaˈɧuːn/",
    "vi": "tình huống khẩn cấp",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: nödsituationen"
  },
  {
    "id": 466,
    "en": "börja",
    "phonetic": "/ˈbœrja/",
    "vi": "bắt đầu",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: börjar, quá khứ: började"
  },
  {
    "id": 467,
    "en": "sluta",
    "phonetic": "/ˈslʉːta/",
    "vi": "kết thúc / ngừng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: slutar, quá khứ: slutade"
  },
  {
    "id": 468,
    "en": "fortsätta",
    "phonetic": "/ˈfɔʈˌsɛta/",
    "vi": "tiếp tục",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Hiện tại: fortsätter, quá khứ: fortsatte"
  },
  {
    "id": 469,
    "en": "försöka",
    "phonetic": "/fœrˈsøːka/",
    "vi": "cố gắng / thử",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Hiện tại: försöker, quá khứ: försökte"
  },
  {
    "id": 470,
    "en": "tänka",
    "phonetic": "/ˈtɛŋka/",
    "vi": "nghĩ / suy nghĩ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: tänker, quá khứ: tänkte"
  },
  {
    "id": 471,
    "en": "tro",
    "phonetic": "/truː/",
    "vi": "tin / cho rằng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: tror, quá khứ: trodde"
  },
  {
    "id": 472,
    "en": "veta",
    "phonetic": "/ˈveːta/",
    "vi": "biết (thông tin/sự thật)",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: vet, quá khứ: visste"
  },
  {
    "id": 473,
    "en": "känna",
    "phonetic": "/ˈɕɛna/",
    "vi": "cảm thấy / biết (người/nơi)",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: känner, quá khứ: kände"
  },
  {
    "id": 474,
    "en": "minnas",
    "phonetic": "/ˈmɪnas/",
    "vi": "nhớ",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Hiện tại: minns, quá khứ: mindes"
  },
  {
    "id": 475,
    "en": "glömma",
    "phonetic": "/ˈɡlœma/",
    "vi": "quên",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: glömmer, quá khứ: glömde"
  },
  {
    "id": 476,
    "en": "välja",
    "phonetic": "/ˈvɛlja/",
    "vi": "chọn / lựa chọn",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Hiện tại: väljer, quá khứ: valde"
  },
  {
    "id": 477,
    "en": "köpa",
    "phonetic": "/ˈɕøːpa/",
    "vi": "mua",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: köper, quá khứ: köpte"
  },
  {
    "id": 478,
    "en": "sälja",
    "phonetic": "/ˈsɛlja/",
    "vi": "bán",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Hiện tại: säljer, quá khứ: sålde"
  },
  {
    "id": 479,
    "en": "öppna",
    "phonetic": "/ˈœpna/",
    "vi": "mở",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: öppnar, quá khứ: öppnade"
  },
  {
    "id": 480,
    "en": "stänga",
    "phonetic": "/ˈstɛŋa/",
    "vi": "đóng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: stänger, quá khứ: stängde"
  },
  {
    "id": 481,
    "en": "sitta",
    "phonetic": "/ˈsɪta/",
    "vi": "ngồi",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: sitter, quá khứ: satt"
  },
  {
    "id": 482,
    "en": "stå",
    "phonetic": "/stoː/",
    "vi": "đứng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: står, quá khứ: stod"
  },
  {
    "id": 483,
    "en": "ligga",
    "phonetic": "/ˈlɪɡa/",
    "vi": "nằm / tọa lạc",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Hiện tại: ligger, quá khứ: låg"
  },
  {
    "id": 484,
    "en": "springa",
    "phonetic": "/ˈsprɪŋa/",
    "vi": "chạy",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: springer, quá khứ: sprang"
  },
  {
    "id": 485,
    "en": "träna",
    "phonetic": "/ˈtrɛːna/",
    "vi": "tập luyện / tập thể dục",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: tränar, quá khứ: tränade"
  },
  {
    "id": 486,
    "en": "promenera",
    "phonetic": "/prumeˈneːra/",
    "vi": "đi dạo",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Hiện tại: promenerar, quá khứ: promenerade"
  },
  {
    "id": 487,
    "en": "skratta",
    "phonetic": "/ˈskrɑːta/",
    "vi": "cười",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: skrattar, quá khứ: skrattade"
  },
  {
    "id": 488,
    "en": "le",
    "phonetic": "/leː/",
    "vi": "mỉm cười",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Hiện tại: ler, quá khứ: log"
  },
  {
    "id": 489,
    "en": "gråta",
    "phonetic": "/ˈɡroːta/",
    "vi": "khóc",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Hiện tại: gråter, quá khứ: grät"
  },
  {
    "id": 490,
    "en": "ringa",
    "phonetic": "/ˈrɪŋa/",
    "vi": "gọi điện / rung chuông",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: ringer, quá khứ: ringde"
  },
  {
    "id": 491,
    "en": "skicka",
    "phonetic": "/ˈɕɪka/",
    "vi": "gửi",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: skickar, quá khứ: skickade"
  },
  {
    "id": 492,
    "en": "få besök",
    "phonetic": "/foː beˈsøːk/",
    "vi": "có khách đến thăm",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Cụm động từ thông dụng"
  },
  {
    "id": 493,
    "en": "hälsa på",
    "phonetic": "/ˈhɛlsa poː/",
    "vi": "chào hỏi / ghé thăm",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Hiện tại: hälsar på"
  },
  {
    "id": 494,
    "en": "träffa",
    "phonetic": "/ˈtrɛfa/",
    "vi": "gặp gỡ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: träffar, quá khứ: träffade"
  },
  {
    "id": 495,
    "en": "hälsa",
    "phonetic": "/ˈhɛlsa/",
    "vi": "chào / gửi lời chào",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Hiện tại: hälsar, quá khứ: hälsade"
  },
  {
    "id": 496,
    "en": "ett ord",
    "phonetic": "/ɛt uːɖ/",
    "vi": "từ / từ vựng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: ordet"
  },
  {
    "id": 497,
    "en": "en mening",
    "phonetic": "/en ˈmeːnɪŋ/",
    "vi": "câu / ý nghĩa",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: meningen"
  },
  {
    "id": 498,
    "en": "en text",
    "phonetic": "/en tɛkst/",
    "vi": "văn bản",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: texten"
  },
  {
    "id": 499,
    "en": "en bok",
    "phonetic": "/en buːk/",
    "vi": "quyển sách",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: boken"
  },
  {
    "id": 500,
    "en": "en tidning",
    "phonetic": "/en ˈtiːdnɪŋ/",
    "vi": "báo / tạp chí",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: tidningen"
  },
  {
    "id": 501,
    "en": "en bild",
    "phonetic": "/en bɪld/",
    "vi": "hình ảnh / bức ảnh",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: bilden"
  },
  {
    "id": 502,
    "en": "en film",
    "phonetic": "/en fɪlm/",
    "vi": "bộ phim",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: filmen"
  },
  {
    "id": 503,
    "en": "en musik",
    "phonetic": "/en mɵˈsiːk/",
    "vi": "âm nhạc",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: musiken"
  },
  {
    "id": 504,
    "en": "en sång",
    "phonetic": "/en sɔŋ/",
    "vi": "bài hát",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: sången"
  },
  {
    "id": 505,
    "en": "en lek",
    "phonetic": "/en leːk/",
    "vi": "trò chơi",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: leken"
  },
  {
    "id": 506,
    "en": "ett spel",
    "phonetic": "/ɛt speːl/",
    "vi": "trò chơi / game",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: spelet"
  },
  {
    "id": 507,
    "en": "en sport",
    "phonetic": "/en spɔʈ/",
    "vi": "thể thao",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: sporten"
  },
  {
    "id": 508,
    "en": "en fotboll",
    "phonetic": "/en ˈfʊtˌbɔl/",
    "vi": "bóng đá",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: fotbollen"
  },
  {
    "id": 509,
    "en": "en simning",
    "phonetic": "/en ˈsɪmnɪŋ/",
    "vi": "bơi lội",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: simningen"
  },
  {
    "id": 510,
    "en": "en löpning",
    "phonetic": "/en ˈløːpnɪŋ/",
    "vi": "chạy bộ",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: löpningen"
  },
  {
    "id": 511,
    "en": "en vandring",
    "phonetic": "/en ˈvandrɪŋ/",
    "vi": "đi bộ đường dài / trekking",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: vandringen"
  },
  {
    "id": 512,
    "en": "en utflykt",
    "phonetic": "/en ˈʉːtˌflʏkt/",
    "vi": "chuyến dã ngoại",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: utflykten"
  },
  {
    "id": 513,
    "en": "en semesterresa",
    "phonetic": "/en seˈmɛstɛrˌreːsa/",
    "vi": "chuyến đi nghỉ",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: semesterresan"
  },
  {
    "id": 514,
    "en": "en biljettautomat",
    "phonetic": "/en bɪlˈjɛtˌawtɔmɑːt/",
    "vi": "máy bán vé tự động",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: biljettautomaten"
  },
  {
    "id": 515,
    "en": "en tidtabell",
    "phonetic": "/en ˈtiːdˌtabɛl/",
    "vi": "bảng giờ chạy / lịch trình",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: tidtabellen"
  },
  {
    "id": 516,
    "en": "en försening",
    "phonetic": "/en fœrˈseːnɪŋ/",
    "vi": "sự trễ / chậm chuyến",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: förseningen"
  },
  {
    "id": 517,
    "en": "en avgång",
    "phonetic": "/en ˈɑːvˌɡɔŋ/",
    "vi": "chuyến khởi hành",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: avgången"
  },
  {
    "id": 518,
    "en": "en ankomst",
    "phonetic": "/en ˈanˌkɔmst/",
    "vi": "sự đến nơi",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: ankomsten"
  },
  {
    "id": 519,
    "en": "en riktning",
    "phonetic": "/en ˈrɪktnɪŋ/",
    "vi": "phương hướng",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: riktningen"
  },
  {
    "id": 520,
    "en": "vänster",
    "phonetic": "/ˈvɛnstɛr/",
    "vi": "bên trái",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ chỉ hướng"
  },
  {
    "id": 521,
    "en": "höger",
    "phonetic": "/ˈhøːɡɛr/",
    "vi": "bên phải",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ chỉ hướng"
  },
  {
    "id": 522,
    "en": "rakt fram",
    "phonetic": "/rɑːkt frɑːm/",
    "vi": "đi thẳng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Cụm từ chỉ đường"
  },
  {
    "id": 523,
    "en": "på hörnet",
    "phonetic": "/poː ˈhœːnɛt/",
    "vi": "ở góc đường",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Cụm từ chỉ vị trí"
  },
  {
    "id": 524,
    "en": "i centrum",
    "phonetic": "/iː ˈsɛntrɵm/",
    "vi": "ở trung tâm thành phố",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Cụm từ chỉ vị trí"
  },
  {
    "id": 525,
    "en": "utanför",
    "phonetic": "/ˈʉːtanˌfœr/",
    "vi": "bên ngoài",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Giới từ/phó từ"
  },
  {
    "id": 526,
    "en": "innanför",
    "phonetic": "/ˈɪnanˌfœr/",
    "vi": "bên trong",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Giới từ/phó từ"
  },
  {
    "id": 527,
    "en": "bredvid",
    "phonetic": "/ˈbreːdˌviːd/",
    "vi": "bên cạnh",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Giới từ/phó từ"
  },
  {
    "id": 528,
    "en": "bakom",
    "phonetic": "/ˈbɑːkɔm/",
    "vi": "phía sau",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Giới từ/phó từ"
  },
  {
    "id": 529,
    "en": "framför",
    "phonetic": "/ˈframˌfœr/",
    "vi": "phía trước",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Giới từ/phó từ"
  },
  {
    "id": 530,
    "en": "upp",
    "phonetic": "/ɵp/",
    "vi": "lên / lên trên",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ chỉ hướng"
  },
  {
    "id": 531,
    "en": "ner",
    "phonetic": "/neːr/",
    "vi": "xuống / xuống dưới",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ chỉ hướng"
  },
  {
    "id": 532,
    "en": "in",
    "phonetic": "/ɪn/",
    "vi": "vào / vào trong",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ chỉ hướng"
  },
  {
    "id": 533,
    "en": "ut",
    "phonetic": "/ʉːt/",
    "vi": "ra / ra ngoài",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Phó từ chỉ hướng"
  },
  {
    "id": 534,
    "en": "bort",
    "phonetic": "/buːʈ/",
    "vi": "đi xa / đi mất",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Phó từ chỉ hướng"
  },
  {
    "id": 535,
    "en": "kvar",
    "phonetic": "/kvɑːr/",
    "vi": "còn lại / ở lại",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Phó từ/tính từ"
  },
  {
    "id": 536,
    "en": "klar",
    "phonetic": "/klɑːr/",
    "vi": "xong / sẵn sàng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: klart, klara"
  },
  {
    "id": 537,
    "en": "färdig",
    "phonetic": "/ˈfɛːɖɪɡ/",
    "vi": "hoàn thành / xong",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: färdigt, färdiga"
  },
  {
    "id": 538,
    "en": "ledig",
    "phonetic": "/ˈleːdɪɡ/",
    "vi": "rảnh / trống (lịch, chỗ)",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: ledigt, lediga"
  },
  {
    "id": 539,
    "en": "full",
    "phonetic": "/fɵl/",
    "vi": "đầy / no",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: fullt, fulla"
  },
  {
    "id": 540,
    "en": "tom",
    "phonetic": "/tɔm/",
    "vi": "trống / rỗng",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: tomt, tomma"
  },
  {
    "id": 541,
    "en": "renlig",
    "phonetic": "/ˈreːnˌlɪɡ/",
    "vi": "sạch sẽ / giữ vệ sinh",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Tính từ: renligt, renliga"
  },
  {
    "id": 542,
    "en": "trevlig",
    "phonetic": "/ˈtreːvlɪɡ/",
    "vi": "thân thiện / dễ mến",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: trevligt, trevliga"
  },
  {
    "id": 543,
    "en": "snäll",
    "phonetic": "/snɛl/",
    "vi": "tốt bụng / tử tế",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Tính từ: snällt, snälla"
  },
  {
    "id": 544,
    "en": "hjälpsam",
    "phonetic": "/ˈjɛlpˌsam/",
    "vi": "hay giúp đỡ",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: hjälpsamt, hjälpsamma"
  },
  {
    "id": 545,
    "en": "ärlig",
    "phonetic": "/ˈɛːɭɪɡ/",
    "vi": "trung thực / chân thật",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: ärligt, ärliga"
  },
  {
    "id": 546,
    "en": "punktlig",
    "phonetic": "/ˈpɵŋktlɪɡ/",
    "vi": "đúng giờ",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Tính từ: punktligt, punktliga"
  },
  {
    "id": 547,
    "en": "noggrann",
    "phonetic": "/ˈnʊɡˌɡran/",
    "vi": "cẩn thận / tỉ mỉ",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Tính từ: noggrant, noggranna"
  },
  {
    "id": 548,
    "en": "försiktig",
    "phonetic": "/fœrˈsɪktɪɡ/",
    "vi": "thận trọng / nhẹ nhàng",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: försiktigt, försiktiga"
  },
  {
    "id": 549,
    "en": "modig",
    "phonetic": "/ˈmuːdɪɡ/",
    "vi": "dũng cảm",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: modigt, modiga"
  },
  {
    "id": 550,
    "en": "tålmodig",
    "phonetic": "/ˈtoːlˌmuːdɪɡ/",
    "vi": "kiên nhẫn",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Tính từ: tålmodigt, tålmodiga"
  },
  {
    "id": 551,
    "en": "positiv",
    "phonetic": "/ˈpʊsɪˌtiːv/",
    "vi": "tích cực",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: positivt, positiva"
  },
  {
    "id": 552,
    "en": "negativ",
    "phonetic": "/ˈneːɡaˌtiːv/",
    "vi": "tiêu cực",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: negativt, negativa"
  },
  {
    "id": 553,
    "en": "vänlig",
    "phonetic": "/ˈvɛnlɪɡ/",
    "vi": "ân cần / thân thiện",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: vänligt, vänliga"
  },
  {
    "id": 554,
    "en": "artigt",
    "phonetic": "/ˈɑːʈɪt/",
    "vi": "lịch sự",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Tính từ: artig, artigt, artiga"
  },
  {
    "id": 555,
    "en": "respektfull",
    "phonetic": "/rɛsˈpɛktˌfɵl/",
    "vi": "tôn trọng / lễ phép",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Tính từ: respektfullt, respektfulla"
  },
  {
    "id": 556,
    "en": "självförtroende",
    "phonetic": "/ˈɕɛlvˌfœrˌtruːɛndɛ/",
    "vi": "sự tự tin",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Danh từ trung tính"
  },
  {
    "id": 557,
    "en": "självkänsla",
    "phonetic": "/ˈɕɛlvˌɕɛnsla/",
    "vi": "lòng tự trọng / giá trị bản thân",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: självkänslan"
  },
  {
    "id": 558,
    "en": "balans",
    "phonetic": "/baˈlans/",
    "vi": "sự cân bằng",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: balansen"
  },
  {
    "id": 559,
    "en": "frihet",
    "phonetic": "/ˈfriːheːt/",
    "vi": "sự tự do",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: friheten"
  },
  {
    "id": 560,
    "en": "trygghet",
    "phonetic": "/ˈtrʏɡheːt/",
    "vi": "sự an tâm / vững tâm",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: tryggheten"
  },
  {
    "id": 561,
    "en": "gemenskap",
    "phonetic": "/jeˈmɛnˌskɑːp/",
    "vi": "sự gắn kết / cộng đồng",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: gemenskapen"
  },
  {
    "id": 562,
    "en": "hjälp",
    "phonetic": "/jɛlp/",
    "vi": "sự giúp đỡ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: hjälpen"
  },
  {
    "id": 563,
    "en": "svar",
    "phonetic": "/svɑːr/",
    "vi": "câu trả lời",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: svaret"
  },
  {
    "id": 564,
    "en": "förklaring",
    "phonetic": "/fœrˈklɑːrɪŋ/",
    "vi": "lời giải thích",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: förklaringen"
  },
  {
    "id": 565,
    "en": "exempel",
    "phonetic": "/ɛkˈsɛmpɛl/",
    "vi": "ví dụ",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: exemplet"
  },
  {
    "id": 566,
    "en": "skillnad",
    "phonetic": "/ˈɧɪlnad/",
    "vi": "sự khác biệt",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: skillnaden"
  },
  {
    "id": 567,
    "en": "likhet",
    "phonetic": "/ˈliːkheːt/",
    "vi": "điểm tương đồng",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: likheten"
  },
  {
    "id": 568,
    "en": "del",
    "phonetic": "/deːl/",
    "vi": "phần",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: delen"
  },
  {
    "id": 569,
    "en": "helhet",
    "phonetic": "/ˈheːlheːt/",
    "vi": "toàn bộ",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: helheten"
  },
  {
    "id": 570,
    "en": "början",
    "phonetic": "/ˈbœrjan/",
    "vi": "sự bắt đầu / lúc đầu",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định của 'en början'"
  },
  {
    "id": 571,
    "en": "slutet",
    "phonetic": "/ˈslʉːtɛt/",
    "vi": "phần cuối / sự kết thúc",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định của 'ett slut'"
  },
  {
    "id": 572,
    "en": "mitten",
    "phonetic": "/ˈmɪtɛn/",
    "vi": "chính giữa",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: mitten"
  },
  {
    "id": 573,
    "en": "sidan",
    "phonetic": "/ˈsiːdan/",
    "vi": "bên / mặt / trang",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định của 'en sida'"
  },
  {
    "id": 574,
    "en": "platsen",
    "phonetic": "/ˈplatsɛn/",
    "vi": "nơi đó / chỗ đó",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định của 'en plats'"
  },
  {
    "id": 575,
    "en": "sätt",
    "phonetic": "/sɛt/",
    "vi": "cách / cách thức",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: sättet"
  },
  {
    "id": 576,
    "en": "sak",
    "phonetic": "/sɑːk/",
    "vi": "thứ / đồ vật / việc",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: saken"
  },
  {
    "id": 577,
    "en": "ting",
    "phonetic": "/tɪŋ/",
    "vi": "vật / đồ vật",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Thường dùng: en ting / ting"
  },
  {
    "id": 578,
    "en": "grej",
    "phonetic": "/ɡrɛj/",
    "vi": "món đồ / thứ (khẩu ngữ)",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Rất hay dùng trong văn nói tiếng Thụy Điển"
  },
  {
    "id": 579,
    "en": "pryl",
    "phonetic": "/pryːl/",
    "vi": "đồ vật nhỏ / vật dụng (khẩu ngữ)",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: prylen"
  },
  {
    "id": 580,
    "en": "problem",
    "phonetic": "/prʊˈbleːm/",
    "vi": "vấn đề",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: problemet"
  },
  {
    "id": 581,
    "en": "hjälpmedel",
    "phonetic": "/ˈjɛlpˌmeːdɛl/",
    "vi": "công cụ / thiết bị hỗ trợ",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: hjälpmedlet"
  },
  {
    "id": 582,
    "en": "verktyg",
    "phonetic": "/ˈvɛrkˌtʏːɡ/",
    "vi": "dụng cụ / công cụ",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: verktyget"
  },
  {
    "id": 583,
    "en": "maskin",
    "phonetic": "/maˈɧiːn/",
    "vi": "máy móc",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: maskinen"
  },
  {
    "id": 584,
    "en": "apparat",
    "phonetic": "/apaˈrɑːt/",
    "vi": "thiết bị",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: apparaten"
  },
  {
    "id": 585,
    "en": "batteri",
    "phonetic": "/batɛˈriː/",
    "vi": "pin",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: batteriet"
  },
  {
    "id": 586,
    "en": "laddare",
    "phonetic": "/ˈladarɛ/",
    "vi": "bộ sạc",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: laddaren"
  },
  {
    "id": 587,
    "en": "skärm",
    "phonetic": "/ɧɛrm/",
    "vi": "màn hình",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: skärmen"
  },
  {
    "id": 588,
    "en": "knapp",
    "phonetic": "/knap/",
    "vi": "nút bấm",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: knappen"
  },
  {
    "id": 589,
    "en": "nummer",
    "phonetic": "/ˈnɵmːɛr/",
    "vi": "số / số điện thoại",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: numret"
  },
  {
    "id": 590,
    "en": "telefon",
    "phonetic": "/teleˈfuːn/",
    "vi": "điện thoại",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: telefonen"
  },
  {
    "id": 591,
    "en": "meddelande",
    "phonetic": "/ˈmɛdɛˌlɑːndɛ/",
    "vi": "tin nhắn / thông báo",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: meddelandet"
  },
  {
    "id": 592,
    "en": "e-post",
    "phonetic": "/ˈeːˌpɔst/",
    "vi": "thư điện tử / email",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: e-posten"
  },
  {
    "id": 593,
    "en": "hemsida",
    "phonetic": "/ˈhɛmˌsiːda/",
    "vi": "trang web",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: hemsidan"
  },
  {
    "id": 594,
    "en": "app",
    "phonetic": "/ap/",
    "vi": "ứng dụng",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: appen"
  },
  {
    "id": 595,
    "en": "information",
    "phonetic": "/ɪnfɔrmaˈɧuːn/",
    "vi": "thông tin",
    "topic": "sweden",
    "level": "SFI B",
    "termNote": "Dạng xác định: informationen"
  },
  {
    "id": 596,
    "en": "nyhet",
    "phonetic": "/ˈnyːheːt/",
    "vi": "tin tức / điều mới",
    "topic": "sweden",
    "level": "SFI C",
    "termNote": "Dạng xác định: nyheten"
  },
  {
    "id": 597,
    "en": "sanning",
    "phonetic": "/ˈsanɪŋ/",
    "vi": "sự thật",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: sanningen"
  },
  {
    "id": 598,
    "en": "lögn",
    "phonetic": "/løŋn/",
    "vi": "lời nói dối",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: lögnen"
  },
  {
    "id": 599,
    "en": "misstag",
    "phonetic": "/ˈmɪsˌtɑːɡ/",
    "vi": "sai lầm / nhầm lẫn",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Dạng xác định: misstaget"
  },
  {
    "id": 600,
    "en": "ursprungligen",
    "phonetic": "/ˈʉːrˌsprɵŋlɪɡɛn/",
    "vi": "ban đầu / vốn dĩ",
    "topic": "sweden",
    "level": "SFI D",
    "termNote": "Phó từ"
  }
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
