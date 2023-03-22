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




let productList = [];
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
}, 1000)




/*let thisList = 
    (async function fetchProducts() {
        const response = await fetch(url);
        const dataList = await response.json();
    })
    const getProducts = async() => {
        const response = await fetch(url)
        return await response.json()
}*/


function getThing(id) {
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
}


console.log(getThing(1))

console.log("TEST")