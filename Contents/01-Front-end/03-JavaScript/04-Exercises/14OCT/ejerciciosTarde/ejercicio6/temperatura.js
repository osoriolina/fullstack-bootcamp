/* Crea una función llamada CelsiusToFahrenheit que acepte un argumento 
(la temperatura en grados Celsius) y te devuelva la temperatura equivalente en grados fahrenheit. */ 


let degrees = prompt("Cuantos grados quieres convertir?")

function CelsiusToFahrenheit(celsius) {

    return (celsius * 9/5) + 32;

}

document.write(CelsiusToFahrenheit(degrees));