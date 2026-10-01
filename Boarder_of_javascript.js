let printPatterns = (matrix)=> {
    let mainDiagonal = []
    let a = matrix.length;
     for(let i=0;i<matrix.length;i++)
     {
       mainDiagonal.push(matrix[i][i]);
     }
    console.log("Main Diagonal:", mainDiagonal.join(" "));
    
    let antiDiagonal = [];
         for(let i=0;i<matrix.length;i++)
     {
         antiDiagonal.push(matrix[i][matrix.length - 1 -i]);
     }  
    console.log("Anti-Diagonal:", antiDiagonal.join(" "));
    
    let topBorder = [];
      for(let i=0;i<matrix.length;i++)
     {
         topBorder.push(matrix[0][i]);
     }  
    console.log("Top Border:", topBorder.join(" "));
    
    let bottomBorder = [];
     for(let i=0;i<matrix.length;i++)
     {
         bottomBorder.push(matrix[a-1][i]);
     }  
    console.log("Bottom Border:", bottomBorder.join(" "));
    
    let leftBorder = [];
      for(let i=0;i<matrix.length;i++)
     {
         leftBorder.push(matrix[i][0]);
     }  
    console.log("Left Border:", leftBorder.join(" "));
    
    let rightBorder = [];
     for(let i=0;i<matrix.length;i++)
     {
         rightBorder.push(matrix[i][a-1]);
     }  
    console.log("Right Border:", rightBorder.join(" "));
}
printPatterns([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
