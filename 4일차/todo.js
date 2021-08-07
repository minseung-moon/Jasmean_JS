const list = document.querySelector("#list");
const listForm = document.querySelector("#listForm");

// 스토리지에 저장된(될) 데이터 배열 변수
let todos = [];

// 처음에 화면이 로드되면서 로컬스토리지의 데이터를 갖고와 화면에 뿌리기
window.addEventListener("load", () => {
  GetStorage();
  todos.forEach((todo) => {
    CreateTodo(todo);
  });
});

// 데이터 입력
listForm.addEventListener("submit", (e) => {
  e.preventDefault(); // 각 요소가 가지고 있는 기본 이벤트를 차단
  const input = e.target.querySelector("input");
  if (input.value) SaveStorage(input.value);
  input.value = "";
});

// li 엘리먼트 생성 및 추가
function CreateTodo(todo) {
  const li = document.createElement("li");
  const delbtn = document.createElement("button");
  const div = document.createElement("div");

  li.dataset.index = todo.index;
  div.innerText = todo.item;
  delbtn.innerText = "삭제";
  delbtn.addEventListener("click", (e) => {
    DeleteStorage(e.target.parentElement.dataset.index);
  });

  li.appendChild(div);
  li.appendChild(delbtn);
  list.appendChild(li);
}

// Storage
// 스토리지에 저장된 데이터 불러오기(페이지 로드했을 때)
function GetStorage() {
  todos = JSON.parse(localStorage.getItem("todos"));
}
// 스토리지에 데이터 저장
function SaveStorage(item) {
  const index = todos[todos.length - 1];

  const todo = {
    index: index?.index ? index + 1 : 1,
    item: item,
  };

  CreateTodo(todo);

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 스토리지에 데이터 삭제
function DeleteStorage(index) {
  list.removeChild(list.querySelector(`li[data-index='${index}']`));
  todos = todos.filter((item) => item.index != index);
  localStorage.setItem("todos", JSON.stringify(todos));
}
