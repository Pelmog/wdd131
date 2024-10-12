document.addEventListener("DOMContentLoaded", function () {
    const tempCelsius = 10;  // static temperature in Celsius
    const windSpeedKmh = 5;  // static wind speed in km/h
    const windChillElement = document.getElementById("windchill");
    // Dynamically set the current year in the footer......
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement)
        currentYearElement.textContent = new Date().getFullYear();
    // Display the last modified date in the footer.....
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement)
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;

    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16));
        } else {
            return "N/A";
        }
    }

    windChillElement.textContent = calculateWindChill(tempCelsius, windSpeedKmh);

    // Update footer with current year and last modified date
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});

// Dynamically set the current year in the footer......
const currentYearElement = document.getElementById("currentyear");
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Display the last modified date in the footer.....
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}