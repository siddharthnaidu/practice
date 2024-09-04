
let res = (fn) => {
    let reqiredArgs = fn.length; // returns num of required or expected args

     function sum(...args) {
        if (args.length == reqiredArgs) {
           return join(...args)
        } else {
          return  (...nextArgs) => sum(...nextArgs, ...args)
        }
    }
    return sum

}

const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}

let curriedSum3 = res(join)
let yes = curriedSum3(1,2)(3)
let yes2 = curriedSum3(1)(2)(3)
let yes3 = curriedSum3(1,2,3)
console.log(yes,' ',yes2,' ',yes3)