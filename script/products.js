const url = "https://mocki.io/v1/a99e6cf4-1e5a-4b0e-bc57-6c651f0f09cd";
const url2 = "https://fakestoreapi.com/products/";

//Funktion som hämtar produkter
function fetchProducts() {
    fetch(url2)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            showProducts(data);
        })
        .catch(function(err) {
            console.log("Fel: " + err)
        });
}

//Funktion som hämtar en produkt efter ID
function fetchProduct(productId) {
    fetch(url2 + productId)
    .then(response => response.json())
    .then(data => {
        const productContainer = document.getElementById("displayProduct");
        const product = data;
        const productHtml = `
        <div class="container" id="showOrder">
            <div class="product-title2">${product.title}</div>
            <img class="product-image2" src="${product.image}" alt="${product.name}">
            <p>${product.description}</p>
            <p class="product-price2">$${product.price}</p>
        </div>
        `;
        productContainer.innerHTML = productHtml;
        
    })
    .catch(error => {
    });
}

function getIt(buyId) {
    fetch(url2 + buyId)
    .then(response => response.json())
    .then(data => {
        const thatProduct = data;
        console.log(thatProduct);
        document.querySelector("#thisPrice").textContent = "$" + thatProduct.price;
        document.querySelector("#thisDescription").textContent = thatProduct.description;
        document.querySelector("#thisImage").src = thatProduct.image;
    })
}

//Funktion som tar hämtade produkter och skapar upp sidan
function showProducts(data) {
    const allProducts = document.getElementById("displayProducts");
    for(let i = 0; i < data.length; i++) {
        const element = document.createElement("div");
        element.classList.add("col-md-3", "col-sm-6");
        element.innerHTML = 
            '<div class="col" id="colPro">' + 
                '<div class="product-title" title=" '+ data[i].description +' ">' + data[i].title + '</div>' +
                '<img src=' + data[i].image + ' class="product-image" alt="BILD SAKNAS">' +
                '<p class="product-price">' + "$" + data[i].price + '</p>' +
                
                '<button onclick="addToCartClick('+ data[i].id + ')", class="add-to-cart-button",  data-id="'+(data[i].id)+'">Buy</button>' +
            '</div>'   
        allProducts.appendChild(element);
    }
}

//Funktion som sparar produkt ID och skickar kunden vidare till beställningssidan
function addToCartClick(productId) {
    localStorage.setItem('buyId', productId);
    window.location.href = "order-form.html";
}