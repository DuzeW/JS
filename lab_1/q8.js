const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.on('line', (input) => {
    const nums = input.split(' ');

    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i - 1].length > nums[i].length) {
                let a = nums[i];
                nums[i] = nums[i - 1];
                nums[i - 1] = a;
                isSorted = false;
            }
        }
    }
    isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i - 1].length === nums[i].length && nums[i - 1] > nums[i]) {
                let b = nums[i];
                nums[i] = nums[i - 1];
                nums[i - 1] = b;
                isSorted = false;
            }
        }
    }
    let output = "";
    output += nums[0];
    for (let i = 1; i < nums.length; i++) {
        output += " "+nums[i];
    }
    console.log(output);
    rl.close();
});