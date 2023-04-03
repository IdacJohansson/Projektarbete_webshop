

//Funktion som hämtar produkter
function fetchProducts() {
    const url = "https://fakestoreapi.com/products/";
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

//Funktion som hämtar en produkt efter ID
function fetchProduct(productId) {
    const urll = "https://fakestoreapi.com/products/";
    fetch(urll + productId)
    .then(response => response.json())
    .then(data => {
        const productContainer = document.getElementById("displayProduct");
        const product = data;
        const productHtml = `
        <div class="container" id="showOrder">
            <div class="product-title2">${product.title}</div>
            <img class="product-image2" src="${product.image}" alt="${product.name}">
            <p>${product.description}</p>
            <p class="product-price2">$ ${product.price}</p>
        </div>
        `;
        productContainer.innerHTML = productHtml;
        
    })
    .catch(error => {
    });
}

//Ny funktion som hämtar info om enskild produkt
function getIt(buyId) {
    const urrl = "https://fakestoreapi.com/products/";
    fetch(urrl + buyId)
    .then(response => response.json())
    .then(data => {
        const thatProduct = data;
        document.querySelector("#thisPrice").textContent = "$ " + thatProduct.price + " - Subtotal";
        document.querySelector("#thisDescription").textContent = thatProduct.description;
        document.querySelector("#thisImage").src = thatProduct.image;
        const priceTotal = parseFloat(data.price) + 23.90;
        const thisPriceTotal = "$ " + priceTotal + " - Total";
        outputPrice = document.getElementById("priceTotal");
        outputPrice.innerHTML = thisPriceTotal;
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
                '<div class="product-title">' + data[i].title + '</div>' +
                '<img title = " '+ data[i].description +' "  src=' + data[i].image + ' class="product-image" alt="' + data[i].title + '">' +
                '<p class="product-price">' + "$ " + data[i].price + '</p>' +
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
    

function formValidationCheck(){


    const orderForm = document.getElementById('orderForm'); 
    orderForm.addEventListener('submit', function(e){
        e.preventDefault(); 

        
        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;
        const address = document.getElementById("address").value;
        const city = document.getElementById("city").value;
        const zip = document.getElementById("zip").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value; 
    

        const zipPattern = /^\d{3}\s\d{2}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
        const phonePattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

        const isValid = true; 

        if (firstname.length < 2 || firstname.length > 50) {
            document.getElementById('fn').innerText = "First name must be 2-50 characters\r\n";
            return !isValid; 
        } else{
            document.getElementById('fn').innerText = ""; 
            localStorage.setItem("firstname", firstname);
        }
        if (lastname.length < 2 || lastname.length > 50) {
            document.getElementById('ln').innerText = "Last name must be 2-50 characters.\r\n"; 
            return !isValid;
        } else {
            localStorage.setItem("lastname", lastname);
            document.getElementById('ln').innerText = "";
        }
        if (address.length < 4 || address.length > 50) {
            document.getElementById('ad').innerText = "Address must be 4-50 characters.\r\n";
            return !isValid;
        } else {
            localStorage.setItem("address", address); 
            document.getElementById('ad').innerText = "";
        }
        if (zip == "" || !zipPattern.test(zip)){
            document.getElementById('zi').innerText = "Please enter a valid zip code (format: xxx xx)."; 
            return !isValid;
        } else{
            localStorage.setItem("zip", zip); 
            document.getElementById('zi').innerText = ""; 
        }
        if (city.length < 2 || city.length > 50 ){
            document.getElementById('ci').innerText = "City must be 2-50 characters.\r\n"; 
            return !isValid;
        } else{
            localStorage.setItem("city", city); 
            document.getElementById('ci').innerText = ""; 
        }
        if (phone == "" || !phonePattern.test(phone) || phone.length > 50 ){
            document.getElementById('ph').innerText = "Please enter valid phone number.\r\n";
            return !isValid;  
        } else{
            localStorage.setItem("phone", phone); 
            document.getElementById('ph').innerText = ""; 
        }
        if (email == "" || !emailPattern.test(email) ){
            document.getElementById('em').innerText = "Please enter a valid e-mail address.\r\n";
            return !isValid;
            
        } else{
            localStorage.setItem("email", email);  
            document.getElementById('em').innerText = ""; 
        }
         
        window.location.href = "order-confirmation.html"; 
        return isValid; 
        
 
    }); 
     
        
}

function setName(){ // test-funktion för att kunna printa ut billing&shipping - funkar ej 

    const setFirstName = document.getElementById("firstname");
    document.getElementById("first-name").innerHTML = setFirstName; 
}


for (let i = 0; i < localStorage.length; i++) {
    console.log("Key: " + localStorage.key(i));
    console.log("Value: "+ localStorage.getItem(localStorage.key(i)));
}


 
