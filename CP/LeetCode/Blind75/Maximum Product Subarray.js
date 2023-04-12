const MaxProductSubArray = (array) => {
    let res = Math.max(...array);
    
    let curMax = 1;
    let curMin = 1
    for (const num of array) {
        if (num === 0) {
            curMax = 1;
            curMin = 1;
        }
        let temp = curMax * num;
        curMax = Math.max(curMax * num, curMin * num, num);
        curMin = Math.min(temp, curMin * num, num);
        res=Math.max(res, curMax);
    
    }
    console.log(res);
}

// const arr=[-1,2,3,-5,6];
// MaxProductSubArray(arr);
// var  = function() {
//     let maxProd = -Infinity;
//     let running = 1;
    
     // moving forward;
//     for(let n of nums) {
//         if(!running) running = n;
//         else running *= n;
//         maxProd = Math.max(maxProd, running);
//     }
    
//     running = 1;
    
   // moving backward
//     for(let i = nums.length-1; i >= 0; i--) {
//         if(!running) running = nums[i];
//         else running *= nums[i];
//         maxProd = Math.max(maxProd, running);
//     }
//     return 
// };
