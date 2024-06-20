
const arrayFunctions = require('./arrayFunctions');

describe('Fonctions de tableau', () => {
  let array;

  beforeEach(() => {
    array = [1, 2, 3, 4, 5];
  });

  test('map() applique une fonction de transformation à chaque élément du tableau', () => {
    const mappedArray = arrayFunctions.map(array, (num) => num * 2);
    expect(mappedArray).toEqual([2, 4, 6, 8, 10]);
  });

  test('filter() filtre les éléments du tableau en fonction d\'une condition', () => {
    const filteredArray = arrayFunctions.filter(array, (num) => num % 2 === 0);
    expect(filteredArray).toEqual([2, 4]);
  });

  test('reduce() réduit les éléments du tableau à une seule valeur', () => {
    const sum = arrayFunctions.reduce(array, (accumulator, num) => accumulator + num, 0);
    expect(sum).toBe(15);
  });

  test('forEach() exécute une fonction pour chaque élément du tableau', () => {
    let sum = 0;
    arrayFunctions.forEach(array, (num) => {
      sum += num;
    });
    expect(sum).toBe(15);
  });

  test('every() vérifie si tous les éléments du tableau satisfont une condition', () => {
    const allLessThan6 = arrayFunctions.every(array, (num) => num < 6);
    expect(allLessThan6).toBe(true);

    const allLessThan5 = arrayFunctions.every(array, (num) => num < 5);
    expect(allLessThan5).toBe(false);
  });

  test('some() vérifie si au moins un élément du tableau satisfait une condition', () => {
    const hasEvenNumber = arrayFunctions.some(array, (num) => num % 2 === 0);
    expect(hasEvenNumber).toBe(true);

    const hasNegativeNumber = arrayFunctions.some(array, (num) => num < 0);
    expect(hasNegativeNumber).toBe(false);
  });

  test('find() renvoie le premier élément du tableau qui satisfait une condition', () => {
    const foundElement = arrayFunctions.find(array, (num) => num > 2);
    expect(foundElement).toBe(3);
  });

  test('findIndex() renvoie l\'index du premier élément du tableau qui satisfait une condition', () => {
    const foundIndex = arrayFunctions.findIndex(array, (num) => num > 2);
    expect(foundIndex).toBe(2);
  });

  test('pop() retire et renvoie le dernier élément du tableau', () => {
    const lastElement = arrayFunctions.pop(array);
    expect(lastElement).toBe(5);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  test('indexOf() renvoie l\'index de l\'élément recherché dans le tableau', () => {
    const index = arrayFunctions.indexOf(array, 3);
    expect(index).toBe(2);
  });

  test('flat() aplatit les tableaux imbriqués en un seul tableau', () => {
    const nestedArray = [1, [2, [3, [4, 5]]]];
    const flattenedArray = arrayFunctions.flat(nestedArray);
    expect(flattenedArray).toEqual([1, 2, 3, 4, 5]);
  });

  test('flatMap() applique une fonction de transformation et aplatit le résultat', () => {
    const resultArray = arrayFunctions.flatMap(array, (num) => [num, num * 2]);
    expect(resultArray).toEqual([1, 2, 2, 4, 3, 6, 4, 8, 5, 10]);
  });
});