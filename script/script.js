
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
                localStorage.setItem("firstname", firstname);
                document.getElementById('fn').innerText = "";
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

    for (let i = 0; i < localStorage.length; i++) {
        console.log("Key: " + localStorage.key(i));
        console.log("Value: "+ localStorage.getItem(localStorage.key(i)));
    }







    









