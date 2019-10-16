/* Ayer hiciste una función a la cual le pasábamos como argumentos las 
“jugadas” de dos jugadores en piedra,papel o tijera, ¿recuerdas?

Tu función hacía algo como ésto...
miFuncion(“piedra”, “tijeras”) → “El jugador 1 gana”

Bien, te toca volver a usar esa función. Cópiala y pégala, porque vas a necesitarla de nuevo. Te espero… ¿ya la tienes? 

Vas a invocar a esta función, pero el primer argumento va a ser un string al azar generado 
con la función que hiciste en el ejercicio anterior. El segundo argumento va a ser TU jugada. 
¿ganarás al ordenador, o perderás?*/






function escogerTool1() {
    let nombres = ["piedra", "papel", "tijeras"]
    let azar = Math.round(Math.random() * (nombres.length -1)); //revisar w3 schools
    
    //console.log(azar)
    return nombres[azar];
}

function juego() {
    let jugador1 = escogerTool1();
    let jugador2 = prompt("Escribe piedra, papel o tijeras");

    if (jugador1 === "piedra" && jugador2 === "tijeras") {
        document.write("Felicidades: Friday ha ganado!")
    } else if (jugador1 === "piedra" && jugador2 === "papel") {
        document.write("Felicidades: has ganado!")
    } else if (jugador1 === jugador2 ) {
        document.write("Ostras! pues es un empate!!!") 
    } else if (jugador1 === "tijeras" && jugador2 === "papel") {
        document.write("Felicidades: el Friday ha ganado!")
    }  else if (jugador1 === "tijeras" && jugador2 === "piedra") {
        document.write("Felicidades: has ganado!")
    } else if (jugador1 === "papel" && jugador2 === "tijeras") {
        document.write("Felicidades: has ganado!")
    } else if (jugador1 === "papel" && jugador2 === "piedra") {
        document.write("Felicidades: el Friday ha ganado!")
    }
        return true;
}



let miBoton = document.querySelectorAll("body > button")[0]
miBoton.addEventListener("click", juego)