const ADD = '+';
const SUBSTRACT = '-';
const DIVIDE = '/';
const MULTIPLY = '*';

const displayText = document.querySelector('.display-text');

const operators = {
    [ADD]: (a, b) => a + b,
    [SUBSTRACT]: (a, b) => a - b,
    [DIVIDE]: (a, b) => {
        if (b === 0)
            throw new Error("can not divide by zero");
        return a / b;
    },
    [MULTIPLY]: (a, b) => a * b,
};

const operate = (op, num1, num2) => operators[op](num1, num2);

const handleButtonClick = (btn) => {
    const type = btn.getAttribute('data-type');

    if (type === 'operator') handleOperator(btn.value);
    else if (type === 'number' || type === 'decimal') handleNumber(btn.value);
    else if (type === 'calc') handleEqualSign();
    else if (type === 'clear') clear();
    else if (type === 'ans') handleAns();
    else if (type === 'del') handleDel();
};

const useKeyboard = (e) => {
    if (e.key.match(/[0-9.]/)) handleNumber(e.key);
    else if (e.key.match(/[+-/*]/)) handleOperator(e.key);
    else if (e.key === 'Enter') handleEqualSign();
    else if (e.key === 'Escape') clear();
    else if (e.key === 'Backspace') handleDel();

};


const init = () => {
    displayText.textContent = '0';
    const btns = document.querySelectorAll('.calculator-buttons button');
    btns.forEach(btn => btn.addEventListener('click', (e) => handleButtonClick(e.target)));

    window.onkeydown = useKeyboard;
};

window.onload = init;