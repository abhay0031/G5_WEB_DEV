// Promise

// const myPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("foo");
//     },3000);
// });

// myPromise
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// console.log(myPromise);

// function pranshPlacement(placementStep,delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("pransh got the placement"+placementStep);
//             console.log(""+placementStep);
//         }, delay);
//     });
// }

// pranshPlacement("pransh got the placement",5000)
// .then(()=> pranshPlacement("Party time",3000))
// .then(()=> pranshPlacement("working",5000))
// .then(()=> pranshPlacement("layed off",3000))
// .catch((err)=> console.log(err));



const myPromise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Data1");
        console.log("Data1");
        
    },3000);
});


const myPromise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Data2");

        console.log("Data2");
    },5000)
});


const myPromise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Data3");
        console.log("Data3");
        
    },2000);
});


const myPromise4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Data4");
        
        console.log("Data4");
    },6000);
});



// Promise.all([myPromise1,myPromise2,myPromise3,myPromise4])    // promise.all prints all promise
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));



// 1 if ALL Resolved: then what? [result1,result2,result3,result4]
// 2 if ALL Rejected: then what? result4
// 3 if ALL Reject: then what? reject4

// Promise.allSettled([myPromise1,myPromise2,myPromise3,myPromise4])    // promise.allSettled prints all promise with status
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// 1 if ALL Resolved: then what? [status fulfilled/rejected,reason];
// 2 if ALL Rejected: then what?
// 3 if ALL Reject: then what? [{reject}]

Promise.any([myPromise1,myPromise2,myPromise3,myPromise4])       // promise.any reject and less timeout
.then((res)=>console.log(res))
.catch((err)=>console.log(err));


// 1 if ALL Resolved: then what?  first fulfilled
// 2 if ALL Rejected: then what?  errors
// 3 if ALL Reject: then what? 

// Promise.race([myPromise1,myPromise2,myPromise3,myPromise4])      // promise.race prints promise with smallest time
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));


