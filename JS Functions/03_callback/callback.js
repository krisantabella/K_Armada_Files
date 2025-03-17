//Exercise 1: Writing Your First Callback Function 
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function Subtraction(a, b) {
    return a - b;
}

function Division(a, b) {
    return a / b;
}

console.log(calculate(5, 3, Subtraction));      
console.log(calculate(4, 2, Division)); 

//Exercise 2: Using Callbacks with setTimeout 
function delayedMessage(message, delay, callback, beforeDelayCallback) {
    if (typeof beforeDelayCallback === 'function') {
        beforeDelayCallback(message);
    }

    setTimeout(() => {
        callback(message);
    }, delay);
}

delayedMessage("Hello, world!", 2000, function(msg) {
    console.log(msg); //after the delay
    }, 
    function(msg) {
        console.log(msg); //before the delay
    }
);

//Exercise 3: Looping with Callbacks 
function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        if (callback(i) === false) {
            break; 
        }
    }
}

repeatTask(3, function(index) {
    console.log("Iteration:", index);
    if (index === 1) return false; 
});


