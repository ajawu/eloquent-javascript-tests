// Your code here.
let range = (start, end, step = 1) => {
    let numbers = [];
    if (step >= 0) {
        for (let i = start; i <= end; i += step) {
            numbers.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            numbers.push(i);
        }
    }
    return numbers;
}

function sum(numbers) {
    let count = 0;
    for (let every of numbers) count += every;
    return count;
}
console.log(range(1, 10, 2))
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55