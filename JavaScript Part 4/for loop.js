// For loop
for (let i=1; i<=10; i++) {
    console.log(i);
}

for (let i=10; i>=1; i--) {
    console.log(i);
}

for (let i = 10; i >= 1; i = i - 2) {
    console.log(i);
}

// Print odd numbers 1 to 15



for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i + " is an odd number");
    } else {
        console.log(i + " is not an odd number");
    }
}


// Backward numbers
for (let i=15; i>=1; i= i-2) {
    console.log("BACKWARD NUMBERS");
}

for (let i = 15; i >= 1; i = i - 2) {
    console.log("BACKWARD NUMBERS");
}


let a = 5;
let b = 8 ;
console.log(a+b);

//even numbers
for ( let i=1; i<=50; i=i+5 ){
        console.log(i + " is an even number");
    } 
   
for ( let k=2; k<=20; k=k+2 ){
        console.log(k + " is an even number");
    } 
       
//  multiplication (Tables)
let n = prompt("Enter your number");    
n = parseInt(n);

for(let z=n; z<=n*10; z=z+n) {
    console.log(z);
}