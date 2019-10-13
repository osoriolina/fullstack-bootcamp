/* No me gusta el brócoli. Tengo unas cuantas listas de ingredientes 
para recetas que incluyen brócoli entre ellos, por ejemplo:

const tacos = [‘carne’, ‘frijoles’, ‘pimiento verde’, ‘brocoli’’]
const sopa = [‘fideos’, ‘brocoli’, ‘caldo’, ‘pollo’]
const pizza = [‘masa’, ‘base de tomate’, ‘brocoli’, ‘bacon’, ‘queso’]

Finalmente, tengo una lista de la compra donde voy a ir añadiendo los ingredientes 
que necesito comprar, EXCEPTO el brócoli. 

let lista_compra = []

Haced un bucle que recorra el array tacos, y en cada iteracción vaya pusheando los 
ingredientes al array lista_compra siempre que dicho ingrediente no sea el ‘brocoli’. 

Luego usad el mismo bucle con los otros 2 arrays. Finalmente, imprimid en la consola el 
array lista_compra después de todo el proceso. */

const tacos = ["carne", "frijoles", "pimiento verde", "brocoli"];
const sopa = ["fideos", "brocoli", "caldo", "pollo"];
const pizza = ["masa", "base de tomate", "brocoli", "bacon", "queso"];
let lista_compra = [];

for (let ingredientes of tacos) {
    if(ingredientes !== "brocoli") {
        lista_compra.push(ingredientes); //para meterlo dentro de un array vacio debo meterlo en .push
    }
}

for (let ingredientes of sopa) {
    if(ingredientes !== "brocoli") {
        lista_compra.push(ingredientes); //para meterlo dentro de un array vacio debo meterlo en .push
    }
}

for (let ingredientes of pizza) {
    if(ingredientes !== "brocoli") {
        lista_compra.push(ingredientes); //para meterlo dentro de un array vacio debo meterlo en .push
    }
}

    document.write(lista_compra)