# 📚 Documentación del Laboratorio de JavaScript Básico

**Estudiante:** Luis Rafael Prado Quintero  
**Laboratorio:** JavaScript Básico - Lab 1  
**Fecha:** 4 de Octubre de 2025  
**Repositorio:** [js_0010_basico_test](https://github.com/codecrypto-academy/js_0010_basico_test.git)

---

## 🎯 Objetivos del Laboratorio

1. Practicar con bucles e if
2. Implementar funciones básicas de JavaScript
3. Ejecutar tests unitarios
4. Completar el flujo completo de desarrollo con Bun

---

## 📋 Pasos Seguidos

### 1. 🔧 Configuración del Entorno

#### Verificación de Bun
```bash
bun --version
# Resultado: 1.2.23 ✅
```

#### Clonado del Repositorio
```bash
git clone https://github.com/codecrypto-academy/js_0010_basico_test.git
```

**Ubicación del proyecto:**
```
E:\CodeCrypto\Material del Máster\03. Web2 Fundamentals\04. Javascript I\Practicas\190_LABS_WEB2_JS_01\js_0010_basico_test
```

#### Instalación de Dependencias
```bash
bun install
```
**Dependencias instaladas:**
- Jest (^29.7.0) - Framework de testing
- Múltiples dependencias de Jest y herramientas relacionadas

---

### 2. 📁 Estructura del Proyecto

```
js_0010_basico_test/
├── .gitignore          # Archivos a ignorar por Git
├── README.md           # Instrucciones del laboratorio
├── app.js              # Archivo principal con las funciones a implementar
├── app.test.js         # Archivo de tests unitarios
├── bun.lockb           # Archivo de bloqueo de dependencias
├── package.json        # Configuración del proyecto
└── upload.ts           # Script de subida de resultados
```

---

### 3. 🔨 Implementación de Funciones

#### Función 1: `mayorDeTresNumeros(a, b, c)`
```javascript
export function mayorDeTresNumeros(a, b, c) {
    return Math.max(a, b, c);
}
```
**Propósito:** Devuelve el mayor de tres números usando `Math.max()`

#### Función 2: `ceroIfNull(a)`
```javascript
export function ceroIfNull(a) {
    return a === null ? 0 : a;
}
```
**Propósito:** Devuelve 0 si el valor es null, sino devuelve el valor original

#### Función 3: `numerosParesCount(desde, hasta)`
```javascript
export function numerosParesCount(desde, hasta) {
    if (desde > hasta) {
        return 0;
    }
    
    let count = 0;
    for (let i = desde; i <= hasta; i++) {
        if (i % 2 === 0) {
            count++;
        }
    }
    return count;
}
```
**Propósito:** Cuenta números pares en un rango con manejo de rangos inversos

#### Función 4: `ifCadenaMasLargaDeN(cadena, n)`
```javascript
export function ifCadenaMasLargaDeN(cadena, n) {
    return cadena.length > n;
}
```
**Propósito:** Verifica si la longitud de una cadena es mayor que n

#### Función 5: `trueIfSumaDeTresNumerosIgualN(a, b, c, n)`
```javascript
export function trueIfSumaDeTresNumerosIgualN(a, b, c, n) {
    return (a + b + c) === n;
}
```
**Propósito:** Verifica si la suma de tres números es igual a n

#### Función 6: `importe(cantidad, precio)`
```javascript
export function importe(cantidad, precio) {
    return Math.round(cantidad * precio * 100);
}
```
**Propósito:** Calcula el importe en céntimos redondeado (cantidad × precio × 100)

---

### 4. 🧪 Ejecución de Tests

#### Ejecución Individual de Tests
```bash
bun test
```

#### Resultados Obtenidos:
```
✓ mayor de 3 numeros
✓ cero is null
✓ cero is null, valor distinto de nulo
✓ contar pares desde un numero a otro
✓ contar pares desde un numero a otro
✓ cadena de longitu mayor o igual a n
✓ cadena de longitu mayor o igual a n
✓ cadena vacia de longitud mayor o igual a n
✓ suma de tres numeros igual a n
✓ suma de tres numeros igual a n
✓ centimos
✓ centimos

12 pass
0 fail
12 expect() calls
Ran 12 tests across 1 file. [279.00ms]
```

---

### 5. 📤 Proceso de Subida de Resultados

#### Guardado de Resultados
```bash
bun test > outfile.txt
```

#### Ejecución del Script de Upload
```bash
bun upload.ts
```

#### Respuesta del Sistema:
```
url = https://github.com/codecrypto-academy/js_0010_basico_test.git
[ "codecrypto-academy", "js_0010_basico_test.git" ]
https://log-test-bay.vercel.app/api/log?user=codecrypto-academy&repo=js_0010_basico_test.git&pass=undefined&fail=undefined
```

---

## ✅ Resultados Finales

### 📊 Estadísticas de Tests
- **Tests ejecutados:** 12
- **Tests exitosos:** 12 ✅
- **Tests fallidos:** 0 ❌
- **Tiempo de ejecución:** ~279ms

### 🎯 Funciones Implementadas
- ✅ `mayorDeTresNumeros` - Encuentra el mayor de tres números
- ✅ `ceroIfNull` - Manejo de valores null
- ✅ `numerosParesCount` - Conteo de números pares en rango
- ✅ `ifCadenaMasLargaDeN` - Verificación de longitud de cadena
- ✅ `trueIfSumaDeTresNumerosIgualN` - Verificación de suma
- ✅ `importe` - Cálculo de importe en céntimos

---

## 🛠️ Herramientas Utilizadas

### Entorno de Desarrollo
- **Sistema Operativo:** Windows 10 (10.0.26100)
- **Shell:** PowerShell
- **Runtime:** Bun v1.2.23
- **Framework de Testing:** Jest v29.7.0

### Comandos Principales
```bash
# Verificar versión de Bun
bun --version

# Clonar repositorio
git clone <url>

# Instalar dependencias
bun install

# Ejecutar tests
bun test

# Ejecutar script de upload
bun upload.ts
```

---

## 📝 Conceptos Aprendidos

### JavaScript Básico
1. **Funciones:** Declaración y exportación de funciones
2. **Operadores:** Operador ternario, operadores de comparación
3. **Bucles:** Uso de for loops para iteración
4. **Condicionales:** Estructuras if/else
5. **Métodos nativos:** Math.max(), Math.round()
6. **Manejo de tipos:** Verificación de null, operaciones con números

### Testing
1. **Framework Jest:** Estructura de tests con expect()
2. **Casos de prueba:** Arrange, Act, Assert
3. **Verificación de resultados:** Uso de toBe() para comparaciones

### Herramientas de Desarrollo
1. **Bun:** Runtime moderno de JavaScript
2. **Git:** Control de versiones
3. **Node.js ecosystem:** Gestión de dependencias

---

## 🎉 Conclusión

El laboratorio se completó exitosamente con **100% de tests pasando**. Se implementaron todas las funciones requeridas utilizando conceptos básicos de JavaScript como bucles, condicionales y operaciones matemáticas. El proceso demostró el flujo completo de desarrollo: desde la configuración del entorno hasta la ejecución de tests y subida de resultados.

**Estado:** ✅ COMPLETADO  
**Fecha de finalización:** 10 de abril de 2025  
**Tiempo total estimado:** ~45 minutos

---

*Documentación creada para Luis Rafael Prado Quintero*  
*Laboratorio de JavaScript Básico - CodeCrypto Academy*
