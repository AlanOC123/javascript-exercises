const removeFromArray = function(arr, ...Args) {
    const filteredArray = [];

    for (num of arr) {
        if (!Args.includes(num)) {
            filteredArray.push(num);
        }
    }

    return filteredArray;
};

/*
    Spec: Make a function that takes arguments and returns an array with removed elements
    - Declare the function removeFromArray
    - Takes multiple arguments
    - The first is the array
    - What follows is the elements to remove from the array
    - See if a spread operator that creates a placeholder array works - Yes it does lol and apparently is the best way to do it according to Mozilla - go me
    - Loop through the given array 
    - Filter the given array to see if it matches the values in the rest array (spread array)
    - If it does then remove them
    - Assign the new array to a variable filteredArray and return it
*/

// Testing

const arr = [1, 2, 3, 4];

newArr = removeFromArray(arr, 1, 2, 3);

console.log(newArr);

// Do not edit below this line
module.exports = removeFromArray;
