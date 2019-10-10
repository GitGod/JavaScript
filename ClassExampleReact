import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

class Randomer extends React.Component {
  render() {
    if (fiftyFifty) {
      return <h1>O</h1>;
    } else {
      return <h1>X</h1>;
    }
  }
}

ReactDOM.render(
	<Randomer />,
	document.getElementById('app')
);
