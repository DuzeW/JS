const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
function readInput() {
rl.on('line', (input) => {
    n = parseInt(input);
    if (Number.isInteger(n) && n>0) {
        for (let i = 0; i <= n; i++) {
            let stringOut = '';
            for (let j = 0; j < i; j++) {
                stringOut += '*';
            }
            console.log(stringOut);
        }
        for (let i = n; i > 0; i--) {
            let stringOut = '';
            for (let j = 0; j < i; j++) {
                stringOut += '*';
            }
            console.log(stringOut);
        }
        for (let i = n; i > 0; i--) {
            let stringOut = '';
            for (let j = 0; j < n - i; j++) {
                stringOut += ' ';
            }
            for (let j = 0; j < i; j++) {
                stringOut += '*';
            }
            console.log(stringOut);
        }
        for (let i = 1; i <= n; i++) {
            let stringOut = '';
            for (let j = 0; j < n - i; j++) {
                stringOut += ' ';
            }
            for (let j = 0; j < i; j++) {
                stringOut += '*';
            }
            console.log(stringOut);
        }
        rl.close();
        process.exit();
    }
    else {
        readInput();
    }
});}
readInput();
