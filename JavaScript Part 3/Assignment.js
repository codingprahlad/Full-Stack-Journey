// First n elements print  n=3
let num = [7,9,0,-2]; 
let n = 3;
console.log(num.slice(0,n));

// last n elements print  n=3
let num1 = [7,9,0,-2]; 
let n1 = 3;
let newline = num1.slice(num1.length-n1);
console.log(newline);

//Check whether a string is blank or not
let str = prompt("Prahlad");
if (str.length == 0) {
    console.log("Empty string");
}
else {
    console.log("This not a empty string");
}

// Checking whether it is a lowercase or not
let name = "prahlad" ;
if (name == name.toLowerCase()) {
    console.log ("Its a lowercase word");
}
else {
    console.log("Its not a lowercase word");
}

//Strip leading and trailing spaces

let str1 = prompt("Enetr a string");
console.log(`Original string = ${str}`);
console.log(`string without spaces = ${str.trim()}`);

// Elements exists in array or not
let ele = ["prahlad", 78, 60, -8];
let item = 60 ;
if (ele.indexOf(item) !=-1) {
     console.log ("Element is exist");
}
else {
    console.log("Element is not exist");
}

