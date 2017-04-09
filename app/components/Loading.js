var React = require('react');
var PropTypes = React.PropTypes;

var Loading = React.createClass({
  PropTypes: {
    text: PropTypes.string,
    speed: PropTypes.number
  },
  getDefaultProps: function () {
    return {
      text: 'Loading',
      speed: 300
    }
  },
  getInitialState: function () {
    console.log("Loading.js: getInitialState");
    this.originalText = this.props.text;
    return {
      text: this.originalText
    }
  },
  componentDidMount: function () {
    console.log("Loading.js: componentDidMount");
    var stopper = this.originalText + '...'
    this.interval = setInterval(function () {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }.bind(this), this.props.speed)
  },
  componentWillUnmount: function () {
    console.log("Loading.js: componentWillUnmount");
    clearInterval(this.interval);
  },
  render: function () {
    return (
      <div>
        <p>{this.state.text}</p>
      </div>
    );
  }
})

module.exports = Loading;
