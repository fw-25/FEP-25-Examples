const IMAGES = [16, 28, 69, 51];
for (const imgId of IMAGES) {
    document.getElementById("thumbnails").innerHTML += `
        <img data-id="${imgId}" 
            src="./lightbox-img/thumb-img-0${imgId}.png">
    `;
}

document.querySelectorAll("#thumbnails img").forEach(thumb => {
    console.log(thumb);
    thumb.addEventListener('click', () => {
        const imgId = thumb.dataset.id;
        //console.log(imgId)
        document.getElementById("lightbox").innerHTML = `
            <img src="./lightbox-img/img-0${imgId}.png">
        `;
    });
});

// Getting the cursor position
document.addEventListener("mousemove", (evt) => {
    document.getElementById("cursor-pos").style.left = `${evt.clientX}px`;
    document.getElementById("cursor-pos").style.top = `${evt.clientY}px`;

    document.getElementById("cursor-pos").innerText = `left: ${evt.clientX}px; top: ${evt.clientY}px`;
})