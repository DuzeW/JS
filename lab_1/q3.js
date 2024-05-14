const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N = null;
let X = null;

rl.on('line', (input) => {
    const nums = input.split(' ');

    N = parseInt(nums[0]);
    X = parseInt(nums[1]);
    let sum = 0;

    for (let i = 1; i <= X; i++) {
        if (i % N === 0) {
            sum += i;
        }
    }

    console.log(sum);
    rl.close();
});