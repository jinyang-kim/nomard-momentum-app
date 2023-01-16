/**
 * Greetings.js
 */

const loginForm = document.querySelector("#login-form");
const logionInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 반복되는 string들은 대문자 변수로 저장하는것이 좋다.
// 오타 방지 및 string이라는 사실을 기억하고 상기시키기 좋다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/**
 * 
 * @param {*} event 
 */
function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저의 기본 동작 막기

  loginForm.classList.add(HIDDEN_CLASSNAME); // logionInput class 추가

  localStorage.setItem(USERNAME_KEY, logionInput.value); // localStorage에 정보 저장 (key, value)

  // greeting.innerHTML = "Hello " + username;
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// localStorage에 username 데이터가 있는지 확인
if(savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings();
}