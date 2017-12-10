import React from 'react';


export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="space-ship">
        <p>{this.props.name}</p>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors.join(',')}</p>
      </div>
    )
  }
}


Spaceship.defaultProps = {
  name: 'Big Spaceship',
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
