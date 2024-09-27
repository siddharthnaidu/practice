// 1------/////  
let f = function(a,b,c){
    console.log('f.length',f.length)
    console.log('arguments.length',arguments.length)
}

f(1,2) // arguments passed are 2

// here f.length gives the number of parameters defined in the function
//---------------------
// 2--- ////////  javascript puts variables in global scope when u give like this -- below

// (function f31(){
// var r = s= 4
// })();

// (function f32(){
//     let x= y=3
// })();

// console.log(r); // gives error r is not defined
// console.log(s); // prints 4
// console.log(y); // prints 3

/// this is because when you don't declare any variable , s in this case javascript puts it in global scope
//------------------
/// 3 ---- ////
let obj = {
    a:2,
    b:"333",
    "a":'twoo',
    "b":'three'
}

console.log(obj); // { a: 'twoo', b: 'three' }
// here the same keys will be overrided and also every key in obj is of type string


// --------

let obj2 = {};
let bag = {a:1};
obj2[bag] = 'hello'
console.log(obj2[bag]) // hello
console.log(typeof(obj2[bag]))// string
