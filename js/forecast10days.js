changeDataInWeekWeather();

function changeDataInWeekWeather(){
    let data = randomize_data(10);

    let ulElement = document.getElementsByClassName('weather_forecast')[0]
        .getElementsByTagName('ul')[0];

    for (let i = 0; i < data.length; i++){
        let liCard = buildWeatherCard(data[i]);
        ulElement.appendChild(liCard);
    }
}