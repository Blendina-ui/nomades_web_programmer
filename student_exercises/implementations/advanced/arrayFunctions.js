/**
 * forEach est une fonction qui prend en paramètre un tableau et une fonction de callback.
 * Elle ne renvoie rien, mais applique la fonction de callback sur chaque élément du tableau.
 * la fonction de callback prend trois arguments : 
 *  - l'élément courant, 
 *  - l'index de l'élément courant 
 *  - le tableau sur lequel forEach a été appelé
 * 
 * @param {Array} array Le tableau initial
 * @param {Function} callback La fonction de callback
 * @returns {undefined}
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach
 * @example
 * forEach([1, 2, 3, 4, 5], x => console.log(x)) // Affiche 1 2 3 4 5
 * @example
 * let sum = 0;
 * forEach([1, 2, 3, 4, 5], x => sum += x);
 * sum == 15 // 15
 */
function forEach(array, callback) {
  // Ton implementation
  return
}

/**
 * Map est une fonction qui prend en paramètre un tableau et une fonction de callback.
 * Elle renvoie un nouveau tableau contenant les valeurs du tableau initial transformées par la fonction de callback.
 * La fonction de callback prend trois arguments :
 * - l'élément courant
 * - l'index de l'élément courant
 * - le tableau sur lequel map a été appelé
 * 
 * @param {Array} array Le tableau initial
 * @param {Function} callback La fonction de callback
 * @returns {Array} Le nouveau tableau - transformé par la fonction de callback
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map
 * @example
 * map([1, 2, 3, 4, 5], x => x * 2) // [2, 4, 6, 8, 10]
 */
function map(array, callback) {
  // 1. Créer un nouveau tableau
  // 2. Pour chaque elem il faut executer la callback et la push dans le nouveau tableau
  // 3. Retourner le nouveau tableau
  // Ton implementation
	return null;
}

/**
 * Filter est une fonction qui prend en paramètre un tableau et une fonction de callback.
 * Elle renvoie un nouveau tableau contenant les valeurs du tableau initial qui ont passé le test de la fonction de callback.
 * La fonction de callback prend trois arguments :
 * - l'élément courant
 * - l'index de l'élément courant
 * - le tableau sur lequel filter a été appelé
 * @param {Array} array Le tableau initial
 * @param {Function} callback La fonction de callback
 * @returns {Array} Le nouveau tableau - contenant les valeurs du tableau initial qui ont passé le test de la fonction de callback
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
 * @example
 * filter([1, 2, 3, 4, 5], x => x % 2 === 0) // [2, 4]
 */
function filter(array, callback) {
  // Ton implementation
	return null;
}

/**
 * Reduce est une fonction qui prend en paramètre un tableau, une fonction de callback et une valeur initiale.
 * Elle renvoie une valeur unique qui est le résultat de l'application de la fonction de callback sur chaque élément du tableau.
 * La fonction de callback prend quatre arguments :
 * - l'accumulateur (previous value)
 * - l'élément courant
 * - l'index de l'élément courant
 * - le tableau sur lequel reduce a été appelé
 * 
 * @param {Array} array Le tableau initial
 * @param {Function} callback La fonction de callback
 * @param {*} initialValue La valeur initiale
 * @returns {*} La valeur unique qui est le résultat de l'application de la fonction de callback sur chaque élément du tableau
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce
 * @example
 * reduce([1, 2, 3, 4, 5], (accumulator, currentValue) => accumulator + currentValue, 0) // 15
 */
function reduce(array, callback, initialValue) {
  // Ton implementation
	return null;
}

/** 
 * Every est une fonction qui prend en paramètre un tableau et une fonction de callback.
 * Elle renvoie true si tous les éléments du tableau passent le test de la fonction de callback, false sinon.
 * La fonction de callback prend trois arguments :
 * - l'élément courant
 * - l'index de l'élément courant
 * - le tableau sur lequel every a été appelé
 * 
 * @param {Array} array Le tableau initial
 * @param {Function} callback Le prédicat à évaluer sur chaque élément du tableau
 * @returns {boolean} true si tous les éléments du tableau passent le test de la fonction de callback, false sinon
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/every
 * @example
 * every([1, 2, 3, 4, 5], (num) => num < 6) // true
 * every([2, 4, 6, 8, 10], (num) => num < 5) // false
*/
function every(array, callback) {
  // Ton implementation
	return null;
}

/**
 * Some est une fonction qui prend en paramètre un tableau et une fonction de callback.
 * Elle renvoie true si au moins un élément du tableau passe le test de la fonction de callback, false sinon.
 * La fonction de callback prend trois arguments :
 * - l'élément courant
 * - l'index de l'élément courant
 * - le tableau sur lequel some a été appelé
 * 
 * @param {Array} array Le tableau initial
 * @param {Function} callback Le prédicat à évaluer sur chaque élément du tableau
 * @returns {boolean} true si au moins un élément du tableau passe le test de la fonction de callback, false sinon
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/some
 * @example
 * some([1, 2, 3, 4, 5], (num) => num % 2 === 0) // true
 * some([1, 2, 3, 4, 5], (num) => num < 0) // false
 */
function some(array, callback) {
  // Ton implementation
	return null;
}

/**
 * Find est une fonction qui prend en paramètre un tableau et une fonction de callback.
 * Elle renvoie la valeur du premier élément du tableau qui passe le test de la fonction de callback, undefined sinon.
 * La fonction de callback prend trois arguments :
 * - l'élément courant
 * - l'index de l'élément courant
 * - le tableau sur lequel find a été appelé
 * 
 * @param {Array} array Le tableau initial
 * @param {Function} callback Le prédicat à évaluer sur chaque élément du tableau
 * @returns {*} La valeur du premier élément du tableau qui passe le test de la fonction de callback, undefined sinon
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find
 * @example
 * find([1, 2, 3, 4, 5], (num) => num > 2) // 3
 */
function find(array, callback) {
  // Ton implementation
	return null;
}

/**
 * FindIndex est une fonction qui prend en paramètre un tableau et une fonction de callback.
 * Elle renvoie l'index du premier élément du tableau qui passe le test de la fonction de callback, -1 sinon.
 * La fonction de callback prend trois arguments :
 * - l'élément courant
 * - l'index de l'élément courant
 * - le tableau sur lequel findIndex a été appelé
 * 
 * @param {Array} array Le tableau initial
 * @param {Function} callback Le prédicat à évaluer sur chaque élément du tableau
 * @returns {number} L'index du premier élément du tableau qui passe le test de la fonction de callback, -1 sinon
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/findIndex
 * @example
 * findIndex([1, 2, 3, 4, 5], (num) => num > 2) // 2
 */
function findIndex(array, callback) {
  // Ton implementation
	return null;
}

/**
 * Pop est une fonction qui prend en paramètre un tableau.
 * Elle renvoie le dernier élément du tableau, et le supprime du tableau.
 * @param {Array} array Le tableau initial
 * @returns {*} Le dernier élément du tableau, undefined si le tableau est vide
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/pop
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice
 * @example
 * pop([1, 2, 3, 4, 5]) // [1, 2, 3, 4] && 5
 */
function pop(array) {
  // Ton implementation
	return null;
}

/**
 * indexOf est une fonction qui prend en paramètre un tableau et une valeur de recherche ainsi qu'un index de départ.
 * Elle renvoie le premier index de l'élément dans le tableau, -1 si l'élément n'est pas présent.
 * @param {Array} array Le tableau initial
 * @param {*} searchElement L'élément à rechercher dans le tableau
 * @param {number} fromIndex L'index de départ de la recherche
 * @returns {number} Le premier index de l'élément dans le tableau, -1 si l'élément n'est pas présent
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/indexOf
 * @example
 * indexOf([1, 2, 3, 4, 5], 3) // 2
 */
function indexOf(array, searchElement, fromIndex = 0) {
  // Ton implementation
	return null;
}

/**
 * flat est une fonction qui prend en paramètre un tableau.
 * Elle renvoie un nouveau tableau qui contient les éléments du tableau initial et les éléments des tableaux imbriqués.
 * @param {Array} array Le tableau initial
 * @returns {Array} Un nouveau tableau qui contient les éléments du tableau initial et les éléments des tableaux imbriqués
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/flat
 * @example
 * flat([1, [2, [3, [4, 5]]]]) // [1, 2, 3, 4, 5]
 */
function flat(array) {
  // Ton implementation
	return null;
}
/**
 * flatMap est une fonction qui prend en paramètre un tableau et une fonction de callback.
 * Elle renvoie un nouveau tableau qui contient les éléments du tableau initial et les éléments des tableaux imbriqués.
 * La fonction de callback prend trois arguments :
 * - l'élément courant
 * - l'index de l'élément courant
 * - le tableau sur lequel flatMap a été appelé
 * 
 * @param {Array} array Le tableau initial
 * @param {Function} callback La fonction de callback à appliquer à chaque élément du tableau
 * @returns {Array} Un nouveau tableau qui contient les éléments du tableau initial et les éléments des tableaux imbriqués
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/flatMap
 * @example
 * flatMap([1, 2, 3, 4, 5], (num) => [num, num * 2]) // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
 */
function flatMap(array, callback) {
  // Ton implementation
	return null;
}

module.exports = {
  map,
  filter,
  reduce,
  forEach,
  every,
  some,
  find,
  findIndex,
  pop,
  indexOf,
  flat,
  flatMap
};