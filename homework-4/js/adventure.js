const journeyRef = document.querySelector("#journey")

function startJourney() {
journeyRef.innerHTML = "<p>You are about to embark on on aan adverture through the mysterious Eternal Forest. You don't know anyone who has made it back alive, but that doesn't stop you - whether that's because of bravery or idiocy who knows. Choose one keepsake to take with you to boost morale. </p>"

const starterKeepsake = [
    {name: "Lucky Ring"},
    {name: "Old Teddy Bear"},
    {name: "Vintage Cardstock"},
]

for (let index = 0; index < starterKeepsake.length; index++) {
    const keepsake = starterKeepsake[index];
    const newSection = document.createElement("section");
    newSection.innerHTML += "<h4>" + keepsake.name + "</h4>";

     newSection.dataset.keepsakeName = keepsake.name;
     newSection.onclick = chooseKeepsake;

      journeyRef.appendChild(newSection);

      
}



}

function chooseKeepsake(e) {
    console.log(e.currentTarget);
    const keepsakeName = e.currentTarget.dataset.keepsakeName;
    const confirmChoice = confirm("You chose " + keepsakeName);

    if (confirmChoice) {
        journeyRef.innerHTML += "You chose " + keepsakeName + " as your keepsake.";
        myKeepsake = {name: keepsakeName}
    }


    animalTrial()
}


function animalTrial() {
    journeyRef.innerHTML = "<p>Upon entering the forest you see what looks like a small mouse sitting on a rock staring at you. As you look closer you see that the fur is actually wool. It's a woolly mouse. What do you do?</p>"


const animalChoice = [
    {choice: "Pet the mouse"},
    {choice: "Give the mouse a treat from your pack"},
    {choice: "Ignore the mouse and keep moving"},
]

for (let index = 0; index < animalChoice.length; index++) {
    const animalDecision = animalChoice[index];
    const secondSection = document.createElement("section");
    secondSection.innerHTML += "<h4>" + animalDecision.choice + "</h4>";

     secondSection.dataset.animalDecisionChoice = animalDecision.choice;
     secondSection.onclick = chooseAnimalDecision;

      journeyRef.appendChild(secondSection);
}


}

function chooseAnimalDecision(e) {
    console.log(e.currentTarget);
    const animalDecisionChoice = e.currentTarget.dataset.animalDecisionChoice;
    const confirmChoice = confirm("You chose " + animalDecisionChoice);

    if (confirmChoice) {
        journeyRef.innerHTML += "You chose to " + animalDecisionChoice + ". The mouse opens its mouth to reveal massive fangs. It bites down on your hand and strikes with fatal venom. You are dead.";
        myAnimalDecision = {name: animalDecisionChoice}
    }



}