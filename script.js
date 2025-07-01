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


function grandParent(){
    var a=200;
    console.log(a);
    // console.log(c); -> not defined  due to heirarchial order (upper level can not access lower level) but lower level can access upper level 

    function parent(){
        var b=300;
        console.log(b);
        

        function child(){
            var c=400;
            var a=5000;
            console.log(c);
            console.log(a);
        }
        child();
    }
    parent();

}
grandParent();


