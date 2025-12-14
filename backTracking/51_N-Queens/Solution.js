/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    
    let res = [];
    let backTrack = (row,queens,cols,diag1,diag2)=>{
        if(row==n){
            const board = queens.map(p => '.'.repeat(p)+'Q'+'.'.repeat(n-p-1))
            res.push(board)
            return;
        }
        for(let col = 0  ;  col < n ;col++){
            if(cols[col] || diag1[row+col] || diag2[row-col+n-1] )continue;
            queens[row]=col;
            cols[col] = diag1[row+col] = diag2[row-col+n-1] = true ;
            backTrack(row+1,queens,cols,diag1,diag2);
            cols[col] = diag1[row+col] = diag2[row-col+n-1] = false ;
        }

    }
    backTrack(0,new Array(n),new Array(n).fill(false),new Array(2*n -1).fill(false),new Array(2*n -1).fill(false));
    return res;
};
