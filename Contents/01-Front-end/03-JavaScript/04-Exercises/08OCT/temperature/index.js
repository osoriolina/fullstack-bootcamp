
let temperature = prompt("¿En qué quiere la temperatura: celsius o fahrenheit?");
let grados = prompt("¿Cuántos grados quiere convertir?");

let resultadoGrados;

if (temperature == "fahrenheit") { //para convertir a celsius
    resultadoGrados = (grados - 32) * 5/9;
} else {
    (temperature == "celsius")  //para convertir a celsius
    resultadoGrados = (grados * 9/5) + 32;
}
 
document.write(`The temperature is ${resultadoGrados}`);

