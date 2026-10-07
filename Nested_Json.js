let calculateRestaurantBill = (order)=> {
        let totalBeforeDiscount = 0;
        let totalDiscount = 0;
    for(let item in order)
    {
        let price =order[item].price;
        let quat = order[item].quantity;
        let offer = order[item].isSpecialOffer;
        let itemtotal = price * quat;
        totalBeforeDiscount+=itemtotal;

        if(offer)
        {
            totalDiscount+= itemtotal * 0.20;
        }
    }
    let finalTotal = totalBeforeDiscount - totalDiscount;
    
    return {
        totalBeforeDiscount: Number(totalBeforeDiscount.toFixed(2)),
        totalDiscount: Number(totalDiscount.toFixed(2)),
        finalTotal: Number(finalTotal.toFixed(2))
    };
}
// Do not write anything outside function


console.log(calculateRestaurantBill({"Sushi Platter": {"price": 45.99, "quantity": 2, "isSpecialOffer": true}, "Green Tea": {"price": 3.50, "quantity": 4, "isSpecialOffer": false}, "Miso Soup": {"price": 2.99, "quantity": 3, "isSpecialOffer": true}}
)
)


//id, name, type, age, isVaccinated, adoptionStatus
