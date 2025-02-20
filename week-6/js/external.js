console.log("Ummm. where are we?")

const birthYear = 1207;

let myName = "Dimitri";

console.log(myName, "was born", birthYear)

myName = "Mickey";

// constant variables can't change their value
// birthYear = 1208;

console.warn(myName, "MAY have devoured 10 souls")

console.log("myName is", myName.length, "characters long.")
console.log("myName includes mick", myName.toLowerCase().includes("mick"))

console.log("myName has uppercase:", myName !== myName.toLowerCase())

// Get a random number between 1-100 (or any range)
const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("random number:", randomNumber);

// loose vs strict checks, notice the equal sign difference
const Pi = 3.14

console.log(Pi,Pi.toString());

console.log("loose check", Pi == Pi.toString());
console.log("strict check", Pi ===Pi.toString());