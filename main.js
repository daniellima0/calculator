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
    displayText.textContent = array.join('');
}

function clearDisplay() {
    displayText.textContent = '0';
    numbersPressed = [];
    currentValue = 0;
}

// Variables declaration------------------------
let numbersPressed = [];
const container = document.querySelector('#container');
const displayText = container.querySelector('#display-text');
const clear = container.querySelector('#clear');
const numbers = Array.from(container.querySelectorAll('.number'));
const addOperator = container.querySelector('#add');
const subtractOperator = container.querySelector('#subtract');
const multiplyOperator = container.querySelector('#multiply');
const divideOperator = container.querySelector('#divide');
let currentValue = 0;

// Actual code----------------------------------
// Placeholder text
displayText.textContent = 0;

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
    displayText.textContent = currentValue;
    // Clean array
    numbersPressed = [];
});

// elaborate currentValue so the first subtraction or the first subtraction after cleaning the display don't subtract from zero (do this for all other functions)
subtractOperator.addEventListener('click', () => {
    currentValue = subtract(currentValue, numbersPressed.join(''));
    displayText.textContent = currentValue;
    // Clean array
    numbersPressed = [];
});