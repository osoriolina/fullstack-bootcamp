/* Crear un array vacío llamado “letras”. 
Crear una variable string con la palabra “pizarra”. 
Crearemos un bucle que iterará sobre la palabra “pizarra”. 
En cada iteracción comprobaremos si el número de la iteracción (i) es un número par. 
Si lo es, pushearemos (usando la función .push) cada letra de la 
palabra dentro del array “letras”. Como resultado, tendremos un array con las letras 
pares de la palabra. */

let letras = []; 
let palabra = "pizarra";

for (i = 0; i < palabra.length; i++) {

    let letra = palabra[i];

    if ((i + 1) % 2 == 0) {
        letras.push(letra)
    }
}

document.write(letras);



