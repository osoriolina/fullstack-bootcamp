/* ¡Aw yeah! Ya viene la parte práctica: aplicando todos los conocimientos 
que has adquirido sobre sacar elementos random de un array, 
haz una función que elija “piedra”, “papel” o “tijeras” al azar.

Ejemplo:
miFuncion(); → Devuelve el string “piedra” o “papel” o “tijera” al azar. */

function escogerTool() {
    let nombres = ["Piedra", "Papel", "Tijeras"]
    let azar = Math.round(Math.random() * (nombres.length -1)); //revisar w3 schools
    
    //console.log(azar)
    return nombres[azar];
}

let miBoton = document.querySelectorAll("body > button")[0]
miBoton.addEventListener("click", function () { 
    document.write(escogerTool());
})
