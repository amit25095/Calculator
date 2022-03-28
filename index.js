const ADD = '+';
const SUBSTRACT = '-';
const DIVIDE = '/';
const MULTIPLY = '*';

const operators = {
    [ADD]: (a, b) => a + b,
    [SUBSTRACT]: (a, b) => a - b,
    [DIVIDE]: (a, b) => a / b,
    [MULTIPLY]: (a, b) => a * b,
};

const operate = (op, num1, num2) => operators[op](num1, num2);