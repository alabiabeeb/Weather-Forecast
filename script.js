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