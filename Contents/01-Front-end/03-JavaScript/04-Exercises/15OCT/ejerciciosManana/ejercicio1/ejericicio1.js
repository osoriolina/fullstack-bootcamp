const sistemaSolar = {
    "estrellas": [{"Nombre" : "Sol", "temperatura": "5778k"}],
    "planetas" : [
        {"Nombre": "Mercurio", "temperatura": "700k"},
        {"Nombre": "Tierra", "temperatura": "287k"},
        {"Nombre": "Marte", "temperatura": "500k"},
    ]
 }
 sistemaSolar["estrellas"][0]["temperatura"]
 sistemaSolar["planetas"][1]["temperatura"]


 for (let i = 0; i < sistemaSolar["planetas"].lenght; i++) { // para acceder a informacion dentro de un objeto.. etc
    console.log(sistemaSolar[planetas][i]["temperatura"])
 }


 //imprimir la temperatura de cada planeta