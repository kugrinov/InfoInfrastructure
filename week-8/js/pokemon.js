console.log("Pokemon");

// Alert Button with onclick method
function showAlert() {
    alert("Annoying Message");
}

// Confirm Button
const confirmBtnRef = document.querySelector("#confirm-btn");

function showConfirm() {
    const userConfirmed = confirm("You are a robot, right?");
    console.log(userConfirmed);
}

// notice how there's no parenthesis when using id method
confirmBtnRef.onclick = showConfirm;

// prompt button with onclick methd
function showPrompt() {
    const userInput = prompt
    ("What's your favorite flavor of ice cream?", "vanilla");

    console.log(userInput);
}

// Code for Pokemon Journey

const journeyRef = document.querySelector("#journey");

function startJourney() {
journeyRef.innerHTML = "<p>You are so excited, today you get your first pokemon! Sitting in front of you are pokeballs for Bulbasaur, Charmander, and Squirtle</p>";

// curly brackets surrounding string made it an object with properties
const starterPokemon = [
    {
        name: "Bulbasaur",
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png", 
    },
    {
        name: "Charmander",
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png", 
    }, 
    {
        name: "Squirtle",
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
    },
];


for (let i = 0; i < starterPokemon.length; i++) {
    const pokemon = starterPokemon[i];
    const newSection = document.createElement("section");
    newSection.innerHTML += "<img height='100' src='" + pokemon.img + "' alt ='" + pokemon.name + "' />";
    newSection.innerHTML += "<h4>" + pokemon.name + "</h4>";
   
    newSection.dataset.pokemonName = pokemon.name;
    newSection.dataset.pokemonImage = pokemon.img;
    newSection.onclick = choosePokemon;


    journeyRef.appendChild(newSection);
 

    console.log(pokemon);
    
}

}

function choosePokemon(e) {
    console.log(e.currentTarget);
    const pokemonName = e.currentTarget.dataset.pokemonName;
    const pokemonImage = e.currentTarget.dataset.pokemonImage;

    const confirmChoice = confirm("You chose " + pokemonName);

    if (confirmChoice) {
        journeyRef.innerHTML += "You chose " + pokemonName + " as your starter pokemon.";
        myPokemon = {name: pokemonName, img: pokemonImage}
    }

}