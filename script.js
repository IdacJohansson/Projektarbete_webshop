function getdata(){
    const na = document.getElementById("name").value;
    const ln = document.getElementById("lastname").value;
    const ad = document.getElementById("adress").value;
    const ci = document.getElementById("city").value;
    const zi = document.getElementById("zip").value;
    const ph = document.getElementById("phone").value;
    const em = document.getElementById("email").value;


    // Storing data

    const name = localStorage.setItem("name", na);
    const lastname = localStorage.setItem("lastname", ln);
    const adress = localStorage.setItem("address", ad);
    const city = localStorage.setItem("city", ci);
    const zip = localStorage.setItem("zipcode", zi);
    const phone = localStorage.setItem("phone", ph);
    const email = localStorage.setItem("email", em);

    for (let i = 0; i < localStorage.length; i++) {
        console.log("Key: " + localStorage.key(i));
        console.log("Value: "+ localStorage.getItem(localStorage.key(i)));
    }

        // Lägg till felmeddelande om inte alla fält är ifyllda vid place order
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
    }




