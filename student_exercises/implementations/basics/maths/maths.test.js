const maths = require('./maths');

// writes unit tests for the functions in the array module
describe('Maths', () => {
	describe('Tester si un nombre est pair', () => {
		describe('Pair', () => {
			test('2 est pair', () => {
				expect(maths.estPair(2)).toBe("Le nombre est pair");
			});
		});

		describe('Impair', () => {
			test('3 est impair', () => {
				expect(maths.estPair(3)).toBe("Le nombre est impair");
			});
		});
	});

	describe('Factorielle', () => {
		test('Factorielle de 0', () => {
			expect(maths.factorielle(0)).toBe(1);
		});

		test('Factorielle de 1', () => {
			expect(maths.factorielle(1)).toBe(1);
		});

		test('Factorielle de 2', () => {
			expect(maths.factorielle(2)).toBe(2);
		});

		test('Factorielle de 3', () => {
			expect(maths.factorielle(3)).toBe(6);
		});

		test('Factorielle de 4', () => {
			expect(maths.factorielle(4)).toBe(24);
		});

		test('Factorielle de 5', () => {
			expect(maths.factorielle(5)).toBe(120);
		});

		test('Factorielle de 6', () => {
			expect(maths.factorielle(6)).toBe(720);
		});

		test('Factorielle de 7', () => {
			expect(maths.factorielle(7)).toBe(5040);
		});

		test('Factorielle de 25', () => {
			expect(maths.factorielle(25)).toBe(15511210043330985984000000);
		});
	});

	describe('Fibonacci', () => {
		test('Fibonacci de 0', () => {
			expect(maths.fibonacci(0)).toBe(0);
		});

		test('Fibonacci de 1', () => {
			expect(maths.fibonacci(1)).toBe(1);
		});

		test('Fibonacci de 2', () => {
			expect(maths.fibonacci(2)).toBe(1);
		});

		test('Fibonacci de 3', () => {
			expect(maths.fibonacci(3)).toBe(2);
		});

		test('Fibonacci de 4', () => {
			expect(maths.fibonacci(4)).toBe(3);
		});

		test('Fibonacci de 5', () => {
			expect(maths.fibonacci(5)).toBe(5);
		});

		test('Fibonacci de 6', () => {
			expect(maths.fibonacci(6)).toBe(8);
		});

		test('Fibonacci de 7', () => {
			expect(maths.fibonacci(7)).toBe(13);
		});

		test('Fibonacci de 25', () => {
			expect(maths.fibonacci(25)).toBe(75025);
		});
	});
	

	describe('Somme des n premiers entiers', () => {
		test('Somme des 0 premiers entiers', () => {
			expect(maths.somme(0)).toBe(0);
		});

		test('Somme des 1 premiers entiers', () => {
			expect(maths.somme(1)).toBe(1);
		});

		test('Somme des 2 premiers entiers', () => {
			expect(maths.somme(2)).toBe(3);
		});

		test('Somme des 3 premiers entiers', () => {
			expect(maths.somme(3)).toBe(6);
		});

		test('Somme des 4 premiers entiers', () => {
			expect(maths.somme(4)).toBe(10);
		});

		test('Somme des 5 premiers entiers', () => {
			expect(maths.somme(5)).toBe(15);
		});

		test('Somme des 10 premiers entiers', () => {
			expect(maths.somme(10)).toBe(55);
		});

		test('Somme des 50 premiers entiers', () => {
			expect(maths.somme(50)).toBe(1275);
		});
	});

	describe('Mise au carré', () => {
		test('Mise au carré de 0', () => {
			expect(maths.auCarre(0)).toBe(0);
		});

		test('Mise au carré de 1', () => {
			expect(maths.auCarre(1)).toBe(1);
		});

		test('Mise au carré de 2', () => {
			expect(maths.auCarre(2)).toBe(4);
		});

		test('Mise au carré de 3', () => {
			expect(maths.auCarre(3)).toBe(9);
		});

		test('Mise au carré de 4', () => {
			expect(maths.auCarre(4)).toBe(16);
		});

		test('Mise au carré de 5', () => {
			expect(maths.auCarre(5)).toBe(25);
		});

		test('Mise au carré de 10', () => {
			expect(maths.auCarre(10)).toBe(100);
		});

		test('Mise au carré de 50', () => {
			expect(maths.auCarre(50)).toBe(2500);
		});
	});

  describe('Nombre premier', () => { 
    test('Nombre premier de 0', () => {
      expect(maths.estPremier(0)).toBe(false);
    });
    test('Nombre premier de 1', () => {
      expect(maths.estPremier(1)).toBe(false);
    });
    test('Nombre premier de 2', () => {
      expect(maths.estPremier(2)).toBe(true);
    });
    test('Nombre premier de 3', () => {
      expect(maths.estPremier(3)).toBe(true);
    });
    test('Nombre premier de 4', () => {
      expect(maths.estPremier(4)).toBe(false);
    });
    test('Nombre premier de 5', () => {
      expect(maths.estPremier(5)).toBe(true);
    });  
    test('Nombre premier de 6', () => {
      expect(maths.estPremier(6)).toBe(false);
    });  
  });
});
