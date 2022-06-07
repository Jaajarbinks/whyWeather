    // varibles for the api calls
    var img = document.querySelector(".icon");
    var name1 = document.querySelector(".name1")
    var Temp = document.querySelector(".Temp");
    var Wind = document.querySelector(".Wind");
    var Humidity = document.querySelector(".Humidity");
    var Pressure = document.querySelector(".Pressure");
    var Name = document.querySelector(".Name");
    var p1 = document.querySelector("#p1");
    var APIKey = "0ae8e28782574a4e1da5362bb95aa91d";
    var forecast = document.querySelector("#forecast");
    var api = "https://api.openweathermap.org/data/2.5/onecall?lat={39.613319}&lon={-105.016647}&appid={0ae8e28782574a4e1da5362bb95aa91d"
    var recentSearch = document.querySelector("#recent-search");

    setInterval(function() {
        var timeDate = moment().format("MMM Do, YYYY" + " hh:mm:ss");
        p1.innerText = ('Today is ' + timeDate);
        }, 1000);

    
// fetch weather api with forecast

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=39.613319&lon=-105.016647&exclude=alerts&units=imperial&appid=0ae8e28782574a4e1da5362bb95aa91d`)
    .then(response => {console.log(); return response.json();}) 
    .then(data => {console.log(data)
        function renderData(data) {
            // console.log(data);
            var icon = data.current.weather[0].icon;
            // console.log(icon);
            // for icon
            `https://openweathermap.org/img/wn/${icon}.png`
            var name = data["timezone"]
            var wind = data["current"]["wind_speed"]
            var temp = data["current"]["temp"]
            var pressure = data["current"]["pressure"]
            var humidity = data["current"]["humidity"]
            img.src = `https://openweathermap.org/img/wn/${icon}.png`;
            name1.innerHTML = name;
            Temp.innerHTML = temp;
            Wind.innerHTML = wind;
            Humidity.innerHTML = humidity;
            Pressure.innerHTML = pressure;
        }
        renderData(data);

        
        function renderFiveDayData(data) {
         for (let i = 1; i < 6; i++) {
            var fivedayIcon = data.daily[i].weather[0].icon;
            var description1 = data.daily[i].weather[0].description;
            var wind1 = data.daily[i].wind_speed;
            var temp1 = data.daily[i].temp.day;
            var pressure1 = data.daily[i].pressure;
            var humidity1 = data.daily[i].humidity;
            let forecastList = document.querySelector(".five-day");
            var recentSearch = document.querySelector("#recent-search"); 
         let descriptionLi = document.createElement("li");
         let windLi = document.createElement("li")
         let pressureLi = document.createElement("li")
         let tempLi = document.createElement("li")
         let humidityLi = document.createElement("li")
        descriptionLi.innerHTML = "description1:"+ description1;
        windLi.innerHTML = "wind:" + wind1;
        pressureLi.innerHTML = "pressure:" + pressure1;
        humidityLi.innerHTML = "humidity:"+ humidity1;
        tempLi.innerHTML = "temp:"+temp1;

        {
        recentSearch.appendChild(descriptionLi);
        recentSearch.appendChild(windLi);
        recentSearch.appendChild(pressureLi);
        recentSearch.appendChild(humidityLi);
        recentSearch.appendChild(tempLi);}
}



    }
        renderFiveDayData(data);
       });

// placing input in to local storage.
var input = document.getElementById("#hey");
var button = document.getElementById("#search1");
var city = document.getElementsByClassName(".city");


    // adding eventlistener for the button.
var save_button = document.getElementById('hey')
 save_button.addEventListener("click", function(){
   
 });
//  storage
 search1.addEventListener("click", function(){
     localStorage.setItem("hey", hey.value);     
     console.log(localStorage);
     JSON.parse(localStorage.getItem("hey"));
     });