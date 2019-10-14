// Write a JavaScript function to check if a given positive number is a multiple of 3 or a multiple of 7 

let numero = 7;

function math(multiple) {
if (multiple % 3 === 0) {
    return "Multiplo de 3"
} else if (multiple % 7 === 0) {
    return "Multiplo de 7"
}

}

document.write(math(numero));