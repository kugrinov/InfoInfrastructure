const journeyRef = document.querySelector("#journey")

function startJourney() {
journeyRef.innerHTML = "<p>You are about to embark on on an adverture through the mysterious Eternal Forest. You don't know anyone who has made it back alive, but that doesn't stop you - whether that's because of bravery or idiocy who knows. Choose one keepsake to take with you to boost morale. </p>"

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
        journeyRef.innerHTML += "<p>You chose " + keepsakeName + " as your keepsake.</p>";
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
        journeyRef.innerHTML += "<p>You chose to " + animalDecisionName + "</p>";
        myAnimalDecision = {name: animalDecisionName}
    }


    const animalBtn = document.createElement("button");
    animalBtn.onclick = animalMove;

    

   if (myAnimalDecision.name === "Pet the mouse") {
        animalBtn.innerHTML = "<p>Continue</p>";
        animalBtn.dataset.move = "<p>The mouse opens its mouth to reveal massive fangs. It bites down on your hand and strikes with fatal venom. You are dead.</p>";

    } else if (myAnimalDecision.name === "Give the mouse a treat from your pack") 
        {
        animalBtn.innerHTML = "<p>Continue</p>";
        animalBtn.dataset.move =  "<p>The mouse graciously accepts the treat and scampers away, opening up the path.</p>";
    } else if (myAnimalDecision.name === "Ignore the mouse and keep moving") 
        {
        animalBtn.innerHTML = "<p>Continue</p>";
         animalBtn.dataset.move = "<p>The mouse feels very offended at being ignored and calls all of its mice friends to devour you. You are dead.</p>";
    }

    journeyRef.appendChild(animalBtn);

}



function animalMove(e) {
     const animalMove = e.currentTarget.dataset.move;

      journeyRef.innerHTML +=  animalMove ;

      if (animalMove === "<p>The mouse opens its mouth to reveal massive fangs. It bites down on your hand and strikes with fatal venom. You are dead.</p>") {
        journeyRef.innerHTML += "<h4>Game Over</h4>"
      } else if (animalMove === "<p>The mouse graciously accepts the treat and scampers away, opening up the path.</p>") {
        pitTrial()

      } else if (animalMove === "<p>The mouse feels very offended at being ignored and calls all of its mice friends to devour you. You are dead.</p>") {
        journeyRef.innerHTML += "<h4>Game Over</h4>"
      }
   
    
}



function pitTrial() {
    journeyRef.innerHTML += "<p>You continue walking through the first to find your path blocked by a massive pitfall. You can see the path continue on the otherside. How do you reach it?</p>"

    const pitChoice = [
        {name: "make a bridge with fallen trees"},
        {name: "swing across using a vine"},
        {name: "take a running leap"}
    ]

    for (let index = 0; index < pitChoice.length; index++) {
        const pitDecision = pitChoice[index];
        const thirdSection = document.createElement("section");
    thirdSection.innerHTML += "<h4>" + pitDecision.name + "</h4>";

     thirdSection.dataset.pitDecisionName = pitDecision.name;
     thirdSection.onclick = choosePitDecision;

      journeyRef.appendChild(thirdSection);
        
    }

}

function choosePitDecision(e) {
    console.log(e.currentTarget);
    const pitDecisionName = e.currentTarget.dataset.pitDecisionName;
    const confirmChoice = confirm("You chose to " + pitDecisionName);

    if (confirmChoice) {
        journeyRef.innerHTML += "<p>You chose to " + pitDecisionName + "</p>";
        myPitDecision = {name: pitDecisionName}
    }

    const pitBtn = document.createElement("button");
    pitBtn.onclick = pitMove;

    if (myPitDecision.name === "make a bridge with fallen trees") {
        pitBtn.innerHTML = "<p>Continue</p>";
        pitBtn.dataset.move = "<p>While your bridge may not earn you an engineering degree, it's enough to get you across the other side safely.</p>"
    } else if (myPitDecision.name === "swing across using a vine") {
        pitBtn.innerHTML = "<p>Continue</p>"
        pitBtn.dataset.move = "<p>The vine snaps midair and you fall into the pit. After a long, long time you realize that there is no bottom and you are destined to fall forever.</p>"
    } else if (myPitDecision.name === "take a running leap") {
        pitBtn.innerHTML = "<p>Continue</p>"
        pitBtn.dataset.move = "<p>You fly across the pit and make it to the other side. You should consider the Olympics.</p>"
    }

    journeyRef.appendChild(pitBtn);



}



function pitMove(e) {
    const pitMove = e.currentTarget.dataset.move;
     journeyRef.innerHTML +=  pitMove ;

     if (pitMove === "<p>The vine snaps midair and you fall into the pit. After a long, long time you realize that there is no bottom and you are destined to fall forever.</p>") {
        journeyRef.innerHTML += "<h4>Game Over</h4>"
     } else {
        treasureTrial()
     }
}

function treasureTrial() {
    journeyRef.innerHTML += "<p>It's now been weeks since you first entered the forest. You think you are about to exit onto the other side when find a massive stone with three relics placed on top of it. What do you do?</p>"

    const treasureChoice = [
        {name: "steal the pink diamond"},
        {name: "steal the gold compass"},
        {name: "steal the engraved dagger"},
        {name: "take nothing but leave your keepsake as an offering"}
    ]

    for (let index = 0; index < treasureChoice.length; index++) {
    const treasureDecision = treasureChoice[index];
    const finalSection = document.createElement("section");
    finalSection.innerHTML += "<h4>" + treasureDecision.name + "</h4>";

     finalSection.dataset.treasureDecisionName = treasureDecision.name;
     finalSection.onclick = chooseTreasureDecision;

      journeyRef.appendChild(finalSection);
   
}
}

function chooseTreasureDecision(e) {
    console.log(e.currentTarget);
    const treasureDecisionName = e.currentTarget.dataset.treasureDecisionName;
    const confirmChoice = confirm("You chose to " + treasureDecisionName );

    
    if (confirmChoice) {
        journeyRef.innerHTML += "<p>You chose to " + treasureDecisionName + "</p>";
        myTreasureDecision = {name: treasureDecisionName}
    }


    const treasureBtn = document.createElement("button");
    treasureBtn.onclick = treasureMove;

    if (myTreasureDecision.name === "steal the pink diamond") {
        treasureBtn.innerHTML = "<p>Continue</p>"
        treasureBtn.dataset.move = "<p>You try to pry the pink diamond from the stone but it remains stuck. While you are distracted a massive bird swoops in looking for a meal. You are dead.</p>"
    } else if (myTreasureDecision.name === "steal the gold compass") {
         treasureBtn.innerHTML = "<p>Continue</p>"
         treasureBtn.dataset.move = "<p>The compass points the way forward. You become the first adventurer to make it out of the forest and will live on as a legend.</p>"
    } else if (myTreasureDecision.name === "steal the engraved dagger") {
        treasureBtn.innerHTML = "<p>Continue</p>"
         treasureBtn.dataset.move = "<p>You pocket the dagger and keep moving. Although you thought you were close to the exit, you find yourself lost. It takes years to find your way out. You only survived by hunting with the new dagger. Once you finally make it out, you find out that several adeventurers have made their way through the forest since you entered. You're just another guy.</p>"
    } else if (myTreasureDecision.name === "take nothing but leave your keepsake as an offering") {
        treasureBtn.innerHTML = "<p>Continue</p>"
        treasureBtn.dataset.move = "<p>The stone spirit accepts your gracious offering and the trees part to create an exit. You become the first adventurer to make it out of the forest and will live on as a legend. </p>"
    }

    journeyRef.appendChild(treasureBtn);
}

function treasureMove(e) {
    const treasureMove = e.currentTarget.dataset.move;
     journeyRef.innerHTML +=  treasureMove ;

     if (treasureMove === "<p>You try to pry the pink diamond from the stone but it remains stuck. While you are distracted a massive bird swoops in looking for a meal. You are dead.</p>") {
        journeyRef.innerHTML += "<h3>Game Over</h3>"
     } else if (treasureMove === "<p>You pocket the dagger and keep moving. Although you thought you were close to the exit, you find yourself lost. It takes years to find your way out, you only survived by hunting with the new dagger. Once you finally make it out, you find out that several adeventures have made their way through the forest since you entered. You're just another guy.</p>") {
        journeyRef.innerHTML += "<h3>You won but at what cost</h3>"
     } else {
        journeyRef.innerHTML += "<h3>Congrats!</h3>"
     }
}