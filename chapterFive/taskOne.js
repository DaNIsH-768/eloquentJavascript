const flatter = (arr) => {
    arr = arr.reduce((acc, curr) => {
        if (typeof(curr) === 'object') {
            return acc.concat(flatter(curr));
        }
        else {
            return acc.concat(curr);
        }
        
    }, [])
    return arr;
}

let arr = [1, 2, 3, [4, 5, [6, 7]], [8], 9]
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(flatter(arr));
console.log(flatter(arrays));