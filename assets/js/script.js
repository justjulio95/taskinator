var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    //Creates a new task item.
    var listItemEl = document.createElement("li");
    //Adopts the CSS class name AND style
    listItemEl.className = "task-item";
    //Adds the text
    listItemEl.textContent = "This is a new task.";
    //Appends element to the task list
    tasksToDoEl.appendChild(listItemEl);
}

buttonEl.addEventListener("click", createTaskHandler)