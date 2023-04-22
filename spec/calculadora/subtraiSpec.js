describe('Suite de testes de subtração', () => {
    
    const Calculadora = require("../../src/js/calculadora");    
    
    it('deve retornar 5 para valores 8 e 3', () => {
        expect(Calculadora.subtrair(8, 3)).toEqual(5);    
    });

    it('deve retornar 5 para 8 e 3 em formato texto', () => {
        expect(Calculadora.subtrair('8', '3')).toEqual(5);
    });

    it('deve retornar 4 para 5.5 e 1.5', () => {
        expect(Calculadora.subtrair(5.5, 1.5)).toEqual(4);
    });
    it('deve retornar 0 quando valor 1 for inválido', () => {
        expect(Calculadora.subtrair(undefined, 1)).toEqual(0);
    });

    it('deve retornar 0 quando valor 2 for inválido', () => {
        expect(Calculadora.subtrair(2, undefined)).toEqual(0);
    });
});