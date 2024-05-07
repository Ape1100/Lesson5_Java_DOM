const form = document.getElementById('contactForm');

function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const userInput = { name: name, email: email, message: message };
    console.log(userInput);
    form.reset();
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let isValid = true;

    if (name.trim() === '') {
        alert('Wrong, try again. Name field is empty.');
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Wrong, try again. Invalid email address.');
        isValid = false;
    }

    if (message.trim() === '') {
        alert('Wrong, try again. Message field is empty.');
        isValid = false;
    }

    return isValid;
}

form.addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
    } else {
        handleFormSubmit(event);
    }
});

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts() {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        const productName = document.createElement("h3");
        productName.textContent = product.name;
        const productPrice = document.createElement("p");
        productPrice.textContent = "Price: $" + product.price;
        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);
        productsContainer.appendChild(productDiv);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    displayProducts();
});


