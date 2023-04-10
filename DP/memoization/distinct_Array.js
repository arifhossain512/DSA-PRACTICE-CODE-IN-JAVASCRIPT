// const { stdin, stdout } = require('process')
// const readLine = require('readline');

// const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// rl.question('', (stream) => {
// const prices = stream.split(" ").map(Number);
// rl.close();
// }

function Array(params) {
    const set = new Set();
    for (let i = 0; i < params.length; i++) {
        if (set.has(params[i])) {
            return true;
        } else set.add(params[i]);
    }
    return false;

}
console.log(Array([1,2,3,4]));