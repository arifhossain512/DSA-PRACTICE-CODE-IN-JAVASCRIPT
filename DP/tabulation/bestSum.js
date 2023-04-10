const bestSum = (targetSum, numbers) => {
    const tsAbs = Math.abs(targetSum);
    const table = Array(tsAbs + 1).fill(null);
    table[0] = [];
    for (let i = 0; i < tsAbs; i++) {
        if (table[i] !== null) {
            
            for (let num of numbers) {
                const absNum = Math.abs(num);
                if (i + num <= tsAbs) {
                    table[i + absNum] = [...table[i], num];
                }
            }
        }


    }
    return table[tsAbs]
}




console.log(bestSum(-7, [-10,3,4 ]));

