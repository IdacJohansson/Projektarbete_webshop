// LocalStorage
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
        
        localStorage.setItem("city", city); 
        localStorage.setItem("zip", zip);
        localStorage.setItem("phone", phone); 
        localStorage.setItem("email", email); 

        const zipPattern = /^\d{3}\s\d{2}$/;
        const phonePattern = /^\(?(\d{3})?\)?[-]?\s?(\d{7})$/;

        if (firstname.length < 2 || firstname.length > 50) {
            document.getElementById('fn').innerText = "First name must be 2-50 characters\r\n";
        } else {
            localStorage.setItem("first-name", firstname); 
        }
        if (lastname.length < 2 || lastname.length > 50) {
            document.getElementById('ln').innerText = "Last name must be 2-50 characters\r\n";
        } else {
            localStorage.setItem("lastname", lastname);
        }
        if (address.length < 4 || address.length > 50) {
            document.getElementById('ad').innerText = "Address must be 4-50 characters\r\n";
        } else {
            localStorage.setItem("address", address); 
        }

        
    }); 

    function printShipping(){

    const f = localStorage.getItem("firstname"); 
    document.getElementById("firstname").textContent = f;
    
    const l = localStorage.getItem("lastname"); 
    document.getElementById("lastname").textContent = l;

    const a = localStorage.getItem("address"); 
    document.getElementById("address").textContent = a;

    const c = localStorage.getItem("city"); 
    document.getElementById("city").textContent = c;

    const z = localStorage.getItem("zip"); 
    document.getElementById("zip").textContent = z;

    const p = localStorage.getItem("phone"); 
    document.getElementById("phone").textContent = p;

    const e = localStorage.getItem("email"); 
    document.getElementById("email").textContent = e;

    window.location.href = "order-confirmation.html"
}

    
   

    for (let i = 0; i < localStorage.length; i++) {
        console.log("Key: " + localStorage.key(i));
        console.log("Value: "+ localStorage.getItem(localStorage.key(i)));
    }


/*function storeAndGetData(){
    let valid = 0;
    const firstname = document.getElementById("firstname").value;
    if (firstname.length < 2 || firstname.length > 50) {
        document.getElementById("firstname").innerText = "Name too short or too long or blank";
    } else {
        localStorage.setItem("first-name", firstname);
        window.location.href = "order-confirmation.html";
 
    }
    
    //document.getElementById("first-name").textContent = localStorage.getItem("first-name"); 
}*/

    




// Gallery carusell
/*let slideIndex = 0;
        function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 3000); 
        }
        showSlides();*/


    

function orderButtonClick(){
    getdata(); 
     
}; 







