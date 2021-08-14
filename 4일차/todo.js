const list = document.querySelector("#list");
const listForm = document.querySelector("#listForm");

// 스토리지에 저장된(될) 데이터 배열 변수
let todos = null;

// 데이터 입력
listForm.addEventListener("submit", (e) => {
  e.preventDefault(); // 각 요소가 가지고 있는 기본 이벤트를 차단

  const input = e.target.querySelector("input");
  if (input.value) {
    // SaveStorage(input.value);
    const index = todos[todos.length - 1]?.index;

    const todo = {
      index: index ?? false ? index + 1 : 1,
      memo: input.value,
      isDone: false,
    };

    todos.push(todo);
    CreateTodo(todo);
  }
  input.value = "";
});

// li 엘리먼트 생성 및 추가
function CreateTodo(todo) {
  const li = document.createElement("li");
  const delbtn = document.createElement("button");
  const div = document.createElement("div");

  li.dataset.index = todo.index;
  div.innerText = todo.memo;
  delbtn.innerText = "지우기";

  if (todo.isDone) div.classList.add("done");

  div.addEventListener("click", (e) => {
    e.target.classList.toggle("done");

    todos.some((item) => {
      const idx = e.target.parentElement.dataset.index;
      if (item.index == idx) {
        item.isDone = true;
        SaveStorage();
        return item.index == idx;
      }
    });
  });
  delbtn.addEventListener("click", (e) => {
    DeleteStorage(e.target.parentElement.dataset.index);
  });

  li.appendChild(div);
  li.appendChild(delbtn);
  list.appendChild(li);

  SaveStorage();
}

// Storage
// 스토리지에 저장된 데이터 불러오기(페이지 로드했을 때)
function GetStorage() {
  todos = JSON.parse(localStorage.getItem("todos")) ?? [];
}
// 스토리지에 데이터 저장
function SaveStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 스토리지에 데이터 삭제
function DeleteStorage(index) {
  list.removeChild(list.querySelector(`li[data-index='${index}']`));
  todos = todos.filter((item) => item.index != index);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 화면 시작 함수
function init() {
  GetStorage();
  if (todos.length > 0) {
    todos.forEach((todo) => {
      CreateTodo(todo);
    });
  }
}

init();
