/**
 * Retourne une phrase en fonction de l'âge passé en paramètre
 * @param {Number} age l'âge de la personne
 * @returns {String} "Vous êtes majeur !" si l'âge est supérieur ou égal à 18, "Vous êtes mineur !" sinon
 * @example
 * estMajeur(18) // "Vous êtes majeur !"
 * estMajeur(19) // "Vous êtes majeur !"
 * estMajeur(17) // "Vous êtes mineur !"
 * estMajeur(16) // "Vous êtes mineur !"
 */
function estMajeur(age) { // Version 3
	// Ton implementation
	if(age >= 18){
		return "Vous êtes majeur !"
	}else{
		return "Vous êtes mineur !"
	}
}

module.exports = {
	estMajeur,
};
