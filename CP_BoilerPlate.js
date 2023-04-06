const { stdin, stdout } = require('process')
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


function main(params) {
    
    rl.question('', (stream) => {
        const [n, k, ...arr] = stream.split(/\s+/).map(Number);


        return maxProfitValue;



        
        console.log(n, k, arr);
    
        rl.close();
    });
};

main();