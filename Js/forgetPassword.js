document.getElementById("forgetPasswordForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailField = document.getElementById("email");
  const errorMsg = document.getElementById("error-Msg");
  const email = emailField.value.trim();

  // Email validation regex
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Retrieve stored users from localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the email exists in stored users
  let userExists = users.some(user => user.email === email);

  if (!email) {
      errorMsg.textContent = "Email is required.";
      errorMsg.style.color = "red";
  } else if (!emailPattern.test(email)) {
      errorMsg.textContent = "Please enter a valid email address.";
      errorMsg.style.color = "red";
  } else if (!userExists) {
      errorMsg.textContent = "Email not found. Please sign up.";
      errorMsg.style.color = "red";
  } else {
      errorMsg.textContent = "";
      errorMsg.style.color = "green";

      // ✅ Store email properly
      localStorage.setItem("otpEmail", email);
      console.log("Stored Email in localStorage:", localStorage.getItem("otpEmail")); // Debugging

      // Redirect to password reset confirmation page
      setTimeout(() => {
          window.location.href = "reset-confirmation.html";
      }, 1000);
  }
});
