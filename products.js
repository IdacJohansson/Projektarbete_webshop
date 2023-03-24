const url = "https://mocki.io/v1/a99e6cf4-1e5a-4b0e-bc57-6c651f0f09cd";
const url2 = "https://fakestoreapi.com/products";

function fetchProduct() {
    fetch(url)
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

function showProducts(data) {
    const allProducts = document.getElementById("getProducts");
    for(let i = 0; i < data.length; i++) {
        const element = document.createElement("div");
        element.innerHTML = 
            '<div class="col">' + 
                '<div class="product-button"' + i + '">' +
                    '<p class="product-title">' + data[i].title + '</p>' +
                    '<img src=' + data[i].image + ' class="product-image" alt="BILD SAKNAS">' +
                    '<p class="product-price">' + "$" + data[i].price + '</p>' +
                    '<button id="order-button">Add to cart</button>'
                '</div>' +
            '</div>' +
            '<div" class="product-hidden"' + i + '>' +
                '<div class="col">' +
                    '<div">' +
                        '<h4 class="product-title-inside">' + data[i].title + '</h4>' +
                        '<p class="product-category">' + data[i].category + '</p>' +
                        '<img src=' + data[i].image + ' class="product-image-inside" alt="BILD SAKNAS">' +
                        '<h4 class="product-price">' + "$" + data[i].price + '</h4>' +
                        '<p class="product-description">' + data[i].description + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>'; 
        allProducts.appendChild(element);
    }
}

