let age = 25;
let year = 2023;

console.log(age,year);

let firstName = "Elle";
let lastName = "Kim";

let fullName = firstName + " " + lastName;
console.log(fullName);

console.log(fullName.length);
console.log(fullName[2]);
console.log(fullName.toUpperCase());

// conditionals

let date = 17;
if(date === "17") console.log("yay!");
if(date === 17) console.log("good!");

// function
function add(a,b){
    return a+b;
}

console.log(add(1,2));

function printHi(name){
    return "hi " + name;
}

function printBye(func){
    return func("Jolene") + " bye";
}

console.log(printBye(printHi));