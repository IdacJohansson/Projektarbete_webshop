const url = "https://mocki.io/v1/a99e6cf4-1e5a-4b0e-bc57-6c651f0f09cd";

async function fetchProducts() {
    const response = await fetch(url);
    const dataList = await response.json();
}

/*const productList = [fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))]*/
console.log(dataList)


console.log("TEST")