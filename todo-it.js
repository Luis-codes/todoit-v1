console.log("ToDoIt");
var todoList = [];
console.log("Current todo list: ", todoList);
var todoInput = document.getElementById('todoInput');
function addTodo() {
    // if we don't have the todo input
    if (todoInput == null) {
        console.error('The todo input is missing from the page!');
        return;
    }
    // get the value from the input
    var newTodo = todoInput.value;
    // verify that there is text
    if ('' !== newTodo.trim()) {
        console.log('Adding todo: ', newTodo);
        // add the new item to the list
        todoList.push(newTodo);
        console.log('New todo list: ', todoList);
        // clear the input
        todoInput.value = '';
    }
}
var todoListDiv = document.getElementById('todoListContainer');
function updateTodoList() {
    console.log("Updating the rendered todo list");
    todoListDiv.innerHTML = '';
    todoListDiv.textContent = ''; // Edge, ...
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'todoList');
    todoListDiv.appendChild(ul);
    todoList.forEach(function (item) {
        var li = document.createElement('li');
        li.setAttribute('class', 'todo-list-item');
        li.innerText = item;
        ul.appendChild(li);
    });
}
