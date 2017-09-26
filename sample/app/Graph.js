import React, { Component } from 'react';
import { ReactCytoscape } from '../../lib';
import './style.css'

class Graph extends Component {

	getElements() {
		return {
			nodes: [
				{ data: { id: 'a', parent: 'b' }, position: { x: 215, y: 85 } },
				{ data: { id: 'b' } },
				{ data: { id: 'c', parent: 'b' }, position: { x: 300, y: 85 } },
				{ data: { id: 'd' }, position: { x: 215, y: 175 } },
				{ data: { id: 'e' } },
				{ data: { id: 'f', parent: 'e' }, position: { x: 300, y: 175 } }
			],
			edges: [
				{ data: { id: 'ad', source: 'a', target: 'd' } },
				{ data: { id: 'eb', source: 'e', target: 'b' } }
			]
		};
	}

	render() {

		return (
			<ReactCytoscape containerID="cy" elements={this.getElements()} cyRef={(cy) => { this.cy = cy; console.log(this.cy) }} />
		);
	}
}

export default Graph;