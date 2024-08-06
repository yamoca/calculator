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

}

function divide(a, b) {

}