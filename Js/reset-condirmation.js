document.addEventListener("DOMContentLoaded", function () {
  const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("confirmPassword");
  const togglePassword = document.getElementById("togglePassword");
  const errorMsg = document.getElementById("error-Msg");
  const form = document.getElementById("forgetPasswordForm");

  // Password validation messages container
  const validationContainer = document.createElement("div");
  validationContainer.classList.add("password-requirements");
  validationContainer.innerHTML = `
    <p id="lengthCheck">❌ Contains at least 8 characters</p>
    <p id="upperLowerCheck">❌ Contains both lower (a-z) and upper case letters (A-Z)</p>
    <p id="numberSymbolCheck">❌ Contains at least one number (0-9) or a symbol</p>
    <p id="matchCheck">❌ Passwords match</p> `;

  if (!document.querySelector(".password-requirements")) {
    passwordField.parentElement.appendChild(validationContainer);
  }

  const lengthCheck = document.getElementById("lengthCheck");
  const upperLowerCheck = document.getElementById("upperLowerCheck");
  const numberSymbolCheck = document.getElementById("numberSymbolCheck");
  const matchCheck = document.getElementById("matchCheck");

  function validatePassword() {
    const password = passwordField.value.trim();
    const confirmPassword = confirmPasswordField.value.trim();

    // Password validation checks
    const lengthValid = password.length >= 8;
    const upperLowerValid = /[a-z]/.test(password) && /[A-Z]/.test(password);
    const numberSymbolValid = /\d/.test(password) || /[\W_]/.test(password);
    const passwordsMatch = password === confirmPassword && password !== "";

    updateFeedback(lengthCheck, lengthValid, "Contains at least 8 characters");
    updateFeedback(
      upperLowerCheck,
      upperLowerValid,
      "Contains both lower (a-z) and upper case letters (A-Z)"
    );
    updateFeedback(
      numberSymbolCheck,
      numberSymbolValid,
      "Contains at least one number (0-9) or a symbol"
    );
    updateFeedback(matchCheck, passwordsMatch, "Passwords match");

    return lengthValid && upperLowerValid && numberSymbolValid && passwordsMatch;
  }

  function updateFeedback(element, isValid, message) {
    if (isValid) {
      element.innerHTML = `<img src="Images/mark.svg" alt="Valid" class="mark-icon"> ${message}`;
      element.style.color = "green";
    } else {
      element.textContent = `❌ ${message}`;
      element.style.color = "red";
    }
  }

  passwordField.addEventListener("input", validatePassword);
  confirmPasswordField.addEventListener("input", validatePassword);

  // Toggle password visibility
  togglePassword.addEventListener("click", function () {
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
    confirmPasswordField.type = type;
    togglePassword.src = type === "password" ? "Images/eye.svg" : "Images/eye.svg";
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validatePassword()) {
      const newPassword = passwordField.value.trim();
      const email = localStorage.getItem("otpEmail"); // Retrieve the email used for reset

      if (!email) {
        errorMsg.textContent = "❌ Error: No email found for password reset.";
        errorMsg.style.color = "red";
        return;
      }

      let users = JSON.parse(localStorage.getItem("users")) || [];
      let userIndex = users.findIndex(user => user.email === email);

      if (userIndex !== -1) {
        users[userIndex].password = newPassword; // Update password
        localStorage.setItem("users", JSON.stringify(users));

        errorMsg.textContent = "✅ Password reset successfully!";
        errorMsg.style.color = "green";

        // Clear OTP and email data
        localStorage.removeItem("otp");
        localStorage.removeItem("otpEmail");

        // Redirect to Sign-in page after 2 seconds
        setTimeout(() => (window.location.href = "Signin.html"), 2000);
      } else {
        errorMsg.textContent = "❌ Error: Email not found.";
        errorMsg.style.color = "red";
      }
    } else {
      errorMsg.textContent = "❌ Please meet all password requirements.";
      errorMsg.style.color = "red";
    }
  });
});
