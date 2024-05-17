const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.on('line', (input) => {
    const commands = input.split(', ');

    const records = new Set();

    commands.forEach(command => {
        const [operation, record] = command.split(' ');
        if (operation === 'ADD') {
            records.add(record);
        } else if (operation === 'REMOVE') {
            records.delete(record);
        }
    });

    const sortedRecords = Array.from(records).sort();

    sortedRecords.forEach(record => console.log(record));

    rl.close();
});
