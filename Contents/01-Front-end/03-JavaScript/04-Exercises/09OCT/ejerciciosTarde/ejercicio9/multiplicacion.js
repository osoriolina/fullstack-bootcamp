/* Partiendo de un número cualquiera, por ejemplo el 7, 
queremos calcular la multiplicación de todos los números que hay por 
debajo de éste (sin contar el cero). Por ejemplo:

1*2*3*4*5*6*7 = 5.040

A este cálculo en matemáticas se le llama factorial. El factorial de 7, 
como acabamos de ver, es 5040.

Haced un bucle que me calcule el factorial del número 10 y lo imprima en la consola. */

let numero = 10;
let resultado = numero;

for (i = 1; i < 10; i++) {
    resultado = resultado * i;
}

console.log(resultado)


