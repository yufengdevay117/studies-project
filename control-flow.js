/**
 * CONTROL FLOW:
 * 
 *
 * 0: Control flow is the order in which individual statements, instructions, or function 
 * calls are executed in a program. By default, JavaScript executes code sequentially from 
 * top to bottom. We use conditional statements to control this flow, allowing our program 
 * to make decisions and execute different blocks of code based on specified conditions.
 * 
 * 1. If statements are used to execute a block of code only if a specified condition 
 * evaluates to true.
 * 
 * 2. Else-if statements allow you to check multiple consecutive conditions if the previous 
 * conditions evaluate to false.
 * 
 * 3. Else statements act as a default fallback block that executes only when all preceding 
 * conditional statements evaluate to false.
 * 
 * 4. Switch statements evaluate an expression and match its value against multiple case 
 * clauses, offering a cleaner alternative to long, repetitive if-else chains.
 */

// 1. If Statements //
let temperature = 75;
if (temperature > 70) {
    console.log("It's a warm day!"); // prints => It's a warm day!
}

// 2. Else-If Statements //
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B"); // prints => Grade: B
}

// 3. Else Statements //
let isHungry = false;
if (isHungry) {
    console.log("Let's eat food.");
} else {
    console.log("Let's grab a coffee instead."); // prints => Let's grab a coffee instead.
}

// 4. Switch Statements //
let day = "Monday";
switch (day) {
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("It's a weekday."); // prints => It's a weekday.
}
