function isLeapYear(year) {
   if (year % 4 !== 0) {
       return false;
   } else if (year % 100 !== 0) {
       return true;
   } else if (year % 400 !== 0) {
       return false;
   }
   return true;
}



const containsNumbersSquare = function (numbers, aNumber) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === aNumber * aNumber) {
            return true;
        }
    }
    return false;
};

//Task5
function task5(parameter1, parameter2 = 2){
    return Math.pow(parameter1, parameter2);
}
console.log(task5(5));

function task5b(...args){
    let sum = 0
    for(let arg of args){
        sum += arg
    }
    return sum;
}

console.log(task5b(1,2,3))
console.log(task5b(1,2,3,4,5))

let convertsToMinutes = (hoursInHundredths) => {
    let devisionSign = '';
    for (let i = 0; i < hoursInHundredths.length; i++) {
        if (hoursInHundredths[i] === ',' || hoursInHundredths[i] === '.'){
            devisionSign = hoursInHundredths[i];
            break;
        }
    }
    let subHours = hoursInHundredths.split(devisionSign);
    let hours = parseInt(subHours[0], 10);
    let mins = parseInt(subHours[1], 10);

    if (isNaN(mins) || isNaN(hours)){
        return "the number is not valid";
    }
    mins = (mins * 60) / 100;
    /*if (mins < 10){
        let minsString = '0' + Math.round(mins);
        return subHours[0] + ':' + minsString;
    }*/
    return subHours[0] + ':' + Math.round(mins).toString().padStart(2, '0');
    
    
    

    

} 

let book1 = {
    name: "The Great Gatsby",
    authors: ["F. Scott Fitzgerald"],
    isbn: "9780743273565",
    publicationDate: "1925-04-10",
    setAuthors: function(newAuthors) {
        this.authors = newAuthors;
    },
    getIsbn: function() {
        return this.isbn;
    },
    setIsbn: function(newIsbn) {
        this.isbn = newIsbn;
    }
}

let book2 = {
    name: "To Kill a Mockingbird",
    authors: ["Harper Lee"],
    isbn: "9780061120084",
    publicationDate: "1960-07-11",
    setAuthors: function(newAuthors) {
        this.authors = newAuthors;
    },
    getIsbn: function() {
        return this.isbn;
    },
    setIsbn: function(newIsbn) {
        this.isbn = newIsbn;
    }

}

let book3 = {
    name: "The Great Gatsby",
    authors: ["F. Scott Fitzgerald"],
    isbn: "9780743273565",
    publicationDate: "1925-04-10",
    setAuthors: function(newAuthors) {
        this.authors = newAuthors;
    },
    getIsbn: function() {
        return this.isbn;
    },
    setIsbn: function(newIsbn) {
        this.isbn = newIsbn;
    }
}

function isIsbnTheSame(bookA, bookB) {
    return bookA.getIsbn() === bookB.getIsbn();
}

console.log(isIsbnTheSame(book1, book2));

function isBookTheSame(bookA, bookB) {
    return (bookA == bookB);
}

console.log(isBookTheSame(book1, book3));
//No, because they are two different objects in memory




let variable = [{ batchid: 434, unit: "ounce", weight: 12.21 }, {batchid: 414, unit: "gram", weight: 199.54 },{ batchid: 522, unit: "ounce", weight: 18.88 }]

let convertOuncesToGrams = (measurements) => {
    const gramsInOunce = 28.3495231;
    
    return measurements.map(measurement => {
        if (measurement.unit === 'ounce'){
            measurement.weight = parseFloat((measurement.weight * gramsInOunce).toFixed(2))
            measurement.unit = 'gram'
        }
        
        return measurement;
    }) //I accepted Jesus christ as my lord and saviour while writing this

}

console.log(convertOuncesToGrams(variable))

/*function readMeasuremenets (measurement){
    return measurement * 2;
}

let measurement = (measurement) =>{
    return measurement * 2;
}

let measurement = (measurement) => measurement * 2

(measurement) => measurement * 2*/
//path of pain 




