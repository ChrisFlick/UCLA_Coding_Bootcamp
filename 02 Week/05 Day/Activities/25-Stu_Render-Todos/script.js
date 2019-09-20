var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodo();


function renderTodo(){
    todoCountSpan.textContent = todos.length;

    for (let i = 0; i < todos.length; i++) {
        let li = document.createElement('li');
        todoList.appendChild(li);
        li.textContent = todos[i];
    }
}
