// Wait for the DOM content to load before executing
document.addEventListener('DOMContentLoaded', function () {
    // Select the hamburger button and the menu
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // Add event listener for the hamburger menu toggle
    menuToggle.addEventListener('click', function () {
        // Toggle the 'show' class on the menu to reveal or hide it
        menu.classList.toggle('show');

        // Toggle the 'active' class on the hamburger button to change between hamburger and 'X'
        menuToggle.classList.toggle('active');
    });

    // Optional: Close the menu when a navigation link is clicked (good UX for small screens)
    const navLinks = document.querySelectorAll('.navigation li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Hide the menu and change the 'X' back to the hamburger when a link is clicked
            menu.classList.remove('show');
            menuToggle.classList.remove('active');
        });
    });
});

const currentYearElement = document.getElementById("currentyear");
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Display the last modified date in the footer.....
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}