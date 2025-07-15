


var cart=["SHOES","Watches"];
var price=0;
var noOfItem=0;
function createOrder(cart){
    // 1. Take the price and total no of order
    noOfItem+=cart[0]*2+cart[1]*3;
    price+=cart[0]*2*200 + cart[1]*3*300;
    setTimeout(sb(price,noOfItem),3000);

}