//Update the COLOR of the TEMPERATURE element based on the temperature value
function updateTempColor(liveTemp,tempElement) {
    if (liveTemp <= 32) {
        tempElement.style.backgroundColor = 'rgb(35, 57, 221)'
    } else if (liveTemp > 32 && liveTemp < 70) {
        tempElement.style.backgroundColor = 'rgb(92, 161, 193)'
    } else if (liveTemp >= 70 && liveTemp < 80) {
        tempElement.style.backgroundColor = 'rgb(193, 111, 111)'
    } else {
        tempElement.style.backgroundColor = 'rgb(142, 10, 10)'
    }
}

//Convert ZULU to EST
function getDateTime(dateTime) {
    dateTime = new Date(dateTime);
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const month = months[dateTime.getMonth()];
    const day = dateTime.getDate();
    let hour = dateTime.getHours();
    let amPM = 'am'
    if (hour === 0) {
        hour = 12;
    } else if (hour === 12) {
        amPM = 'pm'
    } else if (hour > 12) {
        hour -= 12;
        amPM = 'pm'
    }
    
    return `${month} ${day} at ${hour} ${amPM}`
}

//Update TEMPERATURE FOOTER
function updateWeather(weatherData) {
    //Get elements to manipulate//
    let tempFooter = document.getElementById('allData');
    let tempElem = document.getElementById('temperature');
    let footer = document.querySelector('footer')

    //Define Weather Data//
    const city = weatherData.location.name;
    const dateTime = new Date(weatherData.timelines.minutely[0].time);
    const specWeatherData = [
        {
            name: 'Temperature',
            value: `${Math.floor(weatherData.timelines.minutely[0].values.temperature)} °F`
        },
        {
            name: 'UV Index',
            value: `${weatherData.timelines.minutely[0].values.uvIndex}`
        },
        {
            name: "Cloud Cover",
            value: `${weatherData.timelines.minutely[0].values.cloudCover} %`
        },
        {
            name: 'Humidity',
            value: `${weatherData.timelines.minutely[0].values.humidity} %`
        },
        {
            name: 'Wind Speed',
            value: `${weatherData.timelines.minutely[0].values.windSpeed} mph`
        },
        {
            name: "'Feels Like' Temperature",
            value: `${Math.floor(weatherData.timelines.minutely[0].values.temperatureApparent)} °F`
        }
    ]

    //Update Elements//
    tempElem.innerHTML = `${specWeatherData[0].value}`
    tempFooter.innerHTML = `<h3>${city}</h3> <h4>${getDateTime(dateTime)}</h4>`
    specWeatherData.forEach((obj) => createWeatherElement(obj,tempFooter))
    updateTempColor(weatherData.timelines.minutely[0].values.temperature,footer)
}

//Create new row of weather data
function createWeatherElement(weatherObj,tempFooter) {
    const tag = document.createElement('p')
    tag.appendChild(document.createTextNode(`${weatherObj.name}: ${weatherObj.value}`))
    tempFooter.appendChild(tag)
}


//PRACTICE ELEMENT UPDATE WITHOUT API
const weatherObject = {
    "timelines": {
      "minutely": [
        {
          "time": "2024-01-07T01:31:00Z",
          "values": {
            "cloudBase": 0.13,
            "cloudCeiling": 0.13,
            "cloudCover": 63,
            "dewPoint": 64.63,
            "freezingRainIntensity": 0,
            "humidity": 91,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 29.77,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 67.44,
            "temperatureApparent": 67.44,
            "uvHealthConcern": 0,
            "uvIndex": 0,
            "visibility": 9.51,
            "weatherCode": 1102,
            "windDirection": 265.13,
            "windGust": 16.5,
            "windSpeed": 6.43
          }
        }
      ]
    },
    "location": {
      "lat": 28.542110443115234,
      "lon": -81.3790283203125,
      "name": "Orlando, Orange County, Florida, United States",
      "type": "administrative"
    }
  }
updateWeather(weatherObject)

/*
//Parameters for the Weather API GET
const url = 'https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?timesteps=1m&location=orlando&units=imperial';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a4687b66d7msh16cfc3bf35cdcbap1aa6efjsn60f697a550ef',
		'X-RapidAPI-Host': 'tomorrow-io1.p.rapidapi.com'
	}
};

//Fetch Weather API Data and Update the Temperature Footer Element
async function weatherFetch(url,options) {
    try {
	    const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('HTTP ERROR. Status ${response.status}');
        }
	    const weatherData = await response.json();
        updateWeather(weatherData)
    } catch (error) {
	    console.error(error);
    }

}

//Call to Fetch Weather API Data and Update the Temperature Footer Element
weatherFetch(url,options);
*/