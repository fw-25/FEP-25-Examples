const names = ["Coffee", "Cake", "Ice Cream"]
const prices = [3, 3.5, 4]    // extra spacing for clarity
const stock = [100, 15, 45]

console.log(`${names[1]} costs ${prices[1]} €, we have ${stock[1]} left.`);
prices[1] = 5;
stock[1]--; // somebody bought a cake
console.log(`${names[1]} costs ${prices[1]} €, we have ${stock[1]} left.`);

// Array of objects, much better!
const products = [
    { name: "Coffee", price: 3, stock: 100 },
    { name: "Cake", price: 3.5, stock: 15 },
    { name: "Ice Cream", price: 4, stock: 45 }
];

let outputText = "";
for (let i = 0; i < products.length; i++) {
    outputText += `<li>
        ${products[i].name} 
        costs ${products[i].price} €, 
        we have ${products[i].stock} left.
    </li>`;
}

outputText += "<li>---for...of:</li>";
// for...of
for (const product of products) {
    outputText += `<li>
        ${product.name} 
        costs ${product.price} €, 
        we have ${product.stock} left.
    </li>`;
}

outputText += "<li>---for...in:</li>";
// for...in
for (const i in products) {
    outputText += `<li>${Number(i)+1} - 
        ${products[i].name} 
        costs ${products[i].price} €, 
        we have ${products[i].stock} left.
    </li>`;
}
// forEach
products.forEach(function (product) {
    console.log(product);
});


document.getElementById('products').innerHTML = outputText;





