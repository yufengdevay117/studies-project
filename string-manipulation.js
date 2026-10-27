/**
 * STRING MANIPULATION:
 * 
 * 0: (introduction)
 * String manipulation involves altering, combining, or inspecting text data. Because strings 
 * in JavaScript are primitive and immutable, any operation performed on a string does not 
 * change the original text directly; instead, it returns a brand-new string.
 * 
 * 1. Concatenation is the process of joining two or more strings together into one using 
 * the `+` operator or template literals.
 * 
 * 2. String methods and properties allow us to alter text cases or retrieve structural data, 
 * such as finding the character count using `.length`.
 */

// 1. Concatenation //
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; 
console.log(fullName); // prints => John Doe

// 2. String Methods & Properties //
let message = "hello";
console.log(message.length); // prints => 5
console.log(message.toUpperCase()); // prints => HELLO