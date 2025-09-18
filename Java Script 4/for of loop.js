let fruits = ["mango","banana","jackfruit","pinapple"];
for (fruit of fruits){
    console.log(fruit);
}

console.log("cars:");
// nested for of loops
let cars = ["maruti","mahendra","lamborgini","hundai"];
for (list of cars) {
    for (car of list) {
        console.log(car);
    }
}