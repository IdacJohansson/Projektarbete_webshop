const url = "https://mocki.io/v1/a99e6cf4-1e5a-4b0e-bc57-6c651f0f09cd";
const url2 = "https://fakestoreapi.com/products";



/*let pList = [];
async function fetchProducts() {
    const response = await fetch(url);
    const dataList = await response.json();
}
const getProducts = async() => {
    const response = await fetch(url)
    return await response.json()
}
pList = getProducts;
console.log(pList)*/




/*fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))*/

/*let kalas = [];
kalas.push(fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>console.log(json)))

console.log(kalas)*/

/*fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(product => {
            let desc = product.description;
            let title = product.title;
            let id = product.id;
        })
    })*/




/*let productList = [];
    (function() {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                productList = [...json]
            })
    }
)();

setTimeout (() => {
    console.log("data in timeout", productList)
}, 1000)*/




/*let thisList = 
    (async function fetchProducts() {
        const response = await fetch(url);
        const dataList = await response.json();
    })
    const getProducts = async() => {
        const response = await fetch(url)
        return await response.json()
}*/


/*function getThing(id) {
    sessionStorage.setItem('product-id', id);
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => {
            return res.json();
        })
        .then(product => {
            const imageURL = product.image;
            sessionStorage.setItem('product-img', imageURL);
            sessionStorage.setItem('product-title', product.title);
            sessionStorage.setItem('product-category', product.category);
            sessionStorage.setItem('product-description', product.description);
            sessionStorage.setItem('product-price', product.price);
        })
}*/



/*fetch(url2)
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(product => {
            let title = product.title;
            let description = product.description;
            let id = product.id;
            const markup = `
            <div class="col">
                <div class="product">
                    <div class="full-product">
                        <h3 class="product-title">${title.length > 20 ? title.substring(0, 20).concat('...') : title}</h3>
                        <div class="product-category">${product.category}</div>
                        <div class="product-description">${description.length >20 ? description.substring(0, 20).concat(`<a href = "#" data-bs-toggle = "modal" data-bs-target = "#${product.id}">...more</a>`) : description}</div>
                        <div class="row">
                            <div class="col">
                                <h4 class="card-text d-md-inline-block">${product.price}kronor</h4>
                                <a href="#" class="btn-secondary d-md-inline-block ms-md-3" data-bs-toggle="modal" data-bs-target="#${product.id}">ADD</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-fade" id="${product.id}">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" style="max-width: 400px;" id="${product.id}">${product.title}</h5>
                        </div>
                        <div class="modal-body d-flex" style="max-width: 500px;">
                            <div class="row">
                                <div class="col col-12 d-flex justify-content center">
                                    <img src="${product.image}" style="object-fit: contain; max-width: 400px;"></img>
                                </div>
                                <p class="col text-secondary">${product.category}</p>
                                <p>${product.description}</p>
                                <div>
                                    <h4 class="card-text d-md-inline-block">${product.price}kronor</h4>
                                    <a online="addItem(${product.id})" class="btn btn-secondary d-md-inline-block ms-md-3">BEKRÄFTA</a>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">STÄNG SKITEN</button>
                        </div>
                    </div>
                </div>
            </div>`


            const productCol = document.createElement("div");
            productCol.classList.add("col-md-4");
            productCol.innerHTML = markup;
            document.querySelector("#product-row").appendChild(productCol);
        })
    })

async function getJSON(product) {
    return await fetch(product)
        .then((response)=>response.json())
        .then((responseJson)=>{return responseJson});
}*/


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
            '<div class="product-button" data-bs-toggle="modal"' +
            ' data-bs-target="#product-modal-' + i + '">' +
            '<p class="productPrice">' + data[i].price + " €" + '</p>' + '<br>' +
            '<p>' + data[i].title + '</p>' + '<br>' +
            '<img src=' + data[i].image + ' class="img-fluid" alt="BILD SAKNAS">' +
            '</div>' +
            '<div class="modal fade modal-xl" id="product-modal-' + i + '">' +
            '<div class="modal-dialog modal-dialog-centered">' +
            '<div class="modal-content">' +
            '<div class="modal-body">' +
            '<div class="product-modal">' +
            '<h1 class="productPrice">' + data[i].price + " €" + '</h1>' + '<br>' +
            '<p class="productCategory">' + data[i].category + '</p>' + '<br>' +
            '<h2 class="productTitle">' + data[i].title + '</h2>' + '<br>' +
            '<img src=' + data[i].image + ' class="img-fluid" alt="BILD SAKNAS">' + '<br>' +
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



console.log("TEST")