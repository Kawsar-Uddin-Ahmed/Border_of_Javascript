let findSumPatterns = (matrix)=> {

    let sum = 0;
    let sum1 = 0;
    let sum2 = 0;
    let a = [];
    let b = matrix.length;

    for(let i = 0 ;i<matrix.length ;i++)
    {
         sum+=matrix[i][i];

    }
   console.log(`Main diagonal sum: ${sum}`);
   for(let i = 0 ;i<matrix.length ;i++)
    {
         sum1+=matrix[i][b - 1 - i];

    }
    console.log(`Anti-diagonal sum: ${sum1}`);

      for(let i=0;i<matrix.length;i++)
     {
         a.push(matrix[0][i]);
     }  
    
     for(let i=0;i<matrix.length;i++)
     {
         a.push(matrix[b-1][i]);
     }
    
      for(let i=0;i<matrix.length;i++)
     {
         a.push(matrix[i][0]);
     }  
    

     for(let i=0;i<matrix.length;i++)
     {
         a.push(matrix[i][b-1]);
     }
     mySet = new Set(a);
     let arr1 = [...mySet];
     for(let i = 0;i<arr1.length;i++)
     {
        sum2+=arr1[i];
     }
     
     console.log(`Border sum: ${sum2}`);

}

//Corner element counting more than once :


let findSumPatterns = (matrix)=> {

    let sum = 0;
    let sum1 = 0;
    let sum2 = 0;
    let a = [];
    let b = matrix.length;

    for(let i = 0 ;i<matrix.length ;i++)
    {
         sum+=matrix[i][i];

    }
   console.log(`Main diagonal sum: ${sum}`);
   for(let i = 0 ;i<matrix.length ;i++)
    {
         sum1+=matrix[i][b - 1 - i];

    }
    console.log(`Anti-diagonal sum: ${sum1}`);

    for(let i = 0 ;i<b ;i++)
    {
        for(let j=0 ;j<b ;j++)
        {
            if(i === 0 || i === b -1 || j === 0 || j === b-1)
            {
                sum2+=matrix[i][j];
            }
        }
    }
     console.log(`Border sum: ${sum2}`);

}
