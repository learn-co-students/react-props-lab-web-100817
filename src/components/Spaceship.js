// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component{
  render(){
    return(
        <div>
          <h1>{this.props.name}</h1>
          <p>{this.props.speed}</p>
          <p>{this.props.hasRockets}</p>
          <ul>{this.props.colors}</ul>
        </div>
    )
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
