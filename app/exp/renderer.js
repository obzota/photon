const text = require('../core/textbox')
const progress = require('../core/progress')
const data = require('../core/data')
const zoom  =require('../core/zoom')

const answer = require('../exp/data_saver')

const query = require('jquery')
const ipc = require('electron').ipcRenderer

const folderpath = "/Users/obzota/workspace/playground/electron-quick-start/data/exp/"

let N = 23;
let current = 0;

let timeOfExp = 20000;
let delay = 5000;

let timeout = null;
let drawer = null;
let isWaitingForAnswer = false;
 

exports.initialize = function (plot) {
	drawer = plot;
	query(document).keypress(function(event) {
		if(!isWaitingForAnswer && event.key == 'n') {
			showDataset();
		}
		if(isWaitingForAnswer) {
			if(answer.save(event.key)) {
				isWaitingForAnswer = false;
				hideDataset();
				//clearTimeout(timeout);
			}
		}
	});
}


function showDataset() {
	current += 1;
	let filename = folderpath+current+'.tsv';
	data.load(filename);
	//progress.launch(timeOfExp);
	isWaitingForAnswer = true;
	//timeout = setTimeout(hideDataset, timeOfExp);
}
ipc.on('command-render', function () {
	drawer.draw(data.retrieve());
});


function hideDataset() {
	//progress.reset();
	drawer.undraw();
}
