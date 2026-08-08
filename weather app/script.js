const search= document.getElementById('search-form')
const cityInput=document.getElementById('city-input')
const message=document.getElementById('message')
const cityname=document.getElementById('city-name')
const temp=document.getElementById('temp-reading')
const tags=document.getElementById('tags')

async function getCoordinates(cityname)
{
    const url=`https://geocoding-api.open-meteo.com/v1/search?name=${cityname}&count=1`;
    const response= await fetch(url);
    const data = await response.json();
    return data.results[0];
}
async function getWeatherData(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`;
    
    const response = await fetch(url);
    const data = await response.json();
    return data.current; 
}
search.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();

  if (!city) return;

  message.textContent = 'Fetching location...';

  const location = await getCoordinates(city);
  console.log('Location Result:', location);

  message.textContent = 'Fetching weather...';
    const weather = await getWeatherData(location.latitude, location.longitude);
    console.log('Weather Data:', weather);
    cityname.textContent=location.name;
    temp.textContent = `${weather.temperature_2m} °C`;
    tags.innerHTML = `
  <li>Wind Speed: ${weather.wind_speed_10m} km/h</li>
  <li>Humidity: ${weather.relative_humidity_2m}%</li>
`;
message.textContent='';
});