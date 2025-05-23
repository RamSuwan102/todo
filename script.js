function addTask() {
    const input = document.getElementById("task-input");
    const taskText = input.value.trim();
  
    if (taskText === "") return;
  
    const taskList = document.getElementById("task-list");
  
    const li = document.createElement("li");
  
    li.textContent = taskText;
    li.onclick = () => li.classList.toggle("completed");
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = () => taskList.removeChild(li);
  
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  
    input.value = "";
  }
  