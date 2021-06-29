// Functions declaration------------------------
function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    return +a / +b;
}

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

function populateDisplay(array) {
    currentResult.textContent = array.join('');
}

function clearDisplay() {
    currentResult.textContent = '0';
    previousResult.textContent = '';
    numbersPressed = [];
    currentValue = 0;
    subtractCounter = 0;
    multiplyCounter = 0;
    divideCounter = 0;
}

// Variables declaration------------------------
let numbersPressed = [];
const container = document.querySelector('#container');
const currentResult = container.querySelector('#current-result');
const previousResult = container.querySelector('#previous-input');
const clear = container.querySelector('#clear');
const numbers = Array.from(container.querySelectorAll('.number'));
const addOperator = container.querySelector('#add');
const subtractOperator = container.querySelector('#subtract');
const multiplyOperator = container.querySelector('#multiply');
const divideOperator = container.querySelector('#divide');
const equalOperator = container.querySelector('#equal');
let currentValue = 0;
let subtractCounter = 0;
let multiplyCounter = 0;
let divideCounter = 0;

// Actual code----------------------------------
// Placeholder text
currentResult.textContent = 0;

numbers.forEach(number => {
    number.addEventListener('click', () => {
        displayEqualSign.remove();
        numbersPressed.push(number.textContent);
        populateDisplay(numbersPressed);
    })
})

clear.addEventListener('click', () => {
    displayEqualSign.remove();
    clearDisplay();
});

addOperator.addEventListener('click', () => {
    displayEqualSign.remove();
    currentValue = add(currentValue, numbersPressed.join(''));
    currentResult.textContent = '';
    previousResult.textContent = currentValue + '+';
    // Clear array
    numbersPressed = [];
});

subtractOperator.addEventListener('click', () => {
    displayEqualSign.remove();
    if (subtractCounter != 0) {
        currentValue = subtract(currentValue, numbersPressed.join(''));
        currentResult.textContent = '';
        previousResult.textContent = currentValue + '-';
        // Clear array
        numbersPressed = [];
    } else {
        currentValue = +numbersPressed.join('');
        currentResult.textContent = '';
        previousResult.textContent = currentValue + '-';
        numbersPressed = [];
    }
    subtractCounter++;
});

multiplyOperator.addEventListener('click', () => {
    displayEqualSign.remove();
    if (multiplyCounter != 0) {
        currentValue = multiply(currentValue, numbersPressed.join(''));
        currentResult.textContent = '';
        previousResult.textContent = currentValue + '×';
        // Clear array
        numbersPressed = [];
    } else {
        currentValue = +numbersPressed.join('');
        currentResult.textContent = '';
        previousResult.textContent = currentValue + '×';
        numbersPressed = [];
    }
    multiplyCounter++;
});

divideOperator.addEventListener('click', () => {
    displayEqualSign.remove();
    if (divideCounter != 0) {
        currentValue = divide(currentValue, numbersPressed.join(''));
        currentResult.textContent = '';
        previousResult.textContent = currentValue + '÷';
        // Clear array
        numbersPressed = [];
    } else {
        currentValue = +numbersPressed.join('');
        currentResult.textContent = '';
        previousResult.textContent = currentValue + '÷';
        numbersPressed = [];
    }
    divideCounter++;
});

let firstValue;
let secondValue;
let operator;
const displayEqualSign = document.createElement('P');
displayEqualSign.id = 'display-equal';
displayEqualSign.textContent = '=';
displayEqualSign.style.color = 'white';
displayEqualSign.style.fontFamily = 'sans - serif';
displayEqualSign.style.fontSize = '3.2rem';
displayEqualSign.style.position = 'absolute';
displayEqualSign.style.top = '3.5rem';
displayEqualSign.style.left = '1rem';

equal.addEventListener('click', () => {
    container.append(displayEqualSign);
    let arrayOfFirstValue = previousResult.textContent.split(""); // e.g. array ['1','0','+']
    operator = arrayOfFirstValue.pop(); // e.g. string '+'
    let stringOfFirstValue = arrayOfFirstValue.join(''); // e.g. string '10'
    firstValue = +stringOfFirstValue; //e.g. number 10
    secondValue = +numbersPressed.join('');

    if (operator == '+') {
        currentResult.textContent = add(firstValue, secondValue);
    } else if (operator == '-') {
        currentResult.textContent = subtract(firstValue, secondValue);
    } else if (operator == '×') {
        currentResult.textContent = multiply(firstValue, secondValue);
    } else if (operator == '÷') {
        currentResult.textContent = divide(firstValue, secondValue);
    }

    previousResult.textContent = '';
    // Clear array
    numbersPressed = [];
});

// TODO:
// Make a function out of clean array and try to merge with cleanDisplay
// insert a 0 when clickin on the point and if none number was clicked before
// Add DELETE button
// This gotta be my master project (organize files in folders)