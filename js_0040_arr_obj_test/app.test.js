import { expect, test } from "bun:test";

const { sumaArr,
    mayores,
    mayoresEdad,
    mediaEdad,
    mayoresIgualMedia } = require('./app');


const personas = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'Ana', edad: 15 },
    { nombre: 'Pedro', edad: 30 },
    { nombre: 'Maria', edad: 25 },
    { nombre: 'Luis', edad: 10 },
    { nombre: 'Laura', edad: 40 },
]


test('sum elementos de una array', () => {
    // arrange 
    const arr = [1, 2, 3, 4, 5];
    // act
    const result = sumaArr(arr);
    // assert
    expect(result).toBe(15);
});

test('sum elementos de una array vacio', () => {
    // arrange 
    const arr = [];
    // act
    const result = sumaArr(arr);
    // assert
    expect(result).toBe(0);
});



test('mayores a un numero', () => {
    // arrange 
    const arr = [33, 44, 33, 32, 21];
    const num = 33;
    // act
    const result = mayores(arr, num);
    // assert
    expect(result).toEqual([44]);
});

test('mayores a un numero vacio', () => {  
    // arrange 
    const arr = [];
    const num = 33;
    // act
    const result = mayores(arr, num);
    // assert
    expect(result).toEqual([]);
});

test('mayores de edad', () => {
    // arrange
    const personas = [
            { nombre: 'Juan', edad: 20 },
            { nombre: 'Ana', edad: 15 },
            { nombre: 'Pedro', edad: 30 },
            { nombre: 'Maria', edad: 25 },
            { nombre: 'Luis', edad: 10 },
            { nombre: 'Laura', edad: 40 }
        ];
    const num = 30;
    // act
    const result = mayoresEdad(personas, num);
    // assert
    expect(result).toEqual([ { nombre: 'Laura', edad: 40 }]);
});

test('media de edades', () => {
    // arrange
    const personas = [
        { nombre: 'Juan', edad: 20 },
        { nombre: 'Ana', edad: 15 },
        { nombre: 'Pedro', edad: 30 },
        { nombre: 'Maria', edad: 25 },
        { nombre: 'Luis', edad: 10 },
        { nombre: 'Laura', edad: 40 }
    ];
    // act
    const result = mediaEdad(personas);
    // assert
    expect(result).toBe(23.333333333333332);
});

test('mayores o iguales a la media', () => {
    // arrange
    const personas = [
        { nombre: 'Juan', edad: 20 },
        { nombre: 'Ana', edad: 15 },
        { nombre: 'Pedro', edad: 30 },
        { nombre: 'Maria', edad: 25 },
        { nombre: 'Luis', edad: 10 },
        { nombre: 'Laura', edad: 40 }
    ];
    // act
    const result = mayoresIgualMedia(personas);
    // assert
    expect(result).toEqual([ { nombre: 'Pedro', edad: 30 }, { nombre: 'Maria', edad: 25 }, { nombre: 'Laura', edad: 40 }]);
});
