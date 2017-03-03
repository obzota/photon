const remote = require('electron').remote;
const fs = remote.require('fs');

const d3 = require('d3')
const ipc = require('electron').ipcRenderer

let data = [];

ipc.on('selected-directory', function (e, files) {
	exports.load(files[0]);
});

exports.load = function (path) {
	fs.readFile(path, 'utf8', function (err, filedata) {
		if (err) {
			throw err;
		}
		data = d3.dsvFormat(' ').parseRows(filedata, function rows(datum, index){
			return {
				id: index,
				x: +datum[0],
				y: +datum[1],
				z: +datum[2]
			}
		});
		ipc.send("data-loaded");
	});
}

exports.retrieve = function () {
	return data;
}
