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