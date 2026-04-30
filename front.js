const taskForm = document.getElementById("taskForm");

const taskInput = document.getElementById("taskInput");

const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function (e) {

    e.preventDefault();

    // CREATE LI
    const li = document.createElement("li");

    li.textContent = taskInput.value;

    // ADD TO LIST
    taskList.appendChild(li);

    // CLEAR INPUT
    taskInput.value = "";

});