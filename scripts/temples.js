// Wait for the DOM content to load before executing

const menu = document.getElementById('menu');
const navigation = document.getElementsByClassName('navigation')
// Add event listener for the hamburger menu toggle
menu.addEventListener('click', () => {
    // Toggle the 'show' class on the menu to reveal or hide it
    menu.classList.toggle('show');
    navigation.classList.toggle('show');
});

const currentYearElement = document.getElementById("currentyear");
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Display the last modified date in the footer.....
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
};