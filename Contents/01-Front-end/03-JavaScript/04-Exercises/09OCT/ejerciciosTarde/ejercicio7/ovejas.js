/* Vamos a contar ovejitas. Primero fijaremos un número máximo, por ejemplo:

const max_number = 12

Ahora, haced un bucle que imprima en la consola el mensaje:

“1 ovejita…”
“2 ovejitas…”
“3 ovejitas”...
…
etc

Hasta llegar al número máximo de ovejitas. NOTA: 
¡fijaros que el mensaje que se imprime en la primera iteracción es 
distinto del resto de mensajes! */ 

for (i = 1; i <= 12; i++) {

    if (i == 1) { 
        console.log(`${i} Ovejita`) 
    } else {
        console.log(`${i} Ovejitas`)
    }
}


