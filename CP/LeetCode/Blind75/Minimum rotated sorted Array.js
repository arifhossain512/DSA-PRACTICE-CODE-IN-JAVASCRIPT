const Min = (array) => {
    let min = array[0];
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        if (array[left] <= array[right]) {
            min = Math.min(min, array[left]);
            break;
        }
        let middle =Math.floor((left + right) / 2) ;
        // console.log(middle);
        if (array[middle] >= array[left]) {
            left = middle + 1;

        } else {
            right = middle ;
        }

    }
    console.log(min);
}
const arr=[3,1,2];
 Min(arr);