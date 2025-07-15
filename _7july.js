// Prototypes of Objects 


// 1. Map


// const newArr=arr.map((x)=>x*2);
// console.log(newArr);

// PROTOTYPES IN JS
// let arr=[2,4,6,8,10];
// let arr2=[5,4,6,8,10];


// function doubleData(x){
//     return x*x;
// }
// Array.prototype.mapReplica=function (logic){
//     let outputArr=[];
//     for(let i=0;i<this.length;i++){
//         outputArr.push(logic(this[i]));
//     }
//     return outputArr;
// }
// const myProtoData=arr.mapReplica(doubleData);
// console.log(myProtoData);


// 2 Filter


// const words=["spray","elite","exuberant","destruction","present"];
// const result=words.map((word)=>word.length>6);

// console.log(result);


// function wordsLength(word){
//         if(word.length>7){
//             return 1;
//         }else{
//             return 0;
//         }
    
// }

// const words1=["spray","elite","exuberant","destruction","present"];
// Array.prototype.filterReplica=function(logic){
//     let resultArr=[];

//     for(let i=0;i<this.length;i++){
//         if(logic(this[i])==1){
//         resultArr.push((this[i]));
//         }
//     }
//     return resultArr;
// }

// const abc=words1.filterReplica(wordsLength);
// console.log(abc);



// // 3. reduce function
// const array1=[1,2,3,4];
// const initialValue=0;

// const sumWithInitial=array1.reduce(
//     (accumulator,currentValue)=> accumulator+currentValue,
//     initialValue,
// )
// console.log(sumWithInitial); 


_// const initialValue=0;

// const sumWithIntial2=array1.reduceReplica(
//     (accumulator,currentValue)=>accumulator+currentValue,
//     initialValue,
// )
// console.log(sumWithIntial2);