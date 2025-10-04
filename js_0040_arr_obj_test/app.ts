

// implementar la funciona sumArr que recibe un arreglo de numeros y retorna 
// la suma de todos los elementos del arreglo
function sumaArr(arr) {
    return arr.reduce((sum, num) => sum + num, 0)
}




// implementar la funcion mayores que recibe un arreglo de numeros [33,44,33,32,21 ] y un numero
// y retorna un arreglo con los elementos que son mayores al numero recibido

function mayores(arr, num) {
    return arr.filter(element => element > num)
}


// Tenemos el siguiente array de objetos
// const personas = [
//     { nombre: 'Juan', edad: 20 },
//     { nombre: 'Ana', edad: 15 },
//     { nombre: 'Pedro', edad: 30 },
//     { nombre: 'Maria', edad: 25 },
//     { nombre: 'Luis', edad: 10 },
//     { nombre: 'Laura', edad: 40 },
// ]
// Implementar la funcion mayoresEdad que recibe el  arreglo anterior 
//  de personas y un numero y que nos de otro arreglo con las personas 
// que son mayores al numero recibido

function mayoresEdad(personas, num) {
    return personas.filter(persona => persona.edad > num)
}


// con el arreglo anterior calcular la media de las edades de las personas
// a la funcion mediaEdad le llega el arreglo de personas y retorna la media de las edades
function mediaEdad(personas) {
    const sumaEdades = personas.reduce((sum, persona) => sum + persona.edad, 0)
    return sumaEdades / personas.length
}


// implementar la function mayores o iguales a la media usando el array anterior.
function mayoresIgualMedia(personas) {
    const media = mediaEdad(personas)
    return personas.filter(persona => persona.edad >= media)
}



module.exports = {
    sumaArr,
    mayores,
    mayoresEdad,
    mediaEdad,
    mayoresIgualMedia
};
// 