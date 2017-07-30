// create a chessboard that is 8x8

var row = 11
var col = 11


var chessboard = '';

for(let i=0 ; i < col; i++){
// even rows
    if (i%2 ==0){
        var evenRow = '';
        // build row
        for(let i = 0; i < row; i++) {
            if (i%2 == 0 ){
                evenRow += '#';
            } 
            else {
                evenRow += ' ';
            }
        }
        chessboard += (evenRow + '\n')
    }
// odd rows
    else {
        var oddRow = '';
        // build row
        for(let i = 0; i < row; i++) {
            if (i%2 == 0 ){
                oddRow += ' ';
            } 
            else {
                oddRow += '#';
            }
        }
        chessboard += (oddRow + '\n')
    }
}

console.log(chessboard);
