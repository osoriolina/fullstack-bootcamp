let alumnos = [
    "Ana",
    "Lina",
    "Noel",
    "Hector",
    "Andreina",
    "Sergio",
    "Lluc",
    "Agnes"

]

let alumno = alumnos[3]

switch (alumno) {
    case 'Ana':
        document.write("Pregunta a Ana");
        break;
    case 'Lina':
        document.write("Lina lo sabe!");
        break;
    case 'Noel':
            document.write("otra para Noel!");
        break;
    default:
            document.write("algo ha ido mal");
    
    
    break;

}

let alumno = alumnos

//Forma larga

let alumnoGenero;

if (alumno === "agnes") {
    alumnoGenero = "f"
} else {
    alumnoGenero = "m"
}

//Forma corta (operador ternario) los : significan NO

let alumnoGenero = alumno === "agnes" ? "f" : "m"

// el alumno es agnes? si then f, no (:) then m




bloop 