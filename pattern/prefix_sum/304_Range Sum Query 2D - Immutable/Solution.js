/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.m = matrix.length;
    this.n = matrix[0].length;
    for(let i = 0 ; i < this.m ; i++){
        for(let j=0;j < this.n;j++){
            matrix[i][j] += (j==0? 0 : matrix[i][j-1])+ (i==0?0:matrix[i-1][j]) - ((i==0 || j==0)?0:matrix[i-1][j-1]);
        }
    }
    this.prefixSum = matrix;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let total = this.prefixSum[row2][col2];
    let top = row1 > 0 ? this.prefixSum[row1 - 1][col2] : 0;
    let left = col1 > 0 ? this.prefixSum[row2][col1 - 1] : 0;
    let diag = (row1 > 0 && col1 > 0) ? this.prefixSum[row1 - 1][col1 - 1] : 0;

    return total - top - left + diag;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
