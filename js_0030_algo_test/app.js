// 1 funcion para devolver los numeros pares entre a y b
export function numerosPares(a, b) {
  let resultado = ""
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      resultado += i + ";"
    }
  }
  return resultado
}
// 2 funcion para hacer la tabla de multiplicar de un numero
export function tablaMultiplicar(numero) {
  let resultado = ""
  for (let i = 0; i <= 10; i++) {
    resultado += numero + "*" + i + "=" + numero * i + ";"
  }
  return resultado
}
// 3 funcion para devolver el mayor de tres numeros
export function mayorDeTresNumeros(a, b, c) {
  return Math.max(a, b, c)
}
// 4 funcion para devolver la suma de los numero entre a y b
export function sumaEntreNumeros(a, b) {
  let suma = 0
  for (let i = a; i <= b; i++) {
    suma += i
  }
  return suma
}
// 5 funcion para devolver el numero de numeros pares entre a y b
export function numerosParesCount(a, b) {
  let count = 0
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      count++
    }
  }
  return count
}

// 6 funcion para calcular la media de las notas pasadas como parametros.
export function mediaDeNotas(a, b, c, d, e, f, g, h, i, j) {
  let suma = a + b + c + d + e + f + g + h + i + j
  return suma / 10
}

// 7 ver las combinacion de 3 numeros (del 1 al 9) que sumen n
export function combinacionesDeTresNumeros(a, b, c, n) {
  if (a + b + c === n) {
    return 1
  }
  return 0
}

// 8 ver las combinaciones de 4 numeros (del 1 al 9) que sumen n
export function combinacionesDeCuatroNumeros(a, b, c, d, n) {
  if (a + b + c + d === n) {
    return 1
  }
  return 0
}

// 9 funcion que compruve si un numero es primo.
export function esPrimo(n) {
  if (n < 2) return false
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
// 10 funcion que devuelva el factorial de un numero
export function factorial(n) {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}




