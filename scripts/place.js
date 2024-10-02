// Set the current year dynamically
const yearSpan = document.getElementById('currentyear');
yearSpan.textContent = new Date().getFullYear();

// Set the last modified date
const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modification: ${document.lastModified}`;

// Static values for temperature and wind speed
const temperature = 28; // Celsius
const windSpeed = 5; // km/h

// Function to calculate wind chill
function calculateWindChill(temp, wind) {
    // Formula for metric units (°C and km/h)
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

// Check conditions for viable wind chill calculation
if (temperature <= 10 && windSpeed > 4.8) {
    document.getElementById('windchill').innerText = calculateWindChill(temperature, windSpeed) + ' °C';
} else {
    document.getElementById('windchill').innerText = 'N/A';
}
