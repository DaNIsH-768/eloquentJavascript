const rangeFunc = (start, end, step=1) => {
    const arr = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    return arr;
}

const sumFunc = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

console.log(rangeFunc(5, 2, -1));