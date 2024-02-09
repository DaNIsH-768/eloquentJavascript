function countChar(str, target) {
    let count = 0;
    for (let char of str) {
        if (char === target) count++;
    }
    return count;
}


function countBs(str) {
    return countChar(str, "B");
}

console.log(countBs("Baby Baby Baby Ooooo..."));