function showPopup()
{
alert("Welcome to my Portfolio Website!");
}

function validateForm(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

if(name == "" || email == "" || message == ""){
alert("Please fill all fields");
return false;
}

alert("Form submitted successfully!");
return true;


}
/* Date and Time function */
function showDateTime(){
let now = new Date();
document.getElementById("datetime").innerHTML = now.toLocaleString();
}

setInterval(showDateTime,1000);
