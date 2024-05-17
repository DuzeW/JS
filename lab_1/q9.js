const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const words = input.split(' ');

    const wordCounts = {};

    words.forEach(word => {
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    });
    const result = Object.keys(wordCounts).map(word => `${word}: ${wordCounts[word]}`);

    const output = result.join(', ');

    console.log(output);
    rl.close();
});
