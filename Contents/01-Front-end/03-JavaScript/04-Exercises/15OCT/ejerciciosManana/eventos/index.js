



function showRespect(){
    document.write(`
        <img src="http://www.ciaocrossclub.it/root/discoremoto/Nik85/Ali%20G.jpg">
    `)
    return true;
}


let miBoton = document.querySelectorAll("body > button")[0]

miBoton.addEventListener("click", showRespect) // se le pasan dos argumentos 1. que tipo de evento es 2. funcion que quieres que ejecute