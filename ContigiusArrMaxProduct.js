
var maxProduct = function (nums) {
    let maxProd = nums[0];
    let running = 1;
    // moving forward; will add  first odd negative number and will ignore last odd negative number 
    for (let n of nums) {
        if (!running) running = n;
        else running *= n;
        maxProd = Math.max(maxProd, running);
    }
    // init running pointer to its default value
    running = 1;
    // moving backward: to add last odd negative number and will ignore first odd negative number
    for (let i = nums.length - 1; i >= 0; i--) {
        if (!running) running = nums[i];
        else running *= nums[i];
        maxProd = Math.max(maxProd, running);
    }
  return maxProd

};
console.log(maxProduct([3, 0, -2, -2, -4]));
console.log(maxProduct([-4, 6,]));  
console.log(maxProduct([-4,2,3 6,]));  