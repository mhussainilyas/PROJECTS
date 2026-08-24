const taskInput = document.querySelector("#task-input");
const todoContainer = document.querySelector(".todo-container");
const addTaskBtn = document.querySelector(".add-task-btn");

let API = "https://6a869aa470fbbd308f980e77.mockapi.io/api/h1/todos";

// ==================
// 🚀 Read Operation
// ==================

async function getData(api_url) {
  let response = await fetch(api_url, {
    method: "GET",
  });
  let data = await response.json();
  if (data) {
    renderTodoData(data);
  }
}

// ====================
// 🚀 Create Operation
// ====================

async function postData(api_url, val) {
  let response = await fetch(api_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: val }),
  });

  if (response.status === 201) {
    getData(API);
  }

  taskInput.value = "";
}

// ====================
// 🚀 Delete Operation
// ====================

async function deleteData(api_url, id) {
  let response = await fetch(`${api_url}/${id}`, {
    method: "DELETE",
  });

  console.log(response);

  if (response.status === 200) {
    getData(API);
  }
}

// ====================
// 🚀 Update Operation
// ====================

async function putData(api_url, id, val) {
  let response = await fetch(`${api_url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: val }),
  });

  if (response.status === 200) {
    getData(API);
  }
}

// ========================
// 🚀 Rendering Data on UI
// ========================

function renderTodoData(list) {
  todoContainer.innerHTML = "";
  list.forEach((todo) => {
    let div = document.createElement("div");
    div.classList.add("todo");
    div.innerHTML = `
    <p class="todo-task">${todo.text}</p>
    <input type="text" class="todo-task-input" value="${todo.text}" />
    <div class="todo-action">
        <button class="edit-task-btn btn">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="save-task-btn btn">
            <i class="fa-regular fa-circle-check"></i>
        </button>
        <button class="delete-task-btn btn">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>
    `;
    todoContainer.appendChild(div);

    const deleteBtn = div.querySelector(".delete-task-btn");
    deleteBtn.addEventListener("click", () => {
      deleteData(API, todo.id);
    });

    const saveBtn = div.querySelector(".save-task-btn");
    const editBtn = div.querySelector(".edit-task-btn");
    const todoTaskInput = div.querySelector(".todo-task-input");
    const todoTask = div.querySelector(".todo-task");

    editBtn.addEventListener("click", () => {
      editBtn.style.display = "none";
      saveBtn.style.display = "block";
      todoTaskInput.style.display = "block";
      todoTask.style.display = "none";
      todoTaskInput.focus();
    });

    saveBtn.addEventListener("click", async () => {
      await putData(API, todo.id, todoTaskInput.value);
      saveBtn.style.display = "none";
      editBtn.style.display = "block";
      todoTaskInput.style.display = "none";
      todoTask.style.display = "block";
    });
  });
}

// ==================
// 🚀 Event Handlers
// ==================

async function handlePostTodo() {
  let inputVal = taskInput.value.trim();
  if (inputVal) {
    await postData(API, inputVal);
  } else {
    alert("Invalid or empty input!");
  }
}

addTaskBtn.addEventListener("click", handlePostTodo);

// ***** ✔ Initial Data Desplay *****
getData(API);
