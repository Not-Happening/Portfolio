// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Preloader Functionality
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const offsetTop = targetSection.offsetTop - 60;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });

        // Close mobile menu if open
        if (navLinks.length > 0 && window.innerWidth < 768) {
            document.querySelector('nav ul').classList.remove('active');
        }
    });
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

// Back to Top Button Functionality
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Create a FormData object to handle the form submission
    const formData = new FormData(contactForm);

    // Submit the form data using the fetch API
    fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // If the submission is successful
            alert('Thank you for your message! I will get back to you shortly.');
            contactForm.reset(); // Clear the form after successful submission
        } else {
            // If the submission fails
            alert('Oops! Something went wrong, please try again.');
        }
    }).catch(error => {
        // Handle network or other errors
        alert('Oops! There was a problem submitting your form.');
    });
});


// Example GSAP Animation for Hero Content
gsap.from('.hero-content h1', { duration: 1, y: -50, opacity: 0, ease: 'bounce.out' });
gsap.from('.hero-content p', { duration: 1, y: 50, opacity: 0, delay: 0.5 });
gsap.from('.hero-graphic img', { duration: 1, scale: 0, opacity: 0, delay: 1 });