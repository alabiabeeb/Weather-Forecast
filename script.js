const enterCityBtn = document.getElementById('enter-city-btn');
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const Button = document.querySelector(".nav");
const Menubtn = document.querySelector(".Menu");
const resultDiv = document.getElementById('result'); // Add this line

if (Menubtn && Button) {
    Menubtn.addEventListener("click", () => {
        Button.classList.toggle("show");
    });
}

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

if (searchBtn && cityInput && resultDiv) {
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim().toLowerCase();
    console.log('City entered:', city); // Debug log
    if (city && cityTimezones.hasOwnProperty(city)) {
        // ...existing code...
    } else {
        resultDiv.innerHTML = "City not found or not supported.";
    }
    });
}