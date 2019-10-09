/*Crear otro array que esté vacío (esta vez lo llamaremos “numeros pares”). 
Recorremos en bucle el array del ejercicio anterior (“numeros”) 
comprobando en cada iteración si el número de dicha iteración es par o impar 
(dicho de otra forma: “si dividimos ese número entre dos, el resto es 0?). 
Si es así, dicho número se añadirá al segundo array (usando la función .push como antes). 
Cuando termine el bucle, haréis un alert() con los números impares. */

let numeros = [];
let numerosPares = []; //caja 2

for(let i = 1; i <= 100; i++){
	numeros.push(i);
}

for (let numero of numeros) { //defino de donde voy a llamar los numeros
        //for(let i = 0; i < 100; i++){
            // let numero = numeros[i]

//comprobar si es par o impar 
//si es par agregar a numerosPares
    if (numero % 2 == 0) {   
        numerosPares.push(numero);
    }
}



alert(numeros);