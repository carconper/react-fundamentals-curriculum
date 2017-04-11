var React = require('react');
var CityDetail = require('../components/CityDetail');


var CityDetailContainer = React.createClass({ 
  render: function () {
    console.log("Props.location.state: ", this.props.location.state)
    console.log("Props.routeParams: ", this.props.routeParams)
    return (
      <CityDetail 
        city={this.props.routeParams.city}
        cityData={this.props.location.state.weather} />
    );
  }
});

module.exports = CityDetailContainer;
