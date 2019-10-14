/*  Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years. */

let myDog = prompt("Que edad tiene tu perro?")

function calculateDogAge(puppiesAge) {
    return "Your dog is " + puppiesAge * 7 + " years old in dog years!"
}

document.write(calculateDogAge(myDog));