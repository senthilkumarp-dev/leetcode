/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let seat = new Map();
    for(let i = 0 ; i < trips.length ;i++){
        for(let j = trips[i][1] ; j < trips[i][2];j++ ){
            seat.set(j,(seat.get(j)||0 )+ trips[i][0]);
            if(seat.get(j) > capacity)return false;
        }
    }
    return true;
};