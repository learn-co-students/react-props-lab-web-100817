import React from 'react';

class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props;
    return (
      <div>
        <h1>Name: {name}</h1>
        <h3>Speed: {speed}</h3>
        <p>Has Rockets? {hasRockets ? 'Yes' : 'No'}</p>
        <ul>Colors: {colors.map(color => <li>{color}</li>)}</ul>
      </div>
    );
  }
}
Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['red', 'black']
};

export default Spaceship;
