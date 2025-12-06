/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function(nums) {
    let ans = Number.MAX_SAFE_INTEGER ;
    let memo = new Map();

    let reverse = (num)=>{
        if(memo.has(num))return memo.get(num);
        let temp = num;
         let rev = 0;
         while(num > 9){
            let remainder = num%10;
            num = num / 10 >> 0;
            rev = (rev*10) + remainder;
         }
        rev = (rev*10) + num;
        memo.set(temp,rev);
        return rev;
    }
    let map = new Map();
    for(let i = 0 ; i < nums.length; i++){
        let rev = reverse(nums[i])
        if(map.has(nums[i])){
            ans = Math.min(ans,i - map.get(nums[i]));
        }
        map.set(rev,i);
    }
    return ans != Number.MAX_SAFE_INTEGER ? ans : -1;
};
