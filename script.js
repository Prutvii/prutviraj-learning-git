function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var error = document.getElementById("error");

    error.innerHTML = "";

    if (name == "") {
        error.innerHTML = "Name is required.";
        return false;
    }

    if (email == "") {
        error.innerHTML = "Email is required.";
        return false;
    }

    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        error.innerHTML = "Invalid email format.";
        return false;
    }

    return true;
}
