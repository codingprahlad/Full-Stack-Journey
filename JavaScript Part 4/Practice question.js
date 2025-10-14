// delete numb 2
let arr = [ 1, 2, 3, 4, 5, 6, 2, 3];
let  num = 2;
for (let i=0; i<arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 2);
    }
}
console.log(arr);


// delete multiple numbers
let req = [2,3,4,5,6,7,5,3,33,6,7,5,4,3,36,7,55,4,23];
req = [new Set(req)];
console.log(req);


let numbers = [2,3,4,455,5,,66,7,,88,,,66,,5,5,4,3,3,2];
let del = 5;
numbers = numbers.filter(item => item != del);
console.log(numbers);

// COUNT DIGITS
let digits = [7537632847247848273];
let number = 0;
let copy = digits ;

while (copy > 0) {
    number++;
    copy = Math.floor(copy/10);
}
console.log(number);


// sum of the number
let numb = 287152;
let sum = 0;
let cop = numb;  

while (cop > 0) {
    let digit = cop % 10;      
    sum += digit;               
    copy = Math.floor(cop / 10);
}

console.log(sum);


// Fcatorial
let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;   
}

console.log(`factorial of ${n} is ${factorial}`);


// largets number
let arr1 = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = arr1[0];

for (let i = 1; i < arr.length; i++) {
  if (largest < arr1[i]) {
    largest = arr1[i];
  }
}

console.log(largest); 

