let todo = [];

let req = prompt["Enter your request:"];

while (true) {
    if (req == "quit") {
        console.log("you quit the game!");
        break;
    }
    if (req == "list") {
        console.log("------------");
        for (let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
         console.log("------------");
    }
    else if (req == "add") {
        let task = prompt ("Please enter you want to add:");
        todo.push(task);
        console.log("Your request has been added.");
    }
    else if (req == "delete") {
        let index = prompt("Enter the task index:");
        todo.splice(index, 1);
        console.log("Your task i deleted.");
    }
    else {
        console.log("Wrong request!");
    }
    let req = prompt["Enter your request:"];
}