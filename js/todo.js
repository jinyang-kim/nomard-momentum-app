/** 
 * Todo.js
 * 
 */

const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

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
}

/**
 * 사용자가 입력한 input value 화면에 리스트 출력
 * @param {*} newTodo // 사용자가 입력한 input value
 */
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo;

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

  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);