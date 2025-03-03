let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 900) + 100);
}

randomNumbers.sort((a, b) => a - b);
console.log("Sorted Numbers : ", randomNumbers);

let sortedSecondLargest = randomNumbers[randomNumbers.length - 2];
let sortedSecondSmallest = randomNumbers[1];

console.log("2nd Largest in Sorted Array : ", sortedSecondLargest);
console.log("2nd Smallest in Sorted Array : ", sortedSecondSmallest);
