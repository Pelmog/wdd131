document.addEventListener("DOMContentLoaded", function () {
    const tempCelsius = 10; // Static temperature in Celsius
    const windSpeedKmh = 5; // Static wind speed in km/h
    const windChillElement = document.getElementById("windchill");

    // Function to calculate wind chill
    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return Math.round(
                13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
            );
        } else {
            return "N/A";
        }
    }

    // Display the calculated wind chill
    windChillElement.textContent = calculateWindChill(tempCelsius, windSpeedKmh);

    // Set the current year in the footer
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Display the last modified date in the footer
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
});