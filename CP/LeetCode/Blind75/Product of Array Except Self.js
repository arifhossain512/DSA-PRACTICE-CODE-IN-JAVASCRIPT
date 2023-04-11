const productOfArray = (array) => {
    const result = Array(array.length).fill(1);
    // console.log(arr);
    let prefix = 1;
    for (item in array) {
        result[item] = prefix;
        prefix *= array[item]

    }
    let postfix = 1
    for (let item = array.length-1; item >= 0; item--) {
        result[item] *= postfix;
        postfix *= array[item];
    }

    console.log(result);
    return result;
}

const array = [2, 3, 4];
productOfArray(array);