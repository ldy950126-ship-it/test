/**
 * ============================================================================
 * [무역 레벨업! 수출입관리 마스터 챌린지 - app.js]
 * 
 * 💡 선생님을 위한 안내:
 * - 아래 QUIZ_DATA 배열 안의 문제, 보기, 정답, 해설 텍스트만 자유롭게 수정하시면
 *   다른 과목이나 다른 단원의 시험으로 바로 바꾸어 활용하실 수 있습니다!
 * - answerIndex는 0부터 시작합니다 (0: 1번 보기, 1: 2번 보기, 2: 3번 보기...)
 * ============================================================================
 */

// ==========================================
// [1] 문제 데이터베이스 (고3 수출입관리 핵심 10문제)
// ==========================================
const QUIZ_DATA = [
  {
    id: 1,
    category: "인코텀즈 2020",
    question: "인코텀즈 2020(Incoterms 2020)의 대표적인 해상운송 규칙인 FOB(Free On Board, 본선인도조건)에 대한 설명으로 옳은 것은?",
    options: [
      "매도인이 목적항까지의 해상 운임과 적하보험료를 모두 부담한다.",
      "물품이 지정선적항에서 본선에 적재(On Board)되었을 때 위험과 비용이 매수인에게 이전된다.",
      "항공운송이나 복합운송 등 모든 운송 방식에 자유롭게 적용할 수 있는 규칙이다.",
      "수출통관 의무와 수출관세 납부는 매수인이 직접 이행해야 한다.",
      "매도인의 최소 의무 인도조건으로 공장인도조건(EXW)과 내용이 동일하다."
    ],
    answerIndex: 1, // 2번 보기 정답
    explanation: "FOB는 해상 및 내수로 전용 조건으로, 지정선적항에서 물품이 본선에 적재(On Board)된 시점에 위험과 비용이 매도인에게서 매수인에게로 이전됩니다. 수출통관은 매도인이 수행합니다."
  },
  {
    id: 2,
    category: "인코텀즈 2020",
    question: "CIF(Cost, Insurance and Freight, 운임·보험료포함인도) 조건에 대한 설명으로 가장 옳지 않은 것은?",
    options: [
      "해상 및 내수로 운송 전용 조건이다.",
      "위험의 이전 시점은 지정선적항에서 물품이 본선에 적재(On Board)된 때이다.",
      "매도인이 목적항까지의 해상 운임과 해상 적하보험료를 부담한다.",
      "위험의 이전 시점과 비용 부담의 분기점이 동일한 장소에서 일치한다.",
      "특약이 없는 한 매도인은 협회적하약관(ICC)의 최소 담보 조건(C약관 등)으로 부보한다."
    ],
    answerIndex: 3, // 4번 보기 정답 (옳지 않음)
    explanation: "CIF 조건은 위험 이전 시점(선적항 본선 적재 시)과 비용 분기점(목적항 도착 시까지 매도인 부담)이 서로 일치하지 않는 대표적인 조건입니다."
  },
  {
    id: 3,
    category: "무역 결제 (L/C)",
    question: "화환신용장(Letter of Credit, L/C) 거래의 기본 특성에 대한 설명으로 가장 옳은 것은?",
    options: [
      "개설은행은 실제 수입 물품을 직접 검수한 후 하자가 없을 때만 대금을 지급한다.",
      "신용장은 기본 매매계약과 완전히 독립되어 별개의 거래로 취급된다(독립성의 원칙).",
      "수출상의 신용도만으로 발행되며, 은행의 조건부 지급확약은 포함되지 않는다.",
      "환어음이 일체 발행되지 않는 단순 송금 방식 결제이다.",
      "매매계약서의 내용이 변경되면 신용장 조건도 별도 절차 없이 자동 변경된다."
    ],
    answerIndex: 1, // 2번 보기 정답
    explanation: "신용장의 가장 중요한 특성은 '독립성의 원칙'과 '추상성의 원칙'입니다. 은행은 매매계약이나 실제 물품과 무관하게, 오직 제시된 '서류'가 신용장 조건과 문면상 일치하는지만 심사하여 결제합니다."
  },
  {
    id: 4,
    category: "선적 서류 (B/L)",
    question: "해상운송의 핵심 서류인 선하증권(Bill of Lading, B/L)의 법적 성격 및 기능으로 옳지 않은 것은?",
    options: [
      "운송인이 송하인으로부터 화물을 인수 또는 선적하였음을 증명하는 '화물수취증'이다.",
      "운송인과 송하인 간에 해상운송계약이 체결되었음을 입증하는 '계약의 증빙'이다.",
      "증권의 소지인이 목적항에서 물품의 인도를 청구할 수 있는 '권리증권(유가증권)'이다.",
      "배서나 교부에 의해 물품에 대한 권리를 양도할 수 있는 '유통증권'이다.",
      "세관에서 수입물품에 대한 관세 부과를 전액 면제해 주는 '비과세 증명서'이다."
    ],
    answerIndex: 4, // 5번 보기 정답 (옳지 않음)
    explanation: "선하증권(B/L)은 화물수취증, 운송계약증빙, 권리증권(유통증권)의 기능을 하지만 관세를 면제해 주는 서류가 아닙니다. 관세 면제나 감면은 FTA 원산지증명서 등을 통해 신청합니다."
  },
  {
    id: 5,
    category: "무역 서류 (Invoice)",
    question: "무역 거래에서 상업송장(Commercial Invoice)의 핵심 역할로 가장 적절한 것은?",
    options: [
      "운송 중 발생할 수 있는 사고에 대비하여 보험회사와 맺은 보험 계약서이다.",
      "수출자가 수입자에게 발행하는 선적 화물의 상세 명세서이자 대금 청구서이다.",
      "포장 단위별 화물의 순중량과 총중량 및 용적만을 표시한 포장명세서이다.",
      "수입국 세관에서 통관 후 수입자에게 교부하는 수입신고필증이다.",
      "선박의 국적과 운항 일정을 보증하기 위해 선사가 발행하는 입항보고서이다."
    ],
    answerIndex: 1, // 2번 보기 정답
    explanation: "상업송장(Commercial Invoice)은 수출자가 바이어에게 발행하는 가장 기본적인 서류로, 품명, 수량, 단가, 총금액, 결제조건 등이 명시된 화물 명세서이자 대금 청구서입니다."
  },
  {
    id: 6,
    category: "원산지 관리 & FTA",
    question: "자유무역협정(FTA) 체결국 간의 수출입 거래에서 원산지증명서(C/O)의 주된 활용 목적으로 가장 옳은 것은?",
    options: [
      "해상 운송 중 물품 파손 시 전액 보상을 청구하기 위한 증빙",
      "수입 통관 시 FTA 협정 관세(특혜 관세율)를 적용받아 관세를 감면받기 위한 필수 서류",
      "외환은행에서 무역금융 대출 한도를 늘리기 위한 담보 서류",
      "수입 물품의 유통기한과 품질검사 합격 여증을 대체하는 서류",
      "수출 대금 결제 시 환율 변동 위험(환리스크)을 100% 회피하기 위한 계약서"
    ],
    answerIndex: 1, // 2번 보기 정답
    explanation: "FTA 체결국 간 수출입 시 원산지증명서(C/O)를 제출하면 협정 특혜관세(낮은 관세율 또는 무관세) 혜택을 받을 수 있어 원가 절감과 가격 경쟁력 확보에 결정적인 역할을 합니다."
  },
  {
    id: 7,
    category: "품목분류 (HS Code)",
    question: "국제통일상품분류체계인 HS 코드(HS Code)에 대한 설명으로 옳지 않은 것은?",
    options: [
      "전 세계 모든 국가에서 6자리(6단위)까지는 공통으로 동일하게 사용된다.",
      "우리나라는 세분화하여 총 10자리(10단위)의 HSK 체계를 사용하고 있다.",
      "수출입 물품의 관세율 결정, 원산지 판정, 수출입 요건 승인의 핵심 기준이 된다.",
      "모든 수출입 공산품은 재질과 상관없이 단일 4자리 코드로 일괄 통합 분류된다.",
      "류(2자리), 호(4자리), 소호(6자리) 등으로 체계적으로 분류된다."
    ],
    answerIndex: 3, // 4번 보기 정답 (옳지 않음)
    explanation: "HS 코드는 전 세계 공통 6자리(소호)이며, 품목의 재질, 기능, 가공도에 따라 수천 가지 이상의 세부 코드로 분류됩니다. 공산품이라고 해서 단일 코드로 일괄 분류되지 않습니다."
  },
  {
    id: 8,
    category: "수출입 통관",
    question: "우리나라 관세법상 일반적인 수입 통관 절차의 정상적인 순서로 올바른 것은?",
    options: [
      "입항 ➔ 보세구역 반입 ➔ 수입신고 ➔ 세관 심사·검사 ➔ 관세 납부 ➔ 신고 수리 및 물품 반출",
      "수입신고 ➔ 입항 ➔ 관세 납부 ➔ 물품 반출 ➔ 보세구역 반입",
      "입항 ➔ 물품 반출 ➔ 보세구역 반입 ➔ 수입신고 ➔ 관세 납부",
      "관세 납부 ➔ 입항 ➔ 수입신고 ➔ 보세구역 반입 ➔ 물품 반출",
      "보세구역 반입 ➔ 물품 반출 ➔ 입항 ➔ 수입신고 ➔ 관세 납부"
    ],
    answerIndex: 0, // 1번 보기 정답
    explanation: "정상적인 수입통관은 외국 물품의 입항 ➔ 세관 지정 보세구역 반입 ➔ 수입신고서 제출 ➔ 세관 서류심사 및 물품검사 ➔ 관세 납부 ➔ 수입신고 수리 후 국내로 물품 반출 순서로 진행됩니다."
  },
  {
    id: 9,
    category: "관세 및 과세가격",
    question: "우리나라 관세법상 수입물품의 과세가격 결정(제1방법) 시 기준이 되는 CIF 가격의 구성 요소로 가장 올바른 것은?",
    options: [
      "국내 도매시장 판매가격 + 국내 유통마진",
      "수출국 공장출하가격(EXW) - 수출국 내륙운임",
      "물품의 실제 지급금액(FOB 상당액) + 수입항 도착 시까지의 해상운임 + 적하보험료",
      "수입 통관 후 국내 내륙운송비 + 부가가치세",
      "관세청장이 매년 고시하는 품목별 정액 표준단가"
    ],
    answerIndex: 2, // 3번 보기 정답
    explanation: "수입물품의 과세가격은 제1방법(실제 거래가격) 원칙에 따라, 수입항 도착 시점까지 발생한 '물품 가격 + 수입항까지의 운임 + 보험료(CIF 기준)'를 합산하여 결정합니다."
  },
  {
    id: 10,
    category: "무역 분쟁 & 중재",
    question: "무역 분쟁 해결 방식 중 '상사중재(Arbitration)'에 관한 설명으로 가장 옳은 것은?",
    options: [
      "법원의 3심제 정식 소송 절차를 그대로 준용한다.",
      "당사자 간의 사전·사후 중재합의가 없어도 일방의 신청만으로 강제 개시된다.",
      "단심제(1심)로 진행되어 신속하며, 중재판정은 법원의 확정판결과 동일한 최종 구속력을 갖는다.",
      "기업의 대외 이미지 보호를 위해 모든 심리와 결과가 언론에 의무적으로 공개된다.",
      "중재판정 결과가 마음에 들지 않으면 언제든 관할 법원에 일반 소송을 다시 제기할 수 있다."
    ],
    answerIndex: 2, // 3번 보기 정답
    explanation: "상사중재는 당사자 간 합의로 분쟁을 중재인에게 맡기는 제도로, '단심제'이므로 비용과 시간이 절약되고, 비공개 진행으로 기업 비밀이 보호되며, 중재판정은 법원 확정판결과 동일한 구속력을 가집니다."
  }
];

// ==========================================
// [2] 직급 칭호 데이터베이스
// ==========================================
const RANK_TIERS = [
  {
    minScore: 100,
    icon: "👑",
    title: "전설의 글로벌 무역 마스터",
    desc: "인코텀즈부터 통관 실무까지 완벽 통달! 당장 무역 상사에 특채되어도 손색없는 최고의 실력자입니다."
  },
  {
    minScore: 80,
    icon: "💼",
    title: "실전 베테랑 무역 과장",
    desc: "복잡한 무역 서류와 결제 조건도 막힘없이 처리하는 실무 에이스! 훌륭한 수출입 관리 역량을 갖추었습니다."
  },
  {
    minScore: 60,
    icon: "📋",
    title: "든든한 실무 무역 대리",
    desc: "기본적인 무역 절차와 규칙을 탄탄하게 이해하고 있습니다. 오답노트를 복습하면 마스터 등극도 눈앞입니다!"
  },
  {
    minScore: 40,
    icon: "🌱",
    title: "열정 가득 무역 신입사원",
    desc: "무역의 큰 흐름을 잡아가고 있는 단계입니다. 틀린 문제의 해설을 꼼꼼히 확인하고 재도전해 보세요!"
  },
  {
    minScore: 0,
    icon: "🐣",
    title: "꿈을 키우는 무역 인턴",
    desc: "처음엔 낯설고 어려운 무역 용어가 많죠! 오답노트 해설을 천천히 읽어보고 다시 풀기에 도전해 보세요."
  }
];

// ==========================================
// [3] 앱 상태 관리 (State)
// ==========================================
const TIME_LIMIT_PER_QUESTION = 40; // 문제당 제한시간 (40초)

const state = {
  studentName: "",
  allQuestions: QUIZ_DATA,
  activeQuestions: [],        // 현재 풀고 있는 문제 목록
  currentIndex: 0,
  selectedOption: null,       // 현재 선택한 보기 번호 (0~4)
  timeLeft: TIME_LIMIT_PER_QUESTION,
  timerId: null,
  isReviewSession: false,     // 오답 다시 풀기 모드 여부
  answersHistory: []          // 사용자 응답 기록 [{ question, userOption, isCorrect, isTimeout }]
};

// ==========================================
// [4] DOM 요소 셀렉터 캐싱
// ==========================================
const screens = {
  start: document.getElementById("screen-start"),
  quiz: document.getElementById("screen-quiz"),
  result: document.getElementById("screen-result")
};

const dom = {
  // 시작 화면
  studentNameInput: document.getElementById("student-name"),
  btnStartQuiz: document.getElementById("btn-start-quiz"),

  // 퀴즈 화면
  progressText: document.getElementById("quiz-progress-text"),
  progressBar: document.getElementById("quiz-progress-bar"),
  modeTag: document.getElementById("quiz-mode-tag"),
  timerBox: document.getElementById("timer-box"),
  timerCircle: document.getElementById("timer-progress-circle"),
  timerSeconds: document.getElementById("timer-seconds"),
  questionCategory: document.getElementById("question-category"),
  questionText: document.getElementById("question-text"),
  optionsContainer: document.getElementById("options-container"),
  selectionStatus: document.getElementById("selection-status-text"),
  btnSubmitAnswer: document.getElementById("btn-submit-answer"),

  // 결과 화면
  resultTrophy: document.getElementById("result-trophy"),
  resultGreeting: document.getElementById("result-user-greeting"),
  resultRankTitle: document.getElementById("result-rank-title"),
  resultRankDesc: document.getElementById("result-rank-desc"),
  resultFinalScore: document.getElementById("result-final-score"),
  statCorrectCount: document.getElementById("stat-correct-count"),
  statWrongCount: document.getElementById("stat-wrong-count"),
  statTimeoutCount: document.getElementById("stat-timeout-count"),
  btnRetryWrong: document.getElementById("btn-retry-wrong"),
  wrongCountBadge: document.getElementById("wrong-count-badge"),
  btnRestartAll: document.getElementById("btn-restart-all"),
  btnToggleReview: document.getElementById("btn-toggle-review"),
  toggleReviewText: document.getElementById("toggle-review-text"),
  toggleReviewArrow: document.getElementById("toggle-review-arrow"),
  reviewListContainer: document.getElementById("review-list-container"),

  // 컨페티 캔버스
  confettiCanvas: document.getElementById("confetti-canvas")
};

// ==========================================
// [5] 화면 전환 도우미 함수
// ==========================================
function switchScreen(targetScreenName) {
  Object.keys(screens).forEach(screenName => {
    if (screenName === targetScreenName) {
      screens[screenName].classList.add("active");
    } else {
      screens[screenName].classList.remove("active");
    }
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// [6] 퀴즈 진행 및 타이머 핵심 로직
// ==========================================

// 퀴즈 시작 (정규 모드 또는 오답 모드)
function startQuiz(questions, isReviewMode = false) {
  state.activeQuestions = [...questions];
  state.currentIndex = 0;
  state.isReviewSession = isReviewMode;
  state.answersHistory = [];
  
  if (!isReviewMode) {
    const inputName = dom.studentNameInput.value.trim();
    state.studentName = inputName || "도전자";
  }

  // 모드 태그 업데이트
  dom.modeTag.textContent = isReviewMode ? "🔄 오답 재도전" : "정규 도전";
  dom.modeTag.style.background = isReviewMode ? "#ffedd5" : "var(--secondary-light)";
  dom.modeTag.style.color = isReviewMode ? "#c2410c" : "#0369a1";

  switchScreen("quiz");
  loadQuestion(state.currentIndex);
}

// 문제 로드
function loadQuestion(index) {
  const currentQ = state.activeQuestions[index];
  state.selectedOption = null;

  // 상단 진행률 업데이트
  const currentNum = index + 1;
  const totalNum = state.activeQuestions.length;
  dom.progressText.textContent = `문제 ${currentNum} / ${totalNum}`;
  const progressPercent = (currentNum / totalNum) * 100;
  dom.progressBar.style.width = `${progressPercent}%`;

  // 문제 정보 렌더링
  dom.questionCategory.textContent = currentQ.category || "수출입관리";
  dom.questionText.textContent = currentQ.question;

  // 보기 버튼들 생성
  dom.optionsContainer.innerHTML = "";
  currentQ.options.forEach((optText, optIdx) => {
    const optionBtn = document.createElement("button");
    optionBtn.type = "button";
    optionBtn.className = "option-btn";
    optionBtn.setAttribute("data-index", optIdx);
    
    // 번호 기호 (1, 2, 3, 4, 5)
    const numSpan = document.createElement("span");
    numSpan.className = "option-num";
    numSpan.textContent = optIdx + 1;

    // 보기 텍스트
    const textSpan = document.createElement("span");
    textSpan.className = "option-text";
    textSpan.textContent = optText;

    optionBtn.appendChild(numSpan);
    optionBtn.appendChild(textSpan);

    // 클릭 이벤트
    optionBtn.addEventListener("click", () => handleSelectOption(optIdx));

    dom.optionsContainer.appendChild(optionBtn);
  });

  // 컨트롤 바 상태 초기화
  dom.selectionStatus.textContent = "보기를 1개 선택해 주세요";
  dom.selectionStatus.style.color = "var(--text-muted)";
  dom.btnSubmitAnswer.disabled = true;

  // 버튼 텍스트 (마지막 문제일 때 '최종 제출 및 채점')
  if (index === totalNum - 1) {
    dom.btnSubmitAnswer.querySelector("span:first-child").textContent = "최종 채점하기";
    dom.btnSubmitAnswer.querySelector(".btn-arrow").textContent = "🏁";
  } else {
    dom.btnSubmitAnswer.querySelector("span:first-child").textContent = "다음 문제로";
    dom.btnSubmitAnswer.querySelector(".btn-arrow").textContent = "➔";
  }

  // 40초 타이머 시작
  startTimer();
}

// 보기 선택 핸들러
function handleSelectOption(index) {
  state.selectedOption = index;

  // UI 보기 강조
  const allOptionBtns = dom.optionsContainer.querySelectorAll(".option-btn");
  allOptionBtns.forEach((btn, idx) => {
    if (idx === index) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });

  // 버튼 활성화
  dom.selectionStatus.textContent = `${index + 1}번 보기를 선택했습니다.`;
  dom.selectionStatus.style.color = "var(--primary)";
  dom.btnSubmitAnswer.disabled = false;
}

// 타이머 시작 (문제당 40초)
function startTimer() {
  clearInterval(state.timerId);
  state.timeLeft = TIME_LIMIT_PER_QUESTION;
  updateTimerUI();

  state.timerId = setInterval(() => {
    state.timeLeft--;
    updateTimerUI();

    if (state.timeLeft <= 0) {
      clearInterval(state.timerId);
      handleTimeout();
    }
  }, 1000);
}

// 타이머 UI 업데이트 (원형 SVG 애니메이션 및 경고 색상)
function updateTimerUI() {
  dom.timerSeconds.textContent = state.timeLeft;

  // SVG 원주 길이 (r=18 기준 2 * PI * 18 = 약 113.097)
  const circumference = 2 * Math.PI * 18;
  const ratio = state.timeLeft / TIME_LIMIT_PER_QUESTION;
  const offset = circumference * (1 - ratio);
  dom.timerCircle.style.strokeDashoffset = offset;

  // 경고 색상 클래스
  dom.timerBox.classList.remove("warning", "danger");
  if (state.timeLeft <= 5) {
    dom.timerBox.classList.add("danger");
  } else if (state.timeLeft <= 10) {
    dom.timerBox.classList.add("warning");
  }
}

// 시간 초과 처리
function handleTimeout() {
  const currentQ = state.activeQuestions[state.currentIndex];
  
  // 무응답 & 오답 기록
  state.answersHistory.push({
    question: currentQ,
    userOption: null,
    isCorrect: false,
    isTimeout: true
  });

  // 사용자 피드백 안내 후 다음 문제로
  dom.selectionStatus.textContent = "⏰ 시간이 초과되었습니다! 다음 문제로 넘어갑니다.";
  dom.selectionStatus.style.color = "var(--danger)";
  dom.btnSubmitAnswer.disabled = true;

  setTimeout(() => {
    goToNextQuestion();
  }, 1000);
}

// 답안 제출 버튼 클릭
function handleSubmitAnswer() {
  if (state.selectedOption === null) return;

  clearInterval(state.timerId);
  const currentQ = state.activeQuestions[state.currentIndex];
  const isCorrect = (state.selectedOption === currentQ.answerIndex);

  state.answersHistory.push({
    question: currentQ,
    userOption: state.selectedOption,
    isCorrect: isCorrect,
    isTimeout: false
  });

  goToNextQuestion();
}

// 다음 문제로 이동 또는 결과 화면
function goToNextQuestion() {
  state.currentIndex++;
  if (state.currentIndex < state.activeQuestions.length) {
    loadQuestion(state.currentIndex);
  } else {
    // 모든 문제 완료 -> 채점 결과 화면으로 이동
    finishQuiz();
  }
}

// ==========================================
// [7] 결과 화면 및 채점 로직
// ==========================================
function finishQuiz() {
  clearInterval(state.timerId);

  // 채점 계산
  const totalQuestions = state.answersHistory.length;
  const correctCount = state.answersHistory.filter(a => a.isCorrect).length;
  const timeoutCount = state.answersHistory.filter(a => a.isTimeout).length;
  const wrongCount = totalQuestions - correctCount;

  // 100점 만점 환산 (정규 10문제 기준 문제당 10점, 오답 모드 시 비율 환산)
  const finalScore = Math.round((correctCount / totalQuestions) * 100);

  // 칭호 결정
  const rank = RANK_TIERS.find(tier => finalScore >= tier.minScore) || RANK_TIERS[RANK_TIERS.length - 1];

  // UI 바인딩
  dom.resultGreeting.textContent = `${state.studentName}님의 ${state.isReviewSession ? "오답 재도전" : "수출입관리"} 결과`;
  dom.resultTrophy.textContent = rank.icon;
  dom.resultRankTitle.textContent = rank.title;
  dom.resultRankDesc.textContent = rank.desc;

  // 점수 카운트업 애니메이션
  animateScoreNumber(finalScore);

  dom.statCorrectCount.textContent = correctCount;
  dom.statWrongCount.textContent = wrongCount;
  dom.statTimeoutCount.textContent = timeoutCount;

  // 오답만 다시 풀기 버튼 상태 설정
  dom.wrongCountBadge.textContent = wrongCount;
  if (wrongCount === 0) {
    dom.btnRetryWrong.disabled = true;
    dom.btnRetryWrong.innerHTML = `<span>🎉 모든 문제를 다 맞혔습니다! (만점 달성)</span>`;
    // 만점 달성 축하 컨페티 효과 실행
    launchConfetti();
  } else {
    dom.btnRetryWrong.disabled = false;
    dom.btnRetryWrong.innerHTML = `<span class="btn-icon">🔄</span><span>오답만 모아서 다시 풀기 (<strong id="wrong-count-badge">${wrongCount}</strong>)</span>`;
  }

  // 문제별 오답노트 렌더링
  renderReviewList();

  // 화면 전환
  switchScreen("result");
}

// 점수 숫자 카운트업 효과
function animateScoreNumber(targetScore) {
  let currentVal = 0;
  const duration = 1000; // 1초
  const stepTime = Math.max(10, Math.floor(duration / (targetScore || 1)));

  dom.resultFinalScore.textContent = "0";

  if (targetScore === 0) {
    dom.resultFinalScore.textContent = "0";
    return;
  }

  const timer = setInterval(() => {
    currentVal += 2;
    if (currentVal >= targetScore) {
      currentVal = targetScore;
      clearInterval(timer);
    }
    dom.resultFinalScore.textContent = currentVal;
  }, stepTime);
}

// ==========================================
// [8] 오답노트 & 상세 해설 생성
// ==========================================
function renderReviewList() {
  dom.reviewListContainer.innerHTML = "";

  state.answersHistory.forEach((record, idx) => {
    const q = record.question;
    const card = document.createElement("div");
    card.className = `review-card ${record.isCorrect ? "is-correct" : "is-wrong"}`;

    // 상태 태그
    let tagHtml = "";
    if (record.isCorrect) {
      tagHtml = `<span class="review-status-tag tag-correct">정답 (+10점)</span>`;
    } else if (record.isTimeout) {
      tagHtml = `<span class="review-status-tag tag-timeout">시간초과 (오답)</span>`;
    } else {
      tagHtml = `<span class="review-status-tag tag-wrong">오답</span>`;
    }

    // 내 답변 텍스트
    let myAnswerText = "";
    if (record.isTimeout) {
      myAnswerText = "시간 초과 (미선택)";
    } else if (record.userOption !== null) {
      myAnswerText = `${record.userOption + 1}번. ${q.options[record.userOption]}`;
    }

    // 정답 텍스트
    const correctAnswerText = `${q.answerIndex + 1}번. ${q.options[q.answerIndex]}`;

    card.innerHTML = `
      <div class="review-top-meta">
        <span class="review-q-num">Q${idx + 1}. [${q.category || "수출입관리"}]</span>
        ${tagHtml}
      </div>
      <h4 class="review-q-title">${q.question}</h4>
      
      <div class="review-answer-compare">
        <div class="compare-row my-ans ${record.isCorrect ? "is-correct-ans" : ""}">
          <span class="compare-label">내가 고른 답:</span>
          <span class="compare-val">${myAnswerText}</span>
        </div>
        <div class="compare-row correct-ans">
          <span class="compare-label">정답:</span>
          <span class="compare-val">${correctAnswerText}</span>
        </div>
      </div>

      <div class="review-explanation-box">
        <strong>💡 선생님의 핵심 해설</strong>
        <p>${q.explanation}</p>
      </div>
    `;

    dom.reviewListContainer.appendChild(card);
  });
}

// ==========================================
// [9] 오답만 모아서 다시 풀기 & 전체 다시하기
// ==========================================

// 오답만 다시 풀기
function retryWrongQuestions() {
  const wrongQuestions = state.answersHistory
    .filter(a => !a.isCorrect)
    .map(a => a.question);

  if (wrongQuestions.length === 0) {
    alert("틀린 문제가 없습니다! 전체 문제를 다시 도전해 보세요.");
    return;
  }

  startQuiz(wrongQuestions, true);
}

// 전체 다시 도전
function restartAll() {
  startQuiz(QUIZ_DATA, false);
}

// 오답노트 접기/펼치기 토글
function toggleReview() {
  const isHidden = dom.reviewListContainer.style.display === "none";
  if (isHidden) {
    dom.reviewListContainer.style.display = "flex";
    dom.toggleReviewText.textContent = "해설 접기";
    dom.toggleReviewArrow.textContent = "▲";
  } else {
    dom.reviewListContainer.style.display = "none";
    dom.toggleReviewText.textContent = "해설 펼치기";
    dom.toggleReviewArrow.textContent = "▼";
  }
}

// ==========================================
// [10] 순수 JS 경량 컨페티(축하 색종이) 파티클 효과
// ==========================================
function launchConfetti() {
  const canvas = dom.confettiCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#2563eb", "#0ea5e9", "#f59e0b", "#10b981", "#ec4899", "#8b5cf6"];
  const particleCount = 120;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.7) * 16,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRotation: (Math.random() - 0.5) * 10,
      alpha: 1,
      gravity: 0.25
    });
  }

  let animationFrame;
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let activeParticles = 0;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.vRotation;
      p.alpha -= 0.008;

      if (p.alpha > 0) {
        activeParticles++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }
    });

    if (activeParticles > 0) {
      animationFrame = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  render();
}

// 윈도우 리사이즈 시 캔버스 크기 재조정
window.addEventListener("resize", () => {
  if (dom.confettiCanvas) {
    dom.confettiCanvas.width = window.innerWidth;
    dom.confettiCanvas.height = window.innerHeight;
  }
});

// ==========================================
// [11] 이벤트 리스너 바인딩 및 앱 초기화
// ==========================================
function initApp() {
  // 시작 버튼
  dom.btnStartQuiz.addEventListener("click", () => {
    startQuiz(QUIZ_DATA, false);
  });

  // 이름 입력창에서 Enter 키 입력 시 바로 시작
  dom.studentNameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      startQuiz(QUIZ_DATA, false);
    }
  });

  // 답안 제출 버튼
  dom.btnSubmitAnswer.addEventListener("click", handleSubmitAnswer);

  // 오답만 다시 풀기 버튼
  dom.btnRetryWrong.addEventListener("click", retryWrongQuestions);

  // 전체 처음부터 재도전 버튼
  dom.btnRestartAll.addEventListener("click", restartAll);

  // 오답노트 토글 버튼
  dom.btnToggleReview.addEventListener("click", toggleReview);
}

// DOM 로드 완료 후 실행
document.addEventListener("DOMContentLoaded", initApp);
