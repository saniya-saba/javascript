// for loop
// Print numbers from 0 to 4
for (let i = 0; i < 5; i++) {
  console.log("myname:" +"saniya");
}
 for ( i=1; i<5; i++) {
  console.log("i love web");
}


//while Loop:
// Print numbers from 0 to 4
let j = 0;
while (j < 5) {
    console.log("number:" +j);
    j++;
}

//do...while Loop:
// Print numbers from 0 to 4
let a = 0;
do {
    console.log("count:",+a);
    a++;
} while (a < 5);

//for...in Loop:
// Iterate over properties of an object
const person = {
  name: "John",
  age: 30,
  gender: "male"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

//for...of Loop:
// Iterate over elements of an array
const fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}


//strings in js

//Creating a String
let greeting = "Hello, world!";
let name = 'John';
console.log(greeting)

//String Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Concatenating strings
console.log(fullName); // Output: John Doe

//String Length
let message = "saniya saba";
console.log(message.length); // Output: 11

//Accessing Characters
let str = "saniya";
console.log(str[0]); // Output: s
console.log(str.charAt(4)); // Output: i

//String Methods
let sentence = "JavaScript is awesome";
console.log(sentence.toUpperCase()); // Output: JAVASCRIPT IS AWESOME
console.log(sentence.toLowerCase()); // Output: javascript is awesome
console.log(sentence.indexOf("is")); // Output: 11 (index of the first occurrence of "is")
console.log(sentence.slice(0, 10)); // Output: JavaScript
console.log(sentence.split(" ")); // Output: ["JavaScript", "is", "awesome"]

//String Interpolation (Template Literals
let txt = "saniya saba";
let age = 20;
let msg = `My name is ${txt} and I am ${age} years old.`;
console.log(msg); // Output: My name is John and I am 30 years old.



