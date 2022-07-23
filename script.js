// varibles for the api calls
var button = document.getElementById('search1')
var input = document.getElementById('hey')
var img = document.querySelector('.icon')
var name1 = document.querySelector('.name1')
var Temp = document.querySelector('.Temp')
var Wind = document.querySelector('.Wind')
var Humidity = document.querySelector('.Humidity')
var Pressure = document.querySelector('.Pressure')
var Name = document.querySelector('.Name')
var p1 = document.querySelector('#p1')
var APIKey = '0ae8e28782574a4e1da5362bb95aa91d'
var forecast = document.querySelector('#forecast')
// var api = "https://api.openweathermap.org/data/2.5/onecall?lat={39.613319}&lon={-105.016647}&appid={0ae8e28782574a4e1da5362bb95aa91d";
var recentSearches = document.querySelector('.card-container')
let clearCard = document.getElementsByClassName('card-container')

setInterval(function () {
  var timeDate = moment().format('MMM Do, YYYY' + ' hh:mm:ss')
  p1.innerText = 'Today is ' + timeDate
}, 1000)

// fetch weather api with forecast
button.addEventListener('click', () => {
  let latCoord
  let longCoord
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&exclude=alerts&units=imperial&appid=0ae8e28782574a4e1da5362bb95aa91d`,
  )
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((data) => {
      console.log(data)
      latCoord = data.coord.lat
      longCoord = data.coord.lon
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latCoord}&lon=${longCoord}&exclude=alerts&units=imperial&appid=0ae8e28782574a4e1da5362bb95aa91d`,
      )
        .then((response) => {
          console.log(response)
          return response.json()
        })
        .then((data) => {
          console.log(data)
          function renderData(data) {
            console.log(data)
            var icon = data.current.weather[0].icon
            var card = document.querySelector('.recent-search')
            // console.log(icon);
            // for icon
            ;`https://openweathermap.org/img/wn/${icon}.png`
            var name = data['timezone']
            var wind = data['current']['wind_speed']
            var temp = data['current']['temp']
            var pressure = data['current']['pressure']
            var humidity = data['current']['humidity']
            img.src = `https://openweathermap.org/img/wn/${icon}.png`
            name1.innerHTML = name
            Temp.innerHTML = temp
            Wind.innerHTML = wind
            Humidity.innerHTML = humidity
            Pressure.innerHTML = pressure
          }

          // making card

          function renderFiveData(data) {
            console.log(clearCard.length)
            let cardLength

            for (let i = 1; i < 6; i++) {
              var fivedayIcon = data.daily[i].weather[0].icon
              var name1 = data.daily[i].weather[0].description
              var wind1 = data.daily[i].wind_speed
              var temp1 = data.daily[i].temp.day
              console.log(temp1)
              var pressure1 = data.daily[i].pressure
              var humidity1 = data.daily[i].humidity

              let forecastCard = document.createElement('div')
              forecastCard.classList.add('recent-searches')
              recentSearches.appendChild(forecastCard)
              let clearCard = document.getElementsByClassName('recent-searches')
              let forecastImage = document.createElement('img')
              let descriptionLi = document.createElement('p')
              let windLi = document.createElement('p')
              let tempLi = document.createElement('p')
              let pressureLi = document.createElement('p')
              let humidityLi = document.createElement('p')

              forecastImage.innerHTML += forecastImage.src = `https://openweathermap.org/img/wn/${fivedayIcon}.png`
              descriptionLi.innerHTML += 'Description: ' + name1
              windLi.innerHTML += 'Wind Speed ' + wind1
              tempLi.innerHTML += 'Temperature ' + temp1 + 'Â°F'
              pressureLi.innerHTML += 'Pressure ' + pressure1
              humidityLi.innerHTML += 'Humidity ' + humidity1

              forecastCard.appendChild(forecastImage),
                forecastCard.appendChild(descriptionLi),
                forecastCard.appendChild(windLi),
                forecastCard.appendChild(tempLi),
                forecastCard.appendChild(pressureLi),
                forecastCard.appendChild(humidityLi)
              cardLength = clearCard.length
            }
            console.log(cardLength)
            if (cardLength > 5) {
              clearData()
            }
          }

          renderFiveData(data)
        })
    })
})

function clearData() {
  console.log(clearCard.length)
  for (let j = 0; j <= clearCard.length; j++) {
    clearCard[j].remove()
  }
}

// getting data from openweathermapapi

// making card for forecast
// select card div

// use for card time
// moment.unix(result.daily[i].dt).format("l")

// placing input in to local storage.

// var city = document.getElementsByClassName(".city");

// adding eventlistener for the button.
// var save_button = document.getElementById("hey");
// save_button.addEventListener("click", function () {});
//  storage
// search1.addEventListener("click", function () {
//   localStorage.setItem("hey", hey.value);
//   console.log(localStorage);
//   JSON.parse(localStorage.getItem("hey"));
// });
