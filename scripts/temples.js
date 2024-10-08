document.addEventListener("DOMContentLoaded", function () {
    // JavaScript for Hamburger Menu Togglea.
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector("#menu");
    const nav = document.guerySelector('#mainnav');

    // Togggle the active class on click to shoe/ hide menu
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("open");
        hamburger.innerHTML = menu.classList.contains("open") ? "x" : "☰";
        mainnav.classList.toggle('active');
    /*hambutton.classList.toggle('show')*/;
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