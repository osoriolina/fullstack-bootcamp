// Usando el mismo objeto del ejercicio anterior, hacer otro bucle que imprima sólo el alimento con más calorías de todos.

const calorias = {
    "ensalada":152,
    "hamburguesa":295,
    "patatas fritas":312,
    "frankfurt": 269, }

    let alimentos = Object.keys(calorias);
    let limiteCalorias = 300
    
    for (i = 0; i <= alimentos.length; i++) {
        if (calorias[alimentos[i]] > limiteCalorias) {
            console.log(alimentos[i]) 
        }
    }