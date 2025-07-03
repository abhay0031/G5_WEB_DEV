
// console.log("Start Script");

// function walkInRes(cb){
//         console.log(" I am walking inside the restuarant");
        
//         setTimeout(cb,3000);
            

// }

// function checkMenu(cb){
// console.log(" i am checking the menu")
//     setTimeout(cb,3000);
// }

// function orderFood(cb){
//     console.log(" I AM ORDERING FODD");
//     setTimeout(cb,5000) ;
// }

// function havingLLunch(cb){
//     console.log("i am having lunch");
//     setTimeout(cb,5000) ;
// }
// function payBill(cb){
//     console.log(" i am paying bill");
//     setTimeout(cb,2000);
// }


// function leavePlace(){
//     console.log(" i am leaving the place");
  
// }

// walkInRes(()=>{
//     checkMenu(()=>{
//         orderFood(()=>{
//             havingLLunch(()=>{
//                 payBill(()=>{
//                     leavePlace();
//                 });
//             });
//         });
//     });
// });


var cart=["SHOES","Watches"];
var price=0;
var noOfItem=0;
function createOrder(cart){
    // 1. Take the price and total no of order
    noOfItem+=cart[0]*2+cart[1]*3;
    price+=cart[0]*2*200 + cart[1]*3*300;
    setTimeout(placeOrder(price,noOfItem),3000);

}
var orderId;
function placeOrder(price,noOfItem){
    // 1. Generate Order ID and go to the payment gateway
    orderId=Math.random();
    setTimeout(orderPayment(orderId,price,noOfItem),5000);

}

function orderPayment(order,price,noOfItem){
    //  place order
    console.log(" payment is done and order is placed");
    
    setTimeout(orderStatus(orderId,price,noOfItem),5000);

}

function orderStatus(){
    // all details;
    console.log(`your order of price ${price} with orderId ${orderId} is placed`);
}

createOrder((cart)=>{
    placeOrder((price,noOfItem)=>{
        orderPayment((order,price,noOfItem)=>{
            orderStatus();
        })
    })
})