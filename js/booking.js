// Function to update the price based on the selected reserve
function updatePrice() {
    const reserve = document.getElementById('reserve').value;
    const people = document.getElementById('people').value;
    let pricePerPerson = 0;

    // Determine price per person based on the selected reserve
    switch (reserve) {
        case 'Tadoba':
            pricePerPerson = 300;
            break;
        case 'Pench':
            pricePerPerson = 350;
            break;
        case 'Ranthambore':
            pricePerPerson = 400;
            break;
        case 'Corbett':
            pricePerPerson = 450;
            break;
        default:
            pricePerPerson = 300;
    }

    // Update total price
    const totalPrice = pricePerPerson * people;
    document.getElementById('price').innerText = `INR ${totalPrice}`;
}

// Validate the booking form
function validateBookingForm() {
    const reserve = document.getElementById('reserve').value;
    const date = document.getElementById('date').value;
    const people = document.getElementById('people').value;

    // Check if the reserve is selected
    if (!reserve) {
        alert('Please select a reserve.');
        return false;
    }

    // Check if a date is selected
    if (!date) {
        alert('Please select a date.');
        return false;
    }

    // Check if the number of people is valid
    if (!people || people <= 0) {
        alert('Please enter a valid number of people.');
        return false;
    }

    // If everything is valid, proceed with the form submission
    return true;
}

// Handle the form submission event
document.getElementById('booking-form')?.addEventListener('submit', function (e) {
    if (!validateBookingForm()) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});

// Optional: Handle changes in the "No. of People" field and dynamically update price
document.getElementById('people')?.addEventListener('input', function () {
    updatePrice();
});

// Optional: Handle changes in the "Reserve" dropdown and update the price accordingly
document.getElementById('reserve')?.addEventListener('change', function () {
    updatePrice();
});
