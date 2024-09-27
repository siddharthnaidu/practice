let num = 456;

function func1(num){
let str = String(num);
str = str.split('');

let arr = []
str.forEach(element => {
    arr.push(element = Number(element))
});

arr = arr.sort((a,b)=> {return b-a})
console.log(arr);
return arr[1]
}

console.log('2nd highest num',func1(num));
console.log('2nd highest num',func2(num))

/////////
function func2(num){
num = num.toString().split('').map((e)=>Number(e)).sort((a,b)=>b-a)

return num[1]
}

