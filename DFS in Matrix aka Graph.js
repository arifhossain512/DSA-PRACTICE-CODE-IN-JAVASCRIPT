
const grid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
];

// Define the set function to create a 2D array of zeros
function set() {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const visit = new Array(ROWS);
    for (let i = 0; i < ROWS; i++) {
        visit[i] = new Array(COLS).fill(0);
    }
    return visit;
}

// Define the dfs function to count the number of paths
function dfs({ grid, r, c, visit }) {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    if (Math.min(r, c) < 0 || r == ROWS || c == COLS ||
        visit[r][c] == 1 || grid[r][c] == 1) {
        return 0;
    }
    if (r == ROWS - 1 && c == COLS - 1) {
        return 1;
    }
    visit[r][c] = 1;

    let count = 0;
    count += dfs({ grid, r: r + 1, c, visit });
    count += dfs({ grid, r: r - 1, c, visit });
    count += dfs({ grid, r, c: c + 1, visit });
    count += dfs({ grid, r, c: c - 1, visit });

    visit[r][c] = 0;
    return count;
}

// Call the dfs function with the initial parameters
console.log(dfs({ grid, r: 0, c: 0, visit: set() }));

/*
time node script.js

This will run the `script.js` file and display the execution time in the terminal.

To measure the memory usage of a Node.js script, you can use the `--trace-memory` flag. For example, if you want to measure the memory usage of a script called `script.js`, you can run the following command:node --trace-memory script.js 

*/