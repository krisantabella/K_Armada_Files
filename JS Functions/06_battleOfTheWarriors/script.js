document.addEventListener("DOMContentLoaded", function () {
    const luffy = {
        name: "Luffy",
        hp: 100,
        strength: 18,
        attack: function () {
            return Math.floor(Math.random() * this.strength);
        }
    };

    const arlong = {
        name: "Arlong",
        hp: 100,
        strength: 15,
        attack: function () {
            return Math.floor(Math.random() * this.strength);
        }
    };

    console.log("The battle begins between Luffy and Arlong!");

    for (let round = 1; round <= 10; round++) {
        console.log(`=== Round ${round} ===`);

        let luffyDamage = luffy.attack();
        arlong.hp -= luffyDamage;
        console.log(`Luffy attacks Arlong and does ${luffyDamage} damage!`);
        console.log(`Luffy HP: ${luffy.hp} | Arlong HP: ${arlong.hp}`);

        if (arlong.hp <= 0) break;

        let arlongDamage = arlong.attack();
        luffy.hp -= arlongDamage;
        console.log(`Arlong attacks Luffy and does ${arlongDamage} damage!`);
        console.log(`Luffy HP: ${luffy.hp} | Arlong HP: ${arlong.hp}`);
        console.log(""); // Blank line for readability

        if (luffy.hp <= 0) break;
    }

    if (luffy.hp > arlong.hp) {
        console.log("🏆 Luffy WINS the battle! 🏆");
    } else if (arlong.hp > luffy.hp) {
        console.log("🏆 Arlong WINS the battle! 🏆");
    } else {
        console.log("It's a DRAW!");
    }
});
