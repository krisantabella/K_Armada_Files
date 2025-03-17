// Task 1: Create a Character Object
const character = {
    name: "Hero",
    health: 100
};

// Task 2: Add a Random Class
const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
character.class = classes[Math.floor(Math.random() * classes.length)];

// Task 3: Add Randomized Health
character.randomizeHealth = function() {
    this.health = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
};

// Task 4: Assign a Special Ability
const abilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];
character.specialAbility = abilities[Math.floor(Math.random() * abilities.length)];

// Task 5: Create a generateCharacter() Function
function generateCharacter(name) {
    const names = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];
    return {
        name: name || names[Math.floor(Math.random() * names.length)],
        class: classes[Math.floor(Math.random() * classes.length)],
        health: Math.floor(Math.random() * (150 - 50 + 1)) + 50,
        specialAbility: abilities[Math.floor(Math.random() * abilities.length)],
        battle: function(otherCharacter) {
            const damage = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
            const previousHealth = otherCharacter.health;
            otherCharacter.health -= damage;
            console.log(`Character ${this.name} attacked Character ${otherCharacter.name} with ${this.specialAbility}. ${otherCharacter.name}'s health dropped from ${previousHealth} to ${otherCharacter.health}.`);
        }
    };
}

// Task 6: Battle Simulation
const character1 = generateCharacter("Zane");
const character2 = generateCharacter("Elara");
character1.battle(character2);

// Task 7: Generate Multiple Characters
function generateMultipleCharacters(x) {
    let party = [];
    for (let i = 0; i < x; i++) {
        party.push(generateCharacter());
    }
    return party.map(({ battle, ...rest }) => rest); 
}

const party = generateMultipleCharacters(5);
console.dir(party);
