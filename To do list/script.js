const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const slideSound = document.getElementById("slideSound");
const alarmSound = document.getElementById("alarmSound");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskDiv = document.createElement("div");
  taskDiv.className = "task-item";

  // Checkbox marker
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-check";

  checkbox.onclick = () => {
    taskDiv.classList.toggle("completed");
  };

  const span = document.createElement("span");
  span.className = "task-text";
  span.innerText = taskText;

  const deleteIcon = document.createElement("i");
  deleteIcon.className = "bi bi-trash delete-btn";

  deleteIcon.onclick = () => {
    slideSound.currentTime = 0;
    slideSound.play();

    taskDiv.classList.add("removing");

    setTimeout(() => {
      taskDiv.remove();
      alarmSound.currentTime = 0;
      alarmSound.play();
    }, 400);
  };

  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(span);
  taskDiv.appendChild(deleteIcon);
  taskList.appendChild(taskDiv);

  taskInput.value = "";
}

// Enter key support
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
