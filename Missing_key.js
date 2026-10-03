let findMissingKeys = (data, requiredKeys)=> {
    misskey = [];
    for(let i=0; i<requiredKeys.length;i++)
    {
       let currentkey = requiredKeys[i];

       if(!(currentkey in data))
       {
         misskey.push(currentkey);
       }
    }
    return misskey;
    
}

console.log(findMissingKeys({"username":"johndoe","email":"johndoe@example.com"},
["username","email","age"]))


let findMissingKeys = (data, requiredKeys)=> {
     return requiredKeys.filter(key => {
    
    if(!(key in data))
    {
      return true;
    }
    return false;
}
)
}

console.log(findMissingKeys({"username":"johndoe","email":"johndoe@example.com"},
["username","email","age"]))
