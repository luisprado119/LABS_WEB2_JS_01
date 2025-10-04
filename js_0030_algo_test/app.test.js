import { expect, test } from "bun:test";

const {
    numerosPares,
    tablaMultiplicar,
    mayorDeTresNumeros,
    sumaEntreNumeros,
    numerosParesCount,
    mediaDeNotas,
    combinacionesDeTresNumeros,
    combinacionesDeCuatroNumeros,
    esPrimo,
    factorial


} = require('./app');


test('numeros pares', () => {
    // arrange 
    const a = 2
    const b = 10
    const expected = "2;4;6;8;10;"
    // act
    const result = numerosPares(a, b);
    // assert
    expect(result).toBe(expected);
})
test('mayor de 3 numeros', () => {
    // arrange 
    const a = 3;
    const b = 4;
    const c = 5;

    // act
    const result = mayorDeTresNumeros(a, b, c);
    // assert
    expect(result).toBe(5);
});
test('suma entre numeros', () => {
    // arrange 
    const a = 2;
    const b = 4;

    // act
    const result = sumaEntreNumeros(a, b);
    // assert
    expect(result).toBe(9);
});
test('numeros pares count', () => {
    // arrange 
    const a = 2;
    const b = 10;

    // act
    const result = numerosParesCount(a, b);
    // assert
    expect(result).toBe(5);
});
test('media de notas', () => {
    // arrange 
    const a = 2;
    const b = 4;
    const c = 6;
    const d = 8;
    const e = 10;
    const f = 12;
    const g = 14;
    const h = 16;
    const i = 18;
    const j = 20;

    // act
    const result = mediaDeNotas(a, b, c, d, e, f, g, h, i, j);
    // assert
    expect(result).toBe(11);
});

test('combinaciones de tres numeros', () => {
    // arrange 
    const a = 1;
    const b = 2;
    const c = 3;
    const n = 6;

    // act
    const result = combinacionesDeTresNumeros(a, b, c, n);
    // assert
    expect(result).toBe(1);
});
test('combinaciones de cuatro numeros', () => {
    // arrange 
    const a = 1;
    const b = 2;
    const c = 3;
    const d = 4;
    const n = 10;

    // act
    const result = combinacionesDeCuatroNumeros(a, b, c, d, n);
    // assert
    expect(result).toBe(1);
});
test('es primo', () => {
    // arrange 
    const n = 7;

    // act
    const result = esPrimo(n);
    // assert
    expect(result).toBe(true);
})
test('tabla multiplicar', () => {
    // arrange 
    const numero = 5;
    const expected = "5*0=0;5*1=5;5*2=10;5*3=15;5*4=20;5*5=25;5*6=30;5*7=35;5*8=40;5*9=45;5*10=50;"
    // act
    const result = tablaMultiplicar(numero);
    // assert
    expect(result).toBe(expected);
});
test('factorial', () => {
    // arrange 
    const n = 5;
    // act
    const result = factorial(n);
    // assert
    expect(result).toBe(120);
});




