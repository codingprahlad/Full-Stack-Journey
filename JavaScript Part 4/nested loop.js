// Nested loops
for (let i=1; i<=5; i++) {
    console.log("Outer loop");
    for (let j=1; j<=5; j++){
      console.log(j);
    }
}

// while loop
let i=1;
while (i<=5);{
console.log(i);
i++;
}

let z=0;
while (z<=10);{
console.log(z);
z=z++;
}

let j=10;
while (j>=1);{
console.log(j);
j--;
}

// example
const favmovi = "Avatar";
let guess = prompt("Guess my fav movi");
while ((guess != favmovi) && (guess != "quit" )) {
    guess = prompt("wrong guess!.. Please try agian");
}

if(guess == favmovi) {
  console.log("Congrats!");
} else {
  console.log("You quit");
}