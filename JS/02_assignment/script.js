//Task 1
let book = {
    title: "Murder on the Orient Express",
    author: "Agatha Christie",
    pages: 256,
    isRead: false
};

console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Pages:", book.pages);
console.log("Is Read:", book.isRead);

book.isRead = true;
book.genre = "Mystery, Crime, Detective Fiction";

console.log("Updated Book Object:", book);

//Task 2
let movies = [
    {title: "Murder on the Orient Express", director: "Kenneth Branagh", year: 2017},
    {title: "Enola Holmes", director: "Harry Bradbeer", year: 2020},
    {title: "The Gorge", director: "Scott Derrickson", year: 2024}
];

console.log("Title of the Second Movie:", movies[1].title);

movies.push({title: "Enola Holmes 2", director: "Harry Bradbeer", year: 2022});

movies[0].year = 2023;

console.log("Updated Array:", movies);

//Task 3
let student = {
    name: "Krissan Belle B. Mapalo",
    age: "22",
    subject: ["Great Books", "Software Engineering and Design", "Operating System"]
}

console.log("First Subject:",student.subject[0]);

student.subject.push("Computer Networks and Security");

console.log("Updated Student Object:", student);

//Task 4
let recipe = {
    name: "Sinigang Baboy",
    ingredients: [
        {name: "Pork ribs/belly", quantity: "1 kg"},
        {name: "Water", quantity: "1.5 L"},
        {name: "Onion", quantity: "1 pc"},
        {name: "String beans", quantity: "10-15pcs"},
        {name: "Tomatoes", quantity: "2 pcs"},
        {name: "Salt&Pepper", quantity: "1 pinch"},
    ],
    isVegetarian: false
}

recipe.ingredients.push({name: "Sinigang mix", quantity: "1 pack(40g)"});

console.log("Second Ingredient:", recipe.ingredients[1]);

console.log("Recipe Object:", recipe);


