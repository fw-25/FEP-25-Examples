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

// Not possible with const: colors = [ "yellow", "green", "blue" ]

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

const person = {
    name: "Linus",
    age: 50,
    likes: "Programming",
    colors: colors
};

console.log(person.colors[1]);

console.log(`
    ${person.name} is 
    ${person.age} years old
    and likes ${person.likes}`)

const getProperty = "age"; 
console.log(person[getProperty]);




