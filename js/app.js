
const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (numerator, denominator) => {
    if(denominator === 0) return NaN;
    return numerator / denominator;
}
/**
 * performs addition, subtraction, multiplication or division based on input operator
 * @param {string} operator  string representing +, -, *, or / operator
 * @param {number} num1 
 * @param {number} num2 
 */
const operate = (operator, num1, num2) => {
    switch(operator){
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case '*':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
    }
}