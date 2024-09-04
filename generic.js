// write a function which  has generic

function x1 <T>(n:T){
    return n;
    }
    
    let res1 = x1(2) // hover and check type of res (number)
    let res2 = x1('2') // hover and check type of res2 (string)