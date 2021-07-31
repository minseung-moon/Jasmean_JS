const list = document.querySelector("#list");
const listForm = document.querySelector("#listForm");

function shwingList(text) {
  const li = document.createElement("li");
  const delbtn = document.createElement("button");
  const div = document.createElement("div");

  div.innerText = text;
  delbtn.innerText = "삭제";
  delbtn.addEventListener("click", (e) => {
    list.removeChild(e.target.parentElement);
  });

  li.appendChild(div);
  li.appendChild(delbtn);
  list.appendChild(li);
}

listForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = e.target.querySelector("input");
  shwingList(input.value);
  input.value = "";
});
