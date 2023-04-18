describe('Suite de testes de adição', () => {
    
    const Calculadora = require("../../src/js/calculadora");    
    
    it('deve retornar 5 para valores 2 e 3', () => {
        expect(Calculadora.adicionar(2, 3)).toEqual(5);    
    });
});