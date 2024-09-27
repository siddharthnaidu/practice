
// for better understanding https://www.youtube.com/watch?v=oFXyzJt9VeU


timeConsumingFunc = (a,b)=>{
for(let i=0;i<100000000;i++){
//xuz
}
return a+b;
}



// now memoizing
const myMemo = (fn)=>{
let cache = {}

return function(...args){
let key = JSON.stringify(...args)
if(cache[key]){
    return cache[key]
}

cache[key] =  fn(...args)
return cache[key]
}

}


let fun =  myMemo(timeConsumingFunc)

// here without memoizing
console.time('x')
timeConsumingFunc(1,2)
timeConsumingFunc(1,2)
console.timeEnd('x')


// after memoizing time is significantly reduced
console.time('y')
fun(1,2)
fun(1,2)
console.timeEnd('y')

//


