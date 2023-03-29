// LocalStorage
function getdata(){
    const orderForm = document.getElementById("orderForm"); 
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const address = document.getElementById("adress");
    const city = document.getElementById("city");
    const zip = document.getElementById("zip");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");

    orderForm.addEventListener("submit", function(e){
        e.preventDefault(); 

        const firstNameValue = firstname.value; 
        const lastNameValue = lastname.value;
        const addressValue = address.value; 
        const cityValue = city.value;
        const zipValue = zip.value; 
        const phoneValue = phone.value;
        const emailValue = email.value; 
        

        localStorage.setItem("first-name", firstNameValue); 
        localStorage.setItem("last-name", lastNameValue); 
        localStorage.setItem("address", addressValue); 
        localStorage.setItem("city", cityValue); 
        localStorage.setItem("zip", zipValue);
        localStorage.setItem("phone", phoneValue); 
        localStorage.setItem("email", emailValue); 

        window.location.href = "order-confirmation.html"; 

        
    })

    
   

    for (let i = 0; i < localStorage.length; i++) {
        console.log("Key: " + localStorage.key(i));
        console.log("Value: "+ localStorage.getItem(localStorage.key(i)));
    }

}

function printFormData(){
}



function enableSubmit(){
    let inputs = document.getElementsByClassName('form-control'); 
    let btn = document.querySelector('button[type="submit"]');
    let isValid = true;

    for (var i = 0; i < inputs.length; i++){
    let changedInput = inputs[i];
    if (changedInput.value.trim() === "" || changedInput.value === null){
    isValid = false;
    break;
    }
    }
    btn.disabled = !isValid;
    };  


function orderButtonClick(){
    enableSubmit(); 
    getdata(); 
    printFormData(); 
}; 





