
// functions can exist out of objects and reused several times
function attack(enemyDef) {
    const dmg = this.atk - enemyDef;
        if (dmg <= 0) {
            return 0;
        } else {
            return dmg;
        }
}



// Objects
const person = {
    // Properties (variables that belong to this object)
    name: "Ty the Cleric Guy",
    hp:8,
    def: 0,
    atk: 2,
    speed: 3,

    // Methods (functions that belond to this object)
    // attack referneces funciton outside of object so you don't need to retype it within the object
    attack: attack, 

    takeDamage(damageAmount) {
        this.hp -= damageAmount;
    }

};

const enemy = {
    name: "Slime",
    hp: 4,
    def: 3,
    atk: 1,
    spd: 1,

     attack() {
        return this.atk;
    },

    takeDamage(damageAmount) {
        this.hp -= damageAmount;
    }
}

// Ty attacks slime
const tyDmg = person.attack(enemy.def);
console.log("Slime HP:", enemy.hp);
enemy.takeDamage(tyDmg);
console.log("Slime HP:", enemy.hp);

// arrays can contain objects
const characters = [
    {name:"Sammy", hp: 2, atk: 1},
    {name: "TY", hp: 1, atk: 5},
    {name: "Susan", hp: 5, atk: 3},
    {name: "Bob", hp: 7, atk: 2},
]

console.log("First Character:",
    characters[0].name);