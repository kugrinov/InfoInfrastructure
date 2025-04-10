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

        const hearts = data.hearts || 0;

        // back tick string lets you copy html in nice formatting without all the plus signs (on keyboard it's to the left of 1)
        dreamsRef.innerHTML += `
        <div class="dream">
        <h4>
        <span class="delete" data-id="${currentDream.id}">&cross;</span>
        ${data.text}</h4>
        <p>Likes: ${hearts}</p>
        <p>
          <button class="edit">Edit</button>
          <button class="heart" data-id="${currentDream.id}" data-hearts="${hearts}" >&hearts;</button>
        </p>
      </div>`;
    }

    const heartsRef = document.querySelectorAll(".heart");
    for (let index = 0; index < heartsRef.length; index++) {
        heartsRef[index].onclick = addHeart;
        
    }

    const crossesRef = document.querySelectorAll(".delete");
    for (let index = 0; index < crossesRef.length; index++) {
        crossesRef[index].onclick = forgetDream;
        
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

async function forgetDream(e) {
    console.log("Dream to forget", e.target.dataset.id)

    const userConfirmed = confirm("Are you sure you want to forget this dream?");

    if(userConfirmed) {
        const dreamToDelete = doc(dreamsCollection, e.target.dataset.id);

        await deleteDoc(dreamToDelete);

        getDreams();
    }
}