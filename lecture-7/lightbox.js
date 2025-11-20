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

document.getElementById("lightbox").addEventListener('click', closeLightbox);
window.addEventListener('keydown', (evt) => {
    if (!document.getElementById("lightbox").classList.contains("hidden")
        && evt.key === "Escape") {
        closeLightbox();
    }
    
});