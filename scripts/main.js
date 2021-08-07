function compute(symbol) {
    switch (symbol) {
        case '+':
            previousValueTextElement.textContent = +previousValueTextElement.textContent + +currentValueTextElement.textContent;
            break;
        case '-':
            previousValueTextElement.textContent = +previousValueTextElement.textContent - +currentValueTextElement.textContent;
            break;
        case '×':
            previousValueTextElement.textContent = +previousValueTextElement.textContent * +currentValueTextElement.textContent;
            break;
        case '÷':
            previousValueTextElement.textContent = +previousValueTextElement.textContent / +currentValueTextElement.textContent;
            break;
        default:
            return;
    }
}

const numberButtons = Array.from(document.querySelectorAll('.number'));
const operatorButtons = Array.from(document.querySelectorAll('.operator'));
const percentButton = document.querySelector('#percent');
const equalButton = document.querySelector('#equal');
const deleteButton = document.querySelector('#del');
const clearButton = document.querySelector('#clear');
const currentValueTextElement = document.querySelector('#current-value');
const previousValueTextElement = document.querySelector('#previous-value');
const operationSign = document.querySelector('#operation-sign');

numberButtons.forEach(number => {
    number.addEventListener('click', e => {
        if (operationSign.textContent == '=') return;
        if (number.textContent == '.' && currentValueTextElement.textContent.includes('.')) return;
        currentValueTextElement.textContent = currentValueTextElement.textContent + number.textContent;
    });
});

operatorButtons.forEach(operator => {
    operator.addEventListener('click', e => {
        if (previousValueTextElement.textContent == '') {
            previousValueTextElement.textContent = currentValueTextElement.textContent;
            currentValueTextElement.textContent = '';
            operationSign.textContent = operator.textContent;
            return;
        }
        compute(operationSign.textContent);
        currentValueTextElement.textContent = '';
        operationSign.textContent = operator.textContent;
        return;
    });
});

equalButton.addEventListener('click', e => {
    compute(operationSign.textContent);
    currentValueTextElement.textContent = previousValueTextElement.textContent;
    previousValueTextElement.textContent = '';
    operationSign.textContent = '=';
});

percentButton.addEventListener('click', e => {
    currentValueTextElement.textContent = currentValueTextElement.textContent / 100;
});

deleteButton.addEventListener('click', e => {
    let array = Array.from(currentValueTextElement.textContent);
    array.pop();
    let string = array.join('');
    currentValueTextElement.textContent = string;
});

clearButton.addEventListener('click', e => {
    currentValueTextElement.textContent = '';
    previousValueTextElement.textContent = '';
    operationSign.textContent = '';
});

document.addEventListener('keydown', e => {
    if (e.key >= 0 && e.key <= 9 || e.key == '.') {
        if (operationSign.textContent == '=') return;
        if (e.key == '.' && currentValueTextElement.textContent.includes('.')) return;
        currentValueTextElement.textContent = currentValueTextElement.textContent + e.key;
    }

    if (e.key === '=' || e.key === 'Enter') {
        compute(operationSign.textContent);
        currentValueTextElement.textContent = previousValueTextElement.textContent;
        previousValueTextElement.textContent = '';
        operationSign.textContent = '=';
    }

    if (e.key === 'Backspace') {
        let array = Array.from(currentValueTextElement.textContent);
        array.pop();
        let string = array.join('');
        currentValueTextElement.textContent = string;
    }

    if (e.key === 'Escape') {
        currentValueTextElement.textContent = '';
        previousValueTextElement.textContent = '';
        operationSign.textContent = '';
    }

    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        let realKey;
        if (e.key == '+') realKey = '+';
        if (e.key == '-') realKey = '-';
        if (e.key == '*') realKey = '×';
        if (e.key == '/') realKey = '÷';
        if (previousValueTextElement.textContent == '') {
            previousValueTextElement.textContent = currentValueTextElement.textContent;
            currentValueTextElement.textContent = '';
            operationSign.textContent = realKey;
            return;
        }
        compute(operationSign.textContent);
        currentValueTextElement.textContent = '';
        operationSign.textContent = realKey;
        return;
    }
});