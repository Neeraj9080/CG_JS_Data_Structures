let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 900) + 100);
}
console.log("Random Numbers : ", randomNumbers);

let largest = -Infinity, secondLargest = -Infinity;
let smallest = Infinity, secondSmallest = Infinity;

for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] > largest) {
        secondLargest = largest;
        largest = randomNumbers[i];
    } else if (randomNumbers[i] > secondLargest && randomNumbers[i] != largest) {
        secondLargest = randomNumbers[i];
    }

    if (randomNumbers[i] < smallest) {
        secondSmallest = smallest;
        smallest = randomNumbers[i];
    } else if (randomNumbers[i] < secondSmallest && randomNumbers[i] != smallest) {
        secondSmallest = randomNumbers[i];
    }
}

console.log("2nd Largest : ", secondLargest);
console.log("2nd Smallest : ", secondSmallest);
