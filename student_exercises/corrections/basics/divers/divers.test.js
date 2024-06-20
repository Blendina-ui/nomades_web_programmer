const divers = require('./divers');

// writes unit tests for the functions in the array module
describe('Divers', () => {
	describe('Tester si une personne est majeur', () => {
		describe('Majeur', () => {
			test('18 est majeur', () => {
				expect(divers.estMajeur(18)).toBe("Vous êtes majeur !");
			});

			test('19 est majeur', () => {
				expect(divers.estMajeur(19)).toBe("Vous êtes majeur !");
			});
		});

		describe('Mineur', () => {
			test('17 est mineur', () => {
				expect(divers.estMajeur(17)).toBe("Vous êtes mineur !");
			});

			test('16 est mineur', () => {
				expect(divers.estMajeur(16)).toBe("Vous êtes mineur !");
			});
		});
	});
});
