var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var helpers = require('../utils/openWeatherHelpers');

var GetCityContainer = React.createClass({
  getDefaultProps: function () {
    return {
      direction: 'column',
      alignself: 'center'
    }
  },
  propTypes: {
    direction: PropTypes.string,
    alignself: PropTypes.string
  },
  getInitialState: function () {
    return {
      city: ''
    }
  },
  componentDidMount: function () {
    console.log('componentDidMount');
  },
  componentWillUnmount: function () {
    console.log('componentWillUnmount');
  },
  handleSubmitCity: function () {
    console.log(this.state.city)
    helpers.getForecast(this.state.city, "forecast")
  },
  handleUpdateCity: function (e) {
    this.setState({
      city: e.target.value
    })
  },
  render: function () {
    return (
      <GetCity
        direction={this.props.direction}
        alignself={this.props.alignself}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
});

module.exports = GetCityContainer;
