// Liste des produits
const products = [
    {
        id: 1,
        name: "Hoodie",
        category: "Vetements",
        description: "Hoodie de bonne qualite.",
        price: 699.99,
        image: "assets/images/product1.jpg"
    },
    {
        id: 2,
        name: "Hoodie",
        category: "Vetements",
        description: "Hoodie de bonne qualite.",
        price: 1199.99,
        image: "assets/images/product2.jpg"
    },
    {
        id: 3,
        name: "Hoodie",
        category: "Vetements",
        description: "Hoodie de bonne qualite.",
        price: 199.99,
        image: "assets/images/product3.jpg"
    }
];

// Fonction pour afficher les produits
function displayProducts(filteredProducts = products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Nettoyer les produits existants
    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p class="category">Category: ${product.category}</p>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}')">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Fonction pour gérer l'ajout au panier
function addToCart(productName) {
    alert(`${productName} has been added to your cart.`);
}

// Fonction pour filtrer les produits
function filterProducts() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchInput) ||
        product.category.toLowerCase().includes(searchInput) ||
        product.description.toLowerCase().includes(searchInput)
    );
    displayProducts(filteredProducts);
}

// Charger les produits au démarrage de la page
document.addEventListener("DOMContentLoaded", () => displayProducts());
