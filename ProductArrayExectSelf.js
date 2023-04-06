/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 */

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.
// Initialize an empty array to store the product of all elements except nums[i]


var productExceptSelf = function (nums) {

    const answer = new Array(nums.length);
    let preProduct = 1;
    let postProduct = 1;

    for (let i = 0; i < nums.length; i++) {
        answer[i] = preProduct;
        preProduct *= Math.abs(nums[i]);

    }
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= postProduct;
        postProduct *= Math.abs(nums[i]);

    }
    // Return the answer array
    return answer;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));