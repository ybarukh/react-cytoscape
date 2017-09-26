# React component for Cytoscape
[http://js.cytoscape.org](http://js.cytoscape.org)

## Installation

`npm install react-cytoscape`

## Usage

```react
import ReactCytoscape from 'react-cytoscape';

<ReactCytoscape containerID="cy" elements={this.getElements()} cyRef={(cy) => { this.cy = cy; console.log(this.cy) }} />

```

## ReactCytoscape props

Props are same as Cytoscape [builder function](http://js.cytoscape.org/#notation/elements-json).

* `elements` : Object with `nodes` and `egdes`  attributes
* `style` : Array of Style object
* `layout` : Object with `name` of layout attribute. `ReactCytoscape` integrates [**cola** layout](https://github.com/cytoscape/cytoscape.js-cola).
* `styleContainer` : an object of `css` style
* `cyRef` : a callback function to obtain a reference to `cytoscape object`
