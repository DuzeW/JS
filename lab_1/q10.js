const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const parts = input.split(', ');

    const n = parseInt(parts[0]);

    const words = parts.slice(1);

    words.sort((a, b) => {
        const charA = a.charAt(n - 1) || '';
        const charB = b.charAt(n - 1) || '';
        if (charA < charB) {
            return -1;
        } else if (charA > charB) {
            return 1;
        } else {
            return 0;
        }
    });

    const output = words.join(', ');

    console.log(output);

    rl.close();
});
