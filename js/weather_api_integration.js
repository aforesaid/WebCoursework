const apiKeyId = "32b4014b474127773ed66ea9059e54bd";
const currentWeatherBaseUri = 'https://api.openweathermap.org/data/2.5/weather';
const forecastWeatherBaseUri = 'https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,current,minutely,alerts';
var getCurrentWeather = (cityName , location) => {

    let uri = currentWeatherBaseUri;
    if (location){
        uri += "?lat=" + location.latitude + "&lon=" + location.longitude;
    }
    else{
        uri += "?q=" + cityName;
    }
    uri += "&APPID=" + apiKeyId;
    let response =  JSON.parse(httpGet(uri));
    return {
        title: response['name'],
        description: response['weather'][0]['description'],
        icon: response['weather'][0]['icon'],
        temperature: parseInt(response['main']['temp']) - 273,
        maxTemperature: parseInt(response['main']['temp_max']) - 273,
        minTemperature: parseInt(response['main']['temp_min']) - 273,
        wind: response['wind']['speed'],
        coord: response['coord']
    };
}
var getFutureWeather = (location) =>{
    let uri = forecastWeatherBaseUri;
    if (location){
        uri += "&lat=" + location.lat + "&lon=" + location.lon + "&appid=" + apiKeyId;
        let response = JSON.parse(httpGet(uri));
        let data = response.daily;
        return data.map((x) =>  {
            return {
                dateTime: new Date(x.dt * 1000),
                temperature: parseInt(x.temp.day - 273),
                night: parseInt(x.temp.eve - 273),
                img: x.weather[0].icon
            }
        });
    }
};

function httpGet(theUrl, token)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false);
    if (token) {
        xmlHttp.setRequestHeader('x-api-key', token);
    }
    xmlHttp.send( null );
    return xmlHttp.responseText;
}