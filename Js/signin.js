// Function to validate sign-in
function validateSignin() {
    var userEmail = document.getElementById("email").value.trim();
    var userPassword = document.getElementById("password").value.trim();
    var errorMessage = document.getElementById("error-Msg");

    // Clear previous error messages
    errorMessage.innerHTML = "";
    errorMessage.style.display = "none";

    if (userEmail === "" || userPassword === "") {
        showError('<img src="Images/error-icon.svg" alt="Error"> Email and Password fields cannot be empty.');
        return false;
    }

    // Retrieve stored users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user in stored users
    let user = users.find(user => user.email === userEmail && user.password === userPassword);

    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store logged-in user details
        window.location.href = "product.html"; // Redirect on successful login
    } else {
        showError('<img src="Images/error-icon.svg" alt="Error"> Incorrect email or password.');
    }
}

// Function to show error messages
function showError(message) {
    var errorMessage = document.getElementById("error-Msg");
    errorMessage.innerHTML = message;
    errorMessage.style.color = "red";
    errorMessage.style.display = "flex";
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
        passwordField.type = passwordField.type === "password" ? "text" : "password";
    });
}
