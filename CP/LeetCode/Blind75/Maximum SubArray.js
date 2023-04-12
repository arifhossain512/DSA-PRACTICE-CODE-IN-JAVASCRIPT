const MaxSubArray = (array) => {
    let MaxSubArray = array[0];

    let CurSum = 0
    for (const n of array) {
        if (CurSum < 0) CurSum = 0;
        CurSum += n;
        MaxSubArray = Math.max(MaxSubArray, CurSum);
        console.log(MaxSubArray);

    }
    console.log(MaxSubArray);
}
const arr = [1, -1, 3, 4, -2, 5]
MaxSubArray(arr);