console.log('js works');



if (true) {
    var varVariable = "declared with var";
    const constVariable = "declared with const";

    console.log(varVariable);
    console.log(constVariable);

}

console.log(varVariable);
// We'll cover trt/catch more thoroughly later
try {
    console.log(constVariable);
} catch (err) {
    console.log(err);
}

function greeter(userName, greeting="hi") {
    let outputHtml = "";

    if (userName == "Fredde" || userName == "fredde") {
        outputHtml = "You like JavaScript!";
    } else if (userName == "Dennis" && 1 == 1) {
        outputHtml = "You like Robots!";
    } else {
        outputHtml = "I don't know you.";
    }

    outputHtml = `<div>${greeting} ${userName}, ${outputHtml}</div>`;
    return outputHtml;
}

const greetDennis = greeter("Dennis, hello");

document.getElementById("greeting-output").innerHTML += greeter("fredde");
document.getElementById("greeting-output").innerHTML += greetDennis;



