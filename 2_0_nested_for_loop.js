let firstName = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
let lastName = ["Zzz", "Burp", "Dogbone", "Droop"];
let fullName = [];
// for (let i = 0; i < firstName.length; i++) {
//   for (let j = 0; j < lastName.length; j++) {
//     fullName.push(firstName[i] + lastName[j]);
//   }
// }
// console.log("Here is Array of FullName ");
// fullName.map((element, index) => {
//   console.log(index + 1, element);
// });
firstName.forEach((element1) => {
    lastName.forEach((element2) => {
        fullName.push(element1 + element2);
    });
});
fullName.forEach((element) => {
    console.log(element);
});
console.log(fullName);
export {};
