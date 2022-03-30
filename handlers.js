let currentNumber = '';
let currentOperator;
let res = 0;

let ans = 0;
let isDecimal = false;

const clear = () => {
    res = 0;
    currentNumber = '';
    ans = 0;
    displayText.textContent = res;
};

const handleOperator = (op) => {
    const val = parseFloat(currentNumber);

    if (!currentOperator || currentNumber === '') {
        currentOperator = op;
        res = isNaN(val) ? res : val;
    }

    else {
        try {
            res = operate(currentOperator, res, val);
            currentOperator = op;
            ans = res;
        }
        catch (e) {
            clear();
            displayText.textContent = e.message;
            return;
        }
    };

    currentNumber = '';
    displayText.textContent = res;
};

const handleNumber = (val) => {
    if (val === '.' && !isDecimal)
        isDecimal = true;
    else if (val === '.' && isDecimal)
        return;

    currentNumber += val;
    displayText.textContent = currentNumber;
};

const handleAns = () => {
    displayText.textContent = 'ANS';
    currentNumber = ans;
};

const handleDel = () => {
    if (currentNumber) {
        currentNumber = currentNumber.slice(0, -1);
        displayText.textContent = currentNumber;

        if (isDecimal && !currentNumber.includes('.'))
            isDecimal = false;
    }
};

const handleEqualSign = () => {
    handleOperator(currentOperator);
    currentOperator = null;
    currentNumber = '';
};