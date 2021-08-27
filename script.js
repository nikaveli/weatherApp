const apiKey = "0c36dba3668592fbee9f2d7032c054e6"

var getSubmitBtn = document.getElementById("submitButton")

getSubmitBtn.addEventListener('click', submitBtn);

function submitBtn(){
        var city = document.getElementById("cityId").value; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
        .then(function(response) {
            //Will turn a raw data response
            //into json in the next promise
            return response.json();
        })
        
        .then(function(data) {
            //Will be a json object to work with
            console.log(data);
            var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                console.log(icon)
            var temp = Math.floor(data.main.temp);
            var weather = data.weather[0].main;
            console.log(temp)    
                document.getElementById("temp").innerHTML = temp;
                document.getElementById("weather").innerHTML = weather;
                document.getElementById("icon").src = icon;
        })
        .catch(function(err) {
            console.log(err);
        })
}