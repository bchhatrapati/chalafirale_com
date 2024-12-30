// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {

    // Smooth Scroll Functionality for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for any fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Navbar toggle functionality for mobile devices
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
            navbarToggle.classList.toggle('active');
        });
    }

    // Close navbar when a menu item is clicked (for mobile view)
    const menuItems = document.querySelectorAll('#navbar-menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
                navbarToggle.classList.remove('active');
            }
        });
    });

    // Handle page loading animation (if any)
    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', function() {
            loader.style.display = 'none'; // Hide the loader once the page is loaded
        });
    }

    // Scroll effect for elements (appear on scroll)
    const scrollElements = document.querySelectorAll('.scroll-effect');

    function checkScroll() {
        const windowHeight = window.innerHeight;
        scrollElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check immediately on page load

});
