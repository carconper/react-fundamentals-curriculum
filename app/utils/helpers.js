var daysMap = {
  "0": "Sunday",
  "1": "Monday",
  "2": "Tuesday",
  "3": "Wednesday",
  "4": "Thursday",
  "5": "Friday",
  "6": "Saturday",
};

var monthsMap = {
  "0":"Jan",
  "1":"Feb",
  "2":"Mar",
  "3":"Apr",
  "4":"May",
  "5":"June",
  "6":"July",
  "7":"Aug",
  "8":"Sept",
  "9":"Oct",
  "10":"Nov",
  "11":"Dec"
};

function getDate (timestamp) {
  var date = new Date(timestamp * 1000);
  var day = daysMap[date.getDay()]
  var month = monthsMap[date.getMonth()] + ' ' + date.getDate();
  return day + ' (' + month + ')';
}

function getTemp (temp) {
  var celsius = temp - 273.15;
  var farenheit = (celsius * 1.8) + 32.00;
  return [celsius.toFixed(2), farenheit.toFixed(2)];
}

function getIcon (icon_id) {
  var iconURL = './app/images/weather-icons/' + icon_id + '.svg';
  return iconURL; 
}

module.exports = {
	getDate: getDate,
  getTemp: getTemp,
  getIcon: getIcon
}
