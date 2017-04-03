const React = require('react');

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h1>{this.props.name}</h1>
        <ul>"Ship Stats"
          <li>Speed: ${this.props.speed}</li>
          <li>Rockets: ${this.props.hasRockets ? 'Yes' : 'No'}</li>
          <li>Colors: ${this.props.colors.join(', ')}</li>
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red'],
};

module.exports = Spaceship
