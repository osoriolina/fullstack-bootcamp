/* Escribe una función que acepte dos números como argumentos. 
La función nos devolverá true si el primer número es divisible por el segundo.

Ejemplo:
miFuncion(20, 2) → true, puesto que 20 es divisible entre 2
miFuncion(15, 4) → false, puesto que 15 no es divisible entre 4 */


function divisibles() {
    let escribeNumero1 = prompt("Escribe un numero");
    let escribeNumero2 = prompt("Escribe un segundo numero");
    if (escribeNumero1 % escribeNumero2 === 0) {
        document.write("true")
        
    } else {
        document.write("false")
    }
    
    return true 
}

let miBoton = document.querySelectorAll("body > button")[0]
miBoton.addEventListener("click", divisibles)