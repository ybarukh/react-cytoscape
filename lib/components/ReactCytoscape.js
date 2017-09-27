import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cytoscape from 'cytoscape';
import cycola from 'cytoscape-cola';
import dagre from 'cytoscape-dagre';

cytoscape.use(cycola);
cytoscape.use(dagre);

/** React cytoscape component
 * props : style, elements, layout, cyRef,styleContainer
 */
class ReactCytoscape extends Component {


	getCyID() {
		return this.props.containerID || 'cy';
	}

	getContainer() {
		let c = this.container;
		// console.log("container", c);
		return c;
	}

	defaultStyle() {
		return [
			{
				selector: 'node',
				css: {
					'content': function (ele) { return ele.data('label') || ele.data('id') },
					'text-valign': 'center',
					'text-halign': 'center'
				}
			},
			{
				selector: '$node > node',
				css: {
					'padding-top': '10px',
					'padding-left': '10px',
					'padding-bottom': '10px',
					'padding-right': '10px',
					'text-valign': 'top',
					'text-halign': 'center',
					'background-color': '#bbb'
				}
			},
			{
				selector: 'edge',
				css: {
					'target-arrow-shape': 'triangle'
				}
			},
			{
				selector: ':selected',
				css: {
					'background-color': 'black',
					'line-color': 'black',
					'target-arrow-color': 'black',
					'source-arrow-color': 'black'
				}
			}
		]
	}

	style() {
		return this.props.style || this.defaultStyle();
	}

	elements() {
		return this.props.elements || {};
	}

	layout() {
		return this.props.layout || { name: 'cola' };
	}

	build() {
		this.cy = cytoscape({
			container: this.getContainer(),

			boxSelectionEnabled: false,
			autounselectify: true,

			style: this.style(),
			elements: this.elements(),
			layout: this.layout()
		});

		if (this.props.cyRef) {
			this.props.cyRef(this.cy);
		}
		return this.cy;
	}

	componentWillUnmount() {
		this.clean();
	}

	componentDidMount() {
		this.build();
	}

	componentDidUpdate() {
		this.clean();
		this.build();
	}

	render() {
		let style = this.props.styleContainer || {};
		let styleContainer = Object.assign({ height: "100%", width: "100%", display: "block" }, style);
		return <div className="graph" id={this.getCyID()} ref={(elt) => { this.container = elt }} style={styleContainer}></div>;
	}

	clean() {
		if (this.cy) {
			this.cy.destroy();
		}
	}
}

export default ReactCytoscape;