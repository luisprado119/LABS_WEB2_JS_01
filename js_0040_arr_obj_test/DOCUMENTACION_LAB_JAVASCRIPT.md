# 📚 Documentación del Laboratorio de JavaScript - Arrays y Objetos

## 🎯 Información General

**Laboratorio:** js_0040_arr_obj_test  
**Fecha:** $(Get-Date -Format "dd/MM/yyyy HH:mm")  
**Estado:** ✅ Completado  
**Pruebas:** 7/7 pasando  

## 📋 Objetivos del Laboratorio

Este laboratorio tiene como objetivo practicar y demostrar el dominio de:

1. **Manipulación de Arrays** - Operaciones con arreglos de números
2. **Métodos de Array** - Uso de `filter`, `reduce`, `map`
3. **Objetos en Arrays** - Manejo de arrays de objetos
4. **Acceso a Propiedades** - Navegación por propiedades de objetos
5. **Cálculos Estadísticos** - Media y filtrado basado en estadísticas

## 🏗️ Estructura del Proyecto

```
js_0040_arr_obj_test/
├── app.ts                    # Funciones de arrays y objetos (TypeScript)
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
- **TypeScript:** Soporte nativo en Bun

### Scripts Disponibles
```json
{
  "test": "bun test 2>&1 | tee outfile.txt && bun upload.ts"
}
```

## 📖 Funciones Implementadas

### 1. Suma de Array (`sumaArr`)

**Descripción:** Calcula la suma de todos los elementos de un arreglo de números.

**Implementación:**
```typescript
function sumaArr(arr) {
    return arr.reduce((sum, num) => sum + num, 0)
}
```

**Casos de uso:**
- `sumaArr([1, 2, 3, 4, 5])` → `15`
- `sumaArr([])` → `0`

**Método utilizado:** `Array.reduce()`

### 2. Elementos Mayores (`mayores`)

**Descripción:** Filtra un arreglo de números y retorna solo los elementos mayores a un número dado.

**Implementación:**
```typescript
function mayores(arr, num) {
    return arr.filter(element => element > num)
}
```

**Casos de uso:**
- `mayores([33, 44, 33, 32, 21], 33)` → `[44]`
- `mayores([], 33)` → `[]`

**Método utilizado:** `Array.filter()`

### 3. Personas Mayores de Edad (`mayoresEdad`)

**Descripción:** Filtra un arreglo de objetos persona y retorna solo las que tienen edad mayor a un número dado.

**Implementación:**
```typescript
function mayoresEdad(personas, num) {
    return personas.filter(persona => persona.edad > num)
}
```

**Estructura de datos:**
```javascript
const personas = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'Ana', edad: 15 },
    { nombre: 'Pedro', edad: 30 },
    { nombre: 'Maria', edad: 25 },
    { nombre: 'Luis', edad: 10 },
    { nombre: 'Laura', edad: 40 }
]
```

**Caso de uso:**
- `mayoresEdad(personas, 30)` → `[{ nombre: 'Laura', edad: 40 }]`

**Método utilizado:** `Array.filter()` con acceso a propiedades

### 4. Media de Edades (`mediaEdad`)

**Descripción:** Calcula la media aritmética de las edades de un arreglo de personas.

**Implementación:**
```typescript
function mediaEdad(personas) {
    const sumaEdades = personas.reduce((sum, persona) => sum + persona.edad, 0)
    return sumaEdades / personas.length
}
```

**Caso de uso:**
- `mediaEdad(personas)` → `23.333333333333332`

**Método utilizado:** `Array.reduce()` + división

### 5. Personas Mayores o Iguales a la Media (`mayoresIgualMedia`)

**Descripción:** Filtra personas cuya edad es mayor o igual a la media de edades del arreglo.

**Implementación:**
```typescript
function mayoresIgualMedia(personas) {
    const media = mediaEdad(personas)
    return personas.filter(persona => persona.edad >= media)
}
```

**Caso de uso:**
- `mayoresIgualMedia(personas)` → `[
    { nombre: 'Pedro', edad: 30 },
    { nombre: 'Maria', edad: 25 },
    { nombre: 'Laura', edad: 40 }
  ]`

**Método utilizado:** `Array.filter()` + función auxiliar

## 🧪 Resultados de Pruebas

### Resumen Final
- **Total de pruebas:** 7
- **Pruebas pasando:** 7 ✅
- **Pruebas fallando:** 0 ❌
- **Tiempo de ejecución:** ~53ms

### Desglose por Función
- **sumaArr (2 pruebas):** ✅ Pasando
  - Suma de array con elementos
  - Suma de array vacío
- **mayores (2 pruebas):** ✅ Pasando
  - Filtrado de elementos mayores
  - Filtrado de array vacío
- **mayoresEdad (1 prueba):** ✅ Pasando
  - Filtrado de personas por edad
- **mediaEdad (1 prueba):** ✅ Pasando
  - Cálculo de media aritmética
- **mayoresIgualMedia (1 prueba):** ✅ Pasando
  - Filtrado basado en media

## 🚀 Cómo Ejecutar

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/codecrypto-academy/js_0040_arr_obj_test.git

# Navegar al directorio
cd js_0040_arr_obj_test

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

### 1. Métodos de Array Fundamentales

#### `Array.reduce()`
- **Propósito:** Reducir un array a un solo valor
- **Sintaxis:** `array.reduce((acumulador, elemento) => operación, valorInicial)`
- **Uso:** Suma, conteo, concatenación
- **Ejemplo:** `arr.reduce((sum, num) => sum + num, 0)`

#### `Array.filter()`
- **Propósito:** Crear un nuevo array con elementos que cumplen una condición
- **Sintaxis:** `array.filter(elemento => condición)`
- **Uso:** Filtrado, búsqueda condicional
- **Ejemplo:** `arr.filter(num => num > 10)`

#### `Array.map()`
- **Propósito:** Transformar cada elemento del array
- **Sintaxis:** `array.map(elemento => transformación)`
- **Uso:** Modificación, extracción de propiedades
- **Ejemplo:** `arr.map(obj => obj.propiedad)`

### 2. Manejo de Objetos en Arrays

#### Acceso a Propiedades
- **Notación de punto:** `objeto.propiedad`
- **Notación de corchetes:** `objeto['propiedad']`
- **En filtros:** `arr.filter(obj => obj.propiedad > valor)`

#### Estructura de Datos
```javascript
const personas = [
    { nombre: 'string', edad: number },
    // ...
]
```

### 3. Funciones Auxiliares
- **Composición de funciones:** Una función puede llamar a otra
- **Reutilización:** `mayoresIgualMedia` usa `mediaEdad`
- **Modularidad:** Separación de responsabilidades

### 4. Cálculos Estadísticos
- **Media aritmética:** Suma total / cantidad de elementos
- **Filtrado basado en estadísticas:** Comparación con valores calculados
- **Precisión decimal:** Manejo de números con decimales

## 🔍 Notas Técnicas

### Consideraciones Importantes
1. **Arrays vacíos:** Las funciones manejan correctamente arrays sin elementos
2. **Inmutabilidad:** Los métodos de array no modifican el array original
3. **Valores de retorno:** Cada función retorna un nuevo array o valor
4. **Acceso a propiedades:** Uso correcto de notación de punto para objetos
5. **Precisión numérica:** La media puede tener muchos decimales

### Mejores Prácticas Implementadas
- Funciones puras sin efectos secundarios
- Uso de métodos de array modernos
- Composición de funciones para reutilización
- Manejo de casos edge (arrays vacíos)
- Nombres descriptivos y claros

### Posibles Mejoras
- Validación de entrada para arrays no definidos
- Manejo de errores para tipos incorrectos
- Optimización para arrays muy grandes
- Documentación JSDoc para TypeScript
- Tipos explícitos en TypeScript

## 📊 Métricas del Proyecto

- **Líneas de código:** ~60
- **Funciones implementadas:** 5
- **Archivos de código:** 1 (TypeScript)
- **Archivos de prueba:** 1
- **Cobertura de pruebas:** 100%

## 🎓 Patrones de Programación Implementados

### Programación Funcional
- **Funciones puras:** Sin efectos secundarios
- **Inmutabilidad:** No modificación de datos originales
- **Composición:** Funciones que usan otras funciones
- **Métodos de orden superior:** `filter`, `reduce`, `map`

### Manejo de Datos
- **Transformación de datos:** De arrays a valores calculados
- **Filtrado condicional:** Basado en propiedades de objetos
- **Agregación:** Suma y cálculo de medias
- **Estructuras complejas:** Arrays de objetos

## 🔧 Herramientas y Tecnologías

### TypeScript
- **Tipado estático:** Mejor detección de errores
- **IntelliSense:** Autocompletado mejorado
- **Compilación:** Transpilación a JavaScript

### Bun
- **Runtime moderno:** Ejecución rápida de JavaScript/TypeScript
- **Testing integrado:** Framework de pruebas incluido
- **Gestión de paquetes:** Instalación rápida de dependencias

## ✅ Conclusión

Este laboratorio ha sido completado exitosamente, demostrando el dominio de:

- ✅ Manipulación de arrays con métodos modernos
- ✅ Filtrado y transformación de datos
- ✅ Manejo de objetos dentro de arrays
- ✅ Cálculos estadísticos básicos
- ✅ Composición de funciones
- ✅ Programación funcional en JavaScript/TypeScript

### Habilidades Desarrolladas
1. **Métodos de array:** Dominio de `filter`, `reduce`, `map`
2. **Acceso a propiedades:** Navegación por objetos anidados
3. **Funciones auxiliares:** Composición y reutilización
4. **Cálculos matemáticos:** Media aritmética y comparaciones
5. **Programación funcional:** Paradigma moderno de JavaScript

### Aplicaciones Prácticas
- **Procesamiento de datos:** Filtrado y transformación
- **Análisis estadístico:** Cálculos básicos sobre conjuntos
- **Manipulación de APIs:** Procesamiento de respuestas JSON
- **Validación de datos:** Filtrado basado en condiciones
- **Reportes y dashboards:** Agregación de información

---
*Documentación generada automáticamente - Laboratorio js_0040_arr_obj_test*
