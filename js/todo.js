const get_todos = () => {
  let todos = new Array();
  var todos_str = localStorage.getItem("todo");
  if (todos_str !== null) {
    todos = JSON.parse(todos_str);
  }
  return todos;
};

const add = () => {
  const task = document.getElementById(`task`).value;
  var todos = get_todos();
  todos.push(task);
  localStorage.setItem(`todo`, JSON.stringify(todos));
  document.getElementById(`task`).value = "";
  show();
};

const show = () => {
  let todos = get_todos();
  let html = `<ul>`;
  for (i = 0; i < todos.length; i++) {
    html += `<li  >${todos[i]}<button class="remove" id="${i}" onClick="removeItem()" value="${todos[i]}"> x </button ></li>`;
  }
  html += `</ul>`;
  document.getElementById(`todos`).innerHTML = html;
};
show();

const removeItem = () => {
  let todos = get_todos();
  todos.splice(event.target.id, 1);
  localStorage.setItem(`todo`, JSON.stringify(todos));
  show();
  return false;
};
