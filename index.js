const React = require('react');
const ReactDOM = require('react-dom');

const Spaceship = require('./components/Spaceship');

ReactDOM.render(
  <Spaceship
    name="Millennium Falcon"
    speed="1.2 parsecs"
    hasRockets=true
    colors=['red', 'silver', 'carbonite']
    />,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
