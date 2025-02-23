document.addEventListener("DOMContentLoaded", function () {
  const userEmailSpan = document.getElementById("userEmail");
  const email = localStorage.getItem("otpEmail");

  console.log("Retrieved Email:", email); // Debugging

    if (email) {
        userEmailSpan.textContent = email;
    } else {
        userEmailSpan.textContent = "Unknown User"; // Fallback text
    }
  // Password toggle functionality
  const togglePassword = document.getElementById("togglePassword");
  const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("confirmPassword");

  if (togglePassword) {
      togglePassword.addEventListener("click", function () {
          const isPasswordHidden = passwordField.type === "password";
          passwordField.type = isPasswordHidden ? "text" : "password";
          confirmPasswordField.type = isPasswordHidden ? "text" : "password";
          
          // Change the eye icon
          togglePassword.src = isPasswordHidden ? "Images/eye-open.svg" : "Images/eye-closed.svg";
      });
  } else {
      console.error("Toggle Password button not found! Make sure <img id='togglePassword'> exists in the HTML.");
  }
});

document.getElementById("resetPasswordForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("confirmPassword");
  const errorMsg = document.getElementById("error-Msg");
  const email = localStorage.getItem("otpEmail");

  if (!email) {
      errorMsg.textContent = "❌ Error: No email found for password reset.";
      errorMsg.style.color = "red";
      return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let userIndex = users.findIndex(user => user.email === email);

  if (passwordField.value.length < 8) {
      errorMsg.textContent = "❌ Password must be at least 8 characters.";
      errorMsg.style.color = "red";
      return;
  }

  if (passwordField.value !== confirmPasswordField.value) {
      errorMsg.textContent = "❌ Passwords do not match.";
      errorMsg.style.color = "red";
      return;
  }

  if (userIndex !== -1) {
      users[userIndex].password = passwordField.value.trim();
      localStorage.setItem("users", JSON.stringify(users));

      errorMsg.textContent = "✅ Password reset successfully!";
      errorMsg.style.color = "green";

      localStorage.removeItem("otpEmail"); // Remove stored email after reset

      setTimeout(() => window.location.href = "signin.html", 2000);
  } else {
      errorMsg.textContent = "❌ Error: Email not found.";
      errorMsg.style.color = "red";
  }
});
