const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', (input) => {
    let n = input.toString();
    let counter = 0;
    for (let i = 0; i < n.length; i++) {
        counter+=parseInt(n[i]);
    }
    console.log(counter);
    rl.close();
});