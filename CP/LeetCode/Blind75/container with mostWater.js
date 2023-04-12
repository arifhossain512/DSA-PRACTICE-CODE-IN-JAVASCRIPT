const mostWater = (array) => {
    let res = 0;
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let area = (right - left) * Math.min(array[left], array[right]);
        res = Math.max(res, area);
        if (array[left] < array[right]) {
            left++;
        } else if (array[left] > array[right]) {
            right--;
        } else { right--; }
    }
    return res;
}
const arr = [1, 5, 3, 4, 5];
console.log(mostWater(arr));