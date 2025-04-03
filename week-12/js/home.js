import { app } from "./app.js";

import { getFirestore, collection, getDocs,addDoc, } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"

// db = database
const db = getFirestore(app);

const dreamsCollection = collection(db,"hopesdreams");

const dreamsRef = document.querySelector("#dreams");
const dreamFormRef = document.querySelector("#new-dream");
const dreamTextRef = document.querySelector("#dream-text");

async function getDreams() {
    const dreamsDocs = await getDocs(dreamsCollection);
   
dreamsRef.innerHTML = ""
    for (let index = 0; index < dreamsDocs.docs.length; index++) {
        const currentDream = dreamsDocs.docs[index];
        console.log(currentDream.id, currentDream.data());

        const dreamData = currentDream.data();
        dreamsRef.innerHTML += "<li>" + dreamData.text + "</li>";
        
    }

}

async function addNewDream(e) {
    e.preventDefault();

    const dreamTextValue = dreamTextRef.value;
    console.log("dream", dreamTextValue);
    const newDream = await addDoc(dreamsCollection, {text: dreamTextValue});
    console.log(newDream);

    getDreams();
    // clear out the form box after submitting
    dreamFormRef.reset();
}

dreamFormRef.onsubmit = addNewDream;

getDreams();