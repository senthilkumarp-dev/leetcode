/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let maxFreq  = 0;
    let l = 0;
    let r = 0;
    let maxLen = 0;
    let hash = Array(26).fill(0)
    while(r < s.length){
        hash[s.charCodeAt(r) - "A".charCodeAt(0)]++;
        maxFreq =  Math.max(maxFreq,hash[s.charCodeAt(r) - "A".charCodeAt(0)]);
        if((r -l +1) - maxFreq > k){
                hash[s.charCodeAt(l) - "A".charCodeAt(0)]--;
                l++;
        }
        if((r -l +1) - maxFreq <= k){
           maxLen =  Math.max(maxLen , r -l +1)
        }
        r++;
    }
    return maxLen;
};