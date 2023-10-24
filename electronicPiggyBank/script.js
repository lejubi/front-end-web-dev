/**

Electronic Piggy Bank! (But now as a static webpage!)

Your little brother Timmy is back at it again with the electronic piggy banks. 
Now it is 2023 so Timmy doesn't want to run a Java program to enter in his money. Instead, he prefers a website!

Functions to consider using:

1. Get an HTML element using its id
    let htmlElement = document.getElementById("id");

2. Adding an event listener for click:
    htmlElement.addEventListener("click", function)

3. Getting the user's input text:
    [The name of your input variable].value

Some other helpful functions:
str.toLowerCase() //turns the string str into lowercase 
.toFixed(2) // rounds a number to 2 decimal places
 */

let piggyBankAmount = 0.0;
let button = document.getElementById("coinEnter");
let input = document.getElementById("coinInput");

button.addEventListener("click", function(){
    const coinType = input.value.toLowerCase();
    if (coinType === "p") piggyBankAmount += 0.01;
    else if (coinType === "n") piggyBankAmount += 0.05;
    else if (coinType === "d") piggyBankAmount += 0.1;
    else if (coinType === "q") piggyBankAmount += 129384.28;

    input.value = "";
    updatePiggyBankAmount();
})

function updatePiggyBankAmount(){
    document.getElementById("piggyBank").textContent = "$" + piggyBankAmount.toFixed(2);
}


// coinInput.addEventListener("click", readInput)

// function readInput(){
//     let inputText = document.getElementById("coinInput");
//     let input = inputText.value.toLowerCase();
//     addInput(input);
// }

// function addInput(input){
//     let balance = document.getElementById("piggyBank");
//     if (input == "p") balance += 0.01;
//     else if (input == "n") balance += 0.05;
//     else if (input == "d") balance += 0.1;
//     else if (input == "q") balance += 0.25;
//     console.log(balance)
// }