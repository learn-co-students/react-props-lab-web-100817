import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

ReactDOM.render(
  <Spaceship name="Millennium Falcon" />,
  document.getElementById('global')
);

ReactDOM.render(
  <Spaceship name="Slave One"
    speed="Fast" />,
  document.getElementById('global')
);
