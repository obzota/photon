// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const ipc = require('electron').ipcRenderer;
const d3 = require('d3');

const Bubble = require('./scripts/bubbleplot');
const Greyscale = require('./scripts/greyscaleplot');
const Splom = require('./scripts/splom');
const Data = require('./scripts/data');

const clusters = require('./scripts/clusters');

const axis = require('./scripts/axis');

require('./scripts/dragndrop');

const BUBBLE = 0;
const GREYSCALE = 1;
const SPLOM = 2

let plot = 0;

//
//		Rendering
//
function render() {
	switch (plot) {
		case BUBBLE: Bubble.draw(Data.retrieve()); break;
		case GREYSCALE: Greyscale.draw(Data.retrieve()); break;
		case SPLOM: Splom.draw(Data.retrieve()); break;
	}
	clusters.draw(Data.getCenters());
}

ipc.on('command-render', render);

//
//		Plot swapping
//
ipc.on('draw-bubble', function() {
	plot = BUBBLE;
	render();
});

ipc.on('draw-greyscale', function() {
	plot = GREYSCALE;
	render();
});

ipc.on('draw-splom', function() {
	plot = SPLOM;
	render();
});

//
//		Axis rotation
//
ipc.on('command-rotate', function () {
	if (plot == SPLOM) {return;}
	axis.rotate();
	render();
});

//
//		D3 zoom event
//
let zoomed = function(event, b, c) {
	d3.select("#scene").attr('transform', d3.event.transform);
}

d3.select("svg").call(
	d3.zoom().on("zoom", zoomed)
);
