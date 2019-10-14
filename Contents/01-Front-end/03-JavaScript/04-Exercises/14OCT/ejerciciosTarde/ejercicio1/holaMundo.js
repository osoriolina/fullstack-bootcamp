/* 1.- Crear una función que recibe un array de strings y una string y devuelve la posición en donde está esa string en el array.
Ejemplo:
miFuncion([“hola”, “mundo”], “mundo”) debería retornar 1 */

let arr1 = ["hola", "mundo"];
let str1 = "mundo"; 

function saludo(arrPalabras, strPalabra) {
    for (let i = 0; i < arrPalabras.length; i++) {
        if (arrPalabras[i] === strPalabra) { 
            return [i];
        }

    } 
    
}

console.log(saludo(arr1, str1));