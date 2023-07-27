function addTask() {
    const taskTitle = document.getElementById("taskTitle").value;
    const taskDescription = document.getElementById("taskDescription").value;  
    if (taskTitle.trim() !== "") {
      const taskList = document.getElementById("taskList");
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
        <input type="checkbox">
        <span>${taskTitle}</span>
        <button onclick="deleteTask(this)">Delete</button>
        <p>${taskDescription}</p>
      `;
      taskList.appendChild(taskItem);
      clearInputFields();
    }
  }
  function deleteTask(deleteButton) {
    const taskItem = deleteButton.parentElement;
    taskItem.remove();
  }
  function clearInputFields() {
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDescription").value = "";
}
  