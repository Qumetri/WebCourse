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