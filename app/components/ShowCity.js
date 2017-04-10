var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var utils = require('../utils/helpers');
var getDate = utils.getDate;
var getTemp = utils.getTemp;
var getIcon = utils.getIcon;

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', 
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    fontSize: 20,
    color: 'rgba(252, 90, 44, 0.89)',
    fontWeight: 100
  }

}


function DayItem (props) {
  var date = getDate(props.day.dt);
  var temp = getTemp(props.day.temp.day);
  var icon = getIcon(props.day.weather[0].icon);
  return (
    <div onClick={props.handleClick}>
     <h3 style={styles.subheader}>{date}</h3>
     <img src={icon} alt="Weather Icon" />
     <p style={styles.weather}>Celsius: {temp[0]} Cº </p>
     <p style={styles.weather}>Fareheit: {temp[1]} Fº</p>
    </div>
  )
}

function ForecastUI (props) {
  return (
    <div>
      <h1 style={styles.header}>{props.city} </h1>
      <div style={styles.container}>
          {props.forecast.list.map(function (listItem) {
            return <DayItem key={listItem.dt} day={listItem} handleClick={props.handleClick.bind(null, listItem)} />
          })}
      </div>
    </div>    
  )
}


function ShowCity (props) {
  console.log('ShowCity receives props: ', props)
  return (
      props.isLoading === true
      ? <Loading speed={200} text='Waiting' />
      : <ForecastUI 
          city={props.city} 
          forecast={props.city_forecast}
          handleClick={props.handleClick} />
  )
}

ShowCity.PropTypes = {
  city: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  city_forecast: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

module.exports = ShowCity;
