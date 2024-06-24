const strings = require('./strings');

describe('Strings', () => {

	describe('Compter les mots', () => {
		test('Compter les mots dans une phrase', () => {
			expect(strings.compteMots('Hello')).toBe(1);
		});

		test('Compter les mots dans une phrase avec des espaces', () => {
			expect(strings.compteMots(' Hello World ')).toBe(2);
		});
	});

	describe('Inverser une chaîne de caractères', () => {
		test('Inverser un mots', () => {
			expect(strings.inverser('Hello')).toBe('olleH');
		});

		test('Inverser deux mots', () => {
			expect(strings.inverser('Hello World')).toBe('dlroW olleH');
		});
	});

	describe('Tester les palindromes', () => {
		test('kayak est un palindrome', () => {
			expect(strings.estPalindrome('kayak')).toBe(true);
		});

		test('hello n\'est pas un palindrome', () => {
			expect(strings.estPalindrome('hello')).toBe(false);
		});
	});

	describe('Compter les caractères', () => {
		test('Compter les caractères dans un mot', () => {
			expect(strings.compteCaracteres('Hello')).toBe(5);
		});

		test('Compter les caractères dans une phrase', () => {
			expect(strings.compteCaracteres('Hello World')).toBe(11);
		});
	});

	describe('Compter les lettres', () => {
		test('Compter les lettres dans un mot', () => {
			expect(strings.compterLesLettres('Hello')).toBe(5);
		});

		test('Compter les lettres dans une phrase', () => {
			expect(strings.compterLesLettres('Hello World')).toBe(10);
		});
	})

	describe('Compter les voyelles', () => {
		test('Compter les voyelles dans un mot', () => {
			expect(strings.compteVoyelles('Hello')).toBe(2);
		});

		test('Compter les voyelles dans une phrase', () => {
			expect(strings.compteVoyelles('hello world')).toBe(3);
		});

		test('Compter les voyelles dans une phrase avec des majuscules', () => {
			expect(strings.compteVoyelles('HellO World')).toBe(3);
		});
	});

	describe('Compter les consonnes', () => {
		test('Compter les consonnes dans un mot', () => {
			expect(strings.compteConsonnes('Hello')).toBe(3);
		});

		test('Compter les consonnes dans une phrase', () => {
			expect(strings.compteConsonnes('hello world')).toBe(7);
		});

		test('Compter les consonnes dans une phrase avec des majuscules', () => {
			expect(strings.compteConsonnes('HellO World')).toBe(7);
		});
	});

	describe('Concaténation', () => {
		test('Concaténation de deux chaînes de caractères', () => {
			expect(strings.concatenation('Hello', 'World')).toBe('HelloWorld');
		});
	});
});	
