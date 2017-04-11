var React = require('react');
var PropTypes = React.PropTypes;
var helpers = require('../utils/helpers.js');
var getIcon = helpers.getIcon;
var getDate = helpers.getDate;
var getTemp = helpers.getTemp;

var styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 70,
    fontWeight: 100
  },
  subheader: {
    fontSize: 40,
    fontWeight: 100,
    color: 'rgba(252, 90, 44, 0.89)'
  },
  container: {
    margin: '50px auto'
  
  },
  detailsHeader: {
    display: 'flex',
    justifyContent: 'space-between', 
    flexDirection: 'row',
    maxWidth: 600,
    margin: '0px auto'
  },
  icon: {
    width: '250px',
    height: 'auto'
  },
  detailContainer: {
    display: 'flex',
    justifyContent: 'space-between', 
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 600,
    margin: '10px auto'
  },
  infoContainer: {
    fontSize: 25,
    fontWeight: 100,
    maxWidth: 600,
    margin: '15px auto'
    
  }
}


function Icon (props) {
  var icon = getIcon(props.icon);
  return (
    <div>
      <img style={styles.icon} src={icon}></img>
    </div>
  )
}

function Info (props) {

  return (
    <div style={styles.infoContainer}>
      <p>{props.details.weather[0].description}</p>
      <p>Min. Temp.: {getTemp(props.details.temp.min)[0]} ºC | {getTemp(props.details.temp.min)[1]} ºF</p>
      <p>Max. Temp.: {getTemp(props.details.temp.max)[0]} ºC | {getTemp(props.details.temp.max)[1]} ºF</p>
      <p>Humidity: {props.details.humidity}</p>
    </div>
  )
}

function Rotor (props) {
  var date = getDate(props.cityData.dt);
  
  return (
    <div style={styles.container}>
      <div style={styles.detailsHeader}>
        <button type="button" className="btn btn-default" aria-label="Previous Day">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        </button>
        <div style={styles.header}>
          <h1 style={styles.header}>{props.city}</h1>
          <p style={styles.subheader}>{date}</p>
        </div>
        <button type="button" className="btn btn-default" aria-label="Next Day">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        </button>
      </div>
      <div style={styles.detailContainer}>
        <Icon icon={props.cityData.weather[0].icon}/>
        <Info details={props.cityData} />
      </div>
    </div>
  )
}


function CityDetail (props) {
  return (
      <Rotor
        city={props.city}
        cityData={props.cityData} />
  )
}


function CityDetail2 (props) {
  return (
      <h1> DETAILS!!! </h1>

      )
}

CityDetail.propTypes = {
  city: PropTypes.string.isRequired,
  cityData: PropTypes.object.isRequired
}

module.exports = CityDetail;
