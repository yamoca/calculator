const textArea = document.querySelector("p");
let displayValue = ""
console.log(-2*4);


function clearDisplay() {
    displayValue = "";
    textArea.textContent = "";
}

function addToDisplay(event) {
    displayValue += event.target.textContent;
    textArea.textContent = displayValue;
}

function add(a, b) { return a + b }

function subtract(a, b) { return a - b}

function multiply(a, b) { return a * b }

function divide(a, b) { return a / b }

const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
};

// doesnt work with neg numbers cause this function splits it at the first "-" so -3*5 is split into ["", "3*5"]
// possible work around dont use negative as a normal function (e.g 2+-3) so yeah 

function calculate() {
    for (const operator in operations) {
        if (textArea.textContent.includes(operator)) {
            let vals = textArea.textContent.split(operator);
            console.log(vals);
            displayValue = operations[operator](parseInt(vals[0], 10), parseInt(vals[1]), 10);
            textArea.textContent = displayValue; 
        }
    }
}