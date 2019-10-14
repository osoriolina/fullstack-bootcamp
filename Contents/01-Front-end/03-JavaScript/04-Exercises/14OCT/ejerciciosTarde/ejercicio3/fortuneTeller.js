/* Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments. */

let children = prompt("How many children do you want?");
let partner = prompt("What is the name of the person of your dreams?");
let location1 = prompt("Name your dreamland?");
let job = prompt("What is the job you would enjoy the most?");


function tellFortune(numberChildren, partnersName, dreamLocation, jobTitle) {
    return "You wil be a " + jobTitle  + " in " + dreamLocation + ", and married to " + partnersName + " with " + numberChildren + " Kids."
}

document.write(tellFortune(parseInt(children), partner, location1, job));