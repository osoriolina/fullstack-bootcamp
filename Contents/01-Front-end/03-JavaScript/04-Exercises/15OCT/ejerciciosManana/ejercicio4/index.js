function showRespect(event){ //event para obtener informacion de lo que sucedio durante el evento
    //event.preventDefault()
   
console.log(event)
    return true; // esto es para la costumbre de siempre return algo
}


let miBoton = document.querySelectorAll("body > input")[0]

miBoton.addEventListener("keypress", () => {showRespect(event)}) // se debe crear un arrow function para poderlo llamar / 

// keypress se dispara cuando presionas y levantas
// keydown es cuando presionas - mientras lo estas pulsando
// keyup es cuando levantas