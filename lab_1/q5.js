const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', (input) => {
    let counterOpen = 0
    let counterClose = 0
    for(let i = 0; i < 100; i++) {
       if(input[i] === '(') {
           counterOpen++;
       }
        if(input[i] === ')') {
            counterClose++;
        }
        if(counterOpen < counterClose) {
            break;
        }
    }
    if(counterOpen === counterClose) {
        console.log("YES");
    }
    else {
        console.log("NO");
    }
    rl.close();
});