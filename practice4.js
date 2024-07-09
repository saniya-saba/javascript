//arrays in js 

// Creating an array
let fruits = ['apple', 'banana', 'orange', 'mango'];

// Accessing elements in the array
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana

// Modifying elements in the array
fruits[2] = 'grape';
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'mango']

// Adding elements to the end of the array
fruits.push('kiwi');
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'mango', 'kiwi']

// Removing the last element from the array
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: kiwi
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'mango']
// Finding the length of the array
console.log(fruits.length); // Output: 4

// Iterating over elements in the array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);

}
// // Output:
// // apple
// // banana
// // grape
// // // mango
// console.log(fruits);
// fruits.push('kiwi');
// fruits.pop();
// fruits.shift();
// fruits.unshift('S');
// fruits.concat();