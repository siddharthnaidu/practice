// implement a increment func which incremnets count without using any global variable

function x1() {
    let count = 1
    return function () {
        return ++count 
    }
}
const x = x1()
console.log('x ',x())
console.log('x ',x())
console.log('x ',x())
// it increments each time you call it