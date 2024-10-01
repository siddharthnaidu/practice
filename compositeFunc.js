const arr = [1, 2, 3, 45]

// arr.reduceRight((acc,cur)=>{
//     console.log(acc,cur)
//     return 33
// },'sid')

///////////////////////////////

// write a composite func this should make use of all the functions

function add(x) {
    console.log('add', x)
    return x + 2
}

function sub(x) {
    console.log('sub', x)
    return x - 1
}

function mul(x) {
    console.log('mul', x)
    return x * 2
}

evaluate = composite(add, sub, mul);

console.log(evaluate(2))// write a composite func this should make use of all the functions


function composite(...functions) {
    return (arg) => {

        return functions.reduceRight((acc, cur) => {
                console.log('acc', acc, 'cur', cur)
                 return cur(acc)
        }, arg)

    }

}