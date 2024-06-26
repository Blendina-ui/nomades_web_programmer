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

console.log(minnutes + " : " + secondes + " : " + millisecondes)
console.log(`${minnutes} :  ${secondes} : ${millisecondes}`)

// for TI implementation
const time = {
  millisecondes: 0,
  secondes: 0,
  minutes: 0
};