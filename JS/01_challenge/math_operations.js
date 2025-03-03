// Task 1: Calculate the Total Cost of Items
let item1 = 7; 
let item2 = 11; 
let item3 = 12; 
let totalCost = item1 + item2 + item3; 

console.log(`The total cost of the items is: $${totalCost}`);

// Task 2: Calculate the Average of Three Numbers
let num1 = 7;  
let num2 = 11; 
let num3 = 12;  
let average = (num1 + num2 + num3) / 3; 

console.log(`The average is: ${average.toFixed(2)}`);

// Task 3: Odd or Even Checker
let number = 112; 

if (number % 2 === 0) {
    console.log(`${number} is an even number.`);
} else {
    console.log(`${number} is an odd number.`);
}

// Task 4: Calculate Discounts
let price = 112; 
let discount = 10; 

let discountAmount = (price * discount) / 100;
let discountedPrice = price - discountAmount;

console.log(`The discounted price is: $${discountedPrice}.`);

// Bonus Task: Reverse Percentage Calculation
let finalPrice = 100.8; 
let discountPercentage = 10; 

let originalPrice = finalPrice / (1 - discountPercentage / 100);

console.log(`The original price before the discount was: $${originalPrice}.`);
