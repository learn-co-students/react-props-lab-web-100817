import React from 'react'
export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h2>{this.props.name}</h2>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <small>Colors: {this.props.colors.join(', ')}</small>
      </div>
    );
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
