
//Functions for addition, subtraction, multiplication and division.
//Each checks if both parsed variables are numerical.
const add = function(x, y) {
    if (typeof(x) != "number" || typeof(y) != "number") {
        return ("ERROR.")
    }
    return(x + y);
}

const subtract = function(x, y) {
    if (typeof(x) != "number" || typeof(y) != "number") {
        return ("ERROR.")
    }
    return(x - y);
}

const divide = function(x, y) {
    if (typeof(x) != "number" || typeof(y) != "number") {
        return ("ERROR.")
    }
    return(x / y);
}

const multiply = function(x, y) {
    if (typeof(x) != "number" || typeof(y) != "number") {
        return ("ERROR.")
    }
    return(x * y);
}