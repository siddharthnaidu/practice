let set = new Set([1,2,3,4,4]);
console.log(set)

set.add(5);

set.add({a:1,b:2})
set.add({a:1,b:2})

let obj = {d:3}
set.add(obj)
set.add(obj)

console.log([...set])
console.log([...set][6])

set.forEach((e)=>{
console.log(e)
})

let map = new Map();
map.set('a',1)
map.set('a',2)
map.set({},3)
map.set({},4)
console.log(map)