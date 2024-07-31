// Global variables for display value for operation, each number and the operator.
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let displayValue = '0';

// Functions for addition, subtraction, multiplication and division.
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const divide = (x, y) => y !== 0 ? x / y: 'Error'; //Error handling for division by zero.
const multiply = (x, y) => x * y;

// Operate function to perform arithmetic based on operator.
const operate = (firstNumber, operator, secondNumber) => {
    switch (operator) {
        case '+': return add(firstNumber, secondNumber);
        case '-': return subtract(firstNumber, secondNumber);
        case '/': return divide(firstNumber, secondNumber);
        case '*': return multiply(firstNumber, secondNumber);
        default: return('Error - unrecognised operator.');
    }
}

// Initial functionality for calculator display that updates depending on button click.


// Define a function to update the display based on button clicks
const populateDisplay = (event) => {
    // Get the text content of the clicked button
    let buttonValue = event.target.textContent;

    // If C is entered: reset display and clear variables
    if (buttonValue == 'C') {
        displayValue = '0';
        firstNumber = 0;
        secondNumber = 0;
        operator = '';
    }
    // If an operator is entered, handle the operation logic.
    else if (['+', '-', '/', '*'].includes(buttonValue)) {
        if (firstNumber === 0) {
            firstNumber = parseFloat(displayValue);
        } else if (operator !== '' && displayValue !== '0') {
            secondNumber = parseFloat(displayValue);
            firstNumber = operate(firstNumber, operator, secondNumber);
        }
        operator = buttonValue;
        displayValue = '0';
    }
    // If '0' is clicked and display value is not '0', append '0' to display value
    else if (buttonValue == '0' && displayValue !== '0') {
        displayValue += buttonValue;
    }
    // Handle numerical input and update display value
    else if (!isNaN(buttonValue) && displayValue.length <= 10) {
        // If display value is '0', replace it with the button value
        // Otherwise, append the button value to the display value
        displayValue = displayValue === '0' ? buttonValue : displayValue + buttonValue;
    }
    // If equal is pressed and all required fields are filled, perform the operation.
    else if (buttonValue === '=' && firstNumber !== 0 && operator) {
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