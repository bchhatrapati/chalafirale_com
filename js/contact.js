document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Here you would typically send the data to the server using an API call
        // For example, using fetch() or XMLHttpRequest

        // Mock form submission success
        alert(`Message sent successfully! Thank you for reaching out, ${name}.`);

        // Reset form
        contactForm.reset();
    });
});
