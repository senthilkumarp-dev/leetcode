/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let el1 = -Infinity;
    let el2 = -Infinity;
    let cnt1 = 0;
    let cnt2 = 0;
    for(let num of nums){
        if(cnt1==0 && el2 !== num){
            cnt1++;
            el1 = num;
        }else if(cnt2 == 0 && el1 !== num){
            cnt2++;
            el2 = num;
        }else if(el1 == num){
            cnt1++;
        }else if(el2 == num){
            cnt2++;
        }else{
            cnt1--;
            cnt2--;
        }
    }
    let mini = Math.floor(nums.length/3)+1;
    let res = [];
    let el1Cnt = 0;
    let el2Cnt = 0;
    for(let num of nums){
        if(num == el1){
            el1Cnt++;
        }
        if(num == el2){
            el2Cnt++;

        }
    }
    if(el2Cnt>=mini){
        res.push(el2)
    }
    if(el1Cnt>=mini){
        res.push(el1)
    }
    res.sort((a,b)=>a-b);
    return res;
};