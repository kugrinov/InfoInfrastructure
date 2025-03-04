// Reference variables
const petsUlRef = document.querySelector("#pets");

// Set data variables
const pets = ["Cat", "Dog", "Fox", "Mouse", "Fish", "Bird", "Snake"];
const images = [
    "https://picsum.photos/200",
    "https://picsum.photos/210",
    "https://picsum.photos/220",
    "https://picsum.photos/230",
    "https://picsum.photos/240",
    "https://picsum.photos/250",
    "https://picsum.photos/260"
]

// loop through our list
for (let i = 0; i < pets.length; i++) {
    const petType = pets[i];
    console.log(petType)

    const image = images[i];
    console.log(image);

    // petsUlRef.innerHTML += "<li>" + petType + imageHtml + "</li>"

    const imageHtml = "<img src='" + image + "'alt=''/>";

    petsUlRef.innerHTML += "<li>" + petType + imageHtml + "</li>"

}
console.table(pets);