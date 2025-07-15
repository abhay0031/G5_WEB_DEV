// console.log("Hello world");

// var a=200;
// console.log(a)
// function abc(){
//     console.log("Hello World");
// }

// var b=5000;

// console.log(b);

// setTimeout(()=>{
//     console.log("I am SetTimeout");
// },3000);

// console.log("End of Program");




// console.log("Hello ");
// var a=200;
// console.log(a);
// console.log(xyz);

// var xyz=()=>{
//     console.log("This is XYz function");
// }
// xyz();
// console.log("End");


// function grandParent(){
//     var a=200;
//     console.log(a);
//     // console.log(c); -> not defined  due to heirarchial order (upper level can not access lower level) but lower level can access upper level 

//     function parent(){
//         var b=300;
//         console.log(b);
        

//         function child(){
//             var c=400;
//             var a=5000;
//             console.log(c);
//             console.log(a);
//         }
//         child();
//     }
//     parent();

// }
// grandParent();




// 2 july 2025

// function calculate(param1){
//     console.log("calculate  BL");
//     param1();
// }
// var sumOfTwo=()=>{
//     console.log("Sum of Two Working");

// }
// calculate(sumOfTwo);


// Higher Order Functions
// function calculate(logicFunction,a,b){
//     return logicFunction(a,b);
// }

// // Logical Functions
// function add(a,b){
//     return a+b;
// }

// // Logical Functions
// function sub(a,b){
//     return a-b;
// }

// console.log(calculate(add,3,5));
// console.log(calculate(sub,3,5));


// function Task(logicfunction,name,fees){
//     return logicfunction(name,fees);
//     return logicfunction(fees);
//     return greeting(name,fees,EMI);
// }

// function StudentDetails(name,fees){
//     return {name,fees};
// }
// var fee=0;
// function EMI(fees){
//     fee = fees/10;
//     return fee
// }

// function greeting(name,fees,emi){
//     return `Student name is ${name} having fees ${fees} with emi ${emi}`
// }
// console.log(StudentDetails("abc",30000));
// console.log(EMI(30000));
// console.log(greeting("abc",30000,fee))


// SEtTimeout and SetInterval

// setTimeout(()=>{
//     console.log("Hello setTimeout");
// },3000)


// setInterval(()=>{
//     console.log("Hello setTimeout");
// },3000)



// 3 July

// async await

console.log("Start Script");

function walkInRes(cb){
        console.log(" I am walking inside the restuarant");
        
        setTimeout(cb,3000);
            

}

function checkMenu(cb){
console.log(" i am checking the menu")
    setTimeout(cb,3000);
}

function orderFood(cb){
    console.log(" I AM ORDERING FODD");
    setTimeout(cb,5000) ;
}

function havingLLunch(cb){
    console.log("i am having lunch");
    setTimeout(cb,5000) ;
}
function payBill(cb){
    console.log(" i am paying bill");
    setTimeout(cb,2000);
}


function leavePlace(){
    console.log(" i am leaving the place");
  
}

walkInRes(()=>{
    checkMenu(()=>{
        orderFood(()=>{
            havingLLunch(()=>{
                payBill(()=>{
                    leavePlace();
                });
            });
        });
    });
});