/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let n = nums.length ;
    let ans = [];
    let used  = new Array(n).fill(false)
    let backTrack =  (idx,curr,used)=>{
       
        if(curr.length == n)return ans.push([...curr]);

        for(let i = 0 ; i < n; i++){
            if(!used[i]){
                used[i] = true;
                curr.push(nums[i]);
                backTrack(i+1,curr,used);
                used[i] = false;
                curr.pop();
            }

        }

    }
    backTrack(0,[],used);
    return ans
};
