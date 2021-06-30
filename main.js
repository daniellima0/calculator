// Functions declaration------------------------
function add(a, b) {
    let result = +a + +b;
    let resultString = result.toString();
    let resultArray = resultString.split('');
    let fixedResult;

    //desmistificar essa logica aqui e fazer com que números com ponto decimal sejam corrigidos pra 3 casas enquanto números inteiros não
    for (i = 0; i < resultArray.length; i++) {
        if (resultArray[i] == '.') {
            fixedResult = +result.toFixed(3);
            if (fixedResult.length > 9) {
                console.log(fixedResult);
                return (+fixedResult).toExponential();
            } else {
                return fixedResult;
            }
        } else {
            fixedResult = result;
            if (fixedResult.length > 9) {
                console.log(fixedResult);
                return (+fixedResult).toExponential();
            } else {
                return fixedResult;
            }
        }
    }
}

function subtract(a, b) {
    let result = +a - +b
    let fixedResult = result.toFixed(3);
    if (fixedResult.length > 9) {
        return (+fixedResult).toExponential();
    }
    return fixedResult;
}

function multiply(a, b) {
    let result = +a * +b
    let fixedResult = result.toFixed(3);
    if (fixedResult.length > 9) {
        return (+fixedResult).toExponential();
    }
    return fixedResult;
}

function divide(a, b) {
    let result = +a / +b
    let fixedResult = result.toFixed(3);
    if (fixedResult.length > 9) {
        return (+fixedResult).toExponential();
    }
    return fixedResult;
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
    pointCounter = 0;
}

// Variables declaration------------------------
let numbersPressed = [];
const container = document.querySelector('#container');
const currentResult = container.querySelector('#current-result');
const previousResult = container.querySelector('#previous-input');
const clear = container.querySelector('#clear');
const del = container.querySelector('#del');
const percent = container.querySelector('#percent');
const numbers = Array.from(container.querySelectorAll('.number'));
const point = container.querySelector('#point');
const addOperator = container.querySelector('#add');
const subtractOperator = container.querySelector('#subtract');
const multiplyOperator = container.querySelector('#multiply');
const divideOperator = container.querySelector('#divide');
const equalOperator = container.querySelector('#equal');
const displayEqualSign = document.createElement('P');
displayEqualSign.id = 'display-equal';
displayEqualSign.textContent = '=';
displayEqualSign.style.color = 'black';
displayEqualSign.style.fontFamily = 'sans - serif';
displayEqualSign.style.fontSize = '3.2rem';
displayEqualSign.style.position = 'absolute';
displayEqualSign.style.top = '3.5rem';
displayEqualSign.style.left = '1.5rem';
let currentValue = 0;
let subtractCounter = 0;
let multiplyCounter = 0;
let divideCounter = 0;
let firstValue;
let secondValue;
let operator;
let lastValue;
let pointCounter = 0;

// Actual code----------------------------------
// Placeholder text
currentResult.textContent = 0;

numbers.forEach(number => {
    number.addEventListener('click', () => {
        displayEqualSign.remove();
        numbersPressed.push(number.textContent);
        populateDisplay(numbersPressed);
    })
});

clear.addEventListener('click', () => {
    displayEqualSign.remove();
    clearDisplay();
});

del.addEventListener('click', () => {
    if (numbersPressed.length > 0) {
        numbersPressed.pop();
        currentResult.textContent = numbersPressed.join('');
    }
});

percent.addEventListener('click', () => {
    if (document.querySelector('#display-equal') != null) {
        displayEqualSign.remove();
        currentResult.textContent = `${lastValue / 100}`;
        currentValue = currentResult.textContent;
        numbersPressed = currentResult.textContent.split('');
    } else if (document.querySelector('#display-equal') == null) {
        currentResult.textContent = `${+numbersPressed.join('') / 100}`;
        currentValue = currentResult.textContent;
        numbersPressed = currentResult.textContent.split('');
    }
});

point.addEventListener('click', () => {
    if (document.querySelector('#display-equal') == null) {
        for (i = 0; i < numbersPressed.length; i++) {
            if (numbersPressed[i] == '.') {
                pointCounter++;
            }
        }
        if (pointCounter == 0) {
            numbersPressed.push('.');
            currentResult.textContent = numbersPressed.join('');
        }
    }
});
// z index 1 2 3 container / display / displayed values
addOperator.addEventListener('click', () => {
    if (document.querySelector('#display-equal') != null) {
        currentValue = lastValue;
        previousResult.textContent = lastValue + '+';
        currentResult.textContent = '';
        // Clear array
        numbersPressed = [];
    } else if (document.querySelector('#display-equal') == null) {
        currentValue = add(currentValue, numbersPressed.join(''));
        console.log(currentValue);
        currentResult.textContent = '';
        //why isn't previousResult.textContent equal to 1.111 (in case 1.1111 is inputed)
        previousResult.textContent = currentValue + '+';
        // Clear array
        numbersPressed = [];
    }
    displayEqualSign.remove();
    pointCounter = 0;
});

subtractOperator.addEventListener('click', () => {
    if (subtractCounter != 0) {
        if (document.querySelector('#display-equal') != null) {
            currentValue = lastValue;
            previousResult.textContent = lastValue + '-';
            currentResult.textContent = '';
            // Clear array
            numbersPressed = [];
        } else if (document.querySelector('#display-equal') == null) {
            currentValue = subtract(currentValue, numbersPressed.join(''));
            currentResult.textContent = '';
            previousResult.textContent = currentValue + '-';
            // Clear array
            numbersPressed = [];
        }
    } else {
        if (document.querySelector('#display-equal') != null) {
            currentValue = lastValue;
            previousResult.textContent = lastValue + '-';
            currentResult.textContent = '';
            // Clear array
            numbersPressed = [];
        } else if (document.querySelector('#display-equal') == null) {
            currentValue = +numbersPressed.join('');
            currentResult.textContent = '';
            previousResult.textContent = currentValue + '-';
            numbersPressed = [];
        }
    }
    displayEqualSign.remove();
    subtractCounter++;
    pointCounter = 0;
});

multiplyOperator.addEventListener('click', () => {
    if (multiplyCounter != 0) {
        if (document.querySelector('#display-equal') != null) {
            currentValue = lastValue;
            previousResult.textContent = lastValue + '×';
            currentResult.textContent = '';
            // Clear array
            numbersPressed = [];
        } else if (document.querySelector('#display-equal') == null) {
            currentValue = multiply(currentValue, numbersPressed.join(''));
            currentResult.textContent = '';
            previousResult.textContent = currentValue + '×';
            // Clear array
            numbersPressed = [];
        }
    } else {
        if (document.querySelector('#display-equal') != null) {
            currentValue = lastValue;
            previousResult.textContent = lastValue + '×';
            currentResult.textContent = '';
            // Clear array
            numbersPressed = [];
        } else if (document.querySelector('#display-equal') == null) {
            currentValue = +numbersPressed.join('');
            currentResult.textContent = '';
            previousResult.textContent = currentValue + '×';
            numbersPressed = [];
        }
    }
    displayEqualSign.remove();
    multiplyCounter++;
    pointCounter = 0;
});

divideOperator.addEventListener('click', () => {
    if (divideCounter != 0) {
        if (document.querySelector('#display-equal') != null) {
            currentValue = lastValue;
            previousResult.textContent = lastValue + '÷';
            currentResult.textContent = '';
            // Clear array
            numbersPressed = [];
        } else if (document.querySelector('#display-equal') == null) {
            currentValue = divide(currentValue, numbersPressed.join(''));
            currentResult.textContent = '';
            previousResult.textContent = currentValue + '÷';
            // Clear array
            numbersPressed = [];
        }
    } else {
        if (document.querySelector('#display-equal') != null) {
            currentValue = lastValue;
            previousResult.textContent = lastValue + '÷';
            currentResult.textContent = '';
            // Clear array
            numbersPressed = [];
        } else if (document.querySelector('#display-equal') == null) {
            currentValue = +numbersPressed.join('');
            currentResult.textContent = '';
            previousResult.textContent = currentValue + '÷';
            numbersPressed = [];
        }
    }
    displayEqualSign.remove();
    divideCounter++;
    pointCounter = 0;
});

equal.addEventListener('click', () => {
    display.append(displayEqualSign);
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
    lastValue = currentResult.textContent;
    numbersPressed = [];
    pointCounter = 0;
});

// TODO:
// Make a function out of clean array and try to merge with cleanDisplay
// insert a 0 when clickin on the point and if none number was clicked before
// Add DELETE button
// This gotta be my master project (organize files in folders)
// add e+ to number when cross the limit of numbers that fit in the display