let obj = {
    x:1
}

let admin = obj;

obj = null

console.log(admin) //{ x: 1 }

console.log(obj) // null

// to find which ele repeated how many times
let arr = [1,2,3,4,4,4,5,6,6];

let c = arr.reduce((a,c)=>{
if(a[c]){
    a[c] += 1;
}else{
    a[c] = 1;
}
return a;
},{})
console.log(c)
