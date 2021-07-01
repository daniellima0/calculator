// Functions declaration------------------------
function add(a, b) {
    let result = +a + +b;
    console.log(result);
    let resultString = result.toString();
    let resultArray = resultString.split('');
    let fixedResult = null;
    let isDecimal = false;

    for (i = 0; i < resultArray.length; i++) {
        if (resultArray[i] == '.') {
            isDecimal = true;
        }
    }

    if (isDecimal == true) {
        fixedResult = +result.toFixed(3);
        resultArray = fixedResult.toString().split('');
    }

    if (resultArray.length > 9) {
        fixedResult = (+fixedResult).toExponential(3);
    }

    if (fixedResult != null) {
        console.log(fixedResult);
        return fixedResult;
    }

    return result;
}

function subtract(a, b) {
    let result = +a - +b;
    let resultString = result.toString();
    let resultArray = resultString.split('');
    let fixedResult = null;
    let isDecimal = false;

    for (i = 0; i < resultArray.length; i++) {
        if (resultArray[i] == '.') {
            isDecimal = true;
        }
    }

    if (isDecimal == true) {
        fixedResult = +result.toFixed(3);
        resultArray = fixedResult.toString().split('');
    }

    if (resultArray.length > 9) {
        fixedResult = (+fixedResult).toExponential();
    }

    if (fixedResult != null) {
        return fixedResult;
    }

    return result;
}

function multiply(a, b) {
    let result = +a * +b;
    let resultString = result.toString();
    let resultArray = resultString.split('');
    let fixedResult = null;
    let isDecimal = false;

    for (i = 0; i < resultArray.length; i++) {
        if (resultArray[i] == '.') {
            isDecimal = true;
        }
    }

    if (isDecimal == true) {
        fixedResult = +result.toFixed(3);
        resultArray = fixedResult.toString().split('');
    }

    if (resultArray.length > 9) {
        fixedResult = (+fixedResult).toExponential(3);
    }

    if (fixedResult != null) {
        return fixedResult;
    }

    return result;
}

function divide(a, b) {
    let result = +a / +b;
    let resultString = result.toString();
    let resultArray = resultString.split('');
    let fixedResult = null;
    let isDecimal = false;

    for (i = 0; i < resultArray.length; i++) {
        if (resultArray[i] == '.') {
            isDecimal = true;
        }
    }

    if (isDecimal == true) {
        fixedResult = +result.toFixed(3);
        resultArray = fixedResult.toString().split('');
    }

    if (resultArray.length > 9) {
        fixedResult = (+fixedResult).toExponential(3);
    }

    if (fixedResult != null) {
        return fixedResult;
    }

    return result;
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

// Global Variables declaration------------------------
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
displayEqualSign.style.fontSize = '2.5rem';
displayEqualSign.style.position = 'absolute';
displayEqualSign.style.top = '3rem';
displayEqualSign.style.left = '1.5rem';
let currentValue = 0;
let addCounter = 0;
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
        if (document.querySelector('#display-equal') != null) {
            displayEqualSign.remove();
            numbersPressed = [];
            numbersPressed.push(number.textContent);
            populateDisplay(numbersPressed);
        } else {
            if (numbersPressed.length > 9) {
                numbersPressed.push(number.textContent);
                currentResult.textContent = Number(numbersPressed.join('')).toExponential(3);
            } else {
                // displayEqualSign.remove();
                numbersPressed.push(number.textContent);
                populateDisplay(numbersPressed);
            }
        }
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
        subtractCounter = 0;
        multiplyCounter = 0;
        divideCounter = 0;
    } else if (document.querySelector('#display-equal') == null) {
        currentResult.textContent = `${+numbersPressed.join('') / 100}`;
        currentValue = currentResult.textContent; //'2'
        console.log('currentValue é', typeof currentValue, 'de valor:', currentValue);
        numbersPressed = currentValue.split('');  //['2']
        console.log('numbersPressed é', typeof numbersPressed, 'de valor:', numbersPressed);
        addCounter = 0;
        subtractCounter = 0;
        multiplyCounter = 0;
        divideCounter = 0;
    }
});

point.addEventListener('click', () => {
    if (document.querySelector('#display-equal') == null) {
        if (numbersPressed.length == 0) {
            numbersPressed[0] = '0';
        }

        for (i = 0; i < numbersPressed.length; i++) {
            if (numbersPressed[i] == '.') {
                pointCounter++;
            }
        }
        if (pointCounter == 0) {
            numbersPressed.push('.');
            currentResult.textContent = numbersPressed.join('');
        }
    } else if (document.querySelector('#display-equal') != null) {
        displayEqualSign.remove();
        numbersPressed = [];
        numbersPressed[0] = '0';
        numbersPressed.push('.');
        currentResult.textContent = numbersPressed.join('');
    }
});

addOperator.addEventListener('click', () => {

    if (addCounter != 0) {
        if (document.querySelector('#display-equal') != null) {
            currentValue = lastValue;
            previousResult.textContent = lastValue + ' +';
            currentResult.textContent = '';
            // Clear array
            numbersPressed = [];
        } else if (document.querySelector('#display-equal') == null) {
            currentValue = add(currentValue, numbersPressed.join(''));
            currentResult.textContent = '';
            previousResult.textContent = currentValue + ' +';
            // Clear array
            numbersPressed = [];
        }
    } else {
        if (document.querySelector('#display-equal') != null) {
            currentValue = lastValue;
            previousResult.textContent = lastValue + ' +';
            currentResult.textContent = '';
            // Clear array
            numbersPressed = [];
        } else if (document.querySelector('#display-equal') == null) {
            currentValue = +numbersPressed.join('');
            currentResult.textContent = '';
            previousResult.textContent = currentValue + ' +';
            // Clear array
            numbersPressed = [];
        }
    }
    displayEqualSign.remove();
    addCounter++;
    pointCounter = 0;
});

subtractOperator.addEventListener('click', () => {
    if (subtractCounter != 0) {
        if (document.querySelector('#display-equal') != null) {
            currentValue = lastValue;
            previousResult.textContent = lastValue + ' -';
            currentResult.textContent = '';
            // Clear array
            numbersPressed = [];
        } else if (document.querySelector('#display-equal') == null) {
            currentValue = subtract(currentValue, numbersPressed.join(''));
            currentResult.textContent = '';
            previousResult.textContent = currentValue + ' -';
            // Clear array
            numbersPressed = [];
        }
    } else {
        if (document.querySelector('#display-equal') != null) {
            currentValue = lastValue;
            previousResult.textContent = lastValue + ' -';
            currentResult.textContent = '';
            // Clear array
            numbersPressed = [];
        } else if (document.querySelector('#display-equal') == null) {
            currentValue = +numbersPressed.join('');
            currentResult.textContent = '';
            previousResult.textContent = currentValue + ' -';
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
            previousResult.textContent = lastValue + ' ×';
            currentResult.textContent = '';
            // Clear array
            numbersPressed = [];
        } else if (document.querySelector('#display-equal') == null) {
            currentValue = multiply(currentValue, numbersPressed.join(''));
            currentResult.textContent = '';
            previousResult.textContent = currentValue + ' ×';
            // Clear array
            numbersPressed = [];
        }
    } else {
        if (document.querySelector('#display-equal') != null) {
            currentValue = lastValue;
            previousResult.textContent = lastValue + ' ×';
            currentResult.textContent = '';
            // Clear array
            numbersPressed = [];
        } else if (document.querySelector('#display-equal') == null) {
            currentValue = +numbersPressed.join('');
            currentResult.textContent = '';
            previousResult.textContent = currentValue + ' ×';
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
            previousResult.textContent = lastValue + ' ÷';
            currentResult.textContent = '';
            // Clear array
            numbersPressed = [];
        } else if (document.querySelector('#display-equal') == null) {
            currentValue = divide(currentValue, numbersPressed.join(''));
            currentResult.textContent = '';
            previousResult.textContent = currentValue + ' ÷';
            // Clear array
            numbersPressed = [];
        }
    } else {
        if (document.querySelector('#display-equal') != null) {
            currentValue = lastValue;
            previousResult.textContent = lastValue + ' ÷';
            currentResult.textContent = '';
            // Clear array
            numbersPressed = [];
        } else if (document.querySelector('#display-equal') == null) {
            currentValue = +numbersPressed.join('');
            currentResult.textContent = '';
            previousResult.textContent = currentValue + ' ÷';
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

// TODO (in order of priority):
// Change point code to simply disable button when there is already one on display (optional - verify viability)
// Remove repeated code (create functions)
// Make sure all functions are being used
// Make code more readable and easier to understand (name variables and functions better AND comment code)
// Fix: when a number between e+10 and e+20 inclusively is inputed, their sum with some number (like 2 for example) returns 000e+0
// Organize files in folders
// Add keyboard support