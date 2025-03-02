const within for loop should be named differently than the variable used in the array
Example:
for (let i = 0; i < instrumentList.length; i++) {
const instrument = instrumentList[i];
console.log(instrument);
}

Use .innerHtml to add content to a webpage from javascript. To target the correct ul in the reference use "body > ul" When not used the added content was at the top of the page
Example:
const ulRef = document.querySelector("body > ul");
ulRef.innerHTML = "<li>Piano</li>, <li>Guitar</li>, <li>Violin</li>, <li>Drums</li>, <li>Saxophone</li>, <li>Flute</li>"
