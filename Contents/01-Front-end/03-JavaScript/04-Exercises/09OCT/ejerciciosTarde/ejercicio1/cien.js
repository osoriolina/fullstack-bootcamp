/* Crear un array vacío (llamado “numeros”). 
Crear un bucle que recorra los números del 1 al 100. En cada iteracción, 
usaremos la función numeros.push(i) para guardar el número de la iteracción 
en el array numeros. Como resultado nos quedará un array con los 
números del 1 al 100. Cuando termine el bucle, haréis un alert() con los números */

let numeros = [];

for(let i = 1; i <= 100; i++){
	numeros.push(i);
}
alert(numeros);