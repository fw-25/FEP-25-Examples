const COLORS = {
    red:"#ff0000",
    yellow:"rgb(255,200,0)",
    green: "lime"
}

function resetLights() {
    for (const light of document.querySelectorAll("#lights > div")) {
        light.style.backgroundColor = "black";
    }
}

function activateLight(lightNumber) {
    resetLights();
    const light = document.querySelector(`#lights > div:nth-child(${lightNumber})`);
    const color = light.dataset.color; // red, yellow, green
    light.style.backgroundColor = COLORS[color]; // same as light.getAttribute("data-color")
}

// using recursion to create an acceleration effect
function nextLight(delay) {
    if (delay < 100) delay = 100;

    const randomNumber = Math.ceil(Math.random() * 3);
    activateLight(randomNumber);
    console.log(`delay: ${delay}`)

    setTimeout(() => nextLight(delay-50), delay);
}
nextLight(1000);


/*setInterval(() => {
    const randomNumber = Math.ceil(Math.random() * 3);
    activateLight(randomNumber);
}, 500); */
