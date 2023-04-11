const LBSunstr = (string) => {
    const string = "01000111";
    //check if there is a 1
    //how many zero before 1

}
/**
 * @param {string} s
 * @return {number}w
 */
var findTheLongestBalancedSubstring = function(s) {
    //  start from potential longest
    let repeat_num = parseInt(s.length / 2);
    
    while(repeat_num){
        let balanced = "0".repeat(repeat_num) + "1".repeat(repeat_num);
        
        if(s.includes(balanced))
            return balanced.length;
        repeat_num--;
    }
    
    return 0;
};