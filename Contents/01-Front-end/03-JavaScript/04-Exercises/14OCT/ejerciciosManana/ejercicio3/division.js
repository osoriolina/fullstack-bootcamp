/*
function division(numero) {
    return numero / 100
}

let resultado = document.write(division(prompt("Escriba un numero"))); */

function division(numero) {

    let hola = "saludos!"
    function calculaElNegativo(numeroInicial){
        console.log(hola);
        return numeroInicial * -1;
    }
    let numero2 = calculaElNegativo(numero);
    return numero2 / 100;
}


function (){
    return 1+2
}

setTimeout(() => {console.log("hola")}, 5000)

const a = function(){
    console.log("hola")
}