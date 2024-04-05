document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    addTaskBtn.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      } else {
        alert("Please enter a task!");
      }
    });
  
    function addTask(taskText) {
      const li = document.createElement("li");
      li.textContent = taskText;
      li.classList.add("task-item");
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-btn");
      deleteButton.addEventListener("click", deleteTask);
  
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    }
  
    function deleteTask() {
      const listItem = this.parentElement;
      listItem.remove();
    }
  });
  