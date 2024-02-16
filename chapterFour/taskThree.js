const arrayToList = (arr) => {
    let lastIndex = arr.length - 1;
    let list = null;

    for (let i = lastIndex; i >= 0; i--) {
        list = prepend(arr[i], list)
    }

    return list;
}

// Second Approach

// const arrToList = (arr) => {
//     const list = {};
//     let currLevel = list;

//     for (let idx in arr) {
//         currLevel["value"] = arr[idx];
//         currLevel["rest"] = (idx == arr.length-1) ? null
//         : {};
//         currLevel = currLevel["rest"];
//     }

//     return list;
// }

const listToArray = (list) => {
    const arr = [];
    while(list.rest) {
        arr.push(list.value);
        list = list.rest;
    }
    arr.push(list.value);

    return arr;
}

const prepend = (value, rest) => {
    return {value: value, rest: rest}
}

function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }

console.log(prepend(10, prepend(20, null)));
console.log(arrayToList([10, 20, 30]));
console.log(nth(arrayToList([10, 20, 30]), 1));