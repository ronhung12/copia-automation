// //Deep Equality
//Time Complexity is 2N -> N
//Space Complexity is 2N -> N
//This solution I wanted to use JSON.stringify deep equality check which is one of the best use cases for "deep" checking equality of objects. However it is on the basis that the
//keys are ordered. Since we only need to know the boolean value of the check I sorted the keys of the objects and created a temp sorted object. I returned the deep equality check of
//the JSON stringified version of these objects


function equals(map1, map2) {
    const ordered_map1 = Object.keys(map1).sort().reduce((obj, key) => {
        obj[key] = map1[key];
        return obj;
    }, {});

    const ordered_map2 = Object.keys(map2).sort().reduce((obj, key) => {
        obj[key] = map2[key];
        return obj;
    }, {});

    return JSON.stringify(ordered_map1) === JSON.stringify(ordered_map2);

}

console.log(equals({
    "key1": "value",
    "key2": { "key3": 1 }
},
    {
        "key2": { "key3": 1 },
        "key1": "value",
    }))

console.log(equals({
    "key1": "value1",
    "key2": { "key3": 1 },
    "key4": "value2"
},
    {
        "key1": "value",
        "key2": { "key3": 1 }
    }))

console.log(equals({
    "key1": "value",
    "key2": [1, 2, 3]
},
    {
        "key1": "value",
        "key2": [1, 2, 3]
    }))

module.exports = equals;