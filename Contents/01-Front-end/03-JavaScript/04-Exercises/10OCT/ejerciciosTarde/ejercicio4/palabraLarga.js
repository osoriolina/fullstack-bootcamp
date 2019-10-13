/* Crear un bucle que recorra la palabra "supercalifragilisticoespialidoso". 
En cada iteracción, cambiará cada letra por la letra que haya 7 posiciones 
más hacia la derecha en el abecedario. */

let palabraClave = "supercalifragilisticoespialidoso";
let letras = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let str = "";

for (let letra of palabraClave) {
    for(let i = 0; i < letras.length; i++){
        if (letra == letras[i]) {
           let resultado = letras[(i+7)%25]; // puedo declarar una variable dentro de if?
            //console.log(resultado)      //poner aca el codigo para que continue
            str += resultado; //puedo crear una caja con esa variable que significa que es str + el resultado
        
        } 
    }
} 
console.log(str)