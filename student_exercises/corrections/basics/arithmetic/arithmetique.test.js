const arithmetic = require('./arithmetic');

describe('Arithmetic', () => {
describe('Addition', () => {
  test('Addition de deux nombres positifs', () => {
    expect(arithmetic.add(2, 3)).toBe(5);
  });

  test('Addition de deux nombres négatifs', () => {
    expect(arithmetic.add(-2, -3)).toBe(-5);
  });

  test('Addition de nombres positifs et négatifs', () => {
    expect(arithmetic.add(2, -3)).toBe(-1);
  });
});

describe('Soustraction', () => {
    test('Soustraction de deux nombres positifs', () => {
        expect(arithmetic.sub(2, 3)).toBe(-1);
    });
    
    test('Soustraction de deux nombres négatifs', () => {
        expect(arithmetic.sub(-2, -3)).toBe(1);
    });
    
    test('Soustraction de nombres positifs et négatifs', () => {
        expect(arithmetic.sub(2, -3)).toBe(5);
    });
});

describe('Multiplication', () => {
    test('Multiplication de deux nombres positifs', () => {
        expect(arithmetic.mul(2, 3)).toBe(6);
    });
    
    test('Multiplication de deux nombres négatifs', () => {
        expect(arithmetic.mul(-2, -3)).toBe(6);
    });
    
    test('Multiplication de nombres positifs et négatifs', () => {
        expect(arithmetic.mul(2, -3)).toBe(-6);
    });
    
    test('Multiplication par zéro', () => {
        expect(arithmetic.mul(2, 0)).toBe(0);

    });
});

describe('Division', () => {
    test('Division de deux nombres positifs', () => {
        expect(arithmetic.div(6, 3)).toBe(2);
    });
    
    test('Division de deux nombres négatifs', () => {
        expect(arithmetic.div(-6, -3)).toBe(2);
    });
    
    test('Division de nombres positifs et négatifs', () => {
        expect(arithmetic.div(6, -3)).toBe(-2);
    });
    
    test('Division par zéro', () => {
        expect(() => arithmetic.div(2, 0)).toThrow('Division par zero');
    });
});
});
