//Getting the data for the weather
const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=06b398ce5a9a3ebc9b95042ec888e67b&units=imperial"

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
      console.log(weatherInfo);

        //Get weather summary data
        document.getElementById('description').innerHTML = weatherInfo.list[0].weather[0].description;
        document.getElementById('currentTemp').innerHTML = weatherInfo.list[0].main.temp;
        document.getElementById('humidity').innerHTML = weatherInfo.list[0].main.humidity;
        document.getElementById('windSpeed').innerHTML = weatherInfo.list[0].wind.speed;

        //Calculating the wind chill 
        const tempNumber = parseFloat(document.getElementById("currentTemp").textContent);
        const speedNumber = parseFloat(document.getElementById("windSpeed").textContent);

        let windchill = 35.74 + (.06215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
        windchill = Math.round(windchill);
 
        if (tempNumber <= 50 && speedNumber > 3) {
            document.getElementById("chill").textContent = windChill + "\xb0 F";
        } else {
            document.getElementById("chill").textContent = "N/A";
        }

        //get the value for today
const t = new Date();
const todayDayNumber = t.getDay();
let forecastDayNumber = todayDayNumber;
console.log(forecastDayNumber);

const weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

        //Get weather data for 5-day forecast
        let mylist = weatherInfo.list;
    
        for (i=0; i<mylist.length; i++) {
          var time = mylist[i].dt_txt;
          if(time.includes('18:00:00')) {
             
              forecastDayNumber += 1;
              if (forecastDayNumber===7){
                forecastDayNumber=0;
              }
      
            let theDayName = document.createElement("span");
            theDayName.textContent = weekday[forecastDayNumber];
    
            let iconcode = weatherInfo.list[i].weather[0].icon;
            let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
            console.log(iconPath);
            let iconAlt = weatherInfo.list[i].weather[0].description;
            let theIcon = document.createElement("img");
            theIcon.src = iconPath;
            theIcon.alt = iconAlt;
 
            let theTemp = document.createElement("p");
            theTemp.textContent = weatherInfo.list[i].main.temp + "\xb0";
            
          
           let theDay = document.createElement("div");
           theDay.appendChild(theDayName);
           theDay.appendChild(theIcon);
           theDay.appendChild(theTemp);
    
         document.getElementById('weatherforecast').appendChild(theDay);
          
    
         }// end if
        }// end for
        
     }); //end of "then" fat arrow function
    