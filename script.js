document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Get values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Clear previous errors
    document.querySelectorAll(".error").forEach(error => error.textContent = "");

    // Validation checks
    if (firstName === "") {
        document.getElementById("firstNameError").textContent = "First name is required";
        isValid = false;
    }

    if (lastName === "") {
        document.getElementById("lastNameError").textContent = "Last name is required";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        isValid = false;
    }

    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required";
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters";
        isValid = false;
    }

    // If everything is valid, submit the form (Here, simulate success)
    if (isValid) {
        alert("Registration successful!");
        this.reset(); // Reset the form after successful validation
    }
});
