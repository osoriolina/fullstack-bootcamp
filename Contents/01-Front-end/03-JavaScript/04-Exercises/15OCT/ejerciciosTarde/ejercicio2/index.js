/* Ahora que has aprendido a crear números random entre 1 y 10 
usando el Math.random(), vas a hacer una función que genere números 
random entre 1 y X, donde X será un argumento de tu función.

Ejemplo:
miFuncion(6); //genera números aleatorios entre 1 y 6 */ 


function azar() {
    let numero = prompt("Escriba un numero para obtener un numero random entre 1 y su numero")
    let azar = Math.round(((Math.random() * numero) + 1)); //revisar w3 schools

    document.write(azar);
    return true;
}

let miBoton = document.querySelectorAll("body > button")[0]
miBoton.addEventListener("click", azar)