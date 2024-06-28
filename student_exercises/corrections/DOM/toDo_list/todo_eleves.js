const btnAjout = document.querySelector("#enter");
const ulTask = document.querySelector("#ulTask");
const input = document.querySelector("#userInput");

let tasks = JSON.parse(localStorage.getItem("newTask") || "[]");

const displayTask = (taskList) => {
  ulTask.textContent = "";

  taskList.forEach((task) => {
    const li = document.createElement("li");
    // if(task.done){
    //   li.classList.add("done")
    // }
    li.classList.toggle("done", task.done);

    li.addEventListener("click", () => {
      // if(li.classList.contains("done")){
      //   li.classList.remove("done")
      // } else {
      //   li.classList.add("done")
      // }
      li.classList.toggle("done");
      // if(task.done){
      //   task.done = false
      // } else {
      //   task.done = true
      // }
      task.done = !task.done;
      saveInStorage(tasks);
    });

    const span = document.createElement("span");
    span.textContent = task.title;
    li.appendChild(span);

    //creation du btn sup
    const dBtn = document.createElement("button");
    dBtn.classList.add("deleteButton");
    dBtn.appendChild(document.createTextNode("X"));
    dBtn.addEventListener("click", () => {
      const spanText = span.textContent;
      li.remove();
      tasks = taskList.filter((task) => spanText !== task.title);
      saveInStorage(tasks);
    });
    li.appendChild(dBtn);

    ulTask.appendChild(li);
  });
};

const saveInStorage = (tasksList) => {
  localStorage.setItem("newTask", JSON.stringify(tasksList));
};

const addTask = () => {
  const valeur = input.value;
  // if valeur already in tasks -> ignore
  // for(let i=0; i<tasks.length; i++){
  //   if(valeur === tasks[i])
  //     return;
  // }
  // if(tasks.find(valeur)){
  //   return;
  // }
  // if(tasks.some(taskTitle => taskTitle.toLowerCase() === valeur.toLowerCase())) {
  //   return;
  // }

  tasks.push({
    title: valeur,
    done: false,
  });
  displayTask(tasks);
  saveInStorage(tasks);
};

displayTask(tasks);

//ajout des evt
btnAjout.addEventListener("click", addTask);
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
