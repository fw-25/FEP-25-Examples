//document.getElementById("div-1").style.backgroundColor = "red";
//document.querySelector("#div-1").style.backgroundColor = "red";


function resetColors() {
    document.querySelectorAll(".divs").forEach((elem) => {
        elem.style.backgroundColor = "#333333";
    });
}
resetColors();


for (const elem of document.querySelectorAll("#cont-1 > .divs")) {
    elem.style.borderColor = "orange";
}

// Method 1: separate listeners for all elements
const colors = ["red", "yellow","lime"];
document.querySelectorAll("#cont-1 > .divs").forEach((elem) => {
    
    elem.addEventListener('click', () => {
        resetColors();
        const colorIndex = elem.id.split("-")[1];
        //elem.setAttribute("data-color", colors[colorIndex]);
        elem.style.backgroundColor = colors[colorIndex];
    });
});

// Method 2
document.getElementById("cont-2").addEventListener("click", (evt) => {
    const elem = evt.target;
    // if elem does not have class "divs", return function
    if (!elem.classList.contains("divs")) return;

    resetColors();
    elem.style.backgroundColor = elem.getAttribute("data-color");
});



