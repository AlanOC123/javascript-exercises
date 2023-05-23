const leapYears = function(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0 && year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
};

/*
    Spec
    - Have a function called leapYears
    - Takes a single parameter year
    - Checks if this year meets the following conditions
        - Divisible by 400?
            - Is a leap year
        - Divisible by 100?
            - Is not a leap year
        - Divisible by 4?
            Is a leap year
    - Series of checks in descending order
    - First check if its divisible by 400
*/

// testing

let isLeapYear1 = leapYears(1996);
let isLeapYear2 = leapYears(2000);
let isLeapYear3 = leapYears(2004);
let isLeapYear4 = leapYears(2006);

console.log(isLeapYear1);
console.log(isLeapYear2);
console.log(isLeapYear3);
console.log(isLeapYear4);

// Do not edit below this line
module.exports = leapYears;
