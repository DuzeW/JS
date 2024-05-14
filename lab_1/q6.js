const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', (input) => {
    let n = parseInt(input);
    let tab = [0,1];
    if (n === 1){
        console.log(tab[0]);
    }
    else {
        for (let i = 2; i < n; i++) {
            tab[i] = tab[i-1]+tab[i-2];
        }
        let output="0"
        for (let i = 1; i < n; i++) {
            output += " " + tab[i];
        }
        console.log(output);
    }
    rl.close();
});