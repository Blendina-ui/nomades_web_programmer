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
  // return phrase.trim().split(" ").length

  const tmp = phrase.trim()
  let count = 1
  for(let i=0; i<tmp.length; i++){
    if(tmp[i] === " "){
      count++
    }
  }
  return count
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
  // return mot.split("").reverse().join("")

  let mot2 = ""
  for(let i=mot.length-1; i>=0; i--){
    mot2 += mot[i] // mot2 = mot2 + mot[i]
  }
  return mot2
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
  // for(let i=0; i<Math.ceil(mot.length/2); i++){ // i++ <==> i += 1 <==> i=i+1
  //   if(mot[i] !== mot[(mot.length-1)-i]){
  //     return false
  //   }
  // }
  // return true

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
  return mot.length
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
  let nbLettres = 0
  const rangeMinuscules = ["a".charCodeAt(0), "z".charCodeAt(0)]
  const rangeMajuscules = ["A".charCodeAt(0), "Z".charCodeAt(0)]

  for(let i=0; i<mot.length; i++){
    const currentAsciiValue = mot.charCodeAt(i)
    if((currentAsciiValue >= rangeMinuscules[0] && currentAsciiValue <= rangeMinuscules[1])
    || (currentAsciiValue >= rangeMajuscules[0] && currentAsciiValue <= rangeMajuscules[1])){
      nbLettres++
    }
  }
  return nbLettres
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
  let count = 0
  const vowels = "aeiouy"

  for(c of mot.toLowerCase()){
    // for(v of vowels){
    //   if(c===v){
    //     count++
    //     break
    //   }
    // }
    // if(vowels.indexOf(c) !== -1){
    //   count++ 
    // }
    count += (c==="a" || c==="e"|| c==="i"|| c==="o"|| c==="u"|| c==="y") 
    // if(c==="a" || c==="e"|| c==="i"|| c==="o"|| c==="u"|| c==="y"){
    //   count++
    // }
  }
  return count

  // const vowels = "aeiouy"
  // const vowelMaj = "AEIOUY"
  // let nbVowels = 0
  
  // for(let i=0; i<mot.length; i++){
  //   for(let j=0; j<vowels.length; j++){
  //     if(mot[i] === vowels[j] || mot[i] === vowelMaj[j]){
  //       nbVowels++
  //     }
  //   }
  // }
  // return nbVowels
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
  return compterLesLettres(mot) - compteVoyelles(mot)
  // let count = 0
  // const vowels = "aeiouy"

  // for(let i=0; i<mot.length; i++){
  //   if(vowels.indexOf(mot[i].toLowerCase()) === -1 && mot[i] !== " "){
  //     count++
  //   }
  // }
  return count
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
