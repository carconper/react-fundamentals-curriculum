var React = require('react');
var ShowCity = require('../components/ShowCity');
var helpers = require('../utils/openWeatherHelpers');

var ShowCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
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
    this.makeRequest(this.props.routeParams.city);
  },
  componentWillReceiveProps: function (nextProps) {
    console.log(this.constructor.displayName + ': componentWillReceiveProps!');
    this.makeRequest(nextProps.routeParams.city)
  },
  makeRequest: function (city) {
    helpers.getForecast(city, 'forecast5')
      .then(function (city_forecast) {
        console.log("Promise for FORECAST ready: ", city_forecast);
        this.setState({
          isLoading: false,
          city_forecast: city_forecast
        });
      }.bind(this));
  },
	handleClick: function (weather) {
    console.log(this.context)
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather,
      }
    })
  },
  render: function () {
    return (
        <ShowCity 
          city={this.props.routeParams.city}
          isLoading={this.state.isLoading}
          city_forecast={this.state.city_forecast}
					handleClick={this.handleClick} /> 
    )
  }
});

module.exports = ShowCityContainer;
