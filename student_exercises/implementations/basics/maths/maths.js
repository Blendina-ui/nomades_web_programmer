/**
 * Tester si un nombre est pair
 * @param {Number} nombre Le nombre à tester
 * @returns {String} "Le nombre est pair" ou "Le nombre est impair"
 * @example
 * estPair(2) // "Le nombre est pair"
 * estPair(3) // "Le nombre est impair"
 */
function estPair(nombre) { // O(1)
  // Ton implementation
	return null;
}

/**
 * Factorielle d'un nombre
 * La factorielle d'un nombre n est le produit de tous les nombres entiers strictement positifs inférieurs ou égaux à n
 * @see https://fr.wikipedia.org/wiki/Factorielle
 * @param {Number} n Le nombre dont on veut calculer la factorielle
 * @returns {Number} La factorielle du nombre
 * @example
 * factorielle(0) // 1
 * factorielle(1) // 1
 * factorielle(2) // 2
 * factorielle(3) // 6
 * factorielle(4) // 24
 * factorielle(5) // 120
 * factorielle(6) // 720
 * factorielle(7) // 5040
 * factorielle(25) // 15511210043330985984000000
 */
function factorielle(n) {
  // Ton implementation
	return null;
}

/**
 * Suite de Fibonacci
 * La suite de Fibonacci est une suite d'entier naturels, définie par la somme des deux termes précédents
 * @see https://fr.wikipedia.org/wiki/Suite_de_Fibonacci
 * @param {Number} n 
 * @returns {Number} Le n-ième terme de la suite de Fibonacci
 * @example
 * fibonacci(0) // 0
 * fibonacci(1) // 1
 * fibonacci(2) // 1
 * fibonacci(3) // 2
 * fibonacci(4) // 3
 * fibonacci(5) // 5
 * fibonacci(6) // 8
 * fibonacci(7) // 13
 * fibonacci(25) // 75025
 */
function fibonacci(n) {
  // Ton implementation
	return null;
}
/**
 * Somme des n premiers entiers
 * @param {Number} n le nombre d'entiers à additionner
 * @returns {Number} La somme des n premiers entiers
 * @example
 * somme(0) // 0
 * somme(1) // 1
 * somme(2) // 3
 * somme(3) // 6
 * somme(4) // 10
 * somme(5) // 15
 * somme(10) // 55
 * somme(50) // 1275
 */
function somme(n) {
  return null
}

/**
 * Retourne le carré d'un nombre
 * @param {Nuber} n Le nombre dont on veut le carré
 * @returns {Number} Le carré du nombre
 * @example
 * auCarre(0) // 0
 * auCarre(1) // 1
 * auCarre(2) // 4
 * auCarre(3) // 9
 * auCarre(4) // 16
 * auCarre(5) // 25
 * auCarre(10) // 100
 * auCarre(50) // 2500
 */
function auCarre(n) {
  // Ton implementation
	return null;
}

/**
 * Retourne true si le nombre est premier, false sinon
 * Un nombre est premier si il est divisible uniquement par 1 et par lui-même
 * Par convention, le nombre o et 1 ne sont pas des nombres premiers
 * @see https://fr.wikipedia.org/wiki/Nombre_premier
 * @param {Number} n Le nombre à tester
 * @returns {Boolean} true si le nombre est premier, false sinon
 * @example
 * estPremier(0) // false
 * estPremier(1) // false
 * estPremier(2) // true
 * estPremier(3) // true
 * estPremier(4) // false
 * estPremier(5) // true
 * estPremier(6) // false
 */
function estPremier(n) {
  // Ton implementation
  return null
}
module.exports = {
	estPair,
	factorielle,
	fibonacci,
	somme,
	auCarre,
};
