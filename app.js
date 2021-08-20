// total cost estiimattion function
function totalPrice(){
    const macPriceText = document.getElementById('mac-price').innerText;
    const macPrice = parseInt(macPriceText);

    const memoryPriceText = document.getElementById('memory-cost').innerText;
    const memoryPrice = parseInt(memoryPriceText);

    const storagePriceText = document.getElementById('storage-cost').innerText;
    const storagePrice = parseInt(storagePriceText);

    const deliveryCostText = document.getElementById('delivery-cost').innerText;
    const deliveryCost = parseInt(deliveryCostText);

    // summation of all the cost 
    const total = macPrice + memoryPrice + storagePrice + deliveryCost;

    // console.log(total);
    // update total price 
    document.getElementById('total-mac-price').innerText = total;
    // update net price 
    document.getElementById('net-total').innerText = total;
}


// extra memory cost estimation 
//------ 8gb
document.getElementById('memory-8gb').addEventListener('click',function(){
    document.getElementById('memory-cost').innerText='0';
    
    totalPrice();
});

// -------16gb
document.getElementById('memory-16gb').addEventListener('click',function(){
    document.getElementById('memory-cost').innerText='180';

    totalPrice();
});


// extra storage cost estimation 
// -------256gb
document.getElementById('storage-256gb').addEventListener('click',function(){
    document.getElementById('storage-cost').innerText='0';

    totalPrice();
});
// ------512gb
document.getElementById('storage-512gb').addEventListener('click',function(){
    document.getElementById('storage-cost').innerText='100';

    totalPrice();
});
// --------1tb
document.getElementById('storage-1tb').addEventListener('click',function(){
    document.getElementById('storage-cost').innerText='180';

    totalPrice();
});


// delivery cost 
// ----------------------long delivery 
document.getElementById('long-delivery').addEventListener('click',function(){
    document.getElementById('delivery-cost').innerText='0';

    totalPrice();
});
document.getElementById('short-delivery').addEventListener('click',function(){
    document.getElementById('delivery-cost').innerText='20';

    totalPrice();
});


// apply promo code 
function applyPromo(){
    
   const promoCode = document.getElementById('promo-code');
   const promoCodeValue = promoCode.value;

      //    case insensetive promocode 
   if(promoCodeValue.toLowerCase() == 'stevekaku'){

       const netTotal = document.getElementById('net-total');

       const netTotalText = netTotal.innerText;

       const netTotalNumber = parseInt(netTotalText);

       const netTotalPrice = netTotalNumber - ( netTotalNumber * (20/100) );
       //    console.log(netTotal);
       netTotal.innerText = netTotalPrice;
    //    empty input value 
       promoCode.value = '';
   }
   else{
       window.alert('enter original promocode!!!');
   }
}


