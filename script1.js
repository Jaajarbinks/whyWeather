var APIKey = "0ae8e28782574a4e1da5362bb95aa91d";
var api = "https://api.openweathermap.org/data/2.5/onecall?lat={39.613319}&lon={-105.016647}&appid={0ae8e28782574a4e1da5362bb95aa91d";

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
  const div = document.createElement('div');
  // added className to the div for css
  div.className = 'CitySearch';
  // adding name to the div
  const h1 = document.createElement('h1');
  h1.className = 'CitySearch';
  h1.innerText = "CitySearch";
  div.appendChild(h1);
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
  button.innerText = 'searchCity';
  h1.appendChild(button);
  // adding the div to the body of html
  document.body.append(div);
  
  // making cards for my current and future weather
