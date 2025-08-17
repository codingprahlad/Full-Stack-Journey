// if statement
let color = "Red";
if (color == "Red") {
    console.log ("Stop");
}
if (color == "Yellow") {
    console.log ("Slow down");
}
if (color == "Green") {
    console.log ("Go");
}

// else-if  statement
let score = 75;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 70) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below");
}

//else statement
let age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

//nested if-else statements
let marks = "67";
if (marks >= "33") {
    if (marks >= "80" ){
        console.log ("O");
    }
    else {
        console.log ("A");
    }
    else {
        console.log ("Better luck next time.");
    }
}


