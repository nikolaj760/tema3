const products = [
    { name: "Produkt 1", price: "199 kr", image: "https://placehold.co/600x400" },
    { name: "Produkt 2", price: "249 kr", image: "https://placehold.co/600x400" },
    { name: "Produkt 3", price: "299 kr", image: "https://placehold.co/600x400" },
    { name: "Produkt 4", price: "349 kr", image: "https://placehold.co/600x400" },
    { name: "Produkt 5", price: "399 kr", image: "https://placehold.co/600x400" },
    { name: "Nyeste produkt", price: "1099 kr", image: "https://placehold.co/600x400" },
    { name: "Produkt 8", price: "399 kr", image: "https://placehold.co/600x400" },
    { name: "Produkt 10", price: "399 kr", image: "https://placehold.co/600x400" },
    { name: "Produkt 15", price: "399 kr", image: "https://placehold.co/600x400" },
    { name: "Produkt 115", price: "399 kr", image: "https://placehold.co/600x400" },
    { name: "Produkt 215", price: "399 kr", image: "https://placehold.co/600x400" },
    { name: "Produkt 315", price: "399 kr", image: "https://placehold.co/600x400" }
];

const container = document.getElementById("product-container");

function displayProducts() {
    container.innerHTML = "";
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
        `;

        container.appendChild(card);
    });
}

displayProducts();
