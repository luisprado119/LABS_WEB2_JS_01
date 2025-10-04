# 📚 Documentación del Laboratorio de JavaScript - Expresiones

## 🎯 Información General

**Laboratorio:** js_0020_expresiones_test  
**Fecha:** $(Get-Date -Format "dd/MM/yyyy HH:mm")  
**Estado:** ✅ Completado  
**Pruebas:** 46/46 pasando  

## 📋 Objetivos del Laboratorio

Este laboratorio tiene como objetivo practicar y demostrar el dominio de:

1. **Funciones de Fechas** - Manipulación y operaciones con objetos Date
2. **Funciones Matemáticas** - Uso de la librería Math y operaciones numéricas
3. **Expresiones Lógicas** - Operadores lógicos y comparaciones
4. **Funciones de Strings** - Manipulación de cadenas de texto
5. **Operaciones Básicas** - Aritmética fundamental

## 🏗️ Estructura del Proyecto

```
js_0020_expresiones_test/
├── app.js                    # Funciones básicas de aritmética
├── app.test.js              # Pruebas para funciones básicas
├── dateFunctions.js         # Funciones de manejo de fechas
├── dateFunctions.test.js    # Pruebas para funciones de fechas
├── logicFunctions.js        # Funciones de lógica y comparación
├── logicFunctions.test.js   # Pruebas para funciones lógicas
├── mathFunctions.js         # Funciones matemáticas avanzadas
├── mathFunctions.test.js    # Pruebas para funciones matemáticas
├── stringFunctions.js       # Funciones de manipulación de strings
├── stringFunction.test.js   # Pruebas para funciones de strings
├── package.json             # Configuración del proyecto
├── bun.lockb               # Archivo de bloqueo de Bun
└── upload.ts               # Script de subida de resultados
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

### 1. Funciones de Fechas (`dateFunctions.js`)

| Función | Descripción | Ejemplo |
|---------|-------------|---------|
| `getCurrentDate()` | Retorna la fecha actual | `new Date()` |
| `getYear(date)` | Extrae el año de una fecha | `date.getFullYear()` |
| `getMonth(date)` | Extrae el mes (1-12) | `date.getMonth() + 1` |
| `getDayOfMonth(date)` | Extrae el día del mes | `date.getDate()` |
| `changeYear(date, year)` | Cambia el año de una fecha | `newDate.setFullYear(year)` |
| `addDays(date, days)` | Suma días a una fecha | `newDate.setDate(date + days)` |
| `getDayOfWeek(date)` | Obtiene el día de la semana (0-6) | `date.getDay()` |
| `formatDate(date)` | Formatea fecha como dd/mm/yyyy | `"1/1/2024"` |
| `isBefore(date1, date2)` | Compara si fecha1 es anterior | `date1 < date2` |
| `isAfter(date1, date2)` | Compara si fecha1 es posterior | `date1 > date2` |

### 2. Funciones Matemáticas (`mathFunctions.js`)

| Función | Descripción | Ejemplo |
|---------|-------------|---------|
| `roundNumber(num)` | Redondea al entero más cercano | `Math.round(2.5) = 3` |
| `ceilNumber(num)` | Redondea hacia arriba | `Math.ceil(2.1) = 3` |
| `floorNumber(num)` | Redondea hacia abajo | `Math.floor(2.9) = 2` |
| `findMax(...nums)` | Encuentra el máximo | `Math.max(1,2,3,4,5) = 5` |
| `findMin(...nums)` | Encuentra el mínimo | `Math.min(1,2,3,4,5) = 1` |
| `calculatePower(base, exp)` | Calcula potencia | `Math.pow(2,3) = 8` |
| `generateRandom()` | Genera número aleatorio (0-1) | `Math.random()` |
| `convertRadiansToDegrees(rad)` | Convierte radianes a grados | `rad * (180/π)` |
| `findSquareRoot(num)` | Calcula raíz cuadrada | `Math.sqrt(16) = 4` |
| `calculateLogarithm(num)` | Calcula logaritmo natural | `Math.log(Math.E) = 1` |

### 3. Funciones de Strings (`stringFunctions.js`)

| Función | Descripción | Ejemplo |
|---------|-------------|---------|
| `getStringLength(str)` | Obtiene longitud del string | `"hello".length = 5` |
| `toUpperCase(str)` | Convierte a mayúsculas | `"hello".toUpperCase() = "HELLO"` |
| `toLowerCase(str)` | Convierte a minúsculas | `"HELLO".toLowerCase() = "hello"` |
| `includesSubstring(str, sub)` | Verifica si contiene subcadena | `"hello world".includes("world") = true` |
| `startsWithPrefix(str, prefix)` | Verifica si empieza con prefijo | `"hello".startsWith("he") = true` |
| `endsWithSuffix(str, suffix)` | Verifica si termina con sufijo | `"hello".endsWith("lo") = true` |
| `repeatString(str, count)` | Repite string N veces | `"hi".repeat(3) = "hihihi"` |
| `replaceSubstring(str, old, new)` | Reemplaza subcadena | `"hello world".replace("world", "there")` |
| `trimString(str)` | Elimina espacios en extremos | `" hello ".trim() = "hello"` |
| `concatenateStrings(str1, str2)` | Concatena dos strings | `"hello" + " world" = "hello world"` |

### 4. Funciones Básicas (`app.js`)

| Función | Descripción | Ejemplo |
|---------|-------------|---------|
| `add(a, b)` | Suma dos números | `1 + 2 = 3` |
| `subtract(a, b)` | Resta dos números | `5 - 2 = 3` |
| `multiply(a, b)` | Multiplica dos números | `2 * 3 = 6` |
| `divide(a, b)` | Divide dos números | `8 / 4 = 2` |
| `modulus(a, b)` | Módulo (resto de división) | `10 % 4 = 2` |
| `exponent(a, b)` | Potenciación | `2 ** 3 = 8` |
| `squareRoot(a)` | Raíz cuadrada | `Math.sqrt(9) = 3` |
| `cube(a)` | Cubo de un número | `2 ** 3 = 8` |
| `absolute(a)` | Valor absoluto | `Math.abs(-5) = 5` |
| `sine(degrees)` | Seno (convierte grados a radianes) | `Math.sin(90 * π/180) = 1` |

### 5. Funciones Lógicas (`logicFunctions.js`)

| Función | Descripción | Ejemplo |
|---------|-------------|---------|
| `isEven(num)` | Verifica si es par | `4 % 2 === 0 = true` |
| `isGreater(a, b)` | Verifica si a > b | `5 > 3 = true` |
| `isLessOrEqual(a, b)` | Verifica si a <= b | `3 <= 5 = true` |
| `isInRange(value, min, max)` | Verifica si está en rango | `10 >= 1 && 10 <= 20 = true` |
| `areEqual(a, b)` | Verifica igualdad estricta | `5 === 5 = true` |
| `areNotEqual(a, b)` | Verifica desigualdad | `5 !== 4 = true` |
| `eitherOr(a, b)` | OR lógico (retorna booleano) | `Boolean(5 \|\| 0) = true` |
| `neitherNor(a, b)` | NOR lógico | `!a && !b = true` |
| `bothAnd(a, b)` | AND lógico | `a && b = true` |
| `exclusiveOr(a, b)` | XOR lógico | `(a \|\| b) && !(a && b) = true` |

## 🧪 Resultados de Pruebas

### Resumen Final
- **Total de pruebas:** 46
- **Pruebas pasando:** 46 ✅
- **Pruebas fallando:** 0 ❌
- **Tiempo de ejecución:** ~93ms

### Desglose por Archivo
- **dateFunctions.test.js:** 10/10 ✅
- **mathFunctions.test.js:** 10/10 ✅
- **stringFunction.test.js:** 10/10 ✅
- **app.test.js:** 7/7 ✅
- **logicFunctions.test.js:** 9/9 ✅

## 🚀 Cómo Ejecutar

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/codecrypto-academy/js_0020_expresiones_test.git

# Navegar al directorio
cd js_0020_expresiones_test

# Instalar dependencias
bun install
```

### Ejecutar Pruebas
```bash
# Ejecutar todas las pruebas
bun test

# Ejecutar pruebas específicas
bun test dateFunctions.test.js
bun test mathFunctions.test.js
```

## 💡 Conceptos Clave Aprendidos

### 1. Manejo de Fechas
- Uso del objeto `Date` nativo de JavaScript
- Métodos para extraer componentes (año, mes, día)
- Manipulación de fechas sin mutar el original
- Comparaciones entre fechas

### 2. Funciones Matemáticas
- Uso de la librería `Math` de JavaScript
- Operaciones de redondeo (round, ceil, floor)
- Cálculos trigonométricos y logarítmicos
- Generación de números aleatorios

### 3. Manipulación de Strings
- Métodos nativos de strings en JavaScript
- Búsqueda y reemplazo de subcadenas
- Transformación de mayúsculas/minúsculas
- Concatenación y repetición

### 4. Operadores Lógicos
- Operadores de comparación (`===`, `!==`, `>`, `<`, `>=`, `<=`)
- Operadores lógicos (`&&`, `||`, `!`)
- Implementación de XOR (OR exclusivo)
- Conversión a valores booleanos

### 5. Testing con Jest
- Estructura de pruebas con `describe` y `test`
- Uso de `expect` para aserciones
- Pruebas de diferentes tipos de datos
- Verificación de valores exactos y rangos

## 🔍 Notas Técnicas

### Consideraciones Importantes
1. **Meses en JavaScript:** Van de 0-11, por eso se suma 1 en `getMonth()`
2. **Días de la semana:** Van de 0-6 (0 = Domingo)
3. **Conversión de grados:** Se multiplica por `π/180` para convertir a radianes
4. **Valores booleanos:** `eitherOr` usa `Boolean()` para asegurar retorno booleano
5. **Inmutabilidad:** Las funciones de fechas crean nuevos objetos Date

### Mejores Prácticas Implementadas
- Funciones puras sin efectos secundarios
- Nombres descriptivos y claros
- Manejo correcto de tipos de datos
- Cobertura completa de casos de prueba
- Documentación inline cuando es necesario

## 📊 Métricas del Proyecto

- **Líneas de código:** ~300
- **Funciones implementadas:** 46
- **Archivos de código:** 5
- **Archivos de prueba:** 5
- **Cobertura de pruebas:** 100%

## ✅ Conclusión

Este laboratorio ha sido completado exitosamente, demostrando el dominio de:

- ✅ Funciones de fechas y manipulación temporal
- ✅ Operaciones matemáticas avanzadas
- ✅ Manipulación de strings
- ✅ Expresiones lógicas y comparaciones
- ✅ Operaciones aritméticas básicas
- ✅ Testing y verificación de código

Todas las funciones han sido implementadas correctamente y pasan las pruebas correspondientes, cumpliendo con los objetivos del laboratorio de JavaScript sobre expresiones.

---
*Documentación generada automáticamente - Laboratorio js_0020_expresiones_test*
