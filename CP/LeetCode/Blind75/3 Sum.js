1.
// Define a function called `threeSum` that takes an array as an argument
const threeSum = (array) => {
    // Create an empty array to store the result
    let res = [];
    // Sort the array in ascending order using a comparator function
    array.sort((a, b) => a - b);

    // Iterate through each element of the array
    for (const [i, val] of array.entries()) {

        // Check if the current value is the same as the previous value.
        // If it is, continue to the next iteration of the loop.
        if (i > 0 && val === array[i - 1]) {
            continue;
        }

        // Set the left pointer to the index of the element to the right of the current element
        let left = i + 1;
        // Set the right pointer to the index of the last element in the array
        let right = array.length - 1;

        // While the left pointer is less than the right pointer
        while (left < right) {
            // Calculate the sum of the current element, the left element, and the right element
            let threesum = val + array[left] + array[right];

            // If the sum is greater than 0, decrement the right pointer to move to a smaller value
            if (threesum > 0) right -= 1;
            // If the sum is less than 0, increment the left pointer to move to a larger value
            else if (threesum < 0) left += 1;
            // If the sum is equal to 0, add the three values to the result array,
            // increment the left pointer, and skip over any duplicates in the array
            else {
                res.push([val, array[left], array[right]]);
                left += 1;
                while (array[left] === array[left - 1] && left < right) { left += 1; }
            }
        }
    }

    // Return the result array
    return res;
}

// Define an array called `arr`
const arr = [-3, -3, 0, 1, 2, 2];
// Call the `threeSum` function with the `arr` array as an argument and log the result to the console
console.log(threeSum(arr));



2.
function threeSum(nums) {
    // If less than 3 elements then we can't have 3 numbers that add to 0
    if(nums.length < 3) return []
    const output = []

    // Sort the array in descending order. Must add order function to sort. If not we will not get the right order. Sort converts everything to a string and sorts the array by charCode. Adding the order function to sort guarantees we will get the array in the proper descending order.
    nums.sort((a,b) => a - b)

    for(let i = 0; i < nums.length - 2;i++) {
        // we don't want repeats, so skip numbers we've already seen
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let left = i+1
        let right = nums.length-1

        // Current number at i will be added to the current sum. We will move a left and a right pointer in the subarray of elements to the right of i to try and get a sum that will equal 0
        while (left < right) {
            // Get the current sum with with number at i and numbers at the left and right pointers
            const sum = nums[i] + nums[right] + nums[left]
            // If we get 0 then we add all the numbers to output and move our left and right pointers to look for more numbers that will add to 0 with the current number at i
            if(sum===0) {
                output.push([nums[i], nums[left], nums[right]])
                // We will move the pointers until we find a number that is not equal to each pointers current number
                while(nums[left]===nums[left+1]) left++
                while(nums[right]===nums[right-1]) right--
                left++
                right--
            } else if (sum > 0) {
                // If the sum is greater than 0 that means we need smaller numbers to get 0 so we move the right pointer to the left
               right--
            } else {
                // If the sum is less than 0 that means we need higher numbers to get 0 so we move the left pointer to the right
                left++
            }
        }
    }

    return output
};


3.
function binary_search(arr, target, L = 0, R = arr.length - 1) {
    // A binary search function to find the index of target element in the given sorted array
    while (L < R) {
        let mid = ~~(L / 2 + R / 2);  // Get the middle index of the array
        arr[mid] < target ? (L = mid + 1) : (R = mid);  // Update left or right index based on the comparison of the middle element with the target
    }
    // Return the index of target element if found, otherwise return negative infinity
    return L === R && arr[L] === target ? L : -Infinity;
}

var threeSum = function (a) {
    let n = a.length;

    a.sort((a, b) => a - b);  // Sort the given array in ascending order

    let aa = [];  // Initialize an empty array to store the results
    let vis = new Set();  // Initialize a set to store visited triplets
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++) {
            let sum = a[i] + a[j];  // Calculate the sum of two elements
            let L = binary_search(a, -sum, j + 1, n - 1);  // Find the index of the third element which makes the sum zero using binary search
            if (L !== -Infinity) {  // If such an element exists in the array
                let key = `${a[i]} ${a[j]} ${a[L]}`;  // Create a unique key for the triplet
                if (!vis.has(key)) {  // If the triplet is not visited before
                    vis.add(key);  // Mark the triplet as visited
                    aa.push([a[i], a[j], a[L]]);  // Add the triplet to the result array
                }
            }
        }
    // Return the array containing all unique triplets whose sum is zero
    return aa;
};

4.
function binary_search(arr, target, L = 0, R = arr.length - 1) {
    // A binary search function to find the index of target element in the given sorted array
    while (L < R) {
        let mid = ~~(L / 2 + R / 2);  // Get the middle index of the array
        arr[mid] < target ? (L = mid + 1) : (R = mid);  // Update left or right index based on the comparison of the middle element with the target
    }
    // Return the index of target element if found, otherwise return negative infinity
    return L === R && arr[L] === target ? L : -Infinity;
}

var threeSum = function (a) {
    let n = a.length;

    a.sort((a, b) => a - b);  // Sort the given array in ascending order

    let aa = [];  // Initialize an empty array to store the results
    for (let i = 0; i < n; i++) {
        if (i > 0 && a[i - 1] === a[i]) continue;  // Skip duplicates

        for (let L = i + 1; L < n; L++) {
            if (L > i + 1 && a[L - 1] === a[L]) continue;  // Skip duplicates

            let R = binary_search(a, -(a[i] + a[L]), L + 1, n - 1);  // Find the index of the third element which makes the sum zero using binary search
            if (R !== -Infinity) {  // If such an element exists in the array
                aa.push([a[i], a[L], a[R]]);  // Add the triplet to the result array
            }
        }
    }
    // Return the array containing all unique triplets whose sum is zero
    return aa;
};
5.
var threeSum = function (a) {
    let n = a.length;

    a.sort((a, b) => a - b);  // Sort the given array in ascending order

    let aa = [];  // Initialize an empty array to store the results
    let vis = new Set();  // Initialize an empty set to store visited triplets
    for (let i = 0; i < n; i++) {
        let t = -a[i];  // Calculate the target value to find in the remaining array

        // Use two pointers approach to find pairs whose sum is equal to the target value
        for (let L = i + 1, R = n - 1; L < R; ) {
            let sum = a[L] + a[R];  // Calculate the sum of the pair
            if (sum === t) {  // If the sum is equal to the target value
                let key = `${a[i]} ${a[L]} ${a[R]}`;  // Generate a unique key for the triplet
                if (!vis.has(key)) {  // If the triplet is not already visited
                    vis.add(key);  // Add the triplet to visited set
                    aa.push([a[i], a[L], a[R]]);  // Add the triplet to result array
                }
                L++;  // Move left pointer to find new pairs
            } else if (sum < t) {  // If the sum is less than the target value
                L++;  // Move left pointer to find pairs with higher sum
            } else {  // If the sum is greater than the target value
                R--;  // Move right pointer to find pairs with lower sum
            }
        }
    }
    // Return the array containing all unique triplets whose sum is zero
    return aa;
};
6.

6.//optimized
// This function takes an array of integers as input.
var threeSum = function (a) {

    // Determine the length of the input array.
    let n = a.length;

    // Sort the input array in ascending order.
    // The sorting function takes two parameters (a and b) and returns a negative number if a is less than b, 
    // a positive number if a is greater than b, and 0 if they are equal.
    a.sort((a, b) => a - b);

    // Create an empty array to store the resulting triplets.
    let aa = [];

    // Iterate over each element in the input array.
    for (let i = 0; i < n; i++) {

        // If the current element is greater than 0, break out of the loop.
        // This is an optimization step, since it is impossible for a sum of three numbers to equal 0 if one of the numbers is greater than 0.
        if (a[i] > 0) break;

        // Compute the target value for the two sum problem.
        let t = -a[i];

        // Use two pointers (L and R) to find two elements in the sorted array that sum to the target value.
        // The pointers start at the two ends of the array and move towards each other.
        for (let L = i + 1, R = n - 1; L < R; ) {
            let sum = a[L] + a[R];
            if (sum === t) {
                // If a pair of elements sum to the target value, add the triplet to the result array.
                aa.push([a[i], a[L], a[R]]);

                // Move the left pointer to the next distinct element.
                // This is an optimization step, since if the next element is equal to the current one, 
                // it will also produce a triplet that has already been added to the result array.
                while (a[L] === a[L + 1]) L++;
                L++;
            } else if (sum < t) {
                // If the sum of the two elements is less than the target value, move the left pointer to the next element.
                L++;
            } else {
                // If the sum of the two elements is greater than the target value, move the right pointer to the previous element.
                R--;
            }
        }

        // Move the outer loop index to the next distinct element.
        // This is an optimization step, since if the next element is equal to the current one, 
        // it will produce the same set of triplets as the current one.
        while (a[i] === a[i + 1]) i++;
    }

    // Return the array of resulting triplets.
    return aa;
};
