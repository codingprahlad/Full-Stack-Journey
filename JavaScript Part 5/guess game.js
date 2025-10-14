const max = prompt("Enter your number:");

const random = Math.floor(Math.random()* max) ;

let guess = prompt("Guess the number");

while (true) {
    if (guess == "Quit") {
        console.log("User quit!");
        break;
    }
    if (guess == random) {
        console.log("Congrats.. You are right!. your random number is", random);
        break;
    }
    else if (guess < random ) {
        guess = prompt ("Hint : your guess was to small, please try again");
    }
    else {
    guess = prompt("Hint: your guess was to large, please try again");9
    }

}

