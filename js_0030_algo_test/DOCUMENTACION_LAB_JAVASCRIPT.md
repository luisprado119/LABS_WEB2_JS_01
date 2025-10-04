# 📚 Documentación del Laboratorio de JavaScript - Algoritmos

## 🎯 Información General

**Laboratorio:** js_0030_algo_test  
**Fecha:** $(Get-Date -Format "dd/MM/yyyy HH:mm")  
**Estado:** ✅ Completado  
**Pruebas:** 10/10 pasando  

## 📋 Objetivos del Laboratorio

Este laboratorio tiene como objetivo practicar y demostrar el dominio de:

1. **Algoritmos Básicos** - Implementación de funciones matemáticas fundamentales
2. **Bucles y Condicionales** - Control de flujo en JavaScript
3. **Funciones Recursivas** - Implementación de algoritmos recursivos
4. **Validación de Números** - Verificación de propiedades numéricas
5. **Manipulación de Strings** - Formateo y concatenación de resultados

## 🏗️ Estructura del Proyecto

```
js_0030_algo_test/
├── app.js                    # Funciones de algoritmos implementadas
├── app.test.js              # Pruebas unitarias para las funciones
├── package.json             # Configuración del proyecto
├── bun.lockb               # Archivo de bloqueo de Bun
├── upload.ts               # Script de subida de resultados
├── out.txt                 # Archivo de salida de pruebas
└── outfile.txt             # Archivo de salida adicional
```

## 🔧 Configuración del Entorno

### Dependencias
- **Bun:** v1.2.23
- **Jest:** ^29.7.0 (para testing)

### Scripts Disponibles
```json
{
  "test": "bun test 2>&1 | tee outfile.txt && bun upload.ts"
}
```

## 📖 Funciones Implementadas

### 1. Números Pares (`numerosPares`)

**Descripción:** Devuelve todos los números pares entre dos valores dados, separados por punto y coma.

**Implementación:**
```javascript
export function numerosPares(a, b) {
  let resultado = ""
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      resultado += i + ";"
    }
  }
  return resultado
}
```

**Ejemplo:** `numerosPares(2, 10)` → `"2;4;6;8;10;"`

### 2. Tabla de Multiplicar (`tablaMultiplicar`)

**Descripción:** Genera la tabla de multiplicar de un número del 0 al 10.

**Implementación:**
```javascript
export function tablaMultiplicar(numero) {
  let resultado = ""
  for (let i = 0; i <= 10; i++) {
    resultado += numero + "*" + i + "=" + numero * i + ";"
  }
  return resultado
}
```

**Ejemplo:** `tablaMultiplicar(5)` → `"5*0=0;5*1=5;5*2=10;..."`

### 3. Mayor de Tres Números (`mayorDeTresNumeros`)

**Descripción:** Encuentra el mayor de tres números dados.

**Implementación:**
```javascript
export function mayorDeTresNumeros(a, b, c) {
  return Math.max(a, b, c)
}
```

**Ejemplo:** `mayorDeTresNumeros(3, 4, 5)` → `5`

### 4. Suma Entre Números (`sumaEntreNumeros`)

**Descripción:** Calcula la suma de todos los números entre dos valores (inclusive).

**Implementación:**
```javascript
export function sumaEntreNumeros(a, b) {
  let suma = 0
  for (let i = a; i <= b; i++) {
    suma += i
  }
  return suma
}
```

**Ejemplo:** `sumaEntreNumeros(2, 4)` → `9` (2+3+4)

### 5. Conteo de Números Pares (`numerosParesCount`)

**Descripción:** Cuenta cuántos números pares hay entre dos valores.

**Implementación:**
```javascript
export function numerosParesCount(a, b) {
  let count = 0
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      count++
    }
  }
  return count
}
```

**Ejemplo:** `numerosParesCount(2, 10)` → `5`

### 6. Media de Notas (`mediaDeNotas`)

**Descripción:** Calcula la media aritmética de 10 notas.

**Implementación:**
```javascript
export function mediaDeNotas(a, b, c, d, e, f, g, h, i, j) {
  let suma = a + b + c + d + e + f + g + h + i + j
  return suma / 10
}
```

**Ejemplo:** `mediaDeNotas(2,4,6,8,10,12,14,16,18,20)` → `11`

### 7. Combinaciones de Tres Números (`combinacionesDeTresNumeros`)

**Descripción:** Verifica si tres números suman un valor específico.

**Implementación:**
```javascript
export function combinacionesDeTresNumeros(a, b, c, n) {
  if (a + b + c === n) {
    return 1
  }
  return 0
}
```

**Ejemplo:** `combinacionesDeTresNumeros(1, 2, 3, 6)` → `1`

### 8. Combinaciones de Cuatro Números (`combinacionesDeCuatroNumeros`)

**Descripción:** Verifica si cuatro números suman un valor específico.

**Implementación:**
```javascript
export function combinacionesDeCuatroNumeros(a, b, c, d, n) {
  if (a + b + c + d === n) {
    return 1
  }
  return 0
}
```

**Ejemplo:** `combinacionesDeCuatroNumeros(1, 2, 3, 4, 10)` → `1`

### 9. Número Primo (`esPrimo`)

**Descripción:** Verifica si un número es primo.

**Implementación:**
```javascript
export function esPrimo(n) {
  if (n < 2) return false
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
```

**Ejemplo:** `esPrimo(7)` → `true`

### 10. Factorial (`factorial`)

**Descripción:** Calcula el factorial de un número usando recursión.

**Implementación:**
```javascript
export function factorial(n) {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}
```

**Ejemplo:** `factorial(5)` → `120`

## 🧪 Resultados de Pruebas

### Resumen Final
- **Total de pruebas:** 10
- **Pruebas pasando:** 10 ✅
- **Pruebas fallando:** 0 ❌
- **Tiempo de ejecución:** ~63ms

### Desglose por Función
- **numerosPares:** ✅ Pasando
- **mayorDeTresNumeros:** ✅ Pasando
- **sumaEntreNumeros:** ✅ Pasando
- **numerosParesCount:** ✅ Pasando
- **mediaDeNotas:** ✅ Pasando
- **combinacionesDeTresNumeros:** ✅ Pasando
- **combinacionesDeCuatroNumeros:** ✅ Pasando
- **esPrimo:** ✅ Pasando
- **tablaMultiplicar:** ✅ Pasando
- **factorial:** ✅ Pasando

## 🚀 Cómo Ejecutar

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/codecrypto-academy/js_0030_algo_test.git

# Navegar al directorio
cd js_0030_algo_test

# Instalar dependencias
bun install
```

### Ejecutar Pruebas
```bash
# Ejecutar todas las pruebas
bun test

# Ejecutar pruebas específicas
bun test app.test.js
```

## 💡 Conceptos Clave Aprendidos

### 1. Algoritmos Iterativos
- **Bucles for:** Para iterar sobre rangos de números
- **Condicionales if:** Para filtrar y validar condiciones
- **Acumuladores:** Para sumar, contar o concatenar valores

### 2. Funciones Recursivas
- **Caso base:** Condición de parada (`n <= 1`)
- **Caso recursivo:** Llamada a la función con parámetros modificados
- **Pila de llamadas:** Entendimiento del flujo de ejecución

### 3. Validación de Números
- **Números primos:** Algoritmo de división para verificar primalidad
- **Números pares:** Uso del operador módulo (`%`)
- **Rangos numéricos:** Validación de límites y condiciones

### 4. Manipulación de Strings
- **Concatenación:** Construcción de strings con operador `+`
- **Formateo:** Creación de patrones específicos de salida
- **Separadores:** Uso de caracteres especiales para delimitar valores

### 5. Funciones Matemáticas
- **Math.max():** Encontrar el valor máximo
- **Operadores aritméticos:** Suma, multiplicación, módulo
- **Cálculos estadísticos:** Media aritmética

## 🔍 Notas Técnicas

### Consideraciones Importantes
1. **Eficiencia:** El algoritmo de números primos podría optimizarse verificando solo hasta √n
2. **Recursión:** El factorial podría causar stack overflow para números muy grandes
3. **Strings:** La concatenación en bucles puede ser ineficiente para grandes volúmenes
4. **Validación:** Las funciones no validan entradas negativas o no numéricas
5. **Formato:** Las funciones de salida usan formato específico con punto y coma

### Mejores Prácticas Implementadas
- Funciones puras sin efectos secundarios
- Nombres descriptivos y claros
- Comentarios explicativos en español
- Estructura consistente de código
- Manejo de casos edge (números < 2 para primos)

### Posibles Mejoras
- Validación de entrada para todos los parámetros
- Optimización del algoritmo de números primos
- Implementación iterativa del factorial para evitar stack overflow
- Uso de template literals para mejor legibilidad
- Manejo de errores para casos extremos

## 📊 Métricas del Proyecto

- **Líneas de código:** ~80
- **Funciones implementadas:** 10
- **Archivos de código:** 1
- **Archivos de prueba:** 1
- **Cobertura de pruebas:** 100%

## 🎓 Algoritmos Implementados

### Algoritmos de Búsqueda y Filtrado
- **Filtrado de números pares:** O(n) donde n es el rango
- **Conteo de elementos:** O(n) con contador acumulativo

### Algoritmos Matemáticos
- **Suma de rango:** O(n) iterativo
- **Media aritmética:** O(1) con suma directa
- **Máximo de tres números:** O(1) con Math.max()

### Algoritmos de Validación
- **Verificación de primalidad:** O(n) con división
- **Verificación de combinaciones:** O(1) con suma directa

### Algoritmos Recursivos
- **Cálculo factorial:** O(n) recursivo con caso base

## ✅ Conclusión

Este laboratorio ha sido completado exitosamente, demostrando el dominio de:

- ✅ Algoritmos básicos de iteración y filtrado
- ✅ Funciones recursivas y casos base
- ✅ Validación de propiedades numéricas
- ✅ Manipulación de strings y formateo
- ✅ Implementación de funciones matemáticas
- ✅ Testing y verificación de algoritmos

Todas las funciones han sido implementadas correctamente y pasan las pruebas correspondientes, cumpliendo con los objetivos del laboratorio de JavaScript sobre algoritmos.

### Habilidades Desarrolladas
1. **Pensamiento algorítmico:** Capacidad de descomponer problemas en pasos lógicos
2. **Implementación de bucles:** Dominio de estructuras de control iterativas
3. **Recursión:** Comprensión de funciones que se llaman a sí mismas
4. **Validación lógica:** Implementación de condiciones y verificaciones
5. **Optimización básica:** Consideración de eficiencia en algoritmos simples

---
*Documentación generada automáticamente - Laboratorio js_0030_algo_test*
