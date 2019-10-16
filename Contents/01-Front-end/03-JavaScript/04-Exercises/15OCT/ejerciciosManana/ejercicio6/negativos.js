/* Escribe una función que acepte un número como argumento. La función retornará el número opuesto. 

Ejemplo:
miFuncion(40) → -40
miFuncion(-70) → 70 */ 



function elContrario() {
    let escribeNumero = prompt("Escribe un numero"); //todos los doc. write y los console logs se ponen adentro
    let numero =  escribeNumero * -1;
    document.write(numero)

   return true; 

}
let miBoton = document.querySelectorAll("body > button")[0]
miBoton.addEventListener("click", elContrario)

////////////////////////////////////////////////


