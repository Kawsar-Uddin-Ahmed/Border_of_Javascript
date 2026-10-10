let processCart = (jsonString)=> {
     if (typeof jsonString !== 'string') {
        jsonString = JSON.stringify(jsonString);
    }
    let arr1 = JSON.parse(jsonString);
    let arr2 = JSON.parse(jsonString);
    let dis = 0.1;
    for(let a = 0 ; a<arr2.length ;a++)
    {
        if(arr2[a].price > 50)
        {
           
            arr2[a].price = arr2[a].price - (arr2[a].price * dis);
            arr2[a].discounted = true;
        }
        else
        {
             arr2[a].price =arr2[a].price;
             arr2[a].discounted = false;
        }
    
    }
    let result = [arr1 , arr2];
    return result;

}



console.log(processCart([{"name": "Laptop", "price": 999}, {"name": "Mouse", "price": 25}, {"name": "Keyboard", "price": 60}]))
