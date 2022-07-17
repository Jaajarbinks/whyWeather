var api = "https://api.openweathermap.org/data/2.5/onecall?lat={39.613319}&lon={-105.016647}&appid={0ae8e28782574a4e1da5362bb95aa91d";
var APIKey = "0ae8e28782574a4e1da5362bb95aa91d";
var name1 = document.querySelector(".name1");
var Temp = document.querySelector(".Temp");
var Wind = document.querySelector(".Wind");
var Humidity = document.querySelector(".Humidity");
var Pressure = document.querySelector(".Pressure");
var Name = document.querySelector(".Name");




// creating a header
const header = document.createElement('header');
header.innerText = "WhyWeather";
document.body.append(header);

// adding a timeDate to header
var p = document.createElement('p');
p.innerText = "weather";
header.appendChild(p);

// timeDate function
setInterval(function () {
    var timeDate = moment().format("MMM Do, YYYY" + " hh:mm:ss");
    p.innerText = "Today is " + timeDate;
  }, 1000);

  // creating div for my search cities
  const section = document.createElement('section');
  // added className to the div for css
  section.className = 'Search';

  // adding name to the div
  const h1 = document.createElement('h1');
  h1.className = 'CitySearch';
  h1.innerText = "CitySearch";
  section.appendChild(h1);
 
  // creating an input area
  const input = document.createElement('INPUT');
  // helper for adding text and whatnot
  input.setAttribute('type', 'text');
  // adding the input to my div
  h1.appendChild(input);
  // adding class to the input 
  input.className = 'searchBar';
 
  // add a button to the input to search for the inputText
  const button = document.createElement('button');
  button.className = 'searchBar1';
  button.innerText = 'SearchCity';
  h1.appendChild(button);
  const h2 = document.createElement('h2');
  h2.innerText = 'ForeCast';

const div1 = document.createElement('div1');
div1.className = 'ForeCastCard';
section.appendChild(div1);

// adding the div to the body of html
document.body.append(section);


// template for items needed for the forecast
// var fivedayIcon = data.daily[i].weather[0].icon;
// var name1 = data.daily[i].weather[0].description;
// var wind1 = data.daily[i].wind_speed;
// var temp1 = data.daily[i].temp.day;
// var pressure1 = data.daily[i].pressure;
// var humidity1 = data.daily[i].humidity;
// let forecastImage = document.createElement("img");
// let descriptionLi = document.createElement("p");
// let windLi = document.createElement("p");
// let tempLi = document.createElement("p");
// let pressureLi = document.createElement("p");
// let humidityLi = document.createElement("p");
// forecastImage.innerHTML += forecastImage.src =`https://openweathermap.org/img/wn/${fivedayIcon}.png`;
// descriptionLi.innerHTML += "Description: " + name1;
// windLi.innerHTML += "Wind Speed " + wind1;
// tempLi.innerHTML += "Temperature " + temp1 + "Â°F";
// pressureLi.innerHTML += "Pressure " + pressure1;
// humidityLi.innerHTML += "Humidity " + humidity1;

// forecastCard.appendChild(forecastImage),
// forecastCard.appendChild(descriptionLi),
// forecastCard.appendChild(windLi),
// forecastCard.appendChild(tempLi),
// forecastCard.appendChild(pressureLi),
// forecastCard.appendChild(humidityLi);


// making 5 day forcast main div
const main = document.createElement('main');
main.className = 'ForeCast';
// main.innerText = 'ForeCast';
document.body.append(main);

// making 4 cards for futureCast
const div = document.createElement('div');
div.className = 'future'
main.appendChild(div);

// 2
const div2 = document.createElement('div2');
div2.className = 'future'
main.appendChild(div2);

// 3
const div3 = document.createElement('div3');
div3.className = 'future'
main.appendChild(div3);

// 4
const div4 = document.createElement('div4');
div4.className = 'future'
main.appendChild(div4);
