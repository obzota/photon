// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const ipc = require('electron').ipcRenderer
const d3 = require('d3')
const $ = require('jquery')

const Bubble = require('../bubble/bubbleplot')
const Splom = require('../splom/splom')
const Data = require('../core/data')
const axis = require('../core/axis')

require('../core/dragndrop')

const BUBBLE = 0;
const SPLOM = 1;

let mustShowClusters = false;
let plot = 0;

$(document).keypress(function(event) {
	if(event.key == 'c') {
		mustShowClusters = !mustShowClusters;
		render();
	}
});

//
//		Rendering
//
function render() {
	switch (plot) {
		case BUBBLE: Bubble.draw(Data.retrieve(), mustShowClusters); break;
		case SPLOM: Splom.draw(Data.retrieve(), mustShowClusters); break;
	}
}

ipc.on('command-render', render);

//
//		Plot swapping
//
ipc.on('draw-bubble', function() {
	plot = BUBBLE;
	Splom.undraw();
	render();
});

ipc.on('draw-splom', function() {
	plot = SPLOM;
	Bubble.undraw();
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
