/* Write a JavaScript program to find the MOST or the LEAST 
frequent item of an array, depending on a variable type ("most" or "least").
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) */

let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let recuento = {}; //para meter la info que va saliendo
let frecuenciaMasAlta = 0;
let masAlto = {}; //undefined variable cuando no se le da valor ni tipo
let masBajo;

//recorrer en loop tomar cada elemento y sumarlo al objeto - si ya lo he visto, meterlo como una clave

for (let element of arr1) {
    if (recuento[element] === undefined){
        recuento[element] = 1; //lo crea y le pone un valor
    } else {
        recuento[element]  = recuento[element] + 1; //se suma asi porque no todos son numeros, no se usa el ++
    }
}

//tenemos que hacer otro loop que repita en recuento para saber cual es el numero mayor

for (let item in recuento) { //como encontrar el numero mas alto?
   if (recuento[item] > frecuenciaMasAlta) {
    frecuenciaMasAlta = recuento[item];
    masAlto = {};
    masAlto[item] = recuento[item];
   }
}

//hacer lo mismo para el menos alto - osea el elemento mas bajo - añadir un else a in if

for (let item in recuento) { //como encontrar el numero mas alto?
    if (recuento[item] < frecuenciaMasAlta) {
     frecuenciaMasAlta = recuento[item];
     masBajo = {};
     masBajo[item] = recuento[item];
    }
 }

