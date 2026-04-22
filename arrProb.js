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
/////////////////////////////////

let arr = [11, 11, 2, 3, 4, 5, 5];

let dup = [];

let unique = arr.reduce((acc, value) => {
  if (!acc.includes(value)) {
    acc.push(value);
  } else {
    dup.push(value);
  }
  return acc;
}, []);

console.log("Unique:", unique);
console.log("Duplicates:", dup);
`//////////////////
improved version` //If a number appears more than twice, it will be added to dup multiple times. [1,1,1,2,3,3]

let unique = arr.reduce((acc, value) => {
  if (!acc.includes(value)) {
    acc.push(value);
  } else if (!dup.includes(value)) {
    dup.push(value);
  }
  return acc;
}, []);


