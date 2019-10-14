/* Write a JavaScript function to count how many times a specified character is inside a string. 
For example:
miFuncion(“holaMundo”, “o”) debería retornar 2, puesto que hay 2 “o”s dentro del primer string. */

let arr1= "perro";
let recuento = {};



function calculaLetras(arr1){
    for (let element of arr1){
        if (recuento[element] === undefined){
            recuento[element] = 1;
        } else {
            recuento[element] = recuento[element] + 1;
        }
    }
    return recuento;
}


console.log(calculaLetras(arr1));