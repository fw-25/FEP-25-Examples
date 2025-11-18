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
        console.log(imgId)
        document.getElementById("lightbox").innerHTML = `
            <img src="./lightbox-img/img-0${imgId}.png">
        `;
    });
});