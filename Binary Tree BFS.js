class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function bfs(root) {
    let queue = [];
    if (root != null) {
        queue.push(root);
    }
    let level = 0;
    while (queue.length > 0) {
        console.log("level " + level + ": ");
        let levelLength = queue.length;
        for (let i = 0; i < levelLength; i++) {
            let curr = queue.shift();
            console.log(curr.val + " ");
            if (curr.left != null) {
                queue.push(curr.left);
            }
            if (curr.right != null) {
                queue.push(curr.right);
            }
        }
        level++;
        console.log();
    }
}


function createTree(arr, i = 0) {
    if (i >= arr.length || arr[i] === null) {
        return null;
    }
    const node = new TreeNode(arr[i]);
    node.left = createTree(arr, 2 * i + 1);
     node.right = createTree(arr, 2 * i + 2);
    return node;
}

const arr = [1, 2, 3, 4, 5, null, 6];
const root = createTree(arr);

bfs(root);