/* La función Object.keys() nos devuelve un array con las claves de un objeto que 
le pongamos entre los paréntesis. Por ejemplo:

const mi_objeto = {“hola”: “greetings”, “adios”: “bye”}
Object.keys(mi_objeto)
//me retornará el siguiente array: [“hola”, “adios”]

De esta forma, podemos iterar sobre las claves de un objeto, de la siguiente forma:

for(let i=0; i<Object.keys(mi_objeto).length; i++){
    let clave = Object.keys(mi_objeto)[i];
    console.log(mi_objeto[clave]);
}

Lo cual nos imprimirá en la pantalla “greetings”, “bye”.
Ahora os toca a vosotros. Tengo un objeto con el nombre de algunos países como claves 
y su población total como valores:

const poblaciones = {
    “españa”: 47000000,
    “italia”: 61000000,
    “francia”: 67000000,
}

Haced un bucle que imprima en la consola aquellos países que tengan una población superior 
a 60000000 personas. */

let poblaciones = {
    "españa": 47000000,
    "italia": 61000000,
    "francia": 67000000
}

let claves = Object.keys(poblaciones);

for (i = 0; i <= claves.length; i++) {
    if (poblaciones[claves[i]] > 60000000) {
    console.log(claves[i]) //porque quiero que verifique i - que es la que esta revisando
    }
}
 

