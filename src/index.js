document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const taskDescription = document.getElementById("new-task-description").value;

    if (taskDescription.trim() !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

      taskList.appendChild(taskItem);
      form.reset(); // Clear the input field after adding the task
    }
  });
});
