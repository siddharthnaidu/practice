// this will execute perfectly because javascript hoists but not with the anonymous
console.log(add(2,3))

function add(a,b){
    
return a+b;
}



//////// look here carefully anonymous functions are not hoisted but above function is hoisted


//console.log(x(2,4))

const x = (a,b)=>{
    
    return a+b;
    }


