/**
 * Retourne le nombre de mots dans une phrase
 * Un mot est une suite de caractères séparés par un espace
 * @param {String} phrase 
 * @returns {Number} nombre de mots
 * @example
 * compteMots("Hello World") // 2
 * compteMots(" Hello World ") // 2
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/trim
 */
function compteMots(phrase) {
  return phrase.trim().split(" ").length
}
/**
 * Retourne un string contentant les caractères de la phrase dans l'ordre inverse
 * @param {String} mot 
 * @returns {String} mot inversé
 * @example
 * inverser("hello") // "olleh"
 * inverser("hello world") // "dlrow olleh"
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/length
 */
function inverser(mot) {
	return mot.split("").reverse().join("")
}

/**
 * Retourne true si le mot est un palindrome
 * Un palindrome est un mot qui se lit de la même manière dans les deux sens
 * @param {String} mot 
 * @returns {Boolean} true si le mot est un palindrome
 * @example
 * estPalindrome("kayak") // true
 * estPalindrome("hello") // false
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/length
 */
function estPalindrome(mot) {
	// Ton implementation
	return mot === inverser(mot)
}

/**
 * Retourne le nombre de caractères dans un mot
 * Un caractère est une lettre, un chiffre ou un symbole
 * @param {String} mot 
 * @returns {Number} nombre de caractères
 * @example
 * compteCaracteres("hello") // 5
 * compteCaracteres("hello world") // 11
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/length
 */
function compteCaracteres(mot) {
	// Ton implementation
	return mot.length;
}

/**
 * Retourne le nombres de lettres dans un string
 * @param {String} mot 
 * @returns {Number} nombre de lettres
 * @example
 * compterLesLettres("hello") // 5
 * compterLesLettres("hello world") // 10
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/length
 */
function compterLesLettres(mot) {
	// Ton implementation
	let count = 0
	for(let i=0; i<mot.length; i++){
		if(mot[i].match(/[a-zA-Z]/)){
			count++;
		}
	}
	return count
}

/**
 * Retourne le nombre de voyelles dans un mot
 * Une voyelle est une lettre qui fait partie de l'alphabet suivant : a, e, i, o, u, y
 * @param {String} mot 
 * @returns {Number} nombre de voyelles
 * @example
 * compteVoyelles("hello") // 2
 * compteVoyelles("hello world") // 3
 * compteVoyelles("HellO World") // 3
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/length
 * 
 */
function compteVoyelles(mot) {
	// Ton implementation
	let number = 0
	let voy = "aeuio"
	for(const el of mot.toLowerCase()){
		if(voy.includes(el)){
			number++
		}
	}
	return number
}

/**
 * Retourne le nombre de consonnes dans un mot
 * une consonne est une lettre qui fait partie de l'alphabet suivant : b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, z
 * @param {String} mot
 * @returns {Number} nombre de consonnes
 * @example
 * compteConsonnes("hello") // 3
 * compteConsonnes("hello world") // 7
 * compteConsonnes("HellO World") // 7
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/length
 */
function compteConsonnes(mot) {
	// Ton implementation
	let number = 0
	let consonnes = "bcdfghjklmnpqrstvwxyz"
	for(const el of mot.toLowerCase()){
		if(consonnes.includes(el)){
			number++
		}
	}
	return number
}

/**
 * Retourne la concaténation de deux mots
 * @param {String} mot1
 * @param {String} mot2
 * @returns {String} la concaténation des deux mots
 * @example
 * concatenation("hello", "world") // "helloworld"
 */
function concatenation(mot1, mot2) {
	// Ton implementation
	
	return mot1 + mot2
}

module.exports = {
	compteMots,
	inverser,
	estPalindrome,
	compterLesLettres,
	compteCaracteres,
	compteVoyelles,
	compteConsonnes,
	concatenation,
};
