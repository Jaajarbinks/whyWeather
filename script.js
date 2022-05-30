    var img = document.createElement("img");
    var name1 = document.querySelector(".name1")
    var Temp = document.querySelector(".Temp");
    var Wind = document.querySelector(".Wind");
    var Humidity = document.querySelector(".Humidity");
    var Pressure = document.querySelector(".Pressure");
    var Name = document.querySelector(".Name");

    document.write(Date());

    function fetchData() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Littleton&appid=5648fe3c0f05db5519f2f0ac5691ffbe")
    .then(response => {
        // console.log(response);
        if (!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    }) .then(data => {
        console.log(data);
        var icon = data["weather"][0]["icon"];
        var name = data["name"]
        var wind = data["wind"]["speed"]
        var temp = data["main"]["temp"]
        var pressure = data["main"]["pressure"]
        var humidity = data["main"]["humidity"]
        
        img.innerHTML = icon;
        name1.innerHTML = name;
        Temp.innerHTML = temp;
        Wind.innerHTML = wind;
        Humidity.innerHTML = humidity;
        Pressure.innerHTML = pressure;

        
        });
     }
fetchData();

var input = document.getElementById("#hey");
var button = document.getElementById("#search1");

button.addEventListener("click", function(){
    saveData();
});

var savedCity = [""];

for (let i = 0; i < savedCity.length; i++) {
    const element = savedCity[i];
}
    
var save_button = document.getElementById('hey')
 save_button.onclick = saveData;

function saveData(){
    console.log(savedCity);
  var input1 = document.getElementById("hey");
  savedCity.push(input1.value);
  localStorage.setItem("cityName", savedCity);
  var storedValue = localStorage.getItem("cityName");
}