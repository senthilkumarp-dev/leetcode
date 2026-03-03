/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let count = 0;
    let lastSeen = [-1,-1,-1];
    for(let i = 0;i < s.length;i++){
        lastSeen[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;;
        if(lastSeen[0] != -1 && lastSeen[1] != -1 && lastSeen[2] != -1){
            count = count + (1 + Math.min(lastSeen[0],lastSeen[1],lastSeen[2]));
        }
    }
    return count;
};