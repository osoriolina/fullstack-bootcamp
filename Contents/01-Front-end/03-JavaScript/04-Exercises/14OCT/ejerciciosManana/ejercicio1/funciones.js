let born = prompt("Cuando naciste?");
let actualidad = 2019;

function calculaEdad(factorConversion, yearBorn) { // lo que va entre parentesis se llama ARGUMENT
    return (actualidad - yearBorn) * factorConversion; //returns a value - es MUY importante en las funciones
}
 //INVOCAR la funcion, le estoy dando un valor a sus argumentos - a diferencia de declarar
let edad = calculaEdad(factorConversion = 1, yearBorn = parseInt(born)); //la variable edad me guarda la funcion y puedo seguir trabajando con ella 
// let edad = (actualidad - born) * 1; es una variable que se le pasa desde fuera a la funcion
//let edadPerro = (actualidad - born) * 7; //estoy reutilizando codigo
// si mi funcion necesita varios argumentos pongo una (,)


///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function calculaEdad(factorConversion=1, yearBorn) { // lo que va entre parentesis se llama ARGUMENT
    return (actualidad - yearBorn) * factorConversion; //returns a value - es MUY importante en las funciones
} */