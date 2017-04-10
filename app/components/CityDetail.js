var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
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
    <div>
      <div style={styles.detailsHeader}>
        <button type="button" class="btn btn-default" aria-label="Previous Day">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        </button>
        <h1 style={styles.header}>{props.city}</h1>
        <button type="button" class="btn btn-default" aria-label="Next Day">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        </button>
      </div>
      <div style={styles.details}>
        <Icon />
        <Info details={props.cityData} />
      </div>
    </div>
  )
}

function CityDetail2 (props) {
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


function CityDetail (props) {
  return (
      <h1> DETAILS!!! </h1>

      )
}

CityDetail.propTypes = {
  city: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  cityData: PropTypes.object.isRequired
}

module.exports = CityDetail;
