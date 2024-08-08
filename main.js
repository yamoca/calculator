const textArea = document.querySelector("p");
let displayValue = ""

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

function calculate() {
    for (const operator in operations) {
        if (textArea.textContent.includes(operator)) {
            let vals = textArea.textContent.split(operator);
            displayValue = operations[operator](Number(vals[0]), Number(vals[1]));
            textArea.textContent = displayValue; 
        }
    }
}