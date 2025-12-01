class SimpleLotteryMachine {
    startRange;
    endRange;
    lotteryNumbers;

    constructor(startRange, endRange) {
        this.startRange = startRange;
        this.endRange = endRange;
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

class ComplexLotteryMachine extends SimpleLotteryMachine {
    additionalStartRange;
    additionalEndRange;
    additionalLotteryNumbers;

    constructor(startRange, endRange, additionalStartRange, additionalEndRange) {
        // initialize normal numbers range using parent class
        super(startRange, endRange);

        this.additionalStartRange = additionalStartRange;
        this.additionalEndRange = additionalEndRange;

        // Initialize Set with all integers between additionalStartRange and additionalEndRange
        this.additionalLotteryNumbers = new Set();
        for (let i = additionalStartRange; i <= additionalEndRange; i++) {
            this.additionalLotteryNumbers.add(i);
        }
    }

    getRandomAdditionalNumber() {
        if (this.additionalLotteryNumbers.size === 0) {
            throw new Error("out of additional numbers");
        }

        let rnd = Math.round(
            (this.additionalEndRange - this.additionalStartRange) * Math.random()
            + this.additionalStartRange
        );

        if (this.additionalLotteryNumbers.has(rnd)) {
            this.additionalLotteryNumbers.delete(rnd);
            return rnd;
        }

        // try again until we hit a number that hasn't been drawn yet
        return this.getRandomAdditionalNumber();
    }
}


const machine1 = new ComplexLotteryMachine(1, 42, 1, 42);

const machine1Normal = [];
for (let i = 0; i < 7; i++) {
    machine1Normal.push(machine1.getRandomIntegerFromRange());
}

const machine1Additional = [];
for (let i = 0; i < 2; i++) {
    machine1Additional.push(machine1.getRandomAdditionalNumber());
}

console.log("Machine 1 normal numbers:     ", machine1Normal);
console.log("Machine 1 additional numbers: ", machine1Additional);


const machine2 = new ComplexLotteryMachine(1, 42, 1, 42);

const machine2Normal = [];
for (let i = 0; i < 5; i++) {
    machine2Normal.push(machine2.getRandomIntegerFromRange());
}

const machine2Additional = [];
for (let i = 0; i < 2; i++) {
    machine2Additional.push(machine2.getRandomAdditionalNumber());
}

console.log("Machine 2 normal numbers:     ", machine2Normal);
console.log("Machine 2 additional numbers: ", machine2Additional);
