/**
 * Tri croissant d'un tableau de nombres
 * Pour cet exercice utiliser seulement des for et des if
 * @param {Array} tab le tableau à trier 
 * @returns {Array} le tableau trié
 * @example
 * triCroissant([1, 3, 2, 5, 4]) // [1, 2, 3, 4, 5]
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/if...else
 */
function triCroissant(tab) {
  // Ton implementation
	return null;
}

/**
 * Tri décroissant d'un tableau de nombres
 * Pour cet exercice utiliser seulement des for et des if
 * @param {Array} tab le tableau à trier 
 * @returns {Array} le tableau trié de manière décroissante
 * @example
 * triCroissant([1, 3, 2, 5, 4]) // [5, 4, 3, 2, 1]
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/if...else
 */
function triDecroissant(tab) {
	 // Ton implementation
	return null;
}

/**
 * Somme des éléments d'un tableau de nombres
 * @param {Array} tableau le tableau de nombres
 * @returns {Number} la somme des éléments du tableau
 * @example
 * somme([1, 2, 3, 4, 5]) // 15
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for
 */
function somme(tableau) {
  let sum = 0;
  for(let i=0; i < tableau.length; i++){
	sum += tableau [i]
  }
	return sum;
}

/**
 * Moyenne des éléments d'un tableau de nombres
 * @param {Array} tableau le tableau de nombres
 * @returns {Float} la moyenne des éléments du tableau
 * @example
 * moyenne([1, 2, 3, 4, 5]) // 3
 * moyenne([1, 2, 3, 4]) // 3.5
 * moyenne([1, 1, 1, 1, 1, 1]) // 1
 * moyenne([1, 1, 1, 10, 10]) // 4.6
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/parseFloat
 */
function moyenne(tableau) {
	let sum = 0;
	for (let i=0; i < tableau.length; i++){
		sum += tableau [i];
	}
	const moyenne = sum / tableau.length;
  return moyenne
}

/**
 * Minimum d'un tableau de nombres
 * @param {Array} tableau le tableau de nombres
 * @returns {Number} le minimum du tableau
 * @example
 * min([1, 2, 3, 4, 5]) // 1
 * min([10, 3, 2, 5, 4]) // 2
 */
function min(tableau) {
  // Ton implementation
  let min_ = tableau[0];
  for(let i = 1; < tableau.length; i++){
	if(tableau[i] < min_){
		min_ = tableau[i];
	}
  }
	return min_;
}

/**
 * Maximum d'un tableau de nombres
 * @param {Array} tableau le tableau de nombres
 * @returns {Number} le maximum du tableau
 * @example
 * max([1, 2, 3, 4, 5]) // 5
 * max([10, 3, 2, 5, 4]) // 10
 */
function max(tableau) {
  // Ton implementation
  let max = tableau[0];
  for(let i = 0; i < tableau.length; i++){
	if(tableau[i] > max){
		max = tableau[i];
	}
  }
	return max;
}

/**
 * Minimum et maximum d'un tableau de nombres
 * @param {Array} tableau le tableau de nombres
 * @returns {Array} un tableau contenant le minimum et le maximum du tableau
 * @example
 * minMax([1, 2, 3, 4, 5]) // [1, 5]
 */
function minMax(tableau) {
	let max_ = tableau[0];
	let min_ = tableau[0];
	for(let i = 0; i < tableau.length; i++){
		if(tableau[i] > max_){
			max_ = tableau[i];
		}
		if(tableau[i] < min_){
			min_ = tableau[i];
		}
	  }

  return [min_,max_]
}

/**
 * Médiane d'un tableau de nombres
 * La médiane est la valeur centrale d'un tableau de nombres triés
 * Si le tableau contient un nombre pair d'éléments, la médiane est la moyenne des deux éléments centraux
 * Si le tableau contient un nombre impair d'éléments, la médiane est l'élément central
 * @param {Array} tableau le tableau de nombres
 * @returns {Number} la médiane du tableau
 * @example
 * mediane([1, 2, 3, 4, 5]) // 3
 * mediane([1, 2, 3, 4, 5, 6]) // 3.5
 * mediane([1, 1, 1, 1, 1, 1]) // 1
 * mediane([1, 1, 1, 10, 10]) // 1
 * mediane([3, 5, 1, 4, 2]) // 3
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/floor
 */
function mediane(tableau) {
  // Ton implementation
	return null;
}

/**
 * Mode d'un tableau de nombres 
 * Le mode est le nombre qui apparait le plus souvent dans le tableau
 * Si plusieurs nombres apparaissent le même nombre de fois, le mode est le plus petit de ces nombres
 * @param {Array} tableau le tableau de nombres
 * @returns {Number} le mode du tableau
 * @example
 * mode([1, 2, 3, 4, 5]) // 1
 * mode([1, 1, 1, 1, 1, 1]) // 1
 * mode([1, 1, 1, 10, 10]) // 1
 * mode([4, 2, 4, 3, 2, 2]) // 2
 */
function mode(tableau) {
  // Ton implementation
	return null;
}

/**
 * Ecart type d'un tableau de nombres
 * L'écart type est la racine carrée de la moyenne des carrés des écarts à la moyenne
 * @param {Array} tableau le tableau de nombres
 * @returns {Float} l'écart type du tableau
 * @example
 * ecartType([1, 2, 3, 4, 5]) // 1.4142135623730951
 * ecartType([1, 1, 1, 1, 1, 1]) // 0
 * ecartType([1, 1, 1, 10, 10]) // 4.041451884327381
 * ecartType([4, 2, 4, 3, 2, 2]) // 1.0954451150103321
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/sqrt
 */
function ecartType(tableau) {
  // Ton implementation
	return null;
}

/**
 * Vérifie si un tableau contient une valeur
 * @param {Array} tableau le tableau de nombres
 * @param {Number} valeur la valeur à rechercher
 * @returns {Boolean} true si la valeur est présente dans le tableau, false sinon
 * @example
 * existe([1, 2, 3], 2) // true
 * existe([1, 2, 3], 4) // false
 */
function existe(tableau, valeur) {
	// Ton implementation
	 {
	  for(let i=1; i<tableau.length; i++){
		if(tableau[i] === valeur){
			return true
		}
		} 
	  }
	return false
  }
	



/**
 * Retourne la position d'une valeur dans un tableau
 * sinon retourne -1
 * @param {Array} tableau Le tableau de nombres
 * @param {Number} valeur La valeur à rechercher
 * @returns {Number} La position de la valeur dans le tableau, -1 si la valeur n'est pas présente
 * @example
 * position([1, 2, 3], 1) // 0
 * position([1, 2, 3], 2) // 1
 * position([1, 2, 3], 4) // -1
 */
function position(tableau, valeur) {
  // Ton implementation
	return null;
}

/**
 * Vérifie si deux tableaux sont similaires
 * @param {Array} arr1 le premier tableau
 * @param {Array} arr2 le second tableau
 * @returns {Boolean} true si les deux tableaux sont similaires, false sinon
 * @example
 * similaires([1, 2, 3], [1, 2, 3]) // true
 * similaires([1, 2, 3], [1, 2, 4]) // false
 * similaires([1, 2, 3], [1, 2]) // false
 */
function similaires(arr1, arr2) {
  // Ton implementation
	return null;
}

/**
 * Vérifie si un élément est un tableau
 * @param {*} tableau l'élément à vérifier
 * @returns {Boolean} true si l'élément est un tableau, false sinon
 * @example
 * estTableau([]) // true
 * estTableau([1, 2, 3]) // true
 * estTableau(1) // false
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/instanceof
 */
function estTableau(tableau) {
  // Ton implementation
	return null;
}

/**
 * Vérifie si un tableau est composé uniquement de nombres
 * @param {Array} tableau l'élément à vérifier
 * @returns {Boolean} true si le tableau est composé uniquement de nombres, false sinon
 * @example
 * estTableauDeNombres([]) // true
 * estTableauDeNombres([1, 2, 3]) // true
 * estTableauDeNombres([1, 2, '3']) // false
 * estTableauDeNombres(1) // false
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/typeof
 */
function estTableauDeNombres(tableau) { 
  // Ton implementation
	return null;
}

module.exports = {
	triCroissant,
	triDecroissant,
	somme,
	moyenne,
	min,
	max,
	minMax,
	mediane,
	mode,
	ecartType,
	existe,
	position,
	similaires,
	estTableau,
	estTableauDeNombres
};
