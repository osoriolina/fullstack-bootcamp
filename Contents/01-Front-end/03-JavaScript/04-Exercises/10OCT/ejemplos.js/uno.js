/* let animales = ["cerdo", "perro", "vaca"]
let alumno = "Hector";

while (!(alumno === "Noel")) {
    alumno = "Noel" // se tiene que alterar una de las partes que afecten a la boolean
}


1. Inicializar una variable
2. condicion boolean que se debe cumplir
3. Algo que altere un componente de la condicion boolean en el loop


let i = 0;  //esto hara un loop infinito - no son muy aconsejables, es mejor usar un for
while (i < 10) {
    console.log("hola");
} */

let pass = prompt("Introduce password") // quieres que se ejecute hasta que en algun  momento se de una doncidion

while(pass != "limonchelo") {
    pass = prompt("Introduce password");
}
    document.write("Welcome!")


//---------------------------------------------

while(pass != "limonchelo") {
    if (pass == 'limonchelo'); {
        break;
    }
}
    document.write("Welcome!")

//---------------------------------------------

let i = 0;

while(i<100) {
    if (i % 2 != 0) {
        i++;
        continue; // hace que salte una vuelta
    }
    console.log(i);
    i++;
}

//---------------------------------------------

// Do... while

do {
    pass = prompt("Introduce password: ")
} while (pass !== 'limoncelo')

document.write("Welcome!")

//While
let pass = prompt("Introduce password") // quieres que se ejecute hasta que en algun  momento se de una condicion

while(pass != "limonchelo") {
    pass = prompt("Introduce password");
}
    document.write("Welcome!")

