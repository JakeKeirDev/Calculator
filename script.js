//Global variables for each number and the operator.
let firstNumber = 0;
let secondNumber = 0;
let operator = '';


//Functions for addition, subtraction, multiplication and division.
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


//Operate function initially checks if both parsed variables are numerical.
//Calls add, subtract, divide, or multiply depending operator parsed.
const operate = function(firstNumber, operator, secondNumber) {
    if (typeof(firstNumber) != "number" || typeof(secondNumber) != "number") {
        return ("Error - non numerical input.")
    }
    
    if (operator == '+') { add(firstNumber, secondNumber)}
    else if (operator == '-') { subtract(firstNumber, secondNumber)}
    else if (operator == '/') { divide(firstNumber, secondNumber)}
    else if (operator == '*') { multiply(firstNumber, secondNumber)}
    else {return ("Error - Operator unrecognised.")}
}