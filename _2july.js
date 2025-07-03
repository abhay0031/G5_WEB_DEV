
function calculate(param1){
    console.log("calculate  BL");
    param1();
}
var sumOfTwo=()=>{
    console.log("Sum of Two Working");

}
calculate(sumOfTwo);


Higher Order Functions
function calculate(logicFunction,a,b){
    return logicFunction(a,b);
}

// Logical Functions
function add(a,b){
    return a+b;
}

// Logical Functions
function sub(a,b){
    return a-b;
}

console.log(calculate(add,3,5));
console.log(calculate(sub,3,5));


function Task(logicfunction,name,fees){
    return logicfunction(name,fees);
    return logicfunction(fees);
    return greeting(name,fees,EMI);
}

function StudentDetails(name,fees){
    return {name,fees};
}
var fee=0;
function EMI(fees){
    fee = fees/10;
    return fee
}

function greeting(name,fees,emi){
    return `Student name is ${name} having fees ${fees} with emi ${emi}`
}
console.log(StudentDetails("abc",30000));
console.log(EMI(30000));
console.log(greeting("abc",30000,fee))


SEtTimeout and SetInterval

setTimeout(()=>{
    console.log("Hello setTimeout");
},3000)


setInterval(()=>{
    console.log("Hello setTimeout");
},3000)



