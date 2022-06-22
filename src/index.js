document.addEventListener("DOMContentLoaded", () => {

  const newForm = document.getElementById("create-task-form");
  const newDescription = document.getElementById("new-task-description");
  const newPriority = document.getElementById("new-task-priority");


  const newUl = document.getElementById("tasks");

  
  newForm.addEventListener("submit", createTask);
});

const createTask = event => {
  event.preventDefault();
  
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendTask(newTask);
  event.target.reset();
};

const appendTask = task => {
  document.getElementById("tasks").appendChild(task);
};