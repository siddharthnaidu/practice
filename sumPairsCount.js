function countPairsWithSum(arr, targetSum) {
    let count = 0;
    let map = {};

    for (let num of arr) {
        let complement = targetSum - num;

        // If the complement exists in the map, we will ADD the frequency of the complement to the count because it forms so many pairs
        if (map[complement]) {
            console.log('exist', num, map[complement], map)
            count = count + map[complement];     
        }

        // Update the frequency map for the current number
        map[num] = map[num] ? map[num] + 1 : 1;
        console.log(map)
    }

    return count;
}

let arr = [0,1, 2, 3, 4, 5, 5, 5, 6,11]
let k = 11
const result = countPairsWithSum(arr, k);

console.log(result); // Output: 3


//////////////////////////////////////////////

function AllPairsWithSum(arr, targetSum) {
    let count = 0;
    let map = {};
    let pairs = [];

    for (let num of arr) {
        let complement = targetSum - num;

        // If the complement exists in the map, we will ADD the frequency of the complement to the count because it forms so many pairs
        if (map[complement]) {
            console.log('exist', num, map[complement], map)
            count = count + map[complement];

            // if you need all those pairs
             for(let i = 0; i<map[complement]; i++){
                pairs.push([num,complement])
             }

        }

        // Update the frequency map for the current number
        map[num] = map[num] ? map[num] + 1 : 1;
       
    }

    console.log(count ,"pairs -",pairs)
    return count;
}

console.log('All pairs ',AllPairsWithSum(arr,k))
