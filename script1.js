var APIKey = "0ae8e28782574a4e1da5362bb95aa91d";
var api = "https://api.openweathermap.org/data/2.5/onecall?lat={39.613319}&lon={-105.016647}&appid={0ae8e28782574a4e1da5362bb95aa91d";


const header = document.createElement('header');
header.innerText = "WhyWeather";
document.body.append(header);

var p = document.createElement('p');
p.innerText = "weather";
header.appendChild(p);


setInterval(function () {
    var timeDate = moment().format("MMM Do, YYYY" + " hh:mm:ss");
    p.innerText = "Today is " + timeDate;
  }, 1000);

  const main = document.createElement('main');
  