const piName = "Pi";
const piValue = 3.14159;
const diameter = 7;

function helloHandler() {
    //const userName = prompt("What's your name?");
    const userName = document.getElementById("user-name").value; 
    //alert(`Hello ${userName}`);
    //console.log(`Hello ${userName}`);
    document.getElementById("greeting").innerHTML = `Hello ${userName}!`;
}

let count = 0;
function counter() {
    count++;
    console.log(`Count ${count}`);
}


// The "old way", good for quick testing
console.log("The value of " + piName + " is " + piValue);

// The modern way, better
console.log(`The value of ${piName} is ${piValue}`); 

console.log(`The circumference is ${diameter * piValue}`); 
