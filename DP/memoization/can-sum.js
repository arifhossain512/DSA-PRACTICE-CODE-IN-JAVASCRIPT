const canSum = (targetSum, array) => {

    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for (let num of array) {
        let  reminder = targetSum - num;
        if (canSum(reminder, array) === true) {
            return true;
        }
    }
    return false;
}
console.log(canSum(17, [ 2, 4])); //true
