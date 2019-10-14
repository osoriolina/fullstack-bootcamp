/* Ahora crea una función llamada FahrenheitToCelsius que haga exactamente lo opuesto 
(aceptará como argumentos los grados Fahrenheit y te devolverá los grados Celsius.
Ahora haz una función llamada “convertTemperature” que aceptará 2 argumentos:
Un número que representará unos grados
Un string que será “Fahrenheit” o “Celsius”. 

Si el segundo argumento es “Celsius”, invocarás a la función CelsiusToFahrenheit pasándole el número como argumento.

Si el segundo argumento es “Fahrenheit”, invocarás a la función FahrenheitToCelsius pasándole el número como argumento.*/


let degrees = prompt("Cuantos grados quieres convertir?")
let tipo = prompt("a que quieres convertir Celsius o Fahrenheit?")


//fahrenheit
function FahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}


//celsius
function CelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

//nueva funcion
function convertTemperature(grados, tipoGrados) {
    if (tipoGrados === "Fahrenheit") {
        return CelsiusToFahrenheit(grados)
      
    } else if (tipoGrados === "Celsius") {
        return FahrenheitToCelsius(grados)
    } else {
        return "Datos invalidos"
    }

}


document.write(convertTemperature(degrees, tipo));