const ulRef = document.querySelector("body > ul");
console.log(ulRef);

// ulRef.innerHTML = "<li>95</li> <li>72</li> <li>88</li> <li>45</li> <li>60</li> <li>79</li><li>82</li><li>91</li><li>50</li><li>38</li>";
// console.log(ulRef.innerHTML);

const testScores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38]
for (let i = 0; i < testScores.length; i++) {
    const score = testScores[i];
    console.log(score);

    ulRef.innerHTML += "<li>" + score + "</li>"
}


let sum = 95 + 72 + 88 + 45 + 60 + 79 + 82 + 91 + 50 +38
console.log(sum)

let average = sum / 10
console.log(average);

const averageRef = document.getElementById("averageScore");
averageRef.innerHTML = 70;
console.log(averageRef.innerHTML)
