function showRespect(event){ //event para obtener informacion de lo que sucedio durante el evento
    event.preventDefault()
    document.write(`
        <img src="http://www.ciaocrossclub.it/root/discoremoto/Nik85/Ali%20G.jpg">
    `)
    return true; // esto es para la costumbre de siempre return algo
}


let miBoton = document.querySelectorAll("body > button")[0]

miBoton.addEventListener("contextmenu", () => {showRespect()}) // se debe crear un arrow function para poderlo llamar 