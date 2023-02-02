/** 
 * Quotes.js
 * 명언 & 작성자 출력
 */

/**
 * Math.floor()
 * 소스값일때 값을 버린 후 번환한다.
 */

/**
 * Math.round()
 * 소수값에에 따라 올리거나 버림 처리하여 반환한다.
 */

/**
 * Math.ceil()
 * 소수값일때 값을 올린 후 반환한다.
 */

/**
 * Math.random()
 * 0~1(1 미포함) 구간에서 소수점의 난수를 생성
 */

/**
 * length
 * 배열 길이를 반환한다.
 */

const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다",
    author: "키케로"
  },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
    author: "파울로 코엘료"
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
    author: "엘버트 허버드"
  },
  {
    quote: "신은 용기있는자를 결코 버리지 않는다",
    author: "켄러"
  },
  {
    quote: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author: "이드리스 샤흐"
  },
  {
    quote: "행복한 삶을 살기위해 필요한 것은 거의 없다.",
    author: "마르쿠스 아우렐리우스 안토니우스"
  },
  {
    quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
    author: "L.론허바드"
  },
  {
    quote: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다",
    author: "제임스 오펜하임"
  },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라",
    author: "F.스콧 핏제랄드"
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
    author: "앙드레 말로"
  },
  {
    quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
    author: "단테"
  },
  {
    quote: "행복은 습관이다,그것을 몸에 지니라",
    author: "허버드"
  },
  {
    quote: "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
    author: "톰 모나건"
  },
  {
    quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.",
    author: "제임스 딘"
  },
  {
    quote: "1퍼센트의 가능성, 그것이 나의 길이다.",
    author: "나폴레옹"
  },
  {
    quote: "화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아 붓는 사랑의 정도이다.",
    author: "머더 테레사"
  },
  {
    quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
    author: "이소룡"
  },
  {
    quote: "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
    author: "톨스토이"
  },
  {
    quote: "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
    author: "괴테"
  },
  {
    quote: "돈이란 바닷물과도 같다. 그것은 마시면 마실수록 목이 말라진다.",
    author: "쇼펜하우어"
  },
  {
    quote: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.",
    author: "헬렌 켈러"
  },
  {
    quote: "성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다.",
    author: "알랭"
  },
  {
    quote: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
    author: "헨리 포드"
  },
  {
    quote: "최고에 도달하려면 최저에서 시작하라.",
    author: "P.시루스"
  },
  {
    quote: "겨울이 오면 봄이 멀지 않으리",
    author: "셸리"
  },
  {
    quote: "도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자.",
    author: "헨리포드"
  },
  {
    quote: "네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다.",
    author: "베토벤"
  },
  {
    quote: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
    author: "하버트 개서"
  },
  {
    quote: "다른 사람에게는 결코 열어주지 않는 문을 당신에게만 열어주는 사람이 있다면 그사람이야 말로 당신의 진정한 친구이다.",
    author: "어린왕자"
  }
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;