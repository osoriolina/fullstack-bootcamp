// Write a JavaScript function to check a given person age is within 20 and 30 or 50 and 60.

let ageGiven = 25

function personsAge(edad) {
if (edad > 20 &&  edad < 30) {
    return "joven"
} else if (edad > 50 && edad < 60)
    return "viejo"
}

console.log(personsAge(ageGiven))