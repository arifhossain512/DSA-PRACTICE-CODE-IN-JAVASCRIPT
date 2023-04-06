/**
 * @param {number[]} nums
 * @return {number}
 */
//add 2 numbers from array
//check if the  added value is < 0;
//if yes then sum = 0;

let i, j, k;
const max = Math.max;
const ceil = Math.ceil;


var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let currSum = 0;
    for (i = 0; i < nums.length; i++) {
        if (currSum < 0) {
            currSum = 0;
        }
        currSum += nums[i];
        maxSum = max(maxSum, currSum);
    }

return maxSum;
};
