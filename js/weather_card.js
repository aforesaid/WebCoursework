function randomize_data(count){
    let result = [];
    let lastDate = new Date(Date.now());
    for (let i = 0; i < count; i++){
        let date = new Date(lastDate);
        let imgValue = "png/0" + getRandomIntInclusive(1,4) + "d.png";
        let temperature = getRandomIntInclusive(-20,0);
        let nightTemperature = temperature - getRandomIntInclusive(0,5);
        result.push({
            dateTime: date,
            img: imgValue,
            temperature: parseInt(temperature),
            night: parseInt(nightTemperature)
        });

        lastDate.setDate(lastDate.getDate() + 1);
    }
    return result;
}
function buildWeatherCard(data) {
    let liCard = document.createElement('li');
    let divCard = document.createElement('div');
    liCard.appendChild(divCard);
    divCard.classList.add('weather_forecast_card');

    let dayOfWeekElement = document.createElement('div');
    dayOfWeekElement.classList.add('weather_forecast_card_day_of_week');
    let pDayOfWeekElement = document.createElement('p');
    pDayOfWeekElement.textContent = data.dateTime.toLocaleDateString('en-US', {weekday: "long"});

    dayOfWeekElement.appendChild(pDayOfWeekElement);
    divCard.appendChild(dayOfWeekElement);

    let dayElement = document.createElement('div');
    dayElement.classList.add('weather_forecast_card_day');
    let pDayElement = document.createElement('p');
    pDayElement.textContent = data.dateTime.toLocaleDateString();

    dayElement.appendChild(pDayElement);
    divCard.appendChild(dayElement);

    let divImgElement = document.createElement('div');
    divImgElement.classList.add('weather_forecast_card_image');
    let imgElement = document.createElement('img');
    imgElement.src = data.img;

    divImgElement.appendChild(imgElement);
    divCard.appendChild(divImgElement);

    let temperatureElement = document.createElement('div');
    temperatureElement.classList.add('weather_forecast_card_temperature');
    let pTemperatureElement = document.createElement('p');
    pTemperatureElement.textContent = data.temperature + " °C";

    temperatureElement.appendChild(pTemperatureElement);
    divCard.appendChild(temperatureElement);

    let nightTemperatureElement = document.createElement('div');
    nightTemperatureElement.classList.add('weather_forecast_card_night');
    let pNightTemperatureElement = document.createElement('p');
    pNightTemperatureElement.textContent = "night " + data.night + " °C";

    nightTemperatureElement.appendChild(pNightTemperatureElement);
    divCard.appendChild(nightTemperatureElement);

    return liCard;
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}