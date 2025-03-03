let dieRolls = {};
for (let i = 1; i <= 6; i++) {
    dieRolls[i] = 0;
}

let maxCount = 10;
let rollComplete = false;

while (!rollComplete) {
    let roll = Math.floor(Math.random() * 6) + 1;
    dieRolls[roll]++;
    
    if (dieRolls[roll] === maxCount) {
        rollComplete = true;
    }
}

let maxRoll = 1;
let minRoll = 1;

for (let i = 1; i <= 6; i++) {
    if (dieRolls[i] > dieRolls[maxRoll]) {
        maxRoll = i;
    }
    if (dieRolls[i] < dieRolls[minRoll]) {
        minRoll = i;
    }
}

console.log("Die Rolls : ", dieRolls);
console.log("Number that reached maximum times : ", maxRoll);
console.log("Number that reached minimum times : ", minRoll);
