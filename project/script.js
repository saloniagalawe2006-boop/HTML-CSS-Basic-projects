let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
    const subject = document.getElementById("taskInput").value.trim();
    const time = document.getElementById("timeInput").value.trim();

    if (subject === "" || time === "") {
        alert("Please fill both fields");
        return;
    }

    tasks.push({ subject, time });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.getElementById("taskInput").value = "";
    document.getElementById("timeInput").value = "";

    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${task.subject} - ${task.time} min</span>
            <button class="delete-btn" onclick="deleteTask(${index})">❌</button>
        `;

        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

renderTasks();