/*  Usando los mismos arrays del ejercicio anterior. 
Haced un bucle que recorra el 	listado de pesos. 
En cada iteracción, comprobar si el peso es superior a 1000. Si lo es, 
imprimir en la pantalla un título “Animales Grandes” y el animal correspondiente. */


let animales = ["elefante", "perro", "ballena"];
let peso = [5000, 50, 20000];
let grandes = [];



for (i = 0; i < peso.length; i++) { 
    if (peso[i] > 1000) {
        grandes.push(animales[i]);
    }
}

if (grandes.length > 0) {
    document.write("Animales Grandes ")
    document.write(grandes.join("  "))

}


