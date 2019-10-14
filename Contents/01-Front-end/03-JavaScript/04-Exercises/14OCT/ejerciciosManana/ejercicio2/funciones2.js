/* Write a JavaScript program to find the MOST or the LEAST 
frequent item of an array, depending on a variable type ("most" or "least").
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) */

let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let recuento = {};

for (let element of arr1){
    if (recuento[element] === undefined){
        recuento[element] = 1;
    } else {
        recuento[element] = recuento[element] + 1;
    }
}

function calculaExtremos(direction, frecuencias, comparacion){
    let extremo;
    for (let item in frecuencias){
        if (direction === "up"){
            if(frecuencias[item] > comparacion){
                comparacion = frecuencias[item];
                extremo = {};
                extremo[item] = frecuencias[item];
            }
        } else {
            if(frecuencias[item] < comparacion){
                comparacion = frecuencias[item];
                extremo = {};
                extremo[item] = frecuencias[item];
            }
        }
    }
    return extremo;
}

let miDirection = prompt("Dime la direccion: ");

let frecuenciaInicial = miDirection === "up" ? 0 : arr1.length;

calculaExtremos(miDirection, recuento, frecuenciaInicial);

/*
for (let item in recuento) { 
   if (recuento[item] > frecuenciaMasAlta) {
    frecuenciaMasAlta = recuento[item];
    masAlto = {};
    masAlto[item] = recuento[item];
   }
}


for (let item in recuento) { //como encontrar el numero mas alto?
    if (recuento[item] < frecuenciaMasAlta) {
     frecuenciaMasAlta = recuento[item];
     masBajo = {};
     masBajo[item] = recuento[item];
    }
 } */

 