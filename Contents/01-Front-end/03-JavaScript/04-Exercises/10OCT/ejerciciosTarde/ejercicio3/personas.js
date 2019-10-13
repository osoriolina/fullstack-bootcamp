/* Tengo un array de objetos, donde cada objeto representa una persona. Mi array es el siguiente:

[
    {"nombre": "Marco Aurelio", "edad": 59, "ocupacion": "emperador"},
    {"nombre": "Ada Lovelace", "edad": 36, "ocupacion": "primera programadora de la historia"},
    {"nombre": "Aragorn, Rey de Gondor", "edad": 210, "ocupacion": "Rey"},
    {"nombre": "Jeff Bezos", "edad": 55, "ocupacion": "Fundador de Amazon"}
]

Haced un bucle que vaya imprimiendo uno a uno los nombres de cada persona en la consola. 

Luego cread un segundo array vacío:

const nuevos_personajes = []

Haced otro bucle que recorra cada persona. Si esa persona tiene menos de 55 años, lo pusheamos 
(recordad la función .push) al nuevo array. Finalmente, imprimir el nuevo array en la consola. */

let personas = [
    {"nombre": "Marco Aurelio", "edad": 59, "ocupacion": "emperador"},
    {"nombre": "Ada Lovelace", "edad": 36, "ocupacion": "primera programadora de la historia"},
    {"nombre": "Aragorn, Rey de Gondor", "edad": 210, "ocupacion": "Rey"},
    {"nombre": "Jeff Bezos", "edad": 55, "ocupacion": "Fundador de Amazon"}
]

let nombres = Object.keys(personas);
let nuevos_personajes = [];


for (i = 0; i < personas.length; i++) {
        console.log(personas[i].nombre) // el[]. es para ubicar un valor dentro de un objeto
    
}

for (i = 0; i < personas.length; i++) {
    let edad = personas[i].edad;
    if (edad < 55){ 
        nuevos_personajes.push(personas[i])
    }
}

for(i = 0; i < nuevos_personajes.length; i++){
    console.log(nuevos_personajes)
}