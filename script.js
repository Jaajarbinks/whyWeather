    var name1 = document.querySelector(".name1")
    var Temp = document.querySelector(".Temp");
    var Wind = document.querySelector(".Wind");
    var Humidity = document.querySelector(".Humidity");
    var UVIndex = document.querySelector(".UV index");
    var Name = document.querySelector(".Name");
    var img = document.createElement("img");
    
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
        var name = data["name"]
        var wind = data["wind"]["speed"]
        var temp = data["main"]["temp"]
        var uvIndex = data["main"]["feels_like"]
        var humidity = data["main"]["humidity"]
        var icon = data["weather"][0]["icon"];
        
        name1.innerHTML = name;
        Temp.innerHTML = temp;
        Wind.innerHTML = wind;
        Humidity.innerHTML = humidity;
        img.innerHTML = icon;

        // UVIndex.innerHTML = uvIndex;
        
        });
     }
fetchData();