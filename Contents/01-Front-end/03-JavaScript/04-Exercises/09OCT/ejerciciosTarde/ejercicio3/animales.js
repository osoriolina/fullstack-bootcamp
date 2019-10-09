/* Usando los arrays:

const animales=["elefante", "perro", "ballena"]
const peso=[5000, 50, 20000]

(Teniendo en cuenta que están ordenados por igual)

El primer array es un listado de animales y el segundo, su peso en Kg. 
Crear un bucle que recorra el listado de animales. En cada iteracción, 
comprobará si dicho objeto es el perro. Si lo es, imprimirá el nombre del animal y su peso. */

let animales = ["elefante", "perro", "ballena"];
let peso = [5000, 50, 20000];

for (i = 0; i < animales.length; i++) { 
    if (animales[i] == "perro") {
        document.write(animales[i] + peso[i]);
    }
}



// variable.lenght - para la segunda posicion me dice hasta donde recorrer 