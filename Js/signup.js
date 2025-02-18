function validateSignup() {
    var userEmail = document.getElementById("email");
    var userPassword = document.getElementById("password");
    var errorMessage = document.getElementById("error-Msg");

    // Clear previous error messages
    errorMessage.innerHTML = "";
    errorMessage.style.display = "none";
    errorMessage.style.padding = "0";
    errorMessage.style.backgroundColor = "transparent";

    if (userEmail.value === "" || userPassword.value === "") {
        errorMessage.innerHTML = '<img src="Images/error-icon.svg" alt="Error"> Email and Password fields cannot be empty.';
        errorMessage.style.color = "red";
        errorMessage.style.display = "flex";
        errorMessage.style.alignItems = "center";
        errorMessage.style.padding = "10px";
        errorMessage.style.backgroundColor = "#F2F4F7";
        return false;
    }

    // Email format validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmail.value)) {
        errorMessage.innerHTML = '<img src="Images/error-icon.svg" alt="Error"> Please enter a valid email address.';
        errorMessage.style.color = "red";
        errorMessage.style.display = "flex";
        errorMessage.style.alignItems = "center";
        errorMessage.style.padding = "10px";
        errorMessage.style.backgroundColor = "#F2F4F7";
        return false;
    }

    // Password length validation
    if (userPassword.value.length < 6) {
        errorMessage.innerHTML = '<img src="Images/cancel.svg" alt="Error"> Password must be at least 6 characters long.';
        errorMessage.style.color = "red";
        errorMessage.style.display = "flex";
        errorMessage.style.alignItems = "center";
        errorMessage.style.padding = "10px";
        errorMessage.style.backgroundColor = "#F2F4F7";
        return false;
    }

    // Store data in localStorage
    localStorage.setItem("userEmail", userEmail.value);
    localStorage.setItem("userPassword", userPassword.value);

    // Redirect to sign-in page
    window.location.href = "Signin.html";
    return true;
}

// Add event listener to the sign-up button
document.querySelector(".sign-up").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    validateSignup();
});

// Optional: Toggle password visibility
const passwordField = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

if (togglePassword) {
    togglePassword.addEventListener("click", function() {
        if (passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    });
}

// Check if user exists on sign-in page
function checkUser() {
    var storedEmail = localStorage.getItem("userEmail");
    var storedPassword = localStorage.getItem("userPassword");
    var userEmail = document.getElementById("email");
    var userPassword = document.getElementById("password");
    var errorMessage = document.getElementById("error-Msg");

    if (userEmail.value === storedEmail && userPassword.value === storedPassword) {
        window.location.href = "product.html";
    } else {
        errorMessage.innerHTML = '<img src="Images/check.svg" alt="Error"> Incorrect email or password.';
        errorMessage.style.color = "red";
        errorMessage.style.display = "flex";
        errorMessage.style.alignItems = "center";
        errorMessage.style.padding = "10px";
        errorMessage.style.backgroundColor = "#F2F4F7";
    }
}

// Add event listener to sign-in button if on the sign-in page
if (document.querySelector(".sign-in")) {
    document.querySelector(".sign-in").addEventListener("click", function(event) {
        event.preventDefault();
        checkUser();
    });
}
