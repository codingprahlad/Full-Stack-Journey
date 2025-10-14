// loops with array
let fruits = ["Mango","Banana","Orange","Grapes","Dragon fruit"];
for (let i=0; i<fruits.length; i++) {
    console.log(i, fruits[i]);
}
console.log("Odd numbers:")
let fruit = ["Mango","Banana","Orange","Grapes","Dragon fruit"];
for (let i=1; i<fruit.length; i=i+2) {
    console.log(i, fruit[i]);
}
console.log("Push array method:")
let hannu = ["Mango","Banana","Orange","Grapes","Dragon fruit"];
hannu.push("Pinapple");
for (let i=0; i<hannu.length; i++) {
    console.log(i, hannu[i]);
}

// reverse
console.log("Revers");
let fruity = ["Mango","Banana","Orange","Grapes","Dragon fruit"];
for (let i=fruity.length-1; i<=0; i--) {
    console.log(i, fruity[i]);
}



//loops with nested array
console.log("Heroes:");
let heroes = [["Ironman","thor","hulk"], ["flash","wonderman","superman"]];

for (let i=0; i<heroes.length; i++) {
    console.log(i, heroes[i], heroes[i].length);
    for( let j=0; j<heroes[i].length; j++){
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}

console.log("Students:");
let students = [["prahlad",89], ["Danish",75], ["darshan",100]];
for(let i=0; i<students.length; i++) {
    for(let j=0; j<students[i].length; j++){
        console.log(students[i][j]);
    }
}



