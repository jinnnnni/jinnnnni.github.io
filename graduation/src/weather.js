
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "52a647d1a44147ea29fac9ffae40cdfd";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.name} , ${data.main.temp} degree and`;
        city.innerText = data.weather[0].main;

    });
    console.log("You live in", lat, lon, url);
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);