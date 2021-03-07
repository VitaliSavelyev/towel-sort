
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr=[];
    if (matrix === undefined ||matrix.length == 0){
        return arr;
    }
    for (i=0;i<matrix.length;i++){
        if (i%2==0) {
            for (k = 0; k < matrix[i].length; k++) {
                arr.push(matrix[i][k]);
            }
        }
        else{
            for(k=matrix[i].length-1;k>=0;k--) {
                    arr.push(matrix[i][k]);}
        }
    }
    console.log(arr);
    return arr;
}
