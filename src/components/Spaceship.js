// Code The Spaceship Component Here
import React from 'react'

class Spaceship extends React.Component{
  render(){
    return(
      <div>
        <h1>Name: {this.props.name}</h1>
        <ul>
        <li><h3>Speed: {this.props.speed}</h3></li>
        <li><h3>Has Rockets: {this.props.hasRockets}</h3></li>
        <li><h3>Colors: {this.props.colors.join(", ")}</h3></li>

        </ul>

      </div>

    )
  }
}

Spaceship.defaultProps={
  speed: "slow",
  hasRockets: 'false',
  colors: ['black','red']
}

export default Spaceship;
