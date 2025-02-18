// Function to validate sign-in
function validateSignin() {
    var userEmail = document.getElementById("email");
    var userPassword = document.getElementById("password");
    var errorMessage = document.getElementById("error-Msg");
    var storedEmail = localStorage.getItem("userEmail");
    var storedPassword = localStorage.getItem("userPassword");

    // Clear previous error messages
    errorMessage.innerHTML = "";
    errorMessage.style.display = "none";

    if (userEmail.value === "" || userPassword.value === "") {
        errorMessage.innerHTML = '<img src="Images/error-icon.svg" alt="Error"> Email and Password fields cannot be empty.';
        errorMessage.style.color = "red";
        errorMessage.style.display = "flex";
        return false;
    }

    // if (userEmail.value != storedEmail || userPassword.value === "") {
    //     errorMessage.innerHTML = '<img src="Images/error-icon.svg" alt="Error"> Email and Password fields cannot be empty.';
    //     errorMessage.style.color = "red";
    //     errorMessage.style.display = "flex";
    //     return false;
    // }

    // Check if user exists in localStorage
    if (userEmail.value === storedEmail && userPassword.value === storedPassword) {
        window.location.href = "product.html";
    } 
    
    if (userEmail.value != storedEmail && userPassword.value != storedPassword) {
        window.location.href = "product.html";
    } 
    
    else {
        errorMessage.innerHTML = '<img src="Images/error-icon.svg" alt="Error"> Incorrect email or password.';
        errorMessage.style.color = "red";
        errorMessage.style.display = "flex";
    }
}

// Add event listener to sign-in button
document.querySelector(".sign-in").addEventListener("click", function(event) {
    event.preventDefault();
    validateSignin();
});

// Optional: Toggle password visibility
const passwordField = document.getElementById("password");
const togglePassword = document.querySelector(".fields img");

if (togglePassword) {
    togglePassword.addEventListener("click", function() {
        if (passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    });
}
