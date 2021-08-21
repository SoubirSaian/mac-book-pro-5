// total price estiimation function

function totalPrice(){
    // get basic mac price 
    const macPriceText = document.getElementById('mac-price').innerText;
    const macPrice = parseInt(macPriceText);

    // get extra memory price 
    const memoryPriceText = document.getElementById('memory-cost').innerText;
    const memoryPrice = parseInt(memoryPriceText);

    // get extra storage price 
    const storagePriceText = document.getElementById('storage-cost').innerText;
    const storagePrice = parseInt(storagePriceText);

    // get deliver cost 
    const deliveryCostText = document.getElementById('delivery-cost').innerText;
    const deliveryCost = parseInt(deliveryCostText);

    // summation of all the cost 
    const total = macPrice + memoryPrice + storagePrice + deliveryCost;

    
    // update total price 
    document.getElementById('total-mac-price').innerText = total;
    // update net total price 
    document.getElementById('net-total').innerText = total;
}


// extra memory cost estimation 
function macMemory(ram){

    if(ram == 8){
        document.getElementById('memory-cost').innerText='0';
    
        totalPrice();
    }
    else if(ram == 16){
        document.getElementById('memory-cost').innerText='180';
    
        totalPrice();
    }
}

// extra storage cost estimation 
function macStorage(ssd){

    if(ssd == 256){
        document.getElementById('storage-cost').innerText='0';

        totalPrice();
    }
    else if(ssd == 512){
        document.getElementById('storage-cost').innerText='100';

        totalPrice();
    }
    else if(ssd == 1024){
        document.getElementById('storage-cost').innerText='180';

        totalPrice();
    }
}


// delivery cost estimation 
function deliveryCost(time){
    if(time == 'long'){
        document.getElementById('delivery-cost').innerText='0';

        totalPrice();
    }
    else if(time == 'short'){
        document.getElementById('delivery-cost').innerText='20';

        totalPrice();
    }
}


// apply your promo code 

function applyPromo(){
    // get promo input value 
    const promoCode = document.getElementById('promo-code');
    const promoCodeValue = promoCode.value;
 
       //    case insensetive promocode 
    if(promoCodeValue.toLowerCase() == 'stevekaku'){
        // get total price 
        const netTotal = document.getElementById('total-mac-price');
        // get net total price 
        const displayNetTotal = document.getElementById('net-total');
 
        const netTotalText = netTotal.innerText;

        // conversion of string to number 
        const netTotalNumber = parseInt(netTotalText);
        
        // estimation of net total price applying promo code 
        const netTotalPrice = netTotalNumber - ( netTotalNumber * (20/100) );
 
        //    update net total value after applying promo code
        displayNetTotal.innerText = netTotalPrice;
 
         //    empty promo input value 
        promoCode.value = '';
    }
    else{
        window.alert('enter original promocode!!!');
    }
 }
 
 