// Set the current year dynamically
const yearSpan = document.getElementById('currentyear');
yearSpan.textContent = new Date().getFullYear();

// Set the last modified date
const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modification: ${document.lastModified}`;


// Hamburger menu toggle for mobile
const hamburgerButton = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('show');
    if (menu.classList.contains('show')) {
        hamburgerButton.textContent = 'X';
    } else {
        hamburgerButton.textContent = '☰';
    }
});