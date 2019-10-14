/* Crear una función que recibe un array de tres números y devuelve true si el primero es 
igual al segundo o si el segundo es igual al tercero. Si el segundo número es 4, siempre devuelve false.
Ejemplo:
miFuncion([1,2,3]) debería retornar false
miFuncion([1,1,3]) debería retornar true
miFuncion([1,4,3]) debería retornar false */

let arrNumeros = [1,4,4]

function trueOrFalse(numeros) {
        if (numeros[1] === 4) {
            return false
        } else if (numeros[1] === numeros[2]) {
            return true
        } else if (numeros[0] === numeros[1]) {
            return false
        } else {
            return false
        }
}

console.log(trueOrFalse(arrNumeros));