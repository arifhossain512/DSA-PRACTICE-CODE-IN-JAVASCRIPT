// const depthFirstSearch = (graph, source) => {
//     const stack = [source];


//     while (stack.length > 0) {
//         const current = stack.pop();
//         console.log(current);
//         for (neighbor of graph[current]){
//             stack.push(neighbor);
//         }
//     }

// }
/**
 * *Important information is highlighted;
 * ! deprecated method do not use
 * ? should this message be exposed to public api?
 * TODO : refactor this method so that it conforms to the API
 * @param myparam the parameter for this method
 * 
 * 
 */
const depthFirstSearch = (graph, source) => {
    console.log(source);
    for (neighbor of graph[source]) {
        depthFirstSearch(graph, neighbor) //! its an alert

    }
}
const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}
depthFirstSearch(graph, 'a');