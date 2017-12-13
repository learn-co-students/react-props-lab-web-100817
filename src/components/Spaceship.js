// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets? {this.props.hasRockets ? 'Yes' : ' No'}</p>
        <p>Colors: {this.props.colors}</p>
      </div>
    );
  }
}

// Spaceship.propTypes = {
//   name: PropTypes.string,
//   speed: PropTypes.number,
//   hasRockets: PropTypes.boolean,
//   colors: PropTypes.array
// };

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;

//
// class MovieCard extends React.Component {
//   render() {
//     return (
//       <div className="movie-card">
//         <img
//           src={this.props.poster}
//           alt={this.props.title}
//         />
//         <h2>{this.props.title}</h2>
//         <small>Genres: {this.props.genres.join(', ')}</small>
//       </div>
//     );
//   }
// }
