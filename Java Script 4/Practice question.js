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


let digits = [7537632847247848273];
digits = digits.