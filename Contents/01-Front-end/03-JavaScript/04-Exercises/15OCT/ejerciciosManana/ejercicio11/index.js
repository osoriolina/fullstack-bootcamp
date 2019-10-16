/* Vamos a programar un árbitro para jugar a piedra-papel-tijeras. 
Escribe una función que acepte dos strings como argumentos. 
Cada uno de esos strings puede ser “piedra”, “papel” o “tijera”. 
El primero de los strings es la elección del jugador 1, y el segundo string es la elección del jugador 2. 
La función retornará un string diciendo qué jugador ha ganado.

Ejemplo:
miFuncion(“piedra”, “tijeras”) → “El jugador 1 gana”
miFuncion(“papel”, “tijeras”) → “El jugador 2 gana”
miFuncion(“piedra”, “papel”) → “El jugador 2 gana” */ 

function juego() {
    let jugador1 = prompt("Jugador 1: Escribe piedra, papel o tijeras");
    let jugador2 = prompt("Jugador 2: Escribe piedra, papel o tijeras");
    if (jugador1 === "piedra" && jugador2 === "tijeras") {
        document.write("Felicidades: el Jugador 1 ha ganado!")
    } else if (jugador1 === "piedra" && jugador2 === "papel") {
        document.write("Felicidades: el Jugador 2 ha ganado!")
    } else if (jugador1 === "piedra" && jugador2 === "piedra") {
        document.write("Ostras! pues es un empate!!!") 
    } else if (jugador1 === "tijeras" && jugador2 === "tijeras") {
        document.write("Ostras! pues es un empate!!!")
    } else if (jugador1 === "tijeras" && jugador2 === "papel") {
        document.write("Felicidades: el Jugador 1 ha ganado!")
    }  else if (jugador1 === "tijeras" && jugador2 === "piedra") {
        document.write("Felicidades: el Jugador 2 ha ganado!")
    } else if (jugador1 === "papel" && jugador2 === "tijeras") {
        document.write("Felicidades: el Jugador 2 ha ganado!")
    } else if (jugador1 === "papel" && jugador2 === "papel") {
        document.write("Ostras! pues es un empate!!!")
    } else if (jugador1 === "papel" && jugador2 === "piedra") {
        document.write("Felicidades: el Jugador 1 ha ganado!")
    }
        return true;
}


let miBoton = document.querySelectorAll("body > button")[0]
miBoton.addEventListener("click", juego)