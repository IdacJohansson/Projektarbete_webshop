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
        element.classList.add("col-md-3", "col-sm-6");
        element.innerHTML = 
            '<div class="col" id="colPro">' + 
                '<div class="product-title" title=" '+ data[i].description +' ">' + data[i].title + '</div>' +
                '<img src=' + data[i].image + ' class="product-image" alt="BILD SAKNAS">' +
                '<p class="product-price">' + "$" + data[i].price + '</p>' +
                '<button id="add-to-cart-button">Add to cart</button>'
            '</div>' +   
            '<div" class="product-hidden"' + i + '>' +
                '<div class="col" id="colPro">' +
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