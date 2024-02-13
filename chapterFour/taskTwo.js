const reverseArray = (arr) => {
    const reversedArr = [];
    for (let elem of arr) {
        reversedArr.unshift(elem);
    }
    return reversedArr;
}

const reverseArrayInPlace = (arr) => {
    let holder; 
    let j = arr.length-1;
    let end = Math.floor((j)/2);

    for (let i = 0; i < end; i++) {
        holder = arr[i];
        arr[i] = arr[j]
        arr[j] = holder;
        j--;
    }
    return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]))