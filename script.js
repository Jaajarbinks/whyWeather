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

    setInterval(function() {
        var timeDate = moment().format("MMM Do, YYYY" + " hh:mm:ss");
        p1.innerText = ('Today is ' + timeDate);
        }, 1000);

    
// fetch weather api with forecast
function fetchData() {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=39.613319&lon=-105.016647&exclude=alerts&appid=0ae8e28782574a4e1da5362bb95aa91d`)
    .then(response => {console.log(response); return response.json();}) 
    .then(data => {this.renderData(data)});
 }

// getting data from openweathermapapi
function renderData(data) {
    console.log(data);
    var icon = data.current.weather[0].icon;
    console.log(icon);
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
fetchData();

// making card for forecast
// select card div
var table = document.getElementsByClassName("table")[0];
console.log(table);

// use for card time
// moment.unix(result.daily[i].dt).format("l")

// making card
function createCard(string) {
    var card = document.createElement("div");
    card.className = "card";

    var topNumber = document.createElement("div")
    topNumber.innerText = string;  

    card.append(topNumber);
    return card;
    
    
}
// making card children
    // var name = data["timezone"]
    // var wind = data["current"]["wind_speed"]
    // var temp = data["current"]["temp"]
    // var pressure = data["current"]["pressure"]
    // var humidity = data["current"]["humidity"]
table.appendChild(createCard(Humidity));
    table.appendChild(createCard(Wind));
    table.appendChild(createCard(Temp));
    table.appendChild(createCard(Pressure));




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