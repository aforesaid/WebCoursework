const defaultCity = 'Moscow';
var dictImages = {
    '13n': "/WebCoursework/svg/snowy.svg"
};
// dictImages.add('13n', );
window.onload = changeDataInWeather;

function  getLocation(position) {
    if (navigator.location) {
        let position = navigator.location.position;
        let	latitude = position.coords.latitude; // излвекаем широту
        let	longitude = position.coords.longitude; // извлекаем долготу
        return {
            'latitude':latitude,
            'longtitude': longitude
        }
    }
}
let weatherFullData = [
     {
         id: "6",
         title: "Погода в Москве 06.12.2021",
         details : [
             {
                 filePath : "/WebCoursework/svg/cloudy.svg",
                 time: "0.00",
                 temperature :"−2°С",
                 weatherType : "Облачно"
             },
             {
                 filePath : "/WebCoursework/svg/cloudy.svg",
                 time: "6.00",
                 temperature :"−1°С",
                 weatherType : "Облачно"
             },
             {
                 filePath : "/WebCoursework/svg/snowy.svg",
                 time: "12.00",
                 temperature :"−8°С",
                 weatherType : "Сильный снег"
             },
             {
                 filePath : "/WebCoursework/svg/cloudy.svg",
                 time: "18.00",
                 temperature : "−3°С",
                 weatherType : "Прохладно"
             },
             {
                 filePath: "/WebCoursework/svg/snowy.svg",
                 time: "23.59",
                 temperature: "−3°С",
                 weatherType: "Сильный снег"
             }
         ]
     },
    {
        id: "7",
        title: "Погода в Москве 07.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "0.00",
                temperature :"−4°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "6.00",
                temperature :"−3°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/low_clouds.svg",
                time: "12.00",
                temperature :"0°С",
                weatherType : "Малооблачно"
            },
            {
                filePath : "/WebCoursework/svg/sunny.svg",
                time: "18.00",
                temperature : "−3°С",
                weatherType : "Ясно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-5°С",
                weatherType: "Облачно"
            }
        ]
    },
    {
        id: "8",
        title: "Погода в Москве 08.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "0.00",
                temperature :"−2°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature :"−7°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "12.00",
                temperature :"-7°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "18.00",
                temperature : "−8°С",
                weatherType : "Сильный снег"
            },
            {
                filePath: "/WebCoursework/svg/snowy.svg",
                time: "23.59",
                temperature: "-10°С",
                weatherType: "Сильный снег"
            }
        ]
    },
    {
        id: "9",
        title: "Погода в Москве 09.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "0.00",
                temperature :"−8°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature :"−8°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "12.00",
                temperature :"-8°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/low_clouds.svg",
                time: "18.00",
                temperature : "−12°С",
                weatherType : "Малообачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-13°С",
                weatherType: "Облачно"
            }
        ]
    },
    {
        id: "10",
        title: "Погода в Москве 10.12.2021",
        details: [
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "0.00",
                temperature: "−14°С",
                weatherType: "Облачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature: "−14°С",
                weatherType: "Облачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "12.00",
                temperature: "-11°С",
                weatherType: "Облачно"
            },
            {
                filePath: "/WebCoursework/svg/low_clouds.svg",
                time: "18.00",
                temperature: "−12°С",
                weatherType: "Малообачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-13°С",
                weatherType: "Облачно"
            }
        ]
    },
    {
        id: "11",
        title: "Погода в Москве 11.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "0.00",
                temperature :"−13°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature :"−11°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "12.00",
                temperature :"-8°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "18.00",
                temperature : "−5°С",
                weatherType : "Облачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-5°С",
                weatherType: "Облачно"
            }
        ]
    },
    {
        id: "12",
        title: "Погода в Москве 12.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "0.00",
                temperature :"−5°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature :"−4°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "12.00",
                temperature :"-2°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "18.00",
                temperature : "−1°С",
                weatherType : "Облачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-2°С",
                weatherType: "Облачно"
            }
        ]
    },
    {
        id: "13",
        title: "Погода в Москве 13.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "0.00",
                temperature :"−2°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature :"−4°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "12.00",
                temperature :"-5°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "18.00",
                temperature : "−1°С",
                weatherType : "Облачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-3°С",
                weatherType: "Облачно"
            }
        ]
    },
    {
        id: "14",
        title: "Погода в Москве 14.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "0.00",
                temperature :"−2°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature :"−1°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "12.00",
                temperature :"−8°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "18.00",
                temperature : "−3°С",
                weatherType : "Прохладно"
            },
            {
                filePath: "/WebCoursework/svg/snowy.svg",
                time: "23.59",
                temperature: "−3°С",
                weatherType: "Сильный снег"
            }
        ]
    },
    {
        id: "15",
        title: "Погода в Москве 15.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "0.00",
                temperature :"−4°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "6.00",
                temperature :"−3°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/low_clouds.svg",
                time: "12.00",
                temperature :"0°С",
                weatherType : "Малооблачно"
            },
            {
                filePath : "/WebCoursework/svg/sunny.svg",
                time: "18.00",
                temperature : "−3°С",
                weatherType : "Ясно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-5°С",
                weatherType: "Облачно"
            }
        ]
    },
    {
        id: "16",
        title: "Погода в Москве 16.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "0.00",
                temperature :"−2°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature :"−7°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "12.00",
                temperature :"-7°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "18.00",
                temperature : "−8°С",
                weatherType : "Сильный снег"
            },
            {
                filePath: "/WebCoursework/svg/snowy.svg",
                time: "23.59",
                temperature: "-10°С",
                weatherType: "Сильный снег"
            }
        ]
    },
    {
        id: "17",
        title: "Погода в Москве 17.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "0.00",
                temperature :"−8°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature :"−8°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "12.00",
                temperature :"-8°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/low_clouds.svg",
                time: "18.00",
                temperature : "−12°С",
                weatherType : "Малообачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-13°С",
                weatherType: "Облачно"
            }
        ]
    },
    {
        id: "18",
        title: "Погода в Москве 18.12.2021",
        details: [
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "0.00",
                temperature: "−14°С",
                weatherType: "Облачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature: "−14°С",
                weatherType: "Облачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "12.00",
                temperature: "-11°С",
                weatherType: "Облачно"
            },
            {
                filePath: "/WebCoursework/svg/low_clouds.svg",
                time: "18.00",
                temperature: "−12°С",
                weatherType: "Малообачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-13°С",
                weatherType: "Облачно"
            }
        ]
    },
    {
        id: "19",
        title: "Погода в Москве 19.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "0.00",
                temperature :"−13°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature :"−11°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "12.00",
                temperature :"-8°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "18.00",
                temperature : "−5°С",
                weatherType : "Облачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-5°С",
                weatherType: "Облачно"
            }
        ]
    },
    {
        id: "20",
        title: "Погода в Москве 20.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "0.00",
                temperature :"−5°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature :"−4°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "12.00",
                temperature :"-2°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "18.00",
                temperature : "−1°С",
                weatherType : "Облачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-2°С",
                weatherType: "Облачно"
            }
        ]
    },
    {
        id: "21",
        title: "Погода в Москве 21.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "0.00",
                temperature :"−2°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature :"−4°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "12.00",
                temperature :"-5°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "18.00",
                temperature : "−1°С",
                weatherType : "Облачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-3°С",
                weatherType: "Облачно"
            }
        ]
    },
    {
        id: "22",
        title: "Погода в Москве 22.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "0.00",
                temperature :"−2°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature :"−1°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "12.00",
                temperature :"−8°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "18.00",
                temperature : "−3°С",
                weatherType : "Прохладно"
            },
            {
                filePath: "/WebCoursework/svg/snowy.svg",
                time: "23.59",
                temperature: "−3°С",
                weatherType: "Сильный снег"
            }
        ]
    },
    {
        id: "23",
        title: "Погода в Москве 23.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "0.00",
                temperature :"−4°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "6.00",
                temperature :"−3°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/low_clouds.svg",
                time: "12.00",
                temperature :"0°С",
                weatherType : "Малооблачно"
            },
            {
                filePath : "/WebCoursework/svg/sunny.svg",
                time: "18.00",
                temperature : "−3°С",
                weatherType : "Ясно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-5°С",
                weatherType: "Облачно"
            }
        ]
    },
    {
        id: "24",
        title: "Погода в Москве 24.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "0.00",
                temperature :"−2°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature :"−7°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "12.00",
                temperature :"-7°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "18.00",
                temperature : "−8°С",
                weatherType : "Сильный снег"
            },
            {
                filePath: "/WebCoursework/svg/snowy.svg",
                time: "23.59",
                temperature: "-10°С",
                weatherType: "Сильный снег"
            }
        ]
    },
    {
        id: "25",
        title: "Погода в Москве 25.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "0.00",
                temperature :"−8°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature :"−8°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "12.00",
                temperature :"-8°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/low_clouds.svg",
                time: "18.00",
                temperature : "−12°С",
                weatherType : "Малообачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-13°С",
                weatherType: "Облачно"
            }
        ]
    },
    {
        id: "26",
        title: "Погода в Москве 26.12.2021",
        details: [
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "0.00",
                temperature: "−14°С",
                weatherType: "Облачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature: "−14°С",
                weatherType: "Облачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "12.00",
                temperature: "-11°С",
                weatherType: "Облачно"
            },
            {
                filePath: "/WebCoursework/svg/low_clouds.svg",
                time: "18.00",
                temperature: "−12°С",
                weatherType: "Малообачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-13°С",
                weatherType: "Облачно"
            }
        ]
    },
    {
        id: "27",
        title: "Погода в Москве 27.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "0.00",
                temperature :"−13°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature :"−11°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "12.00",
                temperature :"-8°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "18.00",
                temperature : "−5°С",
                weatherType : "Облачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-5°С",
                weatherType: "Облачно"
            }
        ]
    },
    {
        id: "28",
        title: "Погода в Москве 28.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "0.00",
                temperature :"−5°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature :"−4°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "12.00",
                temperature :"-2°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "18.00",
                temperature : "−1°С",
                weatherType : "Облачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-2°С",
                weatherType: "Облачно"
            }
        ]
    },
    {
        id: "29",
        title: "Погода в Москве 29.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "0.00",
                temperature :"−2°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature :"−4°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "12.00",
                temperature :"-5°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "18.00",
                temperature : "−1°С",
                weatherType : "Облачно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-3°С",
                weatherType: "Облачно"
            }
        ]
    },
    {
        id: "30",
        title: "Погода в Москве 30.12.2021",
        details : [
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "0.00",
                temperature :"−2°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "6.00",
                temperature :"−1°С",
                weatherType : "Облачно"
            },
            {
                filePath : "/WebCoursework/svg/snowy.svg",
                time: "12.00",
                temperature :"−8°С",
                weatherType : "Сильный снег"
            },
            {
                filePath : "/WebCoursework/svg/cloudy.svg",
                time: "18.00",
                temperature : "−3°С",
                weatherType : "Прохладно"
            },
            {
                filePath: "/WebCoursework/svg/snowy.svg",
                time: "23.59",
                temperature: "−3°С",
                weatherType: "Сильный снег"
            }
        ]
    },
    {
        id: "31",
        title: "Погода в Москве 31.12.2021",
        details: [
            {
                filePath: "/WebCoursework/svg/snowy.svg",
                time: "0.00",
                temperature: "−4°С",
                weatherType: "Сильный снег"
            },
            {
                filePath: "/WebCoursework/svg/snowy.svg",
                time: "6.00",
                temperature: "−3°С",
                weatherType: "Сильный снег"
            },
            {
                filePath: "/WebCoursework/svg/low_clouds.svg",
                time: "12.00",
                temperature: "0°С",
                weatherType: "Малооблачно"
            },
            {
                filePath: "/WebCoursework/svg/sunny.svg",
                time: "18.00",
                temperature: "−3°С",
                weatherType: "Ясно"
            },
            {
                filePath: "/WebCoursework/svg/cloudy.svg",
                time: "23.59",
                temperature: "-5°С",
                weatherType: "Облачно"
            }
        ]
    }
]

let selectedHeader = document.getElementsByClassName('header_selected')[0]
    .getElementsByTagName('a')[0];
selectedHeader.style.color = "gray";

const forecastCardClassName = 'weather_forecast_card';
let forecastCards = document.getElementsByClassName('weather_forecast_card')
for (let i = 0; i< forecastCards.length; i++){
    forecastCards[i].addEventListener('click', (event) =>{
        let element = forecastCards[i];
        if (!element.classList.contains('current')){
            function getImageForecastCard(element){
                const className = 'weather_forecast_card_image';
                let img = element.getElementsByClassName(className)[0]
                    .getElementsByTagName('img')[0];
                return img;
            }
            function setInactiveForecastCard(){
                let findClassName = forecastCardClassName + " " + "current";
                let elements = document.getElementsByClassName(findClassName);
                for (let i = 0; i < elements.length; i++) {
                    let img = getImageForecastCard(elements[i]);
                    img.style.height = "100px"
                    elements[i].style.backgroundColor = "whitesmoke"

                    elements[i].classList.remove('current');
                }
            }
            setInactiveForecastCard();
            element.classList.add('current');
            element.style.backgroundColor = "white";
            let id = element.getElementsByClassName('weather_forecast_card_day')[0]
                .getElementsByTagName('p')[0]
                .textContent;
            changeDataInWeather(id);
            let img = getImageForecastCard(element);
            img.style.height = "120px";
        }
    })
    forecastCards[i].addEventListener('mouseover', (event) =>{
        let element = forecastCards[i];
        element.style.backgroundColor = "white";
    })
    forecastCards[i].addEventListener('mouseout', (event) =>{
        let element = forecastCards[i];
        if(element.classList.contains('current'))
            return;
        element.style.backgroundColor = "whitesmoke";
    })
}

document.getElementById('btn').onclick = () =>{
    let element = document.getElementById('request_form');
    let formInput = document.getElementById('searchField');
    let value = formInput.value;
    element.action =  value + '.html';
}

function changeDataInWeather(id){
    let data = getCurrentWeather(defaultCity);

    let item = weatherFullData.find(x => x.id == id);
    let elementWeather = document.getElementsByClassName('weather_main')[0];
    let elementTitleWeather = elementWeather.getElementsByClassName('weather_title')[0];
    elementTitleWeather.textContent = data.title;

    let elementImg = document.getElementsByClassName('weather_img')[0];
    let img = document.createElement('img');
    img.src = dictImages[data.icon];
    elementImg.appendChild(img);

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

    let longtitudeElement = document.createElement('div');
    longtitudeElement.classList.add('longtitude');
    longtitudeElement.textContent = data.coord.lon;

    elementCoord.appendChild(latitudeElement);
    elementCoord.appendChild(longtitudeElement);
    divDescription.appendChild(elementCoord);

    elementWeather.appendChild(divDescription);
}