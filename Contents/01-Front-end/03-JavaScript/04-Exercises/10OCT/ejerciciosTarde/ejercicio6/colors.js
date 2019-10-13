/* Write a simple JavaScript program to join all elements of the following array into a string.
Print in three different ways (depending on a variable). You can use the array function "join".
Sample array : myColors = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black" */


let myColors = ["Red", "Green", "White", "Black"];
let result = myColors.join("-");

console.log(result) //dentro del join hay un for

let arrayDnuevo = result.split("-")


