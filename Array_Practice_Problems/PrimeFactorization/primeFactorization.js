let n = 275; // Number to find prime factors
let primeFactorsArray = [];
while (n % 2 === 0) {
    primeFactorsArray.push(2);
    n = n / 2;
}

for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
        primeFactorsArray.push(i);
        n = n / i;
    }
}

if (n > 2) {
    primeFactorsArray.push(n);
}

console.log("Prime Factors: ", primeFactorsArray);
