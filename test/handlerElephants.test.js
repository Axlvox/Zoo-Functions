const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  test('retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  test('retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  test('retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  test('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const expectedAvailability = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toEqual(expect.arrayContaining(expectedAvailability));
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  test('não foi passado argumento', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  test('retorna parâmetro inválido', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  test('não contempla funcionalidade', () => {
    expect(handlerElephants('default')).toBeNull();
  });
});
