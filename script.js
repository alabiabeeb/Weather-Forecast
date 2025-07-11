const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const resultDiv = document.getElementById('result');
const Button = document.querySelector(".nav");
const Menubtn = document.querySelector(".Menu");
const enterCityBtn = document.getElementById('enter-city-btn');



const API_KEY = "5d4b1b1534f854a95079b9a13fe31a3c";


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

if (searchBtn && cityInput && resultDiv) {
    searchBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (!city) return;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        throw new Error(`API Error: ${text}`);
                    });
                }
                return response.json();
            })
            .then(data => {
                const cityName = data.name;
                const weather = data.weather[0].description;
                const temperature = data.main.temp;
                const timezoneOffset = data.timezone;

                const now = new Date();
                const localTime = new Date(now.getTime() + (timezoneOffset * 1000));

                resultDiv.innerHTML = `
                    <h3>${cityName}</h3>
                    <p>Current time: ${localTime.toLocaleTimeString()}</p>
                    <p>Weather: ${weather}</p>
                    <p>Temperature: ${temperature}&deg;C</p>
                `;
            })
            .catch(error => {
                console.error("Error fetching weather:", error);
                resultDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
            });
    });
}
