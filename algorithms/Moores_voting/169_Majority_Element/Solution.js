/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let cnt = 0 ; 
    let el = -1;
    for(let i = 0 ; i < nums.length ; i++){
        if(cnt == 0){
            el = nums[i];
            cnt++;
        }else if(el == nums[i]){
            cnt++;
        }else{
            cnt--;
        }
    }
    let elCnt = 0;
    for(let num of nums){
        if(el == num)elCnt++;
    }
    if(elCnt > nums.length/2){
        return el;
    }
    return -1;
};