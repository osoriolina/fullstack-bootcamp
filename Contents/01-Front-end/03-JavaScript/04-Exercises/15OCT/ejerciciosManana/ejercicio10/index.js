/* ¿Recuerdas cuando arrancábamos las hojas de las margaritas diciendo 
“me quiere”, “no me quiere”, “me quiere”...? Vamos a programar una margarita. 
Tu función recibirá un número como input. Si dicho número es par, 
devolverá el string “me quiere”. Si el número es impar, devolverá el string “no me quiere”. */

function margarita() {
    let numero = prompt("Escribe un numero")
    if (numero % 2 === 0) {
        document.write("Me quiere 😍")
    } else {
        document.write("No me quiere 💔")
    }
}

let miBoton = document.querySelectorAll("body > button")[0]
miBoton.addEventListener("click", margarita)