/** 
 * Weather.js
 * 날씨 관련
 */

// Parameter(매개 변수): 함수를 정의할 때 필요한 변수 이름을 의미한다.
// Argument(전달 인자): 함수를 Call할 때, 실제로 넘어가는 값을 의미한다.

/**
 * navigator.geolocation.getCurrentPosition(success, error)
 * 사용자 브라우저의 위치 정보 확인
 * 성공, 실패에 대한 function를 전달해야함
 */

/**
 * fetch()
 * JavaScript가 사용자 대신 argument로 전달한 URL을 http 요청한다.
 * fetch(url, options)
 *  .then((response) => console.log("response:", response))
 *  .catch((error) => console.log("error:", error));
 */

// https://openweathermap.org/api 
const API_KEY = "645ddea547c079c3f6b9787f34dedd53";

/**
 * user가 위치 정보 받는걸 성공한 경우
 */
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(weather_url)
    .then(response => response.json())
    .then(data => {
      const weatherContainer = document.querySelector("#weather");
      const html_weather = weatherContainer.querySelector("span:first-child");
      const html_city = weatherContainer.querySelector("span:last-child");

      html_weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      html_city.innerText = data.name;
  });
}

/**
 * user가 위치 정보 받는걸 실패한 경우
 */
function onGeoError() {
  alert("Cant't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);