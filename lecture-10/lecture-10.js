async function loadPageContent(page) {
    const resp = await fetch(`./page-data/${page}.json`);
    const pageData = await resp.json();
    console.log(pageData);
    document.getElementById("title").innerText = pageData.title;
    document.getElementById("page-content").innerHTML = pageData.content;

    if (page === "joke") getJoke();
}

document.querySelector("nav").addEventListener("click", (evt) => {
    //console.log(evt)
    if (evt.target.classList.contains("menu-item")) {
        const page = evt.target.dataset.page;
        loadPageContent(page);
        
        // OLD VERSION:
        /*
        document.querySelectorAll("#main-content > div").forEach(elem => {
            elem.classList.add("hidden");
        });
        document.getElementById(`${page}-page`).classList.remove("hidden");
        */
    }
});


const productsJSON = `
    [
        {"name":"Coffee","price":3,"stock":100},
        {"name":"Cake","price":3.5,"stock":15},
        {"name":"Ice Cream","price":4,"stock":45}
    ]
`;

const products = JSON.parse(productsJSON);
console.log(products[1].price);
products[0].name = "Tea";

const backToJSON = JSON.stringify(products);
console.log(backToJSON);


async function getJoke() {
    const resp = await fetch("https://icanhazdadjoke.com/", {
        headers: { "Accept": "application/json" }
    });
    const jokeJSON = await resp.json();
    
    console.log(jokeJSON); // JSON object
    console.log(jokeJSON.joke); // specific key from the object

    //document.getElementById("joke-page").textContent = jokeJSON.joke;
    document.getElementById("joke").textContent = jokeJSON.joke;
    
    
}
getJoke();


