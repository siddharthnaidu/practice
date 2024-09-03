function countPairsWithSum(arr, targetSum) {
    let count = 0;
    let freqMap = {};

    for (let num of arr) {
        let complement = targetSum - num;

        // If the complement exists in the map, add the frequency of the complement to the count
        if (freqMap[complement]) {
            count += freqMap[complement];
        }

        // Update the frequency map for the current number
        freqMap[num] = (freqMap[num] || 0) + 1;
    }
    console.log(freqMap)

    return count;
}

let arr = [1, 2, 3, 4, 5, 5, 5, 6]
let k = 11
const result = countPairsWithSum(arr, k);

console.log(result); // Output: 3
