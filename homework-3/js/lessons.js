const ulRef = document.querySelector("body > ul");
console.log(ulRef);

const instrumentList = ["Piano", "Guitar", "Violin", "Drums", "Saxophone", "Flute"];
console.log(instrumentList);

for (let i = 0; i < instrumentList.length; i++) {
    const instrument = instrumentList[i];
    console.log(instrument);
}
 

ulRef.innerHTML = "<li>Piano</li> <li>Guitar</li> <li>Violin</li> <li>Drums</li> <li>Saxophone</li> <li>Flute</li>"

console.log(ulRef.innerHTML)