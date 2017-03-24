var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var Title = require('../components/Title');

var MenuContainer = React.createClass({
  getDefaultProps: function () {
    return {
      alignment: 'right',
      direction: 'row',
      color: 'red',
      display: 'flex'
		}
  },
  propTypes: {
    alignment: PropTypes.string,
    direction: PropTypes.string,
    color: PropTypes.string
  },
  getInitialState: function () {
  	return {
			city: ''		
    }
	},
  handleSubmitCity: function () {
    console.log(this.state.city)
  },
  handleUpdateCity: function (e) {
    this.setState({
      city: e.target.value
    })
  },
  render: function () {
    return (
      <div style={{display:this.props.display}}>
        <Title color={this.props.color} />
        <GetCity
          alignment={this.props.alignment}
          direction={this.props.direction}
          onSubmitCity={this.handleSubmitCity}
          onUpdateCity={this.handleUpdateCity}
          city={this.state.city} />
      </div>
    )

  }
});

module.exports = MenuContainer;
