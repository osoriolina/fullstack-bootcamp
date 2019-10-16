/* Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

Write a function that accepts the time in hours as input and returns the number of litres Nathan will drink.

For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5 */ 

function hydrated() {
    let horas = prompt("Escribe la cantidad de horas que quieres calcular, para saber cuanta agua debe tomar Nathan");
    let resultado = horas * 0.5;
    document.write(Math.floor(resultado));

    return true; 

}

let miBoton = document.querySelectorAll("body > button")[0]
miBoton.addEventListener("click", hydrated)