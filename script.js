// Global variables for display value for operation, each number and the operator.
let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let displayValue = '0';

// Functions for addition, subtraction, multiplication and division.
const add = function(x, y) {   
    return(x + y);
}

const subtract = function(x, y) {
    return(x - y);
}

const divide = function(x, y) {
    return(x / y);
}

const multiply = function(x, y) {
    return(x * y);
}

// Operate function initially checks if both parsed variables are numerical.
// Calls add, subtract, divide, or multiply depending on the operator parsed.
const operate = function(firstNumber, operator, secondNumber) {
    if (typeof(firstNumber) !== "number" || typeof(secondNumber) !== "number") {
        return "Error - non numerical input.";
    }
    
    if (operator == '+') { return add(firstNumber, secondNumber); }
    else if (operator == '-') { return subtract(firstNumber, secondNumber); }
    else if (operator == '/') { return divide(firstNumber, secondNumber); }
    else if (operator == '*') { return multiply(firstNumber, secondNumber); }
    else { return "Error - Operator unrecognised."; }
}

// Initial functionality for calculator display that updates depending on button click.
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

const populateDisplay = function(event) {
    let buttonValue = event.target.textContent;

    // if C is entered: display 0 and clear variables
    if (buttonValue == 'C') {
        displayValue = '0';
        firstNumber = 0;
        secondNumber = 0;
        operator = '';
    }

    // if an operator is entered, check if firstNumber is empty. If so, put the displayValue into firstNumber and operator into operator then clear the displayValue.
    else if ((buttonValue == '+' || buttonValue == '-' || buttonValue == '/' || buttonValue == '*')) {
        if (firstNumber === 0) {
            firstNumber = parseFloat(displayValue);
        } else if (operator !== '' && displayValue !== '0') {
            secondNumber = parseFloat(displayValue);
            firstNumber = operate(firstNumber, operator, secondNumber);
        }
        operator = buttonValue;
        displayValue = '0';
    }
    // allows 0's if not the first number inputted.
    else if (buttonValue == '0' && displayValue !== '0') {
        displayValue += buttonValue;
    }
    // if numerical input and the current number is less than or equal to ten digits update display value.
    // If the first number, clears the zero.
    else if (buttonValue >= '0' && buttonValue <= '9' && displayValue.length <= 10) {
        if (displayValue === '0') {
            displayValue = buttonValue;
        } else {
            displayValue += buttonValue;
        }
    }
    // If equal is pressed and all required fields are filled, perform the operation.
    else if (buttonValue == '=' && firstNumber !== 0 && operator !== '') {
        secondNumber = parseFloat(displayValue);
        const result = operate(firstNumber, operator, secondNumber);
        displayValue = result.toString(); // Convert result to string
        firstNumber = result; // Store result as the new firstNumber for subsequent operations
        secondNumber = 0; // Reset secondNumber
        operator = ''; // Reset operator to allow new operations
    }
    display.textContent = displayValue;
}

buttons.forEach(button => {
    button.addEventListener('click', populateDisplay);
});