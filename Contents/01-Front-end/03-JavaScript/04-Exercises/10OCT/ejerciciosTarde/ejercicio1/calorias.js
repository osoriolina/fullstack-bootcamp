/* Tengo un objeto con el nombre de algunos alimentos como claves y su número de calorías como valores:

const calorias = {
    "ensalada":152,
    "hamburguesa":295,
    "patatas fritas":312,
    "frankfurt": 269 
}

Haced un bucle que imprima en la consola aquellos alimentos con menos de 300 calorías. */

const calorias = {
    "ensalada":152,
    "hamburguesa":295,
    "patatas fritas":312,
    "frankfurt": 269, }

    
    let alimentos = Object.keys(calorias);
    
    for (i = 0; i <= alimentos.length; i++) {
        if (calorias[alimentos[i]] < 300) {
        console.log(alimentos[i]) //porque quiero que verifique i - que es la que esta revisando
        }
    }