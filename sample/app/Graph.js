import React, { Component } from 'react';
// import { ReactCytoscape } from 'react-cytoscape';
import { ReactCytoscape } from '../../lib';

class Graph extends Component {

	getElements() {
		return {
			"nodes": [
				{
					"data": {
						"id": 100276,
						"label": "CRC51"
					},
					"classes": "cellule",
					"description": "3 membres actifs"
				},
				{
					"data": {
						"id": 100055,
						"label": "Service CRC Prévoyance Lyon"
					},
					"classes": "structure",
					"description": "1 cellules"
				},
				{
					"data": {
						"id": 100054,
						"label": "Direction Expérience Client"
					},
					"classes": "structure",
					"description": "5 cellules"
				},
				{
					"data": {
						"id": 105061,
						"label": "Temimi Houda"
					},
					"classes": "utilisateur"
				}
			],
			"edges": [
				{
					"data": {
						"id": "100276-100055",
						"source": 100276,
						"target": 100055
					}
				},
				{
					"data": {
						"id": "100276-105061",
						"source": 100276,
						"target": 105061
					}
				},
				{
					"data": {
						"id": "100055-105061",
						"source": 100055,
						"target": 105061
					}
				},
				{
					"data": {
						"id": "100055-100054",
						"source": 100055,
						"target": 100054
					}
				},
				{
					"data": {
						"id": "100054-103482",
						"source": 100054,
						"target": 103482
					}
				},
				{
					"data": {
						"id": "105061-100276",
						"source": 105061,
						"target": 100276
					}
				}
			]
		};
	}

	render() {
		return (
			<ReactCytoscape id="yop" elements={this.getElements()} />
		);
	}
}

export default Graph;