
//solution to problem-1:

function seerToMon(seer){
    if(seer<0){
        return 'Enter positive amount,please.'
    }
    const mon = 0.025 * seer;
    return mon;
}
console.log(seerToMon(-1000));  

// solution to problem-2:

function totalSales(shirtQuantity,pantQuantity,shoesQuantity){
    if(shirtQuantity < 0 || pantQuantity < 0 || shoesQuantity < 0){
        return 'Error: enter positive quantity';
    }
    
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoesPrice = 500;

    const totalSalesOfShirt = shirtPrice*shirtQuantity;
    const totalSalesOfPant = pantPrice*pantQuantity;
    const totalSalesOfShoes = shoesPrice*shoesQuantity;

    const totalProductSales = totalSalesOfShirt + totalSalesOfPant + totalSalesOfShoes;
    return totalProductSales;

}
console.log(totalSales(8,8,8)); 

// // solution to problem-3:

 function deliveryCost( quantity){
     if(quantity < 0){
       return 'Error: Negative number is not acceptable';
     }
     const costForFirst100 = 100;
     const costForLessThan200 = 80;
     const costForMoreThan200 = 50;
     if(quantity <= 100){
         const totalChargeFor100 = costForFirst100 * quantity;
         return totalChargeFor100;
     }

     else if(quantity <= 200){
         const totalChargeFor100 = costForFirst100 * 100;
         const restTshirt = quantity - costForFirst100;

         const chargeForRestTshirt = restTshirt * costForLessThan200;
         const totalCharge = chargeForRestTshirt + totalChargeFor100 ;
         return totalCharge;
     }
     else{
        const totalChargeFor100 = costForFirst100 * 100;
        chargeForRestTshirt =  costForLessThan200 * 100;

        const restShirt = quantity - 200;
        const restTshirtsCharge = restShirt * costForMoreThan200;
        const deliveryCharge = restTshirtsCharge + chargeForRestTshirt + totalChargeFor100;
        return deliveryCharge;

     }
 }

 console.log(deliveryCost(300)); 

//  // solution to problem-4:

  function perfectFriend(friendsName){

      for (let i = 0; i < friendsName.length;i++){
          let element = friendsName[i];
          if(element.length == 5){
              return element;
          }
      }
    }
  let myFriends = ['Rahima' ,'Ayesha' , 'Koli' , 'Moriom', 'Tuhin' , 'Trisa'];
  let bestFriend = perfectFriend(myFriends);
  console.log(bestFriend); 