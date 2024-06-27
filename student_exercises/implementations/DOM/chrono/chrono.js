/* 
  Exercice DOM-S2-03 - Chronomètre
  Créez un chronomètre numérique affichant les minutes, secondes et millisecondes, 
  avec • Un bouton « Start »: lance le chronomètre
  • Un bouton « Stop »: arrête le chronomètre
  • Un bouton « Reset » qui remet le chronomètre à l’état initial
  
  Options supplémentaires
  a) Ajoutez un bouton « Temps intermédiaire »; Tous les temps intermédiaires sont également affichés dans la page
*/

const vitesseInterval = 100;
const myApp = document.querySelector('#app');
myApp.innerHTML = `
  <div id="ecran">00:00:00</div>
  <button id="start">Start</button>
  <button id="stop">Stop</button>
  <button id="reset">Reset</button>
  <button id="ti">TI</button>
  <ul id="resultats"></ul>
`;

const divEcran = document.querySelector("#ecran")
const btnStart = document.querySelector("#start")
const btnStop = document.querySelector("#stop")
const btnReset = document.querySelector("#reset")
const btnTI = document.querySelector("#ti")

// for TI implementation
const time = {
  millisecondes: 0,
  secondes: 0,
  minutes: 0
};

/**
 
Function that format the time variable into a string on the format "01:10:34"*/
function formatTime() {
  return `${time.minutes} :  ${time.secondes} : ${time.millisecondes}`
}


function intervalCallback() {
  // TODO: increment values
  time.millisecondes++

  if(time.millisecondes >= 100){
    time.secondes += 1
    time.millisecondes = 0
  }
  if(time.secondes >= 60){
    time.minutes++
    time.secondes = 0
  }



  // TODO: update screen
  ecran.innerText = formatTime()
}

console.log(time.secondes);

let iValue
btnStart.addEventListener("click", () => {
  // TODO: create an interval
  iValue = setInterval(intervalCallback, vitesseInterval)

})

btnStop.addEventListener("click", () => {
  // TODO: create an interval
  clearInterval(iValue)
})

btnReset.addEventListener("click", () => {
  // TODO: create an interval
  time.millisecondes = 0
  time.secondes = 0
  time.minutes = 0
  ecran.innerText = formatTime()
})

btnTI.addEventListener("click", () => {
  // TODO: create an TI
  const li = document.createElement("li")
  li.innerHTML = `${formatTime()}`
  resultats.appendChild(li)
})





