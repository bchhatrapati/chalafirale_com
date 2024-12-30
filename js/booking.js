document.getElementById('booking-form').addEventListener('submit', function(event) {
    // Get the form fields
    var destination = document.getElementById('destination').value;
    var tourDate = document.getElementById('tour-date').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Validate fields
    if (!destination || !tourDate || !name || !email || !phone) {
        alert('Please fill in all required fields!');
        event.preventDefault(); // Prevent form submission
    }
});
