// Arithmetic Operators: Used to perform arithmetic operations such as addition, subtraction, multiplication, division, modulus, and exponentiation.
let a = 5;
let b = 3;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus (remainder of division)
console.log(a ** b); // Exponentiation (a raised to the power of b)

//Assignment Operators: Used to assign values to variables.
let x = 20;
x += 5; // Same as x = x + 5
x -= 3; // Same as x = x - 3
x *= 2; // Same as x = x * 2
x /= 4; // Same as x = x / 4
x %= 3; // Same as x = x % 3
console.log("x +=", x);

//Comparison Operators: Used to compare values.
let p = 10;
let q = 5;

console.log(p > q);  // Greater than
console.log(p < q);  // Less than
console.log(p >= q); // Greater than or equal to
console.log(p <= q); // Less than or equal to
console.log(p === q); // Equal to (strict equality)
console.log(p !== q); // Not equal to

//Logical Operators: Used to combine conditional statements.
let raining = true;
let temperature = 15;

// Logical AND
if (raining && temperature < 10) {
    console.log("Wear a raincoat and a jacket.");
}

// Logical OR
if (raining || temperature < 10) {
    console.log("It's either raining or cold (or both).");
}

// Logical NOT
let sunny = !raining;
if (!sunny) {
    console.log("It's not sunny.");
}

//String Operator (+): In JavaScript, the + operator is not only used for addition but also for concatenating strings. When one or both operands of the + operator are strings, it concatenates them together.
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log(fullName); // Output: John Doe

//Ternary Operator (Conditional Operator) (? :)
let age = 20;
let message = (age >= 18) ? "You are an adult" : "You are a minor";

console.log(message); // Output: You are an adult

//Type Operator (typeof)
let m = 10;
let y = "Hello";
let z = true;

console.log(typeof m); // Output: number
console.log(typeof y); // Output: string
console.log(typeof z); // Output: boolean


console.log(message); // Output: You are an adult




//if Statement: Executes a block of code if a specified condition is true.
let s = 10;

if (s > 5) {
    console.log("s is greater than 5");
}

//if...else Statement: Executes one block of code if a specified condition is true and another block of code if the condition is false.
let c = 10;

if (c > 5) {
    console.log("c is greater than 5");
} else {
    console.log("c is not greater than 5");
}

//if...else if...else Statement: Allows you to specify a new condition to test if the previous condition is false.
let n= 10;

if (n > 15) {
    console.log("n is greater than 15");
} else if (x > 10) {
    console.log("n is greater than 10 but not 15");
} else {
    console.log("n is 10 or less");
}

//Switch Statement: Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("Banana is yellow.");
        break;
    case "apple":
        console.log("Apple is red.");
        break;
    case "orange":
        console.log("Orange is orange.");
        break;
    default:
        console.log("Unknown fruit.");
}

