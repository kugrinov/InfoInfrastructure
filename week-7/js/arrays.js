const favoriteReptiles = ["Gecko", "Komodo Dragon", "Bearded Dragon"];

console.log(favoriteReptiles);
console.table(favoriteReptiles);

console.log("First thing:", favoriteReptiles[0]);
console.log("Idk:", favoriteReptiles[9]);
console.log("# of favorite reptiles:", favoriteReptiles.length);

// i++ increments by one, loop goes forward from 0
for (let i = 0; i < favoriteReptiles.length; i++) {
    const reptile = favoriteReptiles[i];
    console.log(reptile);
    
}

// i-- decrements by 1, loop goes down to 0 index
for (let i = favoriteReptiles.length -1; i > -1; i--) {
    console.log("Index:", i);
    
}