/**
 * LOOPS:
 * 
 * 0: (introduction)
 * Loops are used to repeatedly execute a block of code as long as a specified condition 
 * remains true. They allow us to automate repetitive tasks and iterate through collections 
 * of data efficiently without writing the same code over and over.
 * 
 * 1. While loops repeat a block of code as long as a condition evaluates to true. They are 
 * best used when the exact number of iterations is unknown beforehand.
 * 
 * 2. For loops run code a specific number of times. They group initialization, condition, 
 * and increment/decrement updates together in one line.
 */

// 1. While Loops //
let count = 1;
while (count <= 3) {
    console.log(count); // prints => 1, then 2, then 3
    count++;
}

// 2. For Loops //
for (let i = 0; i < 3; i++) {
    console.log("Iteration: " + i); // prints => Iteration: 0, Iteration: 1, Iteration: 2
}