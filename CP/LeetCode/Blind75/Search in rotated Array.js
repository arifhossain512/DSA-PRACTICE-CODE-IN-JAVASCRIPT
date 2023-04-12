const Search = (array, target) => {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (array[mid] === target) return mid;
        if (array[left] <= array[mid]) {
            if (target > array[mid] || target < array[left]) left = mid + 1;
            else right = mid - 1;
        } else {
            if (target < array[mid] || target > array[right]) right = mid - 1;
            else left = mid + 1;
        }
      
    }
   
    return -1;
  
}


const arr = [3, 4, 5, 6, 1, 2];
console.log(Search(arr,3));

