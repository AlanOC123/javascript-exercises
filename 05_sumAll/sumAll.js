const sumAll = function(a, b) {
    // Error Checking

    // NaN
    if (Number.isNaN(+a) || Number.isNaN(+b)) {
        return "ERROR";
    };

    // Negative
    if (a < 0 || b < 0) {
        return "ERROR";
    };

    // Other
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    };

    const start = a < b ? a : b;
    const end = a > b ? a : b;
    const step = 1;

    const arr = Array.from(
        {length: (end - start) / step + 1},
        (value, index) => start + index * step
    );

    let sum = 0;

    arr.forEach(num => sum += num);
    
    return sum;
};

// Do not edit below this line

/*
    Spec for the function
    - Takes two parameters
    - The function needs to take these arguments as a start and end point and sum all values including them
    - Lets create a variable arr that holds an array of all values from start to end
    - Lets then declare a sum variable that will hold our return value
    - Loop through the array and the value to the sum
    - Once its done return the sum 
    - Also need to check for non values (NaN) and make sure it doesnt matter which parameter is entered first in setting the first value

*/

// testing

let sum = sumAll(3, 10);

console.log(sum);

funArr = [2, 4, 6];

let squareArr = Array.from(funArr, num => num**2);

console.log(squareArr);

module.exports = sumAll;
