"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// example 1
for (let i = 0; i <= 3; i++) {
    console.log("pakistan");
}
//example 2
for (let i = 0; i <= 3; i++) {
    console.log("pakistan", i);
}
// example 3
let cleanestCities1 = ["Karachi", "Islamabad", "Multan", "ahore", "Peshawar"];
for (let i = 0; i <= cleanestCities1.length - 1; i++) {
    if ("Lahore" === cleanestCities1[i]) {
        console.log("It's one of the cleanest cities");
        break;
    }
}
// example 4
let cleanestCities = ["Karachi", "Islamabad", "Multan", "ahore", "Peshawar"];
let matchFound = "no";
for (let i = 0; i <= cleanestCities.length - 1; i++) {
    if ("Lahore" === cleanestCities[i]) {
        matchFound = "yes";
        console.log("It's one of the cleanest cities");
        break;
    }
}
if (matchFound === "no") {
    console.log("Its not on the list");
}
// example 5
let cleanestCities2 = ["Karachi", "Islamabad", "Multan", "Lahore", "Peshawar"];
let numElements = cleanestCities2.length;
let matchFounded = false;
for (let i = 0; i <= numElements; i++) {
    if ("Lahore" === cleanestCities2[i]) {
        matchFounded = true;
        console.log(`${cleanestCities2[i]} is the cleanest one`);
        break;
    }
}
if (matchFounded === false) {
    console.log("Its not on the list");
}
let cleanestCities3 = ["Karachi", "Islamabad", "Multan", "Lahore", "Peshawar"];
let cityFound = false;
cleanestCities3.forEach((element) => {
    if ("lahore" === element) {
        console.log("Lahre is avaialable");
        cityFound = true;
    }
});
if (cityFound === false) {
    console.log("city is not found");
}
