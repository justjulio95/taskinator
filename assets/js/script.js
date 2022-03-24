var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    //Prevents the automatic refresh that the browser wants to do
    event.preventDefault();

    //Assigns the user input to the taskNameInput variable
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    //Assigns the user task selection to the taskTypeInput variable
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    //send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {
    //Creates list item.
    var listItemEl = document.createElement("li");
    //Adopts the CSS class name AND style
    listItemEl.className = "task-item";

    // Create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    //Give it a class name
    taskInfoEl.className = "task-info";
    //Add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + 
    "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    //Adds the text
    listItemEl.appendChild(taskInfoEl);

    //Appends entire list item to list
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler)