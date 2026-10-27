/**
 * FUNCTIONS:
 * 
 * 0: (introduction)
 * Functions are reusable blocks of code designed to perform a specific task. They allow us 
 * to write code once and run it multiple times with different inputs, keeping our code clean 
 * and organized.
 * 
 * 1. Parameters are the placeholder variables defined in the function declaration. Arguments 
 * are the actual values passed into the function when it is executed.
 * 
 * 2. The return statement stops the execution of a function and outputs a value back to where 
 * the function was called.
 */

// 1. Parameters vs Arguments //
function greetUser(name) { // 'name' is a parameter
    console.log("Hello, " + name); 
}
greetUser("Alice"); // prints => Hello, Alice ('Alice' is an argument)

// 2. Return Statement //
function addNumbers(num1, num2) {
    return num1 + num2; // returns the sum value
}
let sum = addNumbers(5, 10);
console.log(sum); // prints => 15