var React = require('react');
var PropTypes = react.PropTypes;

var styles: = {
  container: {
  
  },
  detailsHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  details: {
  
  },
}


function Icon (props) {
  return (
    <div>
      <h3>Here goes the ICON</h3>
    </div>
  )
}

function Info (props) {
  return (
    <div>
      <h3>Here goes the INFO</h3>
    </div>
  )
}

function Rotor (props) {
  return (
      <div style={styles.detailsHeader}>
        <button type="button" class="btn btn-default" aria-label="Previous Day">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        </button>
        <h1 style={styles.header}>{props.city}</h1>
        <button type="button" class="btn btn-default" aria-label="Next Day">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        </button>
      </div>
      <div styel={styles.details}>
        <Icon />
        <Info details={props.cityData} />
      </div>
  )
}

function CityDetail (props) {
  return (
      <div style={styles.container}>
      {
        props.isLoading === true
          ? <h1 style={styles.header}> Loading </h1>
          : <Rotor
              city={props.city}
              cityData={props.cityData} />
      }
      </div>
  )
}

CityDetails.propTypes = {
  city: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  cityData: PropTypes.object.isRequired
}

module.exports = CityDetail;
