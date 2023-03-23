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
            '<div class="product-button" data-bs-toggle="modal"' + ' data-bs-target="#product-modal' + i + '">' +
                '<p class="product-title">' + data[i].title + '</p>' +
                '<img src=' + data[i].image + ' class="product-image" alt="BILD SAKNAS">' +
                '<p class="product-price">' + data[i].price + '</p>'+
            '</div>' +
            
            '<div class="modal fade modal-xl" id="product-modal' + i + '">' +
                '<div class="modal-dialog modal-dialog-centered">' +
                    '<div class="modal-content">' +
                        '<div class="modal-body">' +
                            '<div class="product-modal">' +
                                '<h1 class="product-price">' + data[i].price + " €" + '</h1>' + '<br>' +
                                '<p class="product-category">' + data[i].category + '</p>' + '<br>' +
                                '<h2 class="product-title">' + data[i].title + '</h2>' + '<br>' +
                                '<img src=' + data[i].image + ' class="product-image" alt="BILD SAKNAS">' + '<br>' +
                                '<p class="description">' + data[i].description + '</p>' +
                                '<div class="modal-footer justify-content-center"> ' +
                                    '<button class="btn btn-primary opacity-90 col-2 mx-3" id="order-button">Order</button> ' +
                                    '<button class="btn btn-danger opacity-90 col-2 mx-3" data-bs-dismiss="modal">Exit</button></div> ' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
            '</div>'; 
        allProducts.appendChild(element);
    }
}
