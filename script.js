document.addEventListener("DOMContentLoaded", function() {
    // Select necessary elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage when the page loads
    function loadTasks() {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            const tasks = JSON.parse(storedTasks);
            tasks.forEach(taskText => addTask(taskText, false));
        }
    }

    // Save tasks to Local Storage
    function saveTasks() {
        const tasks = Array.from(taskList.children).map(taskItem => taskItem.firstChild.textContent);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Function to add a task
    function addTask(taskText = null, save = true) {
        // Retrieve input value if taskText is not passed
        if (taskText === null) {
            taskText = taskInput.value.trim();
        }

        // Check if taskText is empty
        if (taskText === "") {
            alert("Please enter a task before adding.");
            return;
        }

        // Create a new list item (li)
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item"); // Add class for styling
        taskItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Add event listener to remove task when clicked
        removeButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
            saveTasks(); // Update Local Storage after removal
        });

        // Append remove button to task item
        taskItem.appendChild(removeButton);

        // Append task item to task list
        taskList.appendChild(taskItem);

        // Clear input field after adding task
        taskInput.value = "";

        // Save task to Local Storage if manually added
        if (save) {
            saveTasks();
        }
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

    // Load saved tasks when the page loads
    loadTasks();
});
