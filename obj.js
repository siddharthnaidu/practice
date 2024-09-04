let obj = {
    x:1
}

let admin = obj;

obj = null

console.log(admin) //{ x: 1 }

console.log(obj) // null
