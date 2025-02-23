document
  .getElementById("forgetPasswordForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const emailField = document.getElementById("email");
    const errorMsg = document.getElementById("error-Msg");

    // Regular expression for basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Check if the email is empty or invalid
    if (!emailField.value) {
      errorMsg.textContent = "Email is required.";
    } else if (!emailPattern.test(emailField.value)) {
      errorMsg.textContent = "Please enter a valid email address.";
    } else {
      errorMsg.textContent = "";
      window.location.href = "reset-confirmation.html";
    }
  });
