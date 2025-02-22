document.addEventListener("DOMContentLoaded", function () {
  const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("confirmPassword");
  const togglePassword = document.getElementById("togglePassword");
  const errorMsg = document.getElementById("error-Msg");
  const form = document.getElementById("forgetPasswordForm");

  // Create password validation messages once
  const validationContainer = document.createElement("div");
  validationContainer.classList.add("password-requirements");
  validationContainer.innerHTML = `
    <p id="lengthCheck">❌ Contains at least 8 characters</p>
    <p id="upperLowerCheck">❌ Contains both lower (a-z) and upper case letters (A-Z)</p>
    <p id="numberSymbolCheck">❌ Contains at least one number (0-9) or a symbol</p>
    <p id="matchCheck">❌ Passwords match</p>
  `;

  if (!document.querySelector(".password-requirements")) {
    passwordField.parentElement.appendChild(validationContainer);
  }

  const lengthCheck = document.getElementById("lengthCheck");
  const upperLowerCheck = document.getElementById("upperLowerCheck");
  const numberSymbolCheck = document.getElementById("numberSymbolCheck");
  const matchCheck = document.getElementById("matchCheck");

  // Function to validate password
  function validatePassword() {
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;

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
      "contains at least one number (0-9) or a symbol"
    );
    updateFeedback(matchCheck, passwordsMatch, "Passwords match");

    if (lengthValid && upperLowerValid && numberSymbolValid && passwordsMatch) {
      errorMsg.textContent = "";
    }
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

  // Toggle password visibility for both fields
  togglePassword.addEventListener("click", function () {
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
    confirmPasswordField.type = type;
    togglePassword.src =
      type === "password" ? "Images/eye.svg" : "Images/eye.svg";
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    validatePassword();
  });
});
