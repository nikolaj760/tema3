const products = [
    { name: "Allez stol", price: "999 kr", image: "images/produkt-stol.jpg.webp", link: "produktside1.html" },
    { name: "Laurbærfigen", price: "499 kr", image: "images/produkt-plante.png", link: "produktside2.html" },
    { name: "Reol", price: "1600 kr", image: "images/reol.jpg.avif", link: "produktside3.html" },
    { name: "Skærebræt", price: "120 kr", image: "images/Skærebræt.png", link: "produktside4.html" },

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
                <img src="images/Kurv.png" alt="">
            </a>
        `;

        container.appendChild(card);
    });
}

displayProducts();

function showMessage(){
    alert("AR-funktion er under udvikling og endnu ikke klar!");
}

function increaseQuantity() {
    document.getElementById("quantity").value++;
}

function decreaseQuantity() {
    let quantityInput = document.getElementById("quantity");
    if (quantityInput.value > 1) {
        quantityInput.value--;
    }
}

let popupBtn = document.getElementById("popupBtn");
let billede = document.getElementById("popupImg");
let closeBtn = document.getElementById("closeBtn");

popupBtn.onclick = function() {
    billede.style.display = "block";
}

closeBtn.onclick = function() {
    billede.style.display = "none";
}

