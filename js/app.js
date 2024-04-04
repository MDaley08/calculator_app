//queries all buttons on page. all buttons are currently only calculator buttons
const clearBtn = document.getElementById("clear");
const displayIn = document.getElementById("input")
const delBtn = document.getElementById("delete");
const equalBtn = document.getElementById("equal");
const numpadBtns = document.querySelectorAll(".numpad button");
const operatorsList = ['+','-','*','/'];

let expression = '0';
let updated = false;
let resultShown = false;
displayIn.textContent = expression;

clearBtn.addEventListener("click", clearDisplay);
equalBtn.addEventListener("click", evaluateExpression);
delBtn.addEventListener("click", () => {
    if(resultShown) return;
    expression = expression.slice(0,-1);
    updateDisplay();
});

numpadBtns.forEach(element => element.addEventListener("click", () => {
    if(element.id !== 'equal'){
        updateExpression(element.textContent);
    }
    updateDisplay();
}));


function updateLastBtn(button){
    prevBtn = button;
}
function updateExpression(value){
    if(!updated||resultShown){
        expression = value;
        updated = true;
        resultShown = false;
        return;
    } 
    expression += value;
}

function updateDisplay(){
    displayIn.textContent = expression;
}

function evaluateExpression(){
    expression = evaluate(expression);
    displayIn.textContent = expression;
    resultShown = true;
}

function clearDisplay(){
    displayIn.textContent = '0';
    expression = '0';
    updated = false;
    resultShown = false;
}

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

function evaluate(inString){
    let tempArr = stringParser(inString);
    let numArr = tempArr[0];
    let oppArr = tempArr[1];

    while(numArr.length > 1) {
        let inputNum1;
        let inputNum2;
        let operator;
        inputNum1 = parseFloat(numArr.shift());
        inputNum2 = parseFloat  (numArr.shift());
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
                numArr.unshift(divide(inputNum1,inputNum2));
                break;
        }
    }
    return (Math.round(numArr[0] * 10000) / 10000) || 'Undefined';
}
