import { expect, test } from "bun:test";

const { mayorDeTresNumeros,
    ceroIfNull,
    numerosParesCount,
    ifCadenaMasLargaDeN,
    trueIfSumaDeTresNumerosIgualN,
    importe
 } = require('./app');

 test('mayor de 3 numeros', () => {
    //  arrange 
    const a = 3;
    const b = 4;
    const c = 5;

    // act
    const result = mayorDeTresNumeros(a, b, c);
    // assert
    expect(result).toBe(5);
});

test('cero is null', () => {
    // arrange 
    const a = null;
   

    // act
    const result = ceroIfNull(a);
    // assert
    expect(result).toBe(0);
});


test('cero is null, valor distinto de nulo', () => {
    // arrange 
    const a = 12;
    // act
    const result = ceroIfNull(a);
    // assert
    expect(result).toBe(12);
});

test('contar pares desde un numero a otro', () => {
    // arrange 
    const a = 12;
    const b = 20
    // act
    const result = numerosParesCount(a, b);
    // assert
    expect(result).toBe(5);
});

test('contar pares desde un numero a otro', () => {
    // arrange 
    const a = 20;
    const b = 12
    // act
    const result = numerosParesCount(a, b);
    // assert
    expect(result).toBe(0);
});

test ('cadena de longitu mayor o igual a  n', () => {
    // arrange 
    const cadena = 'hola';
    const n = 4;
    // act
    const result = ifCadenaMasLargaDeN(cadena, n);
    // assert
    expect(result).toBe(false);
});

test ('cadena de longitu mayor o igual a  n', () => {
    // arrange 
    const cadena = 'hola';
    const n = 3;
    // act
    const result = ifCadenaMasLargaDeN(cadena, n);
    // assert
    expect(result).toBe(true);
});
test ('cadena vacia de longitud  mayor o igual a  n', () => {
    // arrange 
    const cadena = '';
    const n = 1;
    // act
    const result = ifCadenaMasLargaDeN(cadena, n);
    // assert
    expect(result).toBe(false);
});

test ('suma de tres numeros igual a n', () => {
    // arrange 
    const a = 1;
    const b = 2;
    const c = 3;
    const n = 6;
    // act
    const result = trueIfSumaDeTresNumerosIgualN(a,b,c,n);
    // assert
    expect(result).toBe(true);
});

test ('suma de tres numeros igual a n', () => {
    // arrange 
    const a = 1;
    const b = 2;
    const c = 3;
    const n = 7;
    // act
    const result = trueIfSumaDeTresNumerosIgualN(a,b,c,n);
    // assert
    expect(result).toBe(false);
})

test ('centimos  ', () => {
    // arrange 
    const cantidad = 15.56;
    const precio = 1.45;
    // act
    const result = importe(cantidad , precio);
    // assert
    expect(result).toBe(2256);
})

test ('centimos  ', () => {
    // arrange 
    const cantidad = 5;
    const precio = 5;
    // act
    const result = importe(cantidad , precio);
    // assert
    expect(result).toBe(2500);
})
