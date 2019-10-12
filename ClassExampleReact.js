import React from 'react';
import ReactDOM from 'react-dom';

const fiftypercent = Math.random() < 0.5;

class Randomer extends React.Component {
  render() {
    if (fiftypercent) {
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
