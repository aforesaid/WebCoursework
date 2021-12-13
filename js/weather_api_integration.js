const apiKeyId = "32b4014b474127773ed66ea9059e54bd";
const currentWeatherBaseUri = 'https://api.openweathermap.org/data/2.5/weather';
const forecastWeatherBaseUri = 'https://api.openweathermap.org/data/2.5/forecast';
var getCurrentWeather = (cityName , location) => {

    let uri = currentWeatherBaseUri;
    if (location){
        uri += "?lat=" + location.latitude + "&lon=" + location.longitude;
    }
    else{
        uri += "?q=" + cityName;
    }
    uri += "&APPID=" + apiKeyId;
    var response =  JSON.parse(httpGet(uri));
    return {
        title: 'Weather in the ' + response['name'],
        description: response['weather'][0]['description'],
        icon: response['weather'][0]['icon'],
        temperature: parseInt(response['main']['temp']) - 273,
        maxTemperature: parseInt(response['main']['temp_max']) - 273,
        minTemperature: parseInt(response['main']['temp_min']) - 273,
        wind: response['wind']['speed'],
        coord: response['coord']
    };
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false);
    xmlHttp.send( null );
    return xmlHttp.responseText;
}