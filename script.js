const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);

function addTodo() {
  if (input.value === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
}
