const colors = ["red", "green", "blue"];

const grassColor = colors[1];

console.log(`Roses are ${colors[0]}, 
    the sky is ${colors[2]}
    and the grass is ${grassColor}.`);

// Add elements with push:
console.log(colors);
colors.push("purple");
console.log(colors);
// find an element using indexOf()
console.log(`green has index ${colors.indexOf("green")}`)

colors[0] = "yellow";

// Not possible when the array is declared with const: 
//     colors = [ "yellow", "green", "blue" ]

console.log(`Roses are ${colors[0]}, 
    the sky is ${colors[2]}
    and the grass is ${grassColor}.`);

const stuff = [ 123, colors];

console.log(stuff[1][0]);

// Split and join
const myString = "have a nice day";
console.log(myString);
const myArray = myString.split(" ");
console.log(myArray);
const newString = myArray.join("... ");
console.log(newString);
console.log(colors.join(" and "))

console.log("element-5".split("-")[0]);
console.log("element-5".split("-")[1]);

// An object
const person = {
    name: "Linus",
    age: 50,
    likes: "Programming",
    colors: colors
};

// Accessing an array withing an object
console.log(person.colors[1]);

console.log(`
    ${person.name} is 
    ${person.age} years old
    and likes ${person.likes}`)

const getProperty = "age"; 
console.log(person[getProperty]);

// Array of Objects
const persons = [
    { name: "Linus", likes: "C" },
    { name: "Fredde", likes: "JavaScript" },
    { name: "Dennis", likes: "Robots"}
];
console.log(`${persons[0].name} likes ${persons[0].likes}`);
console.log(`${persons[1].name} likes ${persons[1].likes}`);

// Looping through an array of objects
for (let i = 0; i < persons.length; i++) {
    let personStr = `<li>${i} - ${persons[i].name} likes ${persons[i].likes}</li>`;
    console.log(personStr);
    document.getElementById("my-list").innerHTML += personStr;
}




