const IMAGES = [16, 28, 69, 51, 49, 61];
for (const imgId of IMAGES) {
    document.getElementById("thumbnails").innerHTML += `
        <img data-id="${imgId}" 
            src="./lightbox-img/thumb-img-0${imgId}.png">
    `;
}

function openLightbox() {
    document.getElementById("lightbox").classList.remove("hidden");
}
function closeLightbox() {
    document.getElementById("lightbox").classList.add("hidden");
}

document.querySelectorAll("#thumbnails img").forEach(thumb => {
    console.log(thumb);
    thumb.addEventListener('click', () => {
        const imgId = thumb.dataset.id;
        
        document.getElementById("lightbox").innerHTML = `
            <img src="./lightbox-img/img-0${imgId}.png">
        `;
        openLightbox();
        
    });
});


// Close the image on click
document.getElementById("lightbox").addEventListener('click', closeLightbox);
// close the image on Esc
window.addEventListener('keydown', (evt) => {
    if (!document.getElementById("lightbox").classList.contains("hidden")
        && evt.key === "Escape") {
        closeLightbox();
    }
    
});

// Getting the cursor position (added later)
document.addEventListener("mousemove", (evt) => {
    document.getElementById("cursor-pos").style.left = `${evt.clientX}px`;
    document.getElementById("cursor-pos").style.top = `${evt.clientY}px`;

    document.getElementById("cursor-pos").innerText = `left: ${evt.clientX}px; top: ${evt.clientY}px`;
})
