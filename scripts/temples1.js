document.addEventListener("DOMContentLoaded", () => {
    // JavaScript for Hamburger Menu Togglea.
    const mainNav = document.querySelector('.navigation');
    const hamButton = document.querySelector('#menu');

    // Togggle the active class on click to shoe/ hide menu
    hamButton.addEventListener('click', () => {
        mainNav.classlist.toggle('show');
        hamButton.classList.toggle('show');
        // Update the hamburger button's text based on its state
        if (hamButton.classList.contains('show')) {
            hamButton.textContent = 'X'; // Close icon when menu is open
        } else {
            hamButton.textContent = '☰'; // Hamburger icon when menu is closed
        }
    });

    // Dynamically set the current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Dynamically set the last modified date of the document
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

    // Menu item click event listener
    const menuItems = document.querySelectorAll('.menu li a');
    const mainHeading = document.getElementById('main-heading');
    const mainStylesheet = document.getElementById('main-stylesheet');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default anchor link behavior

            const action = item.getAttribute('data-action');

            switch (action) {
                case 'home':
                    mainHeading.textContent = "Temples of the World";
                    loadCSS('styles/temples.css');
                    break;
                case 'old':
                    mainHeading.textContent = "Old Temples";
                    break;
                case 'new':
                    mainHeading.textContent = "New Temples";
                    break;
                case 'large':
                    mainHeading.textContent = "Large Temples";
                    loadCSS('styles/temples-large.css');
                    break;
                case 'small':
                    mainHeading.textContent = "Small Temples";
                    loadCSS('styles/temples.css'); // Revert to small screen CSS
                    break;
                default:
                    mainHeading.textContent = "Temples of the World";
            }
        });
    });

    // Function to dynamically load a CSS file
    function loadCSS(href) {
        mainStylesheet.setAttribute('href', href);
    }
});    