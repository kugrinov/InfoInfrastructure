console.log("Objects are us")

const myObj = {};

const person = {
    // properties of object
    name: "The Why Guy",
    age: 1632,
    vision: "no",
    hair: "ginger",
    canDevourSouls: true,

    // methods - what your object can do/functions belonging to object
    sayHello() {
        console.log("Salutations my dearest enemy");
    },
}

console.log(person.name);
person.sayHello();

function whatDoesTheFoxSay() {
    console.log("Give me cheese");

}

whatDoesTheFoxSay();

