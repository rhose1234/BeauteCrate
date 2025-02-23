document
  .getElementById("forgetPasswordForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const emailField = document.getElementById("email");
    const errorMsg = document.getElementById("error-Msg");

    // Regular expression for basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Retrieve stored users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email exists in stored users
    let userExists = users.some(user => user.email === emailField.value.trim());

    // Check if the email is empty or invalid
    if (!emailField.value.trim()) {
      errorMsg.textContent = "Email is required.";
    } else if (!emailPattern.test(emailField.value.trim())) {
      errorMsg.textContent = "Please enter a valid email address.";
    } else if (!userExists) {
      errorMsg.textContent = "Email not found. Please sign up.";
    } else {
      errorMsg.textContent = "";
      // Redirect to password reset confirmation page
      window.location.href = "reset-confirmation.html";
    }
  });
