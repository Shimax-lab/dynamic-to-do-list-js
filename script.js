document.addEventListener("DOMContentLoaded", function() {
    // Select necessary elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Define the addTask function
    function addTask() {
        // Retrieve and trim the task input value
        const taskText = taskInput.value.trim();

        // Check if taskText is empty
        if (taskText === "") {
            alert("Please enter a task before adding.");
            return;
        }

        // Create a new list item (li)
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskItem.classList.add("task-item"); // Add a class to style tasks

        // Create a remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn"); // Add a class for styling

        // Add event listener to remove task when clicked
        removeButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });

        // Append remove button to task item
        taskItem.appendChild(removeButton);

        // Append task item to task list
        taskList.appendChild(taskItem);

        // Clear the input field after adding task
        taskInput.value = "";
    }

    // Function to handle Enter key press
    function handleKeyPress(event) {
        if (event.key === "Enter") {
            addTask();
        }
    }

    // Attach event listeners
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", handleKeyPress);
});
