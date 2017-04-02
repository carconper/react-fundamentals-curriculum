var React = require('react');
var ShowCity = require('../components/ShowCity');
var helpers = require('../utils/openWeatherHelpers');

var ShowCityContainer = React.createClass({
  getInitialState: function () {
    console.log(this.constructor.displayName + ': getInitialState');
    return {
      isLoading: true,
      city_forecast: {}
    }
  },
  componentWillMount: function () {
    console.log(this.constructor.displayName + ': componentWillMount!');
  },
  componentDidMount: function () {
    console.log(this.constructor.displayName + ': componentDidMount!');
    var query = this.props.location.query;
    helpers.getForecast(query.city, 'forecast5')
      .then(function (city_forecast) {
        console.log("Promise for FORECAST ready: ", city_forecast);
        this.setState({
          isLoading: false,
          city_forecast: city_forecast
        });
      }.bind(this));
    console.log("Component Did Mount with forecast query: ", query);
  },
  render: function () {
    return (
        <ShowCity 
          isLoading={this.state.isLoading}
          city_forecast={this.state.city_forecast} />
    )
  }
});

module.exports = ShowCityContainer;
