
/* Write a JavaScript program which iterates the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
For numbers which are multiples of both three and five print "FizzBuzz" */


for (i = 0; i <= 100; i++) { 
    if  ((i % 3 == 0) && (i % 3 == 0)) {   //primero el mas restrictivo - porque las dos se tienen que cumplir, siempre poner que sea igual a 0
        console.log(`${i} FizzBuzz`) 

     } else if  (i % 5 == 0) {
        console.log(`${i}  Buzz`);

    } else if (i % 3 == 0) {
        console.log(`${i} Fizz`); 
    }
}