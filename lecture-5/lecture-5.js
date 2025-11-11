
let seconds = 0;
let myTimer = null;

myTimer = setInterval(() => {
    console.log(seconds);
    seconds++;
}, 1000);

//setInterval(() => console.log(seconds++), 1000);

const stopBtn = document.getElementById("stop");

stopBtn.addEventListener("click", () => clearInterval(myTimer))
