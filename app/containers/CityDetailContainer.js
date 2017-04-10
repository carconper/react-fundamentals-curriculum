var React = ('react');
var PropTypes = react.PropTypes;
var CityDetail = require('../components/CityDetail');


var CityDetailContainer = Reat.createClass({ 
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      cityData: {}
    }
  },
  render: function () {
    return (
      <CityDetail
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        cityData={this.state.cityData} />   
    )
  }
})

module.exports = CytitDetailContainer;
