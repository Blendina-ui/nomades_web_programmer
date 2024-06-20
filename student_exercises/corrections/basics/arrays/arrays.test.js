const array = require('./arrays');

// writes unit tests for the functions in the array module
describe('Array', () => {
	describe('Tri', () => {
		test('Tri croissant', () => {
			expect(array.triCroissant([1, 3, 2, 5, 4])).toEqual([1, 2, 3, 4, 5]);
		});

		test('Tri décroissant', () => {
			expect(array.triDecroissant([1, 3, 2, 5, 4])).toEqual([5, 4, 3, 2, 1]);
		});
	});

	describe('Statistiques', () => {
		describe('Somme', () => {
			test('Somme d\'un tableau', () => {
				expect(array.somme([1, 2, 3, 4, 5])).toBe(15);
			});
		});

		describe('Moyenne', () => {
			test('Moyenne d\'un tableau', () => {
				expect(array.moyenne([1, 2, 3, 4, 5])).toBe(3);
			});

			test('Moyenne a virgule d\'un tableau', () => {
				expect(array.moyenne([1, 2, 3, 4, 5, 6])).toBe(3.5);
			});

			test('Moyenne d\'un tableau avec la même valuere', () => {
				expect(array.moyenne([1, 1, 1, 1, 1, 1])).toBe(1);
			});

			test('Moyenne d\'un tableau avec extrêmes', () => {
				expect(array.moyenne([1, 1, 1, 10, 10])).toBe(4.6);
			});
		});

		describe('Min', () => {
			test('Min d\'un tableau', () => {
				expect(array.min([1, 2, 3, 4, 5])).toBe(1);
			});

			test('Min d\'un tableau non trié', () => {
				expect(array.min([10, 3, 2, 5, 4])).toBe(2);
			});
		});

		describe('Max', () => {
			test('Max d\'un tableau', () => {
				expect(array.max([1, 2, 3, 4, 5])).toBe(5);
			});

			test('Max d\'un tableau non trié', () => {
				expect(array.max([10, 3, 2, 5, 4])).toBe(10);
			});
		});

		describe('MinMax', () => {
			test('MinMax d\'un tableau', () => {
				expect(array.minMax([1, 2, 3, 4, 5])).toEqual([1, 5]);
			});
		});

		describe('Médiane', () => {
			test('Médiane d\'un tableau impair', () => {
				expect(array.mediane([1, 2, 3, 4, 5])).toBe(3);
			});

			test('Médiane d\'un tableau pair', () => {
				expect(array.mediane([1, 2, 3, 4, 5, 6])).toBe(3.5);
			});

			test('Médiane d\'un tableau avec la même valeur', () => {
				expect(array.mediane([1, 1, 1, 1, 1, 1])).toBe(1);
			});

			test('Médiane d\'un tableau avec extrêmes', () => {
				expect(array.mediane([1, 1, 1, 1, 10, 10])).toBe(1);
			});
		});

    /*
		describe('Mode', () => {
			test('Mode d\'un tableau', () => {
				expect(array.mode([1, 2, 3, 4, 5])).toBe(1);
			});

			test('Mode d\'un tableau avec la même valeur', () => {
				expect(array.mode([1, 1, 1, 1, 1, 1])).toBe(1);
			});

			test('Mode d\'un tableau avec extrêmes', () => {
				expect(array.mode([1, 1, 1, 1, 10, 10])).toBe(1);
			});

			test('Mode d\'un tableau', () => {
				expect(array.mode([4, 2, 4, 3, 2, 2])).toBe(2);
			});
		});
    */
		describe('Ecart type', () => {
			test('Ecart type d\'un tableau', () => {
				expect(array.ecartType([1, 2, 3, 4, 5])).toBe(1.4142135623730951);
			});

			test('Ecart type d\'un tableau avec la même valeur', () => {
				expect(array.ecartType([1, 1, 1, 1, 1, 1])).toBe(0);
			});

			test('Ecart type d\'un tableau avec extrêmes', () => {
				expect(array.ecartType([1, 1, 1, 10, 10])).toBe(4.409081537009721);
			});

			test('Ecart type d\'un tableau', () => {
				expect(array.ecartType([4, 2, 4, 3, 2, 2])).toBe(0.8975274678557507);
			});
		});
	});

	describe('Fonctions diverses', () => {

		describe('Recherche de valeur dans un tableaux', () => {
			test('Savoir si une valeur existe dans un tableau, true', () => {
				expect(array.existe([1, 2, 3], 2)).toBe(true);
			});

			test('Savoir si une valeur existe dans un tableau, false', () => {
				expect(array.existe([1, 2, 3], 4)).toBe(false);
			});

			test('Savoir la postion d\'une valeure dans un tableau (0)', () => {
				expect(array.position([1, 2, 3], 1)).toBe(0);
			});

			test('Savoir la postion d\'une valeure dans un tableau (1)', () => {
				expect(array.position([1, 2, 3], 2)).toBe(1);
			});

			test('Savoir la postion d\'une valeure dans un tableau (-1)', () => {
				expect(array.position([1, 2, 3], 4)).toBe(-1);
			});
		});

		describe('Fonction de comparaison', () => {
			test('Comparaison de deux tableaux similaires', () => {
				expect(array.similaires([1, 2, 3], [1, 2, 3])).toBe(true);
			});

			test('Comparaison de deux tableaux différents', () => {
				expect(array.similaires([1, 2, 3], [1, 2, 4])).toBe(false);
			});

			test('Comparaison de deux tableaux différents', () => {
				expect(array.similaires([1, 2, 3], [1, 2])).toBe(false);
			});
		});
/*
		describe('Fonction de types', () => {
			test('Vérification d\'un tableau vide', () => {
				expect(array.estTableau([])).toBe(true);
			});

			test('Vérification d\'un tableau', () => {
				expect(array.estTableau([1, 2, 3])).toBe(true);
			});

			test('Verification d\'un Nombre', () => {
				expect(array.estTableau(1)).toBe(false);
			});

			test('Vérification d\'un tableau de Nombres', () => {
				expect(array.estTableauDeNombres([])).toBe(true);
			});

			test('Vérification d\'un tableau de Nombres', () => {
				expect(array.estTableauDeNombres([1, 2, 3])).toBe(true);
			});

			test('Vérification d\'un tableau de Nombres', () => {
				expect(array.estTableauDeNombres([1, 2, '3'])).toBe(false);
			});

			test('Vérification d\'un tableau de Nombres', () => {
				expect(array.estTableauDeNombres(1)).toBe(false);
			});
		});
    */
	});
});
