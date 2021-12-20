const defaultCity = 'Moscow';
var supportedPlaces = [
    "Moscow"
];
var currentCoords;
navigator.geolocation.getCurrentPosition((position)=>{
    currentCoords = getLocation(position)
});

changeData(defaultCity, currentCoords);

const forecastCardClassName = 'weather_forecast_card';
let forecastCards = document.getElementsByClassName(forecastCardClassName);
for (let i = 0; i< forecastCards.length; i++){
    forecastCards[i].addEventListener('mouseover', (event) =>{
        let element = forecastCards[i];
        element.style.backgroundColor = "white";
    });
    forecastCards[i].addEventListener('mouseout', (event) =>{
        let element = forecastCards[i];
        if(element.classList.contains('current'))
            return;
        element.style.backgroundColor = "whitesmoke";
    });
}

document.getElementById('btn').onclick = () =>{
    let element = document.getElementById('request_form');
    let formInput = document.getElementById('searchField');
    formInput.style.background = "#ededed";
    formInput.style.color = "gray";

    formInput.disabled = true;
    let content = formInput.value;

    setTimeout(() => {
        try {
            let result = changeData(content);
            if (result != false) {
                formInput.value = "";
            }
        } finally {
            formInput.disabled = false;
            formInput.style.background = "white";
            formInput.style.color = "black";

        }
    })
}

function  getLocation(position) {
    if (position) {
        let	latitude = position.coords.latitude; // излвекаем широту
        let	longitude = position.coords.longitude; // извлекаем долготу
        return {
            latitude:latitude,
            longitude: longitude
        }
    }
}

function changeData(city = defaultCity, location){
    let placeName = changeDataInWeather(city, location);
    if (!placeName)
        return false;
    let result = changeDataInNews(placeName);
    if (result != false)
        changeDataInWeekWeather();
    return result;
}

function changeDataInWeekWeather(){
    if (!currentCoords)
        return false;
    clearDataInWeekWeather();
    let data = getFutureWeather(currentCoords).slice(0,7);

    let ulElement = document.getElementsByClassName('weather_forecast')[0]
        .getElementsByTagName('ul')[0];

    for (let i = 0; i < data.length; i++){
        let liCard = buildWeatherCard(data[i]);
        ulElement.appendChild(liCard);
    }
}

function clearDataInWeekWeather(){
    let elementCard = document.getElementsByClassName('weather_forecast')[0];
    if (elementCard) {
        let ulCard = elementCard.getElementsByTagName('ul')[0];

        while (ulCard.childNodes.length > 0) {
            let child = ulCard.childNodes[0];
            child.parentNode.removeChild(child);
        }
    }
}

function changeDataInWeather(city = defaultCity, location){

    let data = getCurrentWeather(city, location);
    if (!data)
        return false;
    clearDataInWeather();

    let elementWeather = document.getElementsByClassName('weather')[0];
    let elementWeatherContent = document.createElement('div');
    elementWeatherContent.classList.add('weather_data');

    let elementTitleWeather = document.createElement('div');
    elementTitleWeather.classList.add('weather_title');
    let elementATitle = document.createElement('a');
    elementATitle.textContent = 'Weather in ' + data.title;

    if (supportedPlaces.includes(data.title)){
        elementATitle.href = "/WebCoursework/" + data.title + ".html";
    }
    elementTitleWeather.appendChild(elementATitle);

    elementWeatherContent.append(elementTitleWeather);

    let elementImg = document.createElement('div');
    elementImg.classList.add('weather_img');
    let img = document.createElement('img');
    img.src = data.icon;
    elementImg.appendChild(img);
    elementWeatherContent.append(elementImg);

    let divDescription = document.createElement('div')
    divDescription.classList.add('details_description');

    let elementDescription = document.createElement('div');
    elementDescription.classList.add('description');
    elementDescription.textContent = data.description;
    divDescription.appendChild(elementDescription);

    let elementTemperature = document.createElement('div');
    elementTemperature.classList.add('temperature');
    elementTemperature.textContent = data.temperature + ' °C';

    divDescription.appendChild(elementTemperature);
    let elementDetailsTemperature = document.createElement('div');
    elementDetailsTemperature.classList.add('temperature_details');

    let elementMaxTemperature = document.createElement('div');
    elementMaxTemperature.classList.add('max_temperature');
    elementMaxTemperature.textContent = 'Max ' + data.maxTemperature + ' °C';

    elementDetailsTemperature.appendChild(elementMaxTemperature);

    let elementMinTemperature = document.createElement('div');
    elementMinTemperature.classList.add('min_temperature');
    elementMinTemperature.textContent = 'Min ' + data.minTemperature + ' °C';

    elementDetailsTemperature.appendChild(elementMinTemperature);
    divDescription.appendChild(elementDetailsTemperature);

    let elementWinf = document.createElement('div');
    elementWinf.classList.add('wind');
    elementWinf.textContent = 'Wind ' + data.wind + ' m/s';

    divDescription.appendChild(elementWinf);

    let elementCoord = document.createElement('div');
    elementCoord.classList.add('coord');

    let latitudeElement = document.createElement('div');
    latitudeElement.classList.add('latitude');

    latitudeElement.textContent = data.coord.lat;
    currentCoords = {
        lat: data.coord.lat,
        lon: data.coord.lon
    }

    let longtitudeElement = document.createElement('div');
    longtitudeElement.classList.add('longtitude');
    longtitudeElement.textContent = data.coord.lon;

    elementCoord.appendChild(latitudeElement);
    elementCoord.appendChild(longtitudeElement);
    divDescription.appendChild(elementCoord);

    elementWeatherContent.appendChild(divDescription);
    elementWeather.appendChild(elementWeatherContent);

    return data.title;
}

function clearDataInWeather() {
        let elements = document.getElementsByClassName('weather_data');
        if (elements.length > 0) {
            let element = elements[0];
            if (element) {
                element.parentNode.removeChild(element);
            }
        }
}