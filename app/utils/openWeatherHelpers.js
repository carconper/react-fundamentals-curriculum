var axios = require('axios');

var api_key = "9fa59fec837bd47c62c42e1460f326f7";


function getCityForecast (city) {
  // Return a promise for the request
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city  + '&type=accurate&APPID=' + api_key)
}

function getCityForecast5 (city) {
  // Return a promise for the request
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city  + '&type=accurate&APPID=' + api_key)
}

var helpers = {
  getForecast: function (city, type) {
    if (type == "forecast") {
      return getCityForecast(city).then(function (info) {
        console.log("FORECAST", info.data);
        return info.data
      })
    } else if (type == "forecast5") {
      return getCityForecast5(city).then(function (info) {
        console.log("FORECAST5", info.data);
        return info.data
      })
    } else {
      console.log("TYPE_ERROR", "Wrong type specified");
    }
  }
};

module.exports = helpers;
