let findMostFrequentItem = (inventory)=> { 
      let value = Object.values(inventory);
      let maximum =  Math.max(...value);
      return Object.keys(inventory).filter( k =>{
         if(inventory[k] === maximum)
         {
            return true;
         }
        
      })[0]; ///eke r odhik mill thakle first er tai print hobe sudu
}
console.log(findMostFrequentItem({"notebook":30,"pencil":25,"eraser":30,"ruler":10}))


// eiti find() diye o kora jai. find() diye korle direct first item ta print korbe.

let findMostFrequentItem = (inventory)=> { 
      let value = Object.values(inventory);
      let maximum =  Math.max(...value);
      return Object.keys(inventory).find( k =>{
         if(inventory[k] === maximum)
         {
            return true;
         }
        
      });
}
console.log(findMostFrequentItem({"notebook":30,"pencil":25,"eraser":30,"ruler":10}))
