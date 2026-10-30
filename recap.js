let processStudentGroups =  (students)=> {
    dic = {};
    let perfectlyUnique = students.filter(item => {

         return students.indexOf(item) === students.lastIndexOf(item);
         }
         );// ei khane jokon index address milbe na but item same hobe tokon ta bad dibe.(When the index address will be different but the item is same than the code eleminate the both item of both index address)

    let newset = new Set(perfectlyUnique);
    dic.uniqueCount = newset.size;
    let copyset = new Set(newset);
    copyset.add("John Doe");
    dic.hasJohnDoe = copyset.has("John Doe");
    for(let item of copyset)
    {
        if((typeof item === 'string' && item.startsWith('z'))|| (typeof item === 'string' && item.startsWith('Z')))
        {
            copyset.delete(item);
        }
    }
   // let arr = Array.from(copyset); //
    dic.studentsArray = [...copyset];
    return dic;
}


console.log(processStudentGroups(["John Doe", "ZARA", "Emma", "zeus", "John Doe", "Emma"]))

//*************Another rule and another answer*****************************\


let processStudentGroups =  (students)=> {
    dic = {};

    let newset = new Set(students);
    let copyset = new Set(newset);
    copyset.add("John Doe");
    
    for(let item of copyset)
    {
        if((typeof item === 'string' && item.startsWith('z'))|| (typeof item === 'string' && item.startsWith('Z')))
        {
            copyset.delete(item);
        }
    }
   // let arr = Array.from(copyset); //
   dic.uniqueCount = copyset.size;
   dic.hasJohnDoe = copyset.has("John Doe");
    dic.studentsArray = [...copyset];
    return dic;
}


console.log(processStudentGroups(["John Doe", "ZARA", "Emma", "zeus", "John Doe", "Emma"]))
