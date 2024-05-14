const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1 = null;
let num2 = null;

rl.on('line', (input) => {
    const nums = input.split(' ');

    num1 = parseFloat(nums[0]);
    num2 = parseFloat(nums[1]);
    const sum = num1 + num2;

    console.log(sum);
    rl.close();
});