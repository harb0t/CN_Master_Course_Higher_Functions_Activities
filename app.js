//Activity 1

// Write a simple function that logs ‘Hello Codenation" to the console. 
// Then write a higher-order function which will run the simple function five times, 
// even though you only call it once. 
// Hint: Pass the simple function as a parameter, which will involve a For loop.

const greeting = () => {
    console.log("Hello Codenation");
}
const repeat = (greeting, rep) => {
    for (i = 0; i < rep; i++) {
        greeting();
    }
}
repeat(greeting, 5);


//Activity 2

// The array method .map is an example of a higher-order function. 
// Declare a variable with five numbers, then use .map to iterate through the array and multiply each array item by 3.

const array1 = [70, 100, 5, 8];
const multiplyByThree = (num) => {
   return num * 3;
}
const map1 = array1.map(multiplyByThree);
console.log(map1);


//Activity 3

// Test this function to ensure it works by passing a number to the doMaths function.
// Then passing a number and one of the four maths functions to the returned function.


// Code for activity

const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    return a / b;
};
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    };
};

// Answer
console.log(doMaths(10));
console.log(doMaths(10)(5, add)) 
console.log(doMaths(10)(5, divide)) 
console.log(doMaths(10)(5, multiply)) 
console.log(doMaths(10)(5, subtract)); 