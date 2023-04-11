//DFS using recursion
// const hasPath = (graph, src, dst) => {
//     if (src === dst) return true;
//     for (neighbor of graph) {
//         if (hasPath(graph, neighbor, dst) === true) return true;
//     }
//     return false;
// }

//BFS using iteration
// const hasPath=(graph,src,dst)=>{
//     const queue = [src];
//     while(queue.length>0){
//         const current = queue.shift();
//         if(current === dst) return true;
//         for(neighbor of graph[current] ){
//             queue.push(neighbor)
//         }
//     }
// }