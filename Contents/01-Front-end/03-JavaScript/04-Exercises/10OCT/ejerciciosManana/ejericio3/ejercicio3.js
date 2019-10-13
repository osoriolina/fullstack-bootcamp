


let palabraUsuario = prompt("Escribe una palabra");
let resultado = "";


for (let letra of palabraUsuario) {
	resultado = letra + resultado;
}  
if (resultado == palabraUsuario) {
    document.write("Es un palindromo")
} else {
    document.write("No es un palindromo")
}


//-----------------------------------
let palabra = prompt("Escribe una palabra: ");
let = palindromo = true;

for (let i=0; i < palabra.length; i++){
    if (palabra[i] != palabra[palabra.length -1 - i]){
    palindromo = false;
 }
} 

if (palindromo) {
    document.write(`<p>La palabra ${palabra} es un palindromo`)
} else {
    document.write(`<p>La palabra ${palabra} <strong>NO</strong> es un palindromo`)
}