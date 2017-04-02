var React = require('react');
var PropTypes = React.PropTypes;

function ShowCity (props) {
  console.log('ShowCity receives props: ', props)
  return (
      props.isLoading === true
      ? <div> Loading </div>
      : <div> Forecast Component </div>
  )
}

ShowCity.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  city_forecast: PropTypes.string.isRequired
}

module.exports = ShowCity;
