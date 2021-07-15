const search = document.getElementById('search');
const city = document.querySelector("#city");
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temp');
const condition = document.getElementById('condition')
const isDay = document.querySelector('#placeholder')
const icon = document.getElementById('weather-icon');
const wrapper2 = document.querySelector('.wrapper2');

const app1 = new weatherApp();
if(localStorage.city) app1.getCityTemp(localStorage.city);

search.addEventListener('submit',e=>{
    e.preventDefault();
    localStorage.city = city.value.trim()
    app1.getCityTemp(localStorage.city);
    search.reset();
})