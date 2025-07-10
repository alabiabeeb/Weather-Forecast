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

    // Menu toggle
    if (Menubtn && Button) {
        Menubtn.addEventListener("click", () => {
            Button.classList.toggle("show");
        });
    }

    // Supported cities with UTC offsets
    const cityTimezones = {
        "london": 0,
        "new york": -4,
        "tokyo": 9,
        "paris": 1,
        "lagos": 1,
        "sydney": 10,
        "berlin": 2,
        "cairo": 2,
        "mumbai": 5.5,
        "beijing": 8,
        "los angeles": -7,
        "nairobi": 3,
        "capetown": 2,
        "rio de janeiro": -3
    };

    const fakeWeather = [
        "Sunny", "Cloudy", "Rainy", "Windy", "Stormy", "Snowy"
    ];

    if (searchBtn && cityInput && resultDiv) {
        searchBtn.addEventListener('click', () => {
            const city = cityInput.value.trim().toLowerCase();
            if (city && cityTimezones.hasOwnProperty(city)) {
                const now = new Date();
                const offset = cityTimezones[city] * 3600000;
                const cityTime = new Date(now.getTime() + offset);

                const weather = fakeWeather[Math.floor(Math.random() * fakeWeather.length)];

                resultDiv.innerHTML = `
                    <h3>${city.charAt(0).toUpperCase() + city.slice(1)}</h3>
                    <p>Current time: ${cityTime.toLocaleTimeString()}</p>
                    <p>Weather: ${weather}</p>
                `;
            } else {
                resultDiv.innerHTML = "<p style='color:red;'>City not found or not supported.</p>";
            }
        });
    }