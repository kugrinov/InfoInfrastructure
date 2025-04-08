import { app } from "./app.js";

import { getFirestore, getDocs, collection, updateDoc, deleteDoc, doc, } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);

const dreamsCollection = collection(db, "hopesdreams");

const dreamsRef = document.querySelector("#dreams");

async function getDreams() {
    const dreamsDocs = await getDocs(dreamsCollection);

    dreamsRef.innerHTML = "";
    for (let index = 0; index < dreamsDocs.docs.length; index++) {
        const currentDream = dreamsDocs.docs[index];
        const data = currentDream.data();

        // this long way happened because of the way modules are private otherwise the commented version should work below way quicker if not using onclick
        const newDiv = document.createElement("div");
        newDiv.classList.add("dream");
        newDiv.innerHTML += `
        <h4>${data.text}</h4>
        <p>Likes: ${data.hearts || 0}</p>`

        const dreamHtml = `<div class="dream">
        <h4>${data.text}</h4>
        <p>Likes: ${data.hearts || 0}</p> 
        </div>`;

        const newPTag = document.createElement("p");
        const newEditButton = document.createElement("button");
        newEditButton.innerHTML = "Edit";
        newEditButton.classList.add("edit");

        const newHeartButton = document.createElement("button");
        newHeartButton.classList.add("heart");
        newHeartButton.innerHTML = "&hearts;"
        newHeartButton.dataset.id = currentDream.id;
        newHeartButton.dataset.hearts = data.hearts || 0;
        newHeartButton.onclick = addHeart;

        newPTag.appendChild(newEditButton);
        newPTag.appendChild(newHeartButton);
        newDiv.appendChild(newPTag);

        dreamsRef.appendChild(newDiv)

        // back tick string lets you copy html in nice formatting without all the plus signs (on keyboard it's to the left of 1)
    //     dreamsRef.innerHTML += `<div class="dream">
    //     <h4>${data.text}</h4>
    //     <p>Likes: ${data.hearts || 0}</p>
    //     <p>
    //       <button class="edit">Edit</button>
    //       <button class="heart" onclick="addHeart(event)" >&hearts;</button>
    //     </p>
    //   </div>`
    }
}

async function addHeart(e) {
    console.log("Add heart", e.target.dataset);

    const newHeartCount = Number(e.target.dataset.hearts) + 1;
    const dreamToUpdate = doc(dreamsCollection, e.target.dataset.id)

    await updateDoc(dreamToUpdate, {hearts: newHeartCount})

    // alert("Dream updated");
    getDreams();
}

getDreams();