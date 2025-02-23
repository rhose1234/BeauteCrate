function validateSignup() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var userEmail = document.getElementById("email");
    var userPassword = document.getElementById("password");
    var errorMessage = document.getElementById("error-Msg");

    // Clear previous error messages
    errorMessage.innerHTML = "";
    errorMessage.style.display = "none";

    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailValue = userEmail.value.trim();
    let passwordValue = userPassword.value.trim();

    if (firstNameValue === "" || lastNameValue === "" || emailValue === "" || passwordValue === "") {
        showError('<i class="fas fa-exclamation-circle"></i> All fields are required.');
        return false;
    }

    // Email format validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        showError('<i class="fas fa-exclamation-circle"></i> Please enter a valid email address.');
        return false;
    }

    // Password validation (6+ characters, 1 uppercase letter, 1 special character)
    var passwordPattern = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(passwordValue)) {
        showError('<i class="fas fa-exclamation-circle"></i> Password must be at least 6 characters, include one uppercase letter, and one special character.');
        return false;
    }

    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email is already registered
    let emailExists = users.some(user => user.email === emailValue);

    if (emailExists) {
        showError('<i class="fas fa-exclamation-circle"></i> Email already exists. Try logging in.');
        return false;
    }

    // Store new user details
    users.push({
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        password: passwordValue
    });

    localStorage.setItem("users", JSON.stringify(users));

    // Redirect to sign-in page
    window.location.href = "Signin.html";
    return true;
}

function showError(message) {
    var errorMessage = document.getElementById("error-Msg");
    errorMessage.innerHTML = message;
    errorMessage.style.color = "red";
    errorMessage.style.display = "flex";
    errorMessage.style.alignItems = "center";
    errorMessage.style.padding = "10px";
    errorMessage.style.gap = "8px";
    errorMessage.style.backgroundColor = "#F2F4F7";
}

// Add event listener to the sign-up button
document.querySelector(".sign-up").addEventListener("click", function(event) {
    event.preventDefault();
    validateSignup();
});


// Toggle password visibility
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