document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register');
    const loginForm = document.getElementById('login');

    // Handle registration form submission
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting by default

        // Get input values
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        // Simple validation
        if (!name || !email || !password) {
            alert('Please fill in all the required fields.');
            return;
        }

        // Mock registration process
        alert(`Registration successful! Welcome, ${name}!`);

        // Reset form
        registerForm.reset();
    });

    // Handle login form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting by default

        // Get input values
        const loginEmail = document.getElementById('login-email').value;
        const loginPassword = document.getElementById('login-password').value;

        // Simple validation
        if (!loginEmail || !loginPassword) {
            alert('Please fill in both fields.');
            return;
        }

        // Mock login process
        alert(`Login successful! Welcome back, ${loginEmail}!`);

        // Reset form
        loginForm.reset();
    });
});
