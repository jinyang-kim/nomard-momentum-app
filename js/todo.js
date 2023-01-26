/** 
 * Todo.js
 * Todo List 관련 Script
 */

/**
 * JSON.stringify()
 * JavaScript Code를 String으로 변환 처리
 * ex) '["a","b","c","d","e","f","g"]'
 */

/**
 * JSON.parse()
 * String을 가지고 와서 JavaScript Object로 변환 처리
 * ['a', 'b', 'c', 'd', 'e', 'f', 'g']
 */

/**
 * forEach()
 * array의 각 item에 대해 function을 실행
 */

/**
 * filter()
 * forEach와 동일하게 array의 각 item에 대해 function을 실행 시키지만,
 * 기존에 가지고 있던 값을 유지하기 위해서는 return true를 그렇지 않을 경우 false를 전달하면 해당 item을 유지하지 않는다.
 */

/**
 * parseInt()
 * String을 Number로 변환 처리
 */

const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

/**
 * toDos(변수)에 담긴 ToDo List localStorage에 저장
 */
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

/**
 * ToDoList Button Delete Action Function
 * click(event)
 * target: 클릭된 자기 자신
 * parentNode: 클릭된 자기 자신의 부모
 * parentElement: 클릭된 자기 자신의 부모 (event.target.parentElement)
 */
function deleteToDo(event) {
  // console.log(event);
  // console.dir(event.target);

  const li = event.target.parentElement; // 삭제할 Element

  li.remove(); // 선택한 Element 삭제 처리

  toDos = toDos.filter(item => item.id !== parseInt(li.id)); // toDo(변수)의 id와 li의 id가 다른 걸 남김
  saveToDos(); // 변경된 toDo(변수)를 localStorage에 저장
}

/**
 * 사용자가 입력한 input value 화면에 리스트 출력
 * @param {*} newTodo // 사용자가 입력한 input value
 */
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.id = newTodo.id;

  span.innerText = newTodo.text;

  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

/**
 * 사용자가 입력한 input submit 처리
 * @param {*} event
 */
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value; // 사용자가 입력한 input 데이터 저장
  toDoInput.value = ""; // input 값 초기화

  // toDos(변수)에 담을 Object
  const newToDoObject = {
    text: newToDo,
    id: Date.now()
  };

  // 입력한 ToDo List toDos(변수)에 담기
  toDos.push(newToDoObject);

  // 입력한 ToDo List HTML로 화면에 표시
  paintToDo(newToDoObject);
  // toDos(변수)에 담긴 ToDo List localStorage에 저장 처리
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // localStorage에 저장된 정보

// localStorage에 저장된 정보가 있을 경우
if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // parsedToDos.forEach((item) => paintToDo(item));
  parsedToDos.forEach(paintToDo);
}