const todoList = [];

function addTodo(value) {
  const todo = { name: value, completed: false };
  todoList.push(todo);
}

function showTodoList(container) {
  let output = "<ul>";
  todoList.forEach((todo) => {
    output =
      output +
      `<li>${todo.name}=${
        todo.completed === true ? "completed" : "Not completed"
      }</li>`;
  });
  container.innerHtML = output;
}

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const todoContainer = document.getElementById("todoContainer");
    const input = document.createElement("input");
    const button = document.createElement("button");
    const todoListContainer = document.createElement("div");
    button.type = "button";
    button.textContent = "Add";
    input.type = "text";
    input.onchange = function (changeEvent) {
      console.log(changeEvent.target.value);
    };
    button.onclick = function (clickEvent) {
      addTodo(input.value);
      showTodoList(todoListContainer);
    };
    todoContainer.appendChild(input);
    todoContainer.appendChild(button);
    todoContainer.appendChild(todoListContainer);
  });
})();
