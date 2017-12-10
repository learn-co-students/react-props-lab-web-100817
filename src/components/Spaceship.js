import React from 'react';

export default class Spaceship extends React.Component{
  render () {
    return (
      <div>
      <p>Name: {this.props.name}</p>
      <p>Speed: {this.props.speed}</p>
      <p>Has Rockets: {this.props.hasRockets.toString()}</p>
      <p>colors: {this.props.colors.join(" and ")}</p>
      </div>

    )
  }

}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
}
