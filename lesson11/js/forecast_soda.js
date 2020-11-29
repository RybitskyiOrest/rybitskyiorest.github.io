const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=2c142fc5cd314fd798ed56823e09de8e"

fetch(apiURL)
  .then(response => response.json())
  .then(jsObject => {
  console.log(jsObject);

  const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
  console.log(forecast);
  let day = 0;
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  forecast.forEach(x => {
    const d= new Date(x.dt_txt);
    document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
    document.getElementById(`forecast${day+1}`).textContent = Math.round(x.main.temp) + " °F";
    let icon = document.getElementById(`icon${day+1}`);
    icon.setAttribute('src', 'http://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png');
    icon.setAttribute('alt', forecast[day].weather[0].description);
    day++;
  })
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=2c142fc5cd314fd798ed56823e09de8e"
  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  console.log(jsObject);
  document.getElementById('cur').textContent = jsObject.weather[0].main;  
  document.getElementById('t').textContent = Math.round(jsObject.main.temp) + ' ℉'; 
  document.getElementById('hu').textContent = jsObject.main.humidity + ' %'  
  document.getElementById('w').textContent = Math.round(jsObject.wind.speed) + ' mph';   

  //WINDCHILL
  let hElement = document.getElementById("t");
  let wElement = document.getElementById("w");
  let cElement = document.getElementById("c");
  let h = parseInt(hElement.textContent);
  let w = parseInt(wElement.textContent);
  let c = "N/A";
  if (h <= 50 && w >= 3) {
    c = 35.74 + 0.6215 * h - 35.75 * Math.pow(w, 0.16) + 0.4275 * h * Math.pow(w, 0.16);
    cElement.textContent = Math.round(c) + ' ℉';
  }
  let requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
  let request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function () {
    let towndata = request.response;
    showData(towndata);
  }
  function showData(jsonObj) {
    let town = jsonObj["towns"];
  
    for (let i = 0; i < town.length; i++) {
      if (town[i].name == "Soda Springs") {
        let article = document.getElementById("events");
        let para1 = document.createElement("ul");
  
        for (let a = 0; a < town[i].events.length; a++) {
          let listItem = document.createElement("li");
          listItem.textContent = town[i].events[a];
          para1.appendChild(listItem);
        }
  
        article.appendChild(para1);
  
      }
    }
  }

  })
});
