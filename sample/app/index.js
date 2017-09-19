import React from 'react';
import { render } from 'react-dom';
import AwesomeComponent from './AwesomeComponent.js';
import Graph from './Graph.js';

class App extends React.Component {
	render() {
		return (
			<div>
				<p> Hello React!</p>
				<AwesomeComponent />
				<Graph />
			</div>
		);
	}
}

render(<App />, document.getElementById('app'));