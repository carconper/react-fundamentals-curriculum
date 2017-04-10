var React = require('react');
var CityDetail = require('../components/CityDetail');


var CityDetailContainer = React.createClass({ 
  render: function () {
    console.log("Props.location.state: ", this.props.location.state)
    return (
      <CityDetail 
        city={this.props.location.state.city}
        isLoading={this.props.location.state.isLoading}
        cityData={this.props.location.state.weather} />
    );
  }
});

module.exports = CityDetailContainer;
