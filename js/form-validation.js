// Form validation for the "Request a Callback" form (info_call.html)
function validateInfoCallForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Check if fields are empty
    if (!name || !email || !phone) {
        alert('Please fill out all required fields.');
        return false;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate phone format (simple check for 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number (10 digits).');
        return false;
    }

    // If all checks pass, submit the form
    return true;
}

// Form validation for the "Register" form (register_login.html)
function validateRegisterForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if fields are empty
    if (!name || !email || !password) {
        alert('Please fill out all required fields.');
        return false;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Check if password is strong enough (at least 6 characters)
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }

    // If all checks pass, submit the form
    return true;
}

// Form validation for the "Login" form (register_login.html)
function validateLoginForm() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Check if fields are empty
    if (!email || !password) {
        alert('Please fill out all required fields.');
        return false;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // If all checks pass, submit the form
    return true;
}

// Event listeners for the forms
document.getElementById('info-call-form')?.addEventListener('submit', function(e) {
    if (!validateInfoCallForm()) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});

document.getElementById('register-form')?.addEventListener('submit', function(e) {
    if (!validateRegisterForm()) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});

document.getElementById('login-form')?.addEventListener('submit', function(e) {
    if (!validateLoginForm()) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});
