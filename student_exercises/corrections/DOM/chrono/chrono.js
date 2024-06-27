/* 
  Exercice DOM-S2-03 - Chronomètre
  Créez un chronomètre numérique affichant les minutes, secondes et millisecondes, 
  avec • Un bouton « Start »: lance le chronomètre
  • Un bouton « Stop »: arrête le chronomètre
  • Un bouton « Reset » qui remet le chronomètre à l’état initial
  
  Options supplémentaires
  a) Ajoutez un bouton « Temps intermédiaire »; Tous les temps intermédiaires sont également affichés dans la page
*/

const vitesseInterval = 10;
const myApp = document.querySelector('#app');
myApp.innerHTML = `
  <div id="ecran">00:00:00</div>
  <button id="start">Start</button>
  <button id="stop">Stop</button>
  <button id="reset">Reset</button>
  <button id="ti">TI</button>
  <ul id="resultats"></ul>
`;

const valeurEcran = document.querySelector("#ecran")
const btnStart = document.querySelector("#start")
const btnStop = document.querySelector("#stop")
const btnReset = document.querySelector("#reset")
const btnTi = document.querySelector("#ti")
const affichageTimeI = document.querySelector("#resultats")

let intervallID = 0
let T = 0

// for TI implementation
const time = {
  millisecondes: 0,
  secondes: 0,
  minutes: 0
};

const formatTime = () => `${(time.minutes < 10 ? '0' : '')}${time.minutes}:${(time.secondes%60 < 10 ? '0' : '')}${time.secondes%60}:${(time.millisecondes%100 < 10 ? '0' : '')}${time.millisecondes%100}`
const disableDefaultButtons = (disabled) => {
  btnReset.disabled = disabled
  btnStop.disabled = disabled
  btnTi.disabled = disabled
}

disableDefaultButtons(true)

const calculerTime = () => {
  time.millisecondes++
  time.secondes += time.millisecondes % 100 === 0
  time.minutes += (time.secondes % 60 === 0 && time.millisecondes % 100 === 0) && time.secondes !== 0 
  valeurEcran.innerText = formatTime() 

  // if(time.millisecondes % 100 === 0){
  //   time.secondes++
  //   // time.millisecondes = 0
  // }
  
  // if(time.secondes !== 0 && time.secondes % 60 === 0){
  //   time.minutes++

  //   // time.secondes = 0
  // }
}

const nettoyerEcran = () => {
  time.millisecondes = 0
  time.secondes = 0
  time.minutes = 0

  T = 0

  valeurEcran.innerText = formatTime()
  affichageTimeI.innerText = ""

  disableDefaultButtons(true)
  clearInterval(intervallID)
}

btnStart.addEventListener("click", () => {
  intervallID = setInterval(calculerTime, vitesseInterval)

  disableDefaultButtons(false)
})
btnStop.addEventListener("click", () => {
  clearInterval(intervallID)

  btnTi.disabled = true
})
btnReset.addEventListener("click", nettoyerEcran)
btnTi.addEventListener("click", () => {
  T++
  affichageTimeI.innerHTML += `<li>T:${T} ${formatTime()}</li>`
})


