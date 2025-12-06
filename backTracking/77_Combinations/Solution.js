/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = [];
    let backTrack =  (idx , sub)=>{
     if(sub.length >= k){
         ans.push([...sub]);
         return
     }

     for(let i = idx ;  i <= n ; i++){
        sub.push(i);
        backTrack(i+1,sub);
        sub.pop();
     }
    }
    backTrack(1,[])
    return ans;
};
