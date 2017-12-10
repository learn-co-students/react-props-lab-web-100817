// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {

  const { name, speed, hasRockets, colors } = this.props;

  return (
    <div>
      <h1>Spaceship: {name} </h1>
      <p> Speed: {speed} </p>
      <p> Rockets: {hasRockets ? "Yes" : "No"} </p>
      <ul>
          {colors.map((color, index) => <li key={index}>{color}</li>)}
      </ul>
    </div>
  )
  }
};
// OR declare your component first, and then:
Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
