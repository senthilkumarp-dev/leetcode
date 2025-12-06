/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map =  {
        '2':'abc',
        '3':'def',
        '4':'ghi',
        '5':'jkl',
        '6':'mno',
        '7':'pqrs',
        '8':'tuv',
        '9':'wxyz'
    }
    let res = [];
    let backtracking = (path,idx)=>{
        if(idx == digits.length){
            res.push(path);
            return;
        }
        for(let letter of map[digits[idx]]){
            backtracking(path+letter , idx+1)
        }
    }
    backtracking('',0)
    return res;
};
