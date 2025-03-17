document.getElementById("task-input").onkeypress = function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
};

document.querySelector(".add-task").onclick = function (event) {
    event.preventDefault();
    addTask();
};

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.classList.add("task-item");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="remove-task" onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(li);
    taskInput.value = ""; 
}

function removeTask(button) {
    button.parentElement.remove();
}
