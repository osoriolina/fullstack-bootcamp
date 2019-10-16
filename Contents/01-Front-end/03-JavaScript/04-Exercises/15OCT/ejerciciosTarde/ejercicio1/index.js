/* El objeto window (el contexto global de los navegadores) 
nos ofrece un maravilloso objeto llamado “Math” que nos presenta funciones muy útiles 
para los programadores. Para llamarlo basta con escribir “Math”. Algunas de las funciones más útiles de Math son:

Math.round() para redondear números
Math.random() para generar números aleatorios
Math.min() para encontrar el mínimo de una lista de números
Math.max() para encontrar el máximo de una lista de números

Tu tarea va a consistir en crear una función que genere números al azar entre 1 y 10. */


function azar() {
    
    let azar = Math.round(((Math.random() *10) + 1)); //revisar w3 schools

    document.write(azar);
    return true;
}

let miBoton = document.querySelectorAll("body > button")[0]
miBoton.addEventListener("click", azar)
