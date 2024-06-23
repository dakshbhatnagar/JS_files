const arr = [1, 2, 3, 4, 5, 6];

const doubledArr = arr.map((elem) => {
    return elem * 2;
});

//console.log(doubledArr); // Output: [2, 4, 6, 8, 10, 12]


const doubledReduceArr = arr.reduce((acc, curr) => {acc.push(curr*2); return acc;}, []);

// console.log(doubledReduceArr)

const doubledFilterArr = arr.filter((a) => {
    return a % 2 == 0;
});
console.log(doubledFilterArr)
