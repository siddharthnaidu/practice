console.log(a) //undefined
var a = 10;

// console.log(b) //reference error
let b = 10;

for(var i=0;i<3;i++){
    setTimeout(()=>{
     console.log(i)
    },0) 
 }
 // here i will be printed 3 (three times ofcourse because its var) because of i++
 
 func1();

 function func1(){
     console.log('sas')
 }

