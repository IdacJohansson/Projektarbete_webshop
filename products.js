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
                '</div>' +
            '</div>' +
            '<div class="modal fade modal-xl" id="product-modal' + i + '>' +
                '<div class="col">' +
                    '<div class="product-hidden">' +
                        '<h2 class="product-title">' + data[i].title + '</h2>' +
                        '<p class="product-category">' + data[i].category + '</p>' +
                        '<img src=' + data[i].image + ' class="product-image" alt="BILD SAKNAS">' +
                        '<h4 class="product-price">' + "$" + data[i].price + '</h4>' +
                        '<p class="description">' + data[i].description + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>';
        allProducts.appendChild(element);
    }
}

