// LocalStorage
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


function orderButtonClick(){
    enableSubmit()
    

}

function getDatabyId(){
    const dataName = document.getElementById("name");
    const ln = document.getElementById("lastname");
    const ad = document.getElementById("adress");
    const ci = document.getElementById("city");
    const zi = document.getElementById("zip");
    const ph = document.getElementById("phone");
    const em = document.getElementById("email");
}

function getDatabyId(){
let orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("name");
  const lastname = document.getElementById("lastname");

  if (firstName.value == "" || lastname.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a first name of ${firstName.value} and lastname of ${lastname.value}`
    );

    firstName.value = "";
    lastname.value = "";
  }
});




}



