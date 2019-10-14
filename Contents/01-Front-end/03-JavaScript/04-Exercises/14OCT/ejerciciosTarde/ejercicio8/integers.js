// Write a JavaScript function to test if an array of integers of length 20 contains 1 or a 3.

let arrIntegers = [9,4,0,6,8,2,2,56,7,4,7,89,4,5,7,8,79,90,5,4];


function test(testNumber) {
    for (let i = 0; i < testNumber.length; i++)  {
        if ((testNumber[i] === 1) || (testNumber[i] === 3))
        return true
    } 

        return false
}

console.log(test(arrIntegers))