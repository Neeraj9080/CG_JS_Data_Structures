let birthMonths = {};

for (let i = 0; i < 50; i++) {
    let month = Math.floor(Math.random() * 12) + 1;
    if (!birthMonths[month]) {
        birthMonths[month] = [];
    }
    birthMonths[month].push(i + 1);
}

console.log("Birth Months : ", birthMonths);
for (let month in birthMonths) {
    console.log(`Month ${month}: Individuals ${birthMonths[month].join(', ')}`);
}
