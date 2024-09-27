let b = true;
let count = 0;

const int = setInterval(() => {
    if(b){
        console.log('print',count++)
    }
}, 200);

setTimeout(()=>{
b = false;
clearInterval(int)
},2000);

// here it prints till 8 and if you comment clearInterval the program does not exit
///////////////////////////////////////////////////////////////////////////////////////////////////////




// ************************ 2nd problem
var a = true;

setTimeout(()=>{
    a  = false
},100);

// while(a){
//     console.log('aaa')
// }

//here thread is not freed so it becomes infinite loop ..the set time out function executes and tries to put the updated value of a in the event loop but cannot do so because event loop is engaged in infinite while loop
/////



//************************************* */ 3rd problem
console.log(2+'2'); //22
console.log('2'+2); //22
console.log(2-'2'); //0
console.log('x'-2+'x') //NaNx

let func = function (){
    return arguments;
}

let func2 = ()=>{
    return arguments // cannot use like this in arrow functions
}

console.log(func(1,2))
console.log(func2(1,2))
//*********************** */
