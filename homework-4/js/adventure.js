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
    journeyRef.innerHTML += "<p>Upon entering the forest you see what looks like a small mouse sitting on a rock staring at you. As you look closer you see that the fur is actually wool. It's a woolly mouse. What do you do?</p>"

    const animalChoice = [
    {name: "Pet the mouse"},
    {name: "Give the mouse a treat from your pack"},
    {name: "Ignore the mouse and keep moving"},
]

    for (let index = 0; index < animalChoice.length; index++) {
    const animalDecision = animalChoice[index];
    const secondSection = document.createElement("section");
    secondSection.innerHTML += "<h4>" + animalDecision.name + "</h4>";

     secondSection.dataset.animalDecisionName = animalDecision.name;
     secondSection.onclick = chooseAnimalDecision;

      journeyRef.appendChild(secondSection);
   
}

  


}

function chooseAnimalDecision(e) {
    console.log(e.currentTarget);
    const animalDecisionName = e.currentTarget.dataset.animalDecisionName;
    const confirmChoice = confirm("You chose to " + animalDecisionName);

    
    if (confirmChoice) {
        journeyRef.innerHTML += "You chose to " + animalDecisionName;
        myAnimalDecision = {name: animalDecisionName}
    }


    const animalBtn = document.createElement("button");
    animalBtn.onclick = animalMove;

    

   if (myAnimalDecision.name === "Pet the mouse") {
        animalBtn.innerHTML = "<p>The mouse opens its mouth to reveal massive fangs. It bites down on your hand and strikes with fatal venom. You are dead.</p>";
        animalBtn.dataset.move = "<p>The mouse opens its mouth to reveal massive fangs. It bites down on your hand and strikes with fatal venom. You are dead.</p>";

    } else if (myAnimalDecision.name === "Give the mouse a treat from your pack") 
        {
        animalBtn.innerHTML = "<p>The mouse graciously accepts the treat and scampers away, opening up the path.</p>";
        animalBtn.dataset.move =  "<p>The mouse graciously accepts the treat and scampers away, opening up the path.</p>";
    } else if (myAnimalDecision.name === "Ignore the mouse and keep moving") 
        {
        animalBtn.innerHTML = "<p>The mouse feels very offended at being ignored and calls all of its mice friends to devour you. You are dead.</p>";
         animalBtn.dataset.move = "<p>The mouse feels very offended at being ignored and calls all of its mice friends to devour you. You are dead.</p>";
    }

    journeyRef.appendChild(animalBtn);

}



function animalMove(e) {
     const animalMove = e.currentTarget.dataset.move;

      journeyRef.innerHTML +=  animalMove ;

   
    
}










