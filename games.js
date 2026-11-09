// 동호회에서 제공한 목록. 인원과 시간에 참고한 자료는 각 항목 위에 표시했습니다.
const isSampleList = false;

const games = [
  {
    name: '포커',
    minPlayers: null,
    maxPlayers: null,
    duration: '',
    keywords: ['카드', '심리전'],
    video: '',
    note: '종목에 따라 인원과 규칙이 달라요.',
  },
  // https://www.asmodee.es/product/splendor/
  {
    name: '스플렌더',
    minPlayers: 2,
    maxPlayers: 4,
    duration: '30분',
    keywords: ['전략', '자원 관리', '초보 추천'],
    video: 'https://www.youtube.com/watch?v=0oe4QXSgCKw',
    aliases: ['스플랜더', 'Splendor'],
  },
  // https://blog.amigo-spiele.de/wp-content/uploads/2025/01/AMIGO-Export_Katalog_2025_250114-mitUmschlag-web.pdf
  {
    name: '할리갈리',
    minPlayers: 2,
    maxPlayers: 6,
    duration: '15분',
    keywords: ['순발력', '파티', '초보 추천'],
    video: 'https://www.youtube.com/watch?v=Ge0EiEiKOmQ',
  },
  // https://www.thamesandkosmos.com/downloads/The_Crew_Mission_Deep_Sea_Demo_Sheet.pdf
  {
    name: '딥 씨 크루',
    minPlayers: 2,
    maxPlayers: 5,
    duration: '20분',
    keywords: ['협력', '트릭테이킹', '미션'],
    video: 'https://www.youtube.com/watch?v=lcXqJ_ggFIY',
    aliases: ['딥시크루'],
    note: '2명은 변형 규칙으로 플레이해요.',
  },
  // https://www.catan.com/catan
  {
    name: '카탄',
    minPlayers: 3,
    maxPlayers: 4,
    duration: '60~90분',
    keywords: ['전략', '자원 관리', '협상'],
    video: 'https://www.youtube.com/watch?v=deQCNA_PcNM',
  },
  // https://instructions.hasbro.com/en-us/instruction/clue-game · https://boardgamegeek.com/boardgame/1294/clue
  {
    name: '클루',
    minPlayers: 3,
    maxPlayers: 6,
    duration: '45분',
    keywords: ['추리', '미스터리', '초보 추천'],
    video: 'https://www.youtube.com/watch?v=jTd5wEva_WE',
  },
  // https://funhero.co.kr/store/segame.php?category_info_id=0&page=10&store_id=55
  {
    name: '펭귄 얼음 깨기',
    minPlayers: 2,
    maxPlayers: 4,
    duration: '10분',
    keywords: ['균형', '파티', '초보 추천'],
    video: 'https://www.youtube.com/watch?v=dX0x8NFRnMk',
  },
  // https://www.rummikub.co.kr/default/sub5/sub54.php · https://www.coupang.com/vp/products/8488695436
  {
    name: '루미큐브 클래식',
    minPlayers: 2,
    maxPlayers: 4,
    duration: '20분',
    keywords: ['타일', '숫자 조합', '초보 추천'],
    video: 'https://www.youtube.com/watch?v=0u4YfLMGgxY',
    note: '5~6명용 구성품은 루미큐브 XP에 들어 있어요.',
  },
  // https://blog.amigo-spiele.de/wp-content/uploads/2025/01/AMIGO-Export_Katalog_2025_250114-mitUmschlag-web.pdf
  {
    name: '할리갈리 컵스',
    minPlayers: 2,
    maxPlayers: 4,
    duration: '15분',
    keywords: ['순발력', '패턴', '초보 추천'],
    video: 'https://www.youtube.com/watch?v=iZwuC04Ftck',
  },
  // https://prod.danawa.com/info/?pcode=644724
  {
    name: '다빈치 코드',
    minPlayers: 2,
    maxPlayers: 4,
    duration: '10~20분',
    keywords: ['추리', '숫자', '초보 추천'],
    video: 'https://www.youtube.com/watch?v=ElNpDx2oKpQ',
  },
  // https://www.daysofwonder.com/game/ticket-to-ride/
  {
    name: '티켓 투 라이드',
    minPlayers: 2,
    maxPlayers: 5,
    duration: '30~60분',
    keywords: ['전략', '경로 만들기', '초보 추천'],
    video: 'https://www.youtube.com/watch?v=_VRa842TN6U',
    note: '북미 기본판 기준',
  },
  // https://spielbound.org/game-title/las-vegas
  {
    name: '라스베가스',
    minPlayers: 2,
    maxPlayers: 5,
    duration: '30분',
    keywords: ['주사위', '눈치 싸움', '파티'],
    video: 'https://www.youtube.com/watch?v=-liJpKyFOso',
  },
  // https://www.rprod.com/en/games/7-wonders-duel
  {
    name: '세븐 원더스 대결',
    minPlayers: 2,
    maxPlayers: 2,
    duration: '30분',
    keywords: ['2인 대결', '전략', '문명'],
    video: 'https://www.youtube.com/watch?v=Y6OJQyjvejE',
    aliases: ['7원더스 듀얼', '7원더스 대결', '세븐원더스 듀얼', '세브원더스 듀얼'],
  },
  // https://helvetiq.com/ch_en/bandido
  {
    name: '반디도',
    minPlayers: 1,
    maxPlayers: 4,
    duration: '15분',
    keywords: ['협력', '퍼즐', '혼자 가능'],
    video: 'https://www.youtube.com/watch?v=GEeJogW1RL0',
  },
  // https://www.scorpionmasque.com/sites/scorpionmasque.com/files/decrypto_rules_nl_final120319.pdf
  {
    name: '디크립토',
    minPlayers: 3,
    maxPlayers: 8,
    duration: '30분 내외',
    keywords: ['추리', '팀전', '단어 연상'],
    video: 'https://www.youtube.com/watch?v=AXc-z5Sp1Hc',
    note: '3명은 변형 규칙으로 플레이해요.',
  },
  // https://www.nauvoogames.com/rules/Spanish_Stockpile_Rules.pdf
  {
    name: '스탁파일',
    minPlayers: 2,
    maxPlayers: 5,
    duration: '45분',
    keywords: ['전략', '주식', '경매'],
    video: 'https://www.youtube.com/watch?v=s4fJfhz4UEo',
    aliases: ['스톡파일', 'Stockpile'],
    note: '영어 규칙 영상',
  },
  {
    name: '위즈스톤',
    minPlayers: 2,
    maxPlayers: 2,
    duration: '',
    keywords: ['2인 대결', '전략', '퍼즐'],
    video: '',
    note: '시리즈의 세부 게임 이름을 확인 중이에요.',
  },
  // https://www.leacock.com/pandemic-legacy
  {
    name: '팬데믹 레거시 시즌 1',
    minPlayers: 2,
    maxPlayers: 4,
    duration: '45~60분',
    keywords: ['협력', '캠페인', '전략'],
    video: 'https://www.youtube.com/watch?v=KiuMvXhtE08',
    aliases: ['펜데믹 레거시1', '팬데믹 레거시1'],
    note: '한 회 기준 · 영어 규칙 영상',
  },
  // https://www.schmidtspiele.de/detail/product/the-quacks-of-quedlinburg.html
  {
    name: '크베들린부르크의 돌팔이 약장수',
    minPlayers: 2,
    maxPlayers: 4,
    duration: '45분',
    keywords: ['운 시험', '주머니 구성', '전략'],
    video: 'https://www.youtube.com/watch?v=JKHPijGKbOw',
  },
  // https://store.asmodee.com/products/carcassonne
  {
    name: '카르카손',
    minPlayers: 2,
    maxPlayers: 5,
    duration: '45분',
    keywords: ['타일 배치', '영역 확보', '초보 추천'],
    video: 'https://www.youtube.com/watch?v=mVK7YZLPvx4',
  },
  // https://pegasus.de/en/Istanbul-Das-Wuerfelspiel/55118G
  {
    name: '이스탄불 주사위 게임',
    minPlayers: 2,
    maxPlayers: 4,
    duration: '20~40분',
    keywords: ['주사위', '자원 관리', '전략'],
    video: 'https://www.youtube.com/watch?v=TE1gqcP74qI',
  },
  // https://boardgamemate.com/games/hwi_morae · https://www.wadiz.io/web/campaign/detail/291399
  {
    name: '렉시오',
    minPlayers: 3,
    maxPlayers: 5,
    duration: '20~30분',
    keywords: ['타일', '조합', '눈치 싸움'],
    video: 'https://www.youtube.com/watch?v=pgP_Ec8X8Pg',
    note: '오리지널 기준',
  },
  // https://www.kosmos.de/en/products/ubongo-classic
  {
    name: '우봉고',
    minPlayers: 1,
    maxPlayers: 4,
    duration: '25분',
    keywords: ['퍼즐', '순발력', '혼자 가능'],
    video: 'https://www.youtube.com/watch?v=40bfM1oaBTI',
  },
  // https://www.alderac.com/cascadia/
  {
    name: '캐스캐디아',
    minPlayers: 1,
    maxPlayers: 4,
    duration: '30~45분',
    keywords: ['타일 배치', '퍼즐', '혼자 가능'],
    video: 'https://www.youtube.com/watch?v=rN2xqTynWu8',
  },
  // https://cdnfile.koreaboardgames.com/_data/QR/Rules_EN/CoffeeRush_Rules_EN_web.pdf
  {
    name: '커피 러시',
    minPlayers: 2,
    maxPlayers: 4,
    duration: '30분',
    keywords: ['자원 관리', '경로 만들기', '전략'],
    video: 'https://www.youtube.com/watch?v=A4fX29x8iMw',
  },
  // https://blam-edition.com/en/produit/celestia/
  {
    name: '셀레스티아',
    minPlayers: 2,
    maxPlayers: 6,
    duration: '30분',
    keywords: ['파티', '블러핑', '운 시험'],
    video: 'https://www.youtube.com/watch?v=Zpp0Uwxgheg',
  },
  // https://www.schmidtspiele.de/details/produkt/kakerlakenpoker.html
  {
    name: '바퀴벌레 포커',
    minPlayers: 2,
    maxPlayers: 6,
    duration: '30분',
    keywords: ['블러핑', '파티', '초보 추천', '신상 게임'],
    video: 'https://www.youtube.com/watch?v=LBE0mODJgoY',
  },
  // https://instructions.hasbro.com/en-gb/instruction/classic-jenga · https://boardgamegeek.com/boardgame/2452/jenga
  {
    name: '젠가',
    minPlayers: 1,
    maxPlayers: 8,
    duration: '약 20분',
    keywords: ['균형', '파티', '초보 추천'],
    video: 'https://www.youtube.com/watch?v=edcRXk6thPw',
    note: '인원은 동호회 목록 기준',
  },
  // https://www.spiel-des-jahres.de/spiele/camel-up/
  {
    name: '카멜 업',
    minPlayers: 2,
    maxPlayers: 8,
    duration: '30분',
    keywords: ['경주', '예측', '파티'],
    video: 'https://www.youtube.com/watch?v=PnzQYWaTDVA',
    note: '초판 기준',
  },
  // https://indieboardsandcards.com/our-games/the-resistance-avalon/
  {
    name: '레지스탕스 아발론',
    minPlayers: 5,
    maxPlayers: 10,
    duration: '30분',
    keywords: ['추리', '파티', '팀전'],
    video: 'https://www.youtube.com/watch?v=aYW98oXFvns',
  },
  // https://www.riograndegames.com/wp-content/uploads/2013/02/Tichu-Rules.pdf
  {
    name: '티츄',
    minPlayers: 3,
    maxPlayers: 10,
    duration: '30~90분',
    keywords: ['팀전', '카드', '조합'],
    video: 'https://www.youtube.com/watch?v=6VM5UEtkVrk',
    note: '기본 4명 · 그 외 변형 규칙 · 7명 이상은 카드 2벌 권장',
  },
  {
    name: '트럼프 카드',
    minPlayers: null,
    maxPlayers: null,
    duration: '',
    keywords: ['카드', '여러 가지 규칙'],
    video: '',
    aliases: ['플레잉 카드'],
    note: '고른 카드 게임에 따라 인원과 규칙이 달라요.',
  },
  // https://boardm.co.kr/product/%ED%95%B8%EC%A6%88-%EC%97%85/3111/category/63/display/1/
  {
    name: '핸즈 업',
    minPlayers: 3,
    maxPlayers: 8,
    duration: '20분',
    keywords: ['순발력', '동작 따라 하기', '파티'],
    video: 'https://www.youtube.com/watch?v=VTRDIEGHxGQ',
  },
  // https://popcorngms.com/en/games/catalog/page/2/?age=age-14-en&brand=&players=user-5-en&sort=date&time=
  {
    name: '애니모 크레이지',
    minPlayers: 4,
    maxPlayers: 10,
    duration: '30분',
    keywords: ['파티', '투표', '토론'],
    video: 'https://www.youtube.com/watch?v=RiqmQHCmlME',
    aliases: ['데모크레이지', 'Animocrazy'],
  },
  // https://beziergames.com/collections/all-games/products/one-night-ultimate-werewolf
  {
    name: '한밤의 늑대인간',
    minPlayers: 3,
    maxPlayers: 10,
    duration: '10분',
    keywords: ['추리', '파티', '숨은 역할'],
    video: 'https://www.youtube.com/watch?v=KpTbyI6KOVc',
  },
  // https://officialgamerules.org/wp-content/uploads/2025/03/7-Wonders-Rulebook-EN.pdf
  {
    name: '세븐 원더스',
    minPlayers: 2,
    maxPlayers: 7,
    duration: '30분',
    keywords: ['카드 드래프트', '문명', '전략'],
    video: 'https://www.youtube.com/watch?v=HBUMGsAP4Gc',
    aliases: ['7원더스', '세브원더스'],
    note: '초판 기준 · 2명은 변형 규칙',
  },
  // https://www.czechgames.com/for-press-games/codenames-2015
  {
    name: '코드네임',
    minPlayers: 2,
    maxPlayers: Infinity,
    duration: '15분',
    keywords: ['팀전', '단어 연상', '추리'],
    video: 'https://www.youtube.com/watch?v=aWGDZL7zcV8',
    note: '4명 이상은 팀전 · 2~3명은 변형 규칙',
  },
  // https://www.gmarket.co.kr/n/search?keyword=5%EC%B4%88%EC%A4%80%EB%8B%A4
  {
    name: '5초 준다',
    minPlayers: 2,
    maxPlayers: 8,
    duration: '15분',
    keywords: ['파티', '순발력', '말하기'],
    video: 'https://www.youtube.com/watch?v=ijXDHcSgn2g',
  },
  // https://www.kocca.kr/knowledge/research/__icsFiles/afieldfile/2010/05/02/69842.pdf
  {
    name: '달무티',
    minPlayers: 4,
    maxPlayers: 8,
    duration: '15~30분',
    keywords: ['카드', '파티', '조합'],
    video: 'https://www.youtube.com/watch?v=sO-vxnoL31A',
  },
  // https://boardm.co.kr/product/%EC%9A%94%ED%8A%B8-%EB%8B%A4%EC%9D%B4%EC%8A%A4/7784/
  {
    name: '요트 다이스',
    minPlayers: 1,
    maxPlayers: Infinity,
    duration: '30분',
    keywords: ['주사위', '숫자 조합', '혼자 가능', '신상 게임'],
    video: 'https://www.youtube.com/watch?v=yXno1hggmbw',
    aliases: ['야추', 'Yacht Dice'],
    note: '인원은 동호회 목록 기준',
  },
  // https://store.stonemaiergames.com/products/wingspan
  {
    name: '윙스팬',
    minPlayers: 1,
    maxPlayers: 5,
    duration: '40~90분',
    keywords: ['전략', '카드 조합', '혼자 가능', '신상 게임'],
    video: 'https://www.youtube.com/watch?v=l8ccqJnbbRw',
  },
  // https://www.grandpabecksgames.com/products/skull-king%C2%AE
  {
    name: '스컬 킹',
    minPlayers: 2,
    maxPlayers: 8,
    duration: '30~45분',
    keywords: ['트릭테이킹', '예측', '카드'],
    video: 'https://www.youtube.com/watch?v=jax6Y2Dx_GE',
  },
  // https://blog.amigo-spiele.de/wp-content/uploads/2024/09/Pressemappe_Essen_2024.pdf
  {
    name: '노 땡스',
    minPlayers: 3,
    maxPlayers: 7,
    duration: '20분',
    keywords: ['카드', '눈치 싸움', '초보 추천'],
    video: 'https://www.youtube.com/watch?v=aGfk4Y8uWy0',
  },
];
