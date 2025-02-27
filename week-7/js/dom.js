const titleRef = document.getElementById("title");

console.log(titleRef);

const itemsRef = document.getElementsByClassName("item");

console.log(itemsRef);

// selector will only give the first element if there is multiple, use querySelectorAll to get all elements with same class, query selector can be used to select all types of elements
const altTitleRef = document.querySelector("#title");
console.log(altTitleRef);

const itemRef = document.querySelector(".item");
console.log(itemRef)

const itemsAltRef = document.querySelectorAll(".item");
console.log(itemsAltRef)



// .innerHTML can be used to change content on the page with js
const ulRef = document.querySelector("body > ul");
console.log(ulRef.innerHTML);

titleRef.innerHTML = "Dom Manipulation >:)";

ulRef.innerHTML = "";

const melons = ["Cantaloupe", "Watermelon", "Muskmelon", "Regular Melon", "Blind Melon", "Honeydew"]

for (let i = 0; i < melons.length; i++) {
    const melon = melons[i];
    ulRef.innerHTML += "<li class='item'>" + melon + "</li>";
    console.log("Index:", melon, i)
    
}

// stle lets you style with js instead of css, traits you can change are the same but use camel case instead of dashes; em is set to 16 px for this class (3em = 48px), you can just use px though
titleRef.style.backgroundColor = "lightblue";
titleRef.style.color = "blue";
titleRef.style.fontSize = "3em";

// display lets you remove things visibility from website
// document.querySelector("body > ul").style.display = "none";


const firstARef = document.querySelector("a");
console.log("first a:", firstARef);
firstARef.setAttribute("target", "_blank")