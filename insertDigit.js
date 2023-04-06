const { stdin, stdout } = require('process')
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});



async function main() {

    rl.question('', (stream) => {

        const [n, k] = stream.split('\n')[0].split(' ').map(Number);

        rl.question('', stream => {
            const arr = stream.split(' ').map(Number);
            let total = 0;

            for (let i = 0; i < arr.length; i++) {

                if (arr[i] >= arr[k - 1] && arr[i] > 0) {
                    total += 1;
                }




            }
            // console.log(n, k, arr);
            console.log(total);
            rl.close();
        })



    });

};

main();