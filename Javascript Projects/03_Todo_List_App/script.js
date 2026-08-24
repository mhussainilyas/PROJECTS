const todoBody = document.querySelector(".todo-body");
const todoAddBtn = document.querySelector(".td-add-btn");
const todoInput = document.querySelector(".td-input-field");

let task = [];

// ====================
//     Render Todo
// ====================

function renderList(arr) {
  if (arr.length > 0) {
    todoBody.innerHTML = "";
    arr.map((item, index) => {
      const div = document.createElement("div");
      div.classList.add("todo-item");
      div.innerHTML = `
            <p>${item.desc}</p>
            <i class="fa-solid fa-trash"></i>
        `;

      todoBody.append(div);
    });
  } else {
    todoBody.innerHTML = "<p class='empty-todo'>You've not any todo yet!</p>";
  }
}

renderList(task);

// ====================
//      Add Todo
// ====================

function handleAddTodo() {
  let inputVal = todoInput.value.trim();
  if (inputVal != "") {
    task.unshift({ id: Date.now(), desc: inputVal });
    renderList(task);
    todoInput.value = "";
  }
}

// ====================
//     Delete Todo
// ====================

function handleDeleteTodo(e) {
  const target = e.target;
  if (target.classList.contains("fa-solid")) {
    task = task.filter((item, index) => {
      return item.desc !== target.previousElementSibling.innerText;
    });

    renderList(task);
  }
}

// ====================
//    Event Listener
// ====================

todoAddBtn.addEventListener("click", handleAddTodo);
todoBody.addEventListener("click", handleDeleteTodo);
