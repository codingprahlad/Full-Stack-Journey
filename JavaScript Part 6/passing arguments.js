//
function printInfo (name,age) {
    console.log(`${name}'s age is ${age}`);
};
printInfo("Prahlad",23);
printInfo("Shalini",20);
printInfo("Rockybhai",30);


//
function sum (a,b) {
    console.log(a+b);
};
sum( 5, 6);
sum( 2, 0);
sum( 75446, 53);
sum( 3, 854613);



//
function calAvg (a,b,c) {
    console.log((a+b+c)/3);
}
calAvg ( 25, 64, 64);
calAvg ( 256, 6402, 74);
calAvg ( 25, 640, 64);
calAvg ( 0, 64, 64);


// creating table

function table () {
    let n = prompt("Enter you number:");
    for (let i=n; i<=50; i+=n) {
    console.log(i);
}
}
 table();