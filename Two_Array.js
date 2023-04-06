
//create hashmap in javascript?

const { stdin, stdout } = require('process')
const stdInput = require('readline');

const readLine = stdInput.createInterface({
    input: process.stdin,
    output: process.stdout
});
const nums2 = 4;
const twoSum = function (nums, target) {
    const preMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        console.log("this i pre map" , preMap);
        if (preMap.has(diff)) {
            return [preMap.get(diff), i];
        }
        preMap.set(nums[i], i);
       
    }
    
    return [];

}

readLine.question('write the array with a comma : ', (inputArr) => {
    const arrInput = inputArr.split(",").map(Number);
    console.log(arrInput);
    readLine.question('enter the sum ', (sum) => {
        const sumInput = Number(sum);
        const result = twoSum(arrInput, sumInput);
        stdout.write(`Your answer is : ${result}\n `)
        readLine.close();
    })

})



// 'use strict';

// function solve(input) {
//  TODO: Implement your solution here
// }

// function main() {
//     const stdin = process.stdin;
//     const stdout = process.stdout;
//     stdin.resume();
//     stdin.setEncoding('utf-8');
//     stdin.on('data', (input) => {
//         const result = solve(input.trim());
//         stdout.write(`${result}\n`);
//     });
// }

// main();



// Importing standard libraries
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// Function to read input value
// function readInput() {
//     return new Promise(resolve => {
//         rl.question('', resolve);
//     })
// }
// Main function with output logic
// async function main() {
//     Read number of test cases
//     const t = Number(await readInput());
//     Loop over test cases
//     for (let i = 1; i <= t; i++) {
//         Read input for each test case
//         const input1 = readline();
//         const input2 = readline();
//         Solve the problem and print the output
//         console.log("Test", i, ":", solve(input1, input2));
//     }
// }
// Function to solve the problem
// function solve(input1, input2) {
//     Your solution code here

   

// }
// Call main function
// main().then(() => rl.close());


