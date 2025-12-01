class SimpleLotteryMachine {
    startRange;
    endRange;
    lotteryNumbers;

    constructor(startRange, endRange) {
        this.startRange = startRange;
        this.endRange = endRange;
        // Initialize Set with all integers between startRange and endRange
        this.lotteryNumbers = new Set();
        for (let i = startRange; i <= endRange; i++) {
            this.lotteryNumbers.add(i);
        }
    }

    getRandomIntegerFromRange() {
        if (this.lotteryNumbers.size === 0) {
            throw new Error("out of numbers");
        }
        let rnd = Math.round((this.endRange - this.startRange) * Math.random() + this.startRange);

        if (this.lotteryNumbers.has(rnd)) {
            this.lotteryNumbers.delete(rnd);
            return rnd;
        }

        return this.getRandomIntegerFromRange();
    }
}

//let lotteryMachine = new SimpleLotteryMachine(parseInt(process.argv[2]), parseInt(process.argv[3]));
//console.log(process.argv);

/*for (let i = 0; i < parseInt(process.argv[4]); i++) {
    console.log(lotteryMachine.getRandomIntegerFromRange())
}*/
//checking for uniqueness of the numbers in set

let firstLotteryMachine = new SimpleLotteryMachine(0, 42);
let secondLotteryMachine = new SimpleLotteryMachine(0, 42);

console.log("First lottery machine")

for (let i = 0; i < 7; i++) {
    console.log(firstLotteryMachine.getRandomIntegerFromRange())
}
console.log("Additional numbers")
for (let i = 0; i < 2; i++) {
    console.log(firstLotteryMachine.getRandomIntegerFromRange())
}

console.log("Second lottery machine")

for (let i = 0; i < 7; i++) {
    console.log(firstLotteryMachine.getRandomIntegerFromRange())
}
console.log("Additional numbers")
for (let i = 0; i < 2; i++) {
    console.log(firstLotteryMachine.getRandomIntegerFromRange())
}

