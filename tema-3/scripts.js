const products = [
    { name: "Allez stol - Grøn ", price: "999 kr", image: "images/produkt-stol.jpg.webp", link: "produkt1.html" },
    { name: "Laurbærfigen", price: "499 kr", image: "images/produkt-plante.png", link: "produkt2.html" }
];

const container = document.getElementById("product-container");

function displayProducts() {
    container.innerHTML = "";
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("kort");

        card.innerHTML = `
            <a href="${product.link}" class="product-link">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.price}</p>
            </a>
        `;

        container.appendChild(card);
    });
}

displayProducts();
