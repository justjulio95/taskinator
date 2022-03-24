var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    //Prevents the automatic refresh that the browser wants to do
    event.preventDefault();
    //Creates a new task item.
    var listItemEl = document.createElement("li");
    //Adopts the CSS class name AND style
    listItemEl.className = "task-item";
    //Adds the text
    listItemEl.textContent = "This is a new task.";
    //Appends element to the task list
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", createTaskHandler)