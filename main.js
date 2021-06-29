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
let currentValue = 0;
let subtractCounter = 0;
let multiplyCounter = 0;
let divideCounter = 0;

// Actual code----------------------------------
// Placeholder text
currentResult.textContent = 0;

numbers.forEach(number => {
    number.addEventListener('click', () => {
        numbersPressed.push(number.textContent);
        populateDisplay(numbersPressed);
    })
})

clear.addEventListener('click', () => {
    clearDisplay();
});

addOperator.addEventListener('click', () => {
    currentValue = add(currentValue, numbersPressed.join(''));
    currentResult.textContent = currentValue;
    previousResult.textContent = currentValue + '+';
    // Clean array
    numbersPressed = [];
});

subtractOperator.addEventListener('click', () => {
    if (subtractCounter != 0) {
        currentValue = subtract(currentValue, numbersPressed.join(''));
        currentResult.textContent = currentValue;
        previousResult.textContent = currentValue + '-';
        // Clean array
        numbersPressed = [];
    } else {
        currentValue = +numbersPressed.join('');
        currentResult.textContent = currentValue;
        previousResult.textContent = currentValue + '-';
        numbersPressed = [];
    }
    subtractCounter++;
});

multiplyOperator.addEventListener('click', () => {
    if (multiplyCounter != 0) {
        currentValue = multiply(currentValue, numbersPressed.join(''));
        currentResult.textContent = currentValue;
        previousResult.textContent = currentValue + '×';
        // Clean array
        numbersPressed = [];
    } else {
        currentValue = +numbersPressed.join('');
        currentResult.textContent = currentValue;
        previousResult.textContent = currentValue + '×';
        numbersPressed = [];
    }
    multiplyCounter++;
});

divideOperator.addEventListener('click', () => {
    if (divideCounter != 0) {
        currentValue = divide(currentValue, numbersPressed.join(''));
        currentResult.textContent = currentValue;
        previousResult.textContent = currentValue + '÷';
        // Clean array
        numbersPressed = [];
    } else {
        currentValue = +numbersPressed.join('');
        currentResult.textContent = currentValue;
        previousResult.textContent = currentValue + '÷';
        numbersPressed = [];
    }
    divideCounter++;
});