var React = require('react');
var GetCityContainer = require('./GetCityContainer');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5,
  },
  title: {
    fontSize: 45,
    fontWeight: 100,
    margin: 0
  },
}

var Main = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
 	goHome: function () {
    this.context.router.push({pathname: '/'})
  },
  render: function () {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div onClick={this.goHome}>  
            <h2 style={styles.title}>My Weather</h2>
          </div>
          <GetCityContainer 
            direction='row'
            alignself='right' />
        </div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
