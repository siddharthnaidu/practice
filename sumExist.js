// find sum that is equal to target

function hasArrayTwoCandidates(arr, x) {
    // code here
    arr = arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        console.log('itr',i)
        let left = 0
        let right = arr.length - 1
        while (left < right) {
            if (left == i) {
                left++;
                continue
            }

            if (right == i) {
                right--
                continue
            }

            console.log(left, right)
            let sum = arr[i] + arr[left]
            console.log(arr, sum)
            if (sum === x) {
                return true
            } else if(arr[i] + arr[right] === x){
                return true
                

            }else {
                left++;
            }

        }

    }
    return false;
}
let x = 16
let arr = [1, 4, 45, 6, 10, 8]
//console.log(hasArrayTwoCandidates(arr, x))
console.log(check(arr,x))


/////////////////////////////////////
// another solution
function check(arr,x){
    const seen = new Set();
    
    for (let num of arr) {
        const complement = x - num;
        
        if (seen.has(complement)) {
            return true;
        }
        
        seen.add(num);
    }
    
    return false;
}
