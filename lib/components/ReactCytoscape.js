import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cytoscape from 'cytoscape';
import cycola from 'cytoscape-cola';

cytoscape.use(cycola);

class ReactCytoscape extends Component {

	getCyID() {
		return this.props.id || 'cy';
	}

	getContainer() {
		return this.container;
	}

	render() {
		return (
			<div id={this.getCyID()} ref={elt => { this.container = elt }}>
				<Cytoscape {...this.props} container={this.getContainer} />
			</div>
		);
	}

}


class Cytoscape extends Component {

	constructor(props) {
		super(props);
		// this.build();
	}

	getCyID() {
		return this.props.id || 'cy';
	}

	getContainer() {
		return this.props.container() || ReactDOM.findDOMNode(this.getCyID());
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

		this.setState({ cy: this.cy });

		return this.cy;
	}

	componentWillMount() {
		this.build();
	}

	componentWillUnmount() {
		if (this.cy) {
			this.cy.destroy();
		}
	}

	// componentWillReceiveProps(){
	// 	this.build();
	// }

	// componentWillUpdate() {
	// 	this.build();
	// }

	render() {
		return null;
	}
}

export default ReactCytoscape;