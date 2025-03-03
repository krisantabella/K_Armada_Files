//Task 1
let score = 95; 
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score <= 89) {
    grade = "B";
} else if (score >= 70 && score <= 79) {
    grade = "C";
} else if (score >= 60 && score <= 69) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Grade:", grade);

//Task 2
let temperature = 36;

if (temperature < 0) {
    console.log("It's freezing outside! Bundle up!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold outside. Wear a jacket.");
} else if (temperature >= 16 && temperature <= 30) {
    console.log("The weather is nice. Enjoy your day!");
} else {
    console.log("It's hot outside. Stay hydrated!")
}

//Task 3
let age = 22;

if (age < 13) {
    console.log("You are too young for this activity.");
} else if (age >= 13 && age <= 17) {
    console.log("You need parental permission.");
} else {
    console.log("You are eligible for this activity.")
}

//Task 4
let age1 = 22; //I renamed the variable age to age1 to avoid errors in the console since the variable age is already defined in Task 3
let isMember = false
let ticket;

if (age1 < 12) {
    ticket = "Free";
} else if (age1 >= 12 && isMember == true) {
    ticket = "$10"
} else {
    ticket = "$15"
}

console.log("Ticket:", ticket);
