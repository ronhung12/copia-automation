//Sync problem
//Time complexity is 4N -> N
//Space complexity is 3N -> N
//This solution was created because I wanted a data structure to store the occcurences of each value within the arrays. 
//I chose a map because you can have anything as a key rather than an object which is stringified.
//After the maps are created we iterate through each array against its complementing map (arr1 vs arr2 map) and vice versa to check if the key exists. If the key exists that means
//the other array contains the same value and it is not synced. If the key does not exist that means the value is unique and we add it to the answer array. We have to create multiple for loops
// because the edge case of having multiple same values in the same array needs to be accounted for (hence the commented out solution above does not work).

function sync(arr1, arr2) {
    // let integer_map = new Map();
    // let combined_array = arr1.concat(arr2)
    // let answer_array = []
    // for (const num of combined_array) {
    //     if (!integer_map.get(num)) {
    //         integer_map.set(num, 1);
    //     } else {
    //         let count = integer_map.get(num);
    //         count++;
    //         integer_map.set(num, count);
    //     }
    // }
    // Array.from(integer_map).map(key_val => {
    //     if (key_val[1] == 1) {
    //         answer_array.push(key_val[0])
    //     }
    // })
    // return answer_array;
    let first_array_map = new Map();
    let second_array_map = new Map();
    let answer_array = [];
    for (const val of arr1) {
        if (!first_array_map.get(val)) {
                first_array_map.set(val, 1);
        }
    }
    for (const val of arr2) {
        if (!second_array_map.get(val)) {
            second_array_map.set(val, 1);
        }
    }

    for (const val of arr1) {
        if (!second_array_map.has(val)) {
            answer_array.push(val);
        }
    }

    for (const val of arr2) {
        if (!first_array_map.has(val)) {
            answer_array.push(val);
        }

    return answer_array;
    }
};

console.log(sync([1, 2, 3, 4, 5], [1, 3, 4]))

module.exports = sync;