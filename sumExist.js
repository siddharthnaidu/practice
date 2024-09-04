// find two elements sum is == k from a given array
let x = 16
let arr = [1, 4, 45, 6, 10, 8]


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
console.log(check(arr,x))



/////////////////////////////////////////// another solution

function hasPairWithSumTwoPointers(arr, x) {
    arr.sort((a, b) => a - b);  // Sort the array
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === x) {
            return true;  // Found a pair
        } else if (sum < x) {
            left++;  // Move the left pointer to the right to increase the sum
        } else {
            right--; // Move the right pointer to the left to decrease the sum
        }
    }
    return false;  // No pair found
}

console.log(hasPairWithSumTwoPointers(arr, x))



/////////////////////////////////////




// brute force approach -  other solution is to loop twice and check the sum
function hasPairWithSumBruteForce(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === x) {
                return true;
            }
        }
    }
    return false;
}
