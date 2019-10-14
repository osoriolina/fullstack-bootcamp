/* Write a JavaScript function to create a new string from a given string 
taking the last 3 characters and added at both the front and back. The string length must be 3 or more. */

let str1 = "cosa";

function newPalabra(newString) {
    for (let i = 0; i < newString.length; i++) {
        
        return newString[i+1] + newString[i+2] + newString[i+3] + newString + newString[i+1] + newString[i+2] + newString[i+3]
    }
}

document.write(newPalabra(str1))


