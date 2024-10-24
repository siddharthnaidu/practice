const arr = [1, [2], [3, [4]],{i:9}];
// flat(arr)
// flat(arr, 1)
// flat(arr, 2)

//solved without using flat inbuilt method
let res = [];
function recursiveWay(arr, depth = 1) {
 
    arr.forEach(e => {
        
        if (Array.isArray(e) && depth > 0) {
           // res.concat(recursiveWay(e, depth - 1))
            recursiveWay(e, depth - 1)
        } else {
            console.log('pushing',e)
            res.push(e)
        }
      
    });
    return res
}

console.log(recursiveWay(arr, 1));


// insert an element at any point in array

// use push for inserting at the end
// use splice to insert at any point
// use unshift to insert at the beginning