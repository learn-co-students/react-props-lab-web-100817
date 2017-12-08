// Code The Spaceship Component Here
import React from 'react'

class Spaceship extends React.Component {
  render() {
    const colorsList = this.props.colors.map(color => <p>{color}</p>)
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        {colorsList}
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship