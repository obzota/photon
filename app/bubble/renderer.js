const text = require('../core/textbox')
const progress = require('../core/progress')
const data = require('../core/data')
const zoom  =require('../core/zoom')

const query = require('jquery')
const ipc = require('electron').ipcRenderer

const folderpath = "/Users/obzota/workspace/playground/electron-quick-start/data/exp/"

let N = 23;
let i = 0;

let timeOfExp = 20000;
let delay = 5000;

let timeout = null;

let drawer = null;

exports.initialize = function (plot) {
	drawer = plot;
	query(document).ready(()=>(loadData()));
}

function loadData() {
	i+=1;
	if(i>N) {
		text.message('end of experiment');
		return;
	}
	text.message("Loading data ...");
	data.load(folderpath+i+".tsv");
}

ipc.on('command-render', function() { // once data is loaded
	text.message("Click to start !");
	query(document).one('click', launchExp)
});

function launchExp() {
	text.message("Rendering cluster n°" + i);
	progress.launch(timeOfExp);
	drawer.draw(data.retrieve());
	timeout = setTimeout(endExp, timeOfExp);
	//query(document).one('', interruptExp); // TODO: find event, or add button
}

function interruptExp() {
	clearTimeout(timeout);
	endExp();
}

function endExp() {
	text.message("Please enter your answer");
	drawer.undraw();
	progress.reset();
	ipc.send('exp-ask-user');
}

ipc.on('exp-user-answer', function (event, index) {
	text.message("Answer was " + index);
	setTimeout(loadData, 3000);
});

exports.initialize(require('./bubbleplot')); // TODO change this stupid call