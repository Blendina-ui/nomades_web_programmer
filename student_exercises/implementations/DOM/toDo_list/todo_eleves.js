const taskInput = document.querySelector("#userInput")
const addButton = document.querySelector("#enter")
const taskList = document.querySelector(".listItems ul") 

loadTasks()

function enter() {
    const task = taskInput.value.trim() // enlever les espaces
    if (task) { // if is not empty the input
        createTaskElement(task)
        taskInput.value = ""
        saveTasks() // Enregistrer les tâches après ajout
    } else {
        alert("Please enter a task !")
    }
}

addButton.addEventListener("click", enter)

function createTaskElement(task) {
    const listItem = document.createElement("li")
    listItem.textContent = task
    taskList.appendChild(listItem)

    listItem.addEventListener("click", function() {
        listItem.classList.toggle("done");
        saveTasks()})

    // Bouton de suppression
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X"

    listItem.appendChild(deleteButton)

    deleteButton.addEventListener("click", function() {
        taskList.removeChild(listItem)
        saveTasks()
    })
    
    
}

// Pour sauvegarder les tâches dans le localStorage
function saveTasks() {
    let tasks = []

    taskList.querySelectorAll("li").forEach(function(item) {
        tasks.push(item.textContent)
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Charger les tâches au démarrage
function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || []
    savedTasks.forEach(task => createTaskElement(task))
}


