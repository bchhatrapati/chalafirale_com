// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Booking price update based on selected reserve
function updatePrice() {
    const reserve = document.getElementById('reserve').value;
    let price = 0;

    switch (reserve) {
        case 'Tadoba':
            price = 300;
            break;
        case 'Pench':
            price = 350;
            break;
        case 'Ranthambore':
            price = 400;
            break;
        case 'Corbett':
            price = 450;
            break;
    }

    document.getElementById('price').innerText = `INR ${price}`;
}

// Form validation for info call
function validateForm() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    if (!email || !phone) {
        alert('Please fill out all required fields');
        return false;
    }
    return true;
}
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Booking price update based on selected reserve
function updatePrice() {
    const reserve = document.getElementById('reserve').value;
    let price = 0;

    switch (reserve) {
        case 'Tadoba':
            price = 300;
            break;
        case 'Pench':
            price = 350;
            break;
        case 'Ranthambore':
            price = 400;
            break;
        case 'Corbett':
            price = 450;
            break;
    }

    document.getElementById('price').innerText = `INR ${price}`;
}

// Form validation for info call
function validateForm() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    if (!email || !phone) {
        alert('Please fill out all required fields');
        return false;
    }
    return true;
}
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Booking price update based on selected reserve
function updatePrice() {
    const reserve = document.getElementById('reserve').value;
    let price = 0;

    switch (reserve) {
        case 'Tadoba':
            price = 300;
            break;
        case 'Pench':
            price = 350;
            break;
        case 'Ranthambore':
            price = 400;
            break;
        case 'Corbett':
            price = 450;
            break;
    }

    document.getElementById('price').innerText = `INR ${price}`;
}

// Form validation for info call
function validateForm() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    if (!email || !phone) {
        alert('Please fill out all required fields');
        return false;
    }
    return true;
}
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Booking price update based on selected reserve
function updatePrice() {
    const reserve = document.getElementById('reserve').value;
    let price = 0;

    switch (reserve) {
        case 'Tadoba':
            price = 300;
            break;
        case 'Pench':
            price = 350;
            break;
        case 'Ranthambore':
            price = 400;
            break;
        case 'Corbett':
            price = 450;
            break;
    }

    document.getElementById('price').innerText = `INR ${price}`;
}

// Form validation for info call
function validateForm() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    if (!email || !phone) {
        alert('Please fill out all required fields');
        return false;
    }
    return true;
}
