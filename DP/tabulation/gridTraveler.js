const gridTraveler = (r, c) => {
    if (r <= 0 && c <= 0 || r <= 0 || c <= 0) return 0;
    const table = Array(r + 1).fill(0).map(() => Array(c + 1).fill(0));
    table[1][1] = 1;
    for (let i = 0; i <= r; i++) {
        for (let j = 0; j <= c; j++) {
            const current = table[i][j];
            if (j < c) table[i][j + 1] += current;
            if (i < r) table[i + 1][j] += current;
        }
    }

    return table[r][c];
}
console.log(gridTraveler(2, 3));
console.log(gridTraveler(-1, -1));
console.log(gridTraveler(2, 2));
