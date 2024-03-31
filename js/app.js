//queries all buttons on page. all buttons are currently only calculator buttons
const buttonsList = document.querySelectorAll(".calc-btn");









function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(numerator, denominator){
    if(denominator === 0) return NaN;
    return numerator / denominator;
}
//stingParser lacks character based safety checks due to stings being generated from buttoms that don't allow for unexpected inputs
function stringParser(string){
    let numbers = [];
    let operators = [];
    let subString = '';
    let chars = string.split('');
    chars.forEach(element => {
        if(element === '+'||element === '-'||element === '*'||element === '/'){
            operators.push(element);
            numbers.push(subString);
            subString = '';
        }
        else{
            subString += element;
        }

    });
    numbers.push(subString);
    return [numbers , operators];
}

function evaluate(numbers, operators){
    let numArr = numbers;
    let oppArr = operators;
    console.log(numArr);

    while(numArr.length > 1) {
        let inputNum1;
        let inputNum2;
        let operator;
        inputNum1 = parseInt(numArr.shift());
        inputNum2 = parseInt(numArr.shift());
        operator = oppArr.shift();

        switch(operator) {
            case '+':
                numArr.unshift(add(inputNum1,inputNum2));
                break;
            case '-':
                numArr.unshift(subtract(inputNum1,inputNum2));
                break;
            case '*':
                numArr.unshift(multiply(inputNum1,inputNum2));
                break;
            case '/':
                numArr.unshift(multiply(inputNum1,inputNum2));
                break;
        }
    }
    return numArr[0];
}
