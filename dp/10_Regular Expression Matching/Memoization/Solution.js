/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let memo = new Map();

    let dfs = (i , j )=>{
        let key = i+'#'+j;
        if(memo.has(key)) return memo.get(key)
        if(j === p.length) return i === s.length;
        let firstMatch =  (i < s.length && (p[j] === '.' || p[j] === s[i]));
        let result;
        if(j+1 < p.length && p[j+1] === '*'){
            result = dfs(i,j+2) || (firstMatch && dfs(i+1,j))
        }
        else{
            result = firstMatch &&  dfs(i+1,j+1);
        }
        memo.set(key,result);
        return result;
    }

    return dfs(0, 0);
};

