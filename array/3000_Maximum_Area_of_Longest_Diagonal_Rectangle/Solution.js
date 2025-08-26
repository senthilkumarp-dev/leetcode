/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let maxDiagonal = 0;
    let maxArea = 0;

    for (let i = 0; i < dimensions.length; i++) {
        let l = dimensions[i][0];
        let w = dimensions[i][1];
        let currDiagonal = (l * l) + (w * w);

        if (currDiagonal > maxDiagonal || 
           (currDiagonal === maxDiagonal && l * w > maxArea)) {
            maxDiagonal = currDiagonal;
            maxArea = l * w;
        }
    }
    return maxArea;
};
