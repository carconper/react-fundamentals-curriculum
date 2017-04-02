var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var helpers = require('../utils/openWeatherHelpers');

var GetCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
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
    console.log(this.constructor.displayName + ': componentDidMount');
  },
  componentWillUnmount: function () {
    console.log(this.constructor.displayName + ': componentWillUnmount');
  },
  handleSubmitCity: function (e) {
    e.preventDefault()
    console.log(this.state.city)
    var city = this.state.city
    console.log(this.context)

    this.context.router.push({
      pathname: '/forecast/' + this.state.city,
      query: {
        city: this.state.city
      }
    })
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
