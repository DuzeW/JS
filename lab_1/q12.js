const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getPrecedence(op) {
    if (op === '+') return 1;
    if (op === '*') return 2;
    return 0;
}

function infixToPostfix(expression) {
    const output = [];
    const operators = [];
    const tokens = expression.match(/\d+|[+*]/g);

    for (let token of tokens) {
        if (!isNaN(token)) {
            output.push(token);
        } else {
            while (operators.length > 0 && getPrecedence(operators[operators.length - 1]) >= getPrecedence(token)) {
                output.push(operators.pop());
            }
            operators.push(token);
        }
    }

    while (operators.length > 0) {
        output.push(operators.pop());
    }

    return output;
}

function evaluatePostfix(postfix) {
    const stack = [];

    for (let token of postfix) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            if (token === '+') {
                stack.push(a + b);
            } else if (token === '*') {
                stack.push(a * b);
            }
        }
    }

    return stack[0];
}

function evaluateExpression(expression) {
    const postfix = infixToPostfix(expression);
    return evaluatePostfix(postfix);
}

rl.on('line', (input) => {
    const result = evaluateExpression(input);
    console.log(result);
    rl.close();
});
