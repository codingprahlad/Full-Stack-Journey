//Array methods
// IndexOf
let cars1 = ["maruti", "mahindra", "bmw", "lamborgini"];

console.log(cars1.indexOf("bmw"));       
console.log(cars1.indexOf("mahindra"));  
console.log(cars1.indexOf("LAMBORGINI")); 

console.log(cars1.includes("bmw"));
console.log(cars1.includes("lamborgini"));
console.log(cars1.includes("honda"));

//Concat
let colors = ["red","pink","blue","yellow"];
let flowers = ["rose","champa","mogra","lotus"];

console.log(colors.concat(flowers));

//Slice
let month = ["january","february","march","april"];

console.log(month.slice(2));
console.log(month.slice(2,3));
console.log(month.slice(2,4));
console.log(month.slice(1));

console.log(month.slice(-3));
console.log(month.slice(-1));

//splice
let fruits = ["apple", "banana", "mango", "grapes", "orange"];
let removed = fruits.splice(2, 2);
console.log(removed);  
console.log(fruits);  

let colors4 = ["red", "green", "blue"];
colors4.splice(1, 0, "yellow");

let numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 2, 8, 9);
console.log(numbers);  

//Sort 
let num = [1, 2, 5, 9, 4, 7, 2];

console.log(num.sort());

