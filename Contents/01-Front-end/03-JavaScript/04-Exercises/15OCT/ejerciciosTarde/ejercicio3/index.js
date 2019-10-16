/* ¡Buen trabajo! Ahora sabes generar números random entre 1 y X. 
Utilizando lo que acabas de aprender, podrías aplicarlo a un array 
para obtener un elemento al azar de dicho array.

Ejemplo:
miFuncion([“hola”, “mundo”, “lo estoy”, “petando”])
Debería retornar una de esas strings al azar. */


function generarArray() {
    let nombres = ["Lina", "Ana", "Noel"]
    let azar = Math.round(Math.random() * (nombres.length -1)); //revisar w3 schools
    
    //console.log(azar)
    return nombres[azar];
}

let miBoton = document.querySelectorAll("body > button")[0]
miBoton.addEventListener("click", function () { 
    document.write(generarArray());
})

