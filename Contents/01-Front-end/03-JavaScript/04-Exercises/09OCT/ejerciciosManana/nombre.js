let palabraUsuario = prompt("Escribe una palabra");

let resultado = "";

for (let letra of palabraUsuario) {
	resultado = letra + resultado;
}

console.log(resultado);


//otra forma de hacerlo

let resultado = "";

for (let i=0;i < "ornitorrinco".length; i++) {
    resultado = "ornitorrinco"[i] + resultado;
}

console.log(resultado);

//otra forma de hacerlo

let resultado = "";

for (let i="ornitorrinco".length -1; i >= 0; i--) {
    resultado += "ornitorrinco"[i];
}

console.log(resultado);