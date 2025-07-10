const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const resultDiv = document.getElementById('result');
const Button = document.querySelector(".nav");
const Menubtn = document.querySelector(".Menu");
const enterCityBtn = document.getElementById('enter-city-btn');

// Menu toggle
if (Menubtn && Button) {
    Menubtn.addEventListener("click", () => {
        Button.classList.toggle("show");
    });
}

// "Enter City" button navigation (only if present)
if (enterCityBtn) {
    enterCityBtn.addEventListener('click', () => {
        window.location.href = 'search.html';
    });
}

// Supported cities and their UTC offsets (hours)
const cityTimezones = {
    "london": 0,
    "new york": -4,
    "tokyo": 9,
    "paris": 1,
    "lagos": 1,
    "sydney": 10
};

// Fake weather options
const fakeWeather = [
    "Sunny", "Cloudy", "Rainy", "Windy", "Stormy", "Snowy"
];

// Search functionality
if (searchBtn && cityInput && resultDiv) {
    searchBtn.addEventListener('click', () => {
        const city = cityInput.value.trim().toLowerCase();
        if (city && cityTimezones.hasOwnProperty(city)) {
            // Get current UTC time
            const now = new Date();
            // Calculate city time
            const cityHour = now.getUTCHours() + cityTimezones[city];
            const cityTime = new Date(now);
            cityTime.setUTCHours(cityHour);

            // Pick a random weather
            const weather = fakeWeather[Math.floor(Math.random() * fakeWeather.length)];

            // Show result on the screen
            resultDiv.innerHTML = `
                <h3>${city.charAt(0).toUpperCase() + city.slice(1)}</h3>
                <p>Current time: ${cityTime.toLocaleTimeString()}</p>
                <p>Weather: ${weather}</p>
            `;

            // Also log to the console
            console.log(
                `City: ${city}, Time: ${cityTime.toLocaleTimeString()}, Weather: ${weather}`
            );
        } else {
            resultDiv.innerHTML = "City not found or not supported.";
            console.log("City not found or not supported.");
        }
    });
}