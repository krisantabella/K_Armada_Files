//Task 1 - Custom Map Function 
function customMap(arr, callback) {
    let result = []; 
    for (let i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i]); 
    }
    return result; 
}
let numbers = [1, 2, 3];
let doubled = customMap(numbers, function(num) { return num * 2; });
console.log(doubled); // Output: [2, 4, 6]

//Task 2 - Filter Function
function filter(arr, callback) {
    let result = []; 
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) { 
            result[result.length] = arr[i]; 
        }
    }
    return result; 
}
let result = filter([1, 2, 3, 4, 15], function(val) { return val<10; });
console.log(result); // Output: [1, 2, 3, 4]

//Task 3 - Some Function
function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) { 
            return true; 
        }
    }
    return false; 
}
let result = some([1, 2, 3, 4], function(val) { return val>5; });
console.log(result); // Output: false, since no value is greater than 5.

//Task 4 - Every Function
function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) { 
            return false; 
        }
    }
    return true; 
}
let result = every([1, 2, 3], function(val) { return val>0; });
console.log(result); // Output: true

//Task 5 - Reduce Function
function reduce(arr, callback, initialValue) {
    let accumulator = initialValue; 
    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]); 
    }

    return accumulator; 
}
let sum = reduce([1, 2, 3], function(acc, num) { return acc + num; }, 0);
console.log(sum); // Output: 6

//Task 6 - Includes Check
function includes(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true; 
        }
    }
    return false; 
}
let result = includes([1, 2, 3], function(val) { return val === 2; });
console.log(result); // Output: true

