/** 
 * Clock.js
 * 현재 시:분:초 출력
 */

/**
 * setInterval (특정 시간을 설정하여, 해당 시간마다 함수 실행)
 */
// setInterval(sayHello, 5000);

/** 
 * setTimeout (특정 시간을 설정하여, 해당 시간때 함수를 한 번만 실행)
 */
// setTimeout(sayHello, 5000);

/**
 * padStart(2, "0")
 * string일 경우, 현재 문자열의 시작을 다른 문자열로 채워준다.
 * 문자열 길이를 만족하는 새로운 문자열을 반환합니다.
 * 채워넣기는 문자열의 시작(좌측)부터 적용된다.
 * ex) const str1 = "1";
 * console.log(str1.padStart(2, "0"));
 * // "01"
 */

/**
 * padEnd(2, "0")
 * string일 경우, 현재 문자열의 시작을 다른 문자열로 채워준다.
 * 문자열 길이를 만족하는 새로운 문자열을 반환합니다.
 * 채워넣기는 문자열의 끝(우측)부터 적용된다.
 * ex) const str1 = "1";
 * console.log(str1.padEnd(2, "0"));
 * // "10"
 */

/**
 * String()
 * Number 타입을 String으로 반환합니다.
 */

/**
 * Number()
 * String 타입을 Number으로 반환합니다.
 */

const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
  // clock.innerHTML = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}

getClock(); // 현재 시:분:초 데이터를 가져오는 getClock 함수를 한 번 실행
setInterval(getClock, 1000); // 시:분:초 데이터를 가져오는 getClock 함수를 1초(1,000ms)마다 실행