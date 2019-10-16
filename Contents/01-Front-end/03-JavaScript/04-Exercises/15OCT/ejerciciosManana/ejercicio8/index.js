/* 
Escribe una función que reciba un número y devuelva el día de la semana asociado.
Ejemplo:
1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7" */

function semana() {
   
    let numero = prompt("Escribe un numero del 1 al 7 para saber a que dia corresponde!");
    switch (numero) {
        case "1":
            document.write("Sunday");
            break;
        case "2":
            document.write("Monday")  
            break;
        case "3":
            document.write("Tuesday");
            break;
        case "4":
            document.write("Wednesday");
            break;
        case "5":
            document.write("Thursday");
            break;
        case "6":
            document.write("Friday");
            break;
        case "7":
            document.write("Saturday");
            break;
        default:
            document.write("Wrong, please enter a number between 1 and 7");

    }

    return true; 
}

let miBoton = document.querySelectorAll("body > button")[0]
miBoton.addEventListener("click", semana)