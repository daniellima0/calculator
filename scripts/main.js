let inputedValue = [];

const container = document.querySelector("#container");

const currentValue = document.createElement("p");
currentValue.style.position = 'absolute';
currentValue.style.top = '5rem';
currentValue.style.right = '2.5rem';

const pastValue = document.createElement("p");
pastValue.style.position = 'absolute';
pastValue.style.top = '2.5rem';
pastValue.style.right = '2.5rem';
pastValue.style.fontSize = '1.2rem';
pastValue.style.color = '#4c3438';

function arrayToString(array) {
    let string = array.join('');
    return string;
}

function displayValue(value, element) {
    if (element == pastValue) {
        element.textContent = '+' + value;
    } else {
        element.textContent = value;
    }
    container.append(element);
}

const numbers = Array.from(document.querySelectorAll(".number"));
numbers.forEach(number => {
    number.addEventListener('click', e => {
        let numberValue = number.textContent;
        inputedValue.push(numberValue);
        displayValue(arrayToString(inputedValue), currentValue);
    });
});

let valueOne = [];

const add = document.querySelector("#add");
add.addEventListener('click', e => {
    if (valueOne.length == 0) {
        valueOne = inputedValue;
        displayValue(arrayToString(valueOne), pastValue);
    } else {
        //
    }
});

const subtract = document.querySelector("#subtract");
subtract.addEventListener('click', e => {
    alert('it worked');
});

const multiply = document.querySelector("#multiply");
multiply.addEventListener('click', e => {
    alert('it worked');
});

const divide = document.querySelector("#divide");
divide.addEventListener('click', e => {
    alert('it worked');
});

const equal = document.querySelector("#equal");
equal.addEventListener('click', e => {
    alert('it worked');
});