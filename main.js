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

function operate(operation, a, b) {

}

function add(a, b) {

}

function subtract(a, b) {

}

function multiply(a, b) {
    return a * b; 
}

function divide(a, b) {

}

function calculate() {
    if (textArea.textContent.includes("*")) {
        let vals = textArea.textContent.split("*");
        displayValue = multiply(vals[0], vals[1]);
        textArea.textContent = displayValue; 
    }
}