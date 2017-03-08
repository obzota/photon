const d3 = require('d3');
const ipc = require('electron').ipcRenderer;

const scale = require('./plotscale');
const axis = require('./axis');
const palette = require('./palette');

let on = true;

ipc.on('toggle-cluster', function() {
	on = !on;
});

exports.draw = function (data) {
	if (!on) {
		d3.select('#clusterlayer').classed('hidden', true);
		return;
	}
	d3.select('#clusterlayer').classed('hidden', false);

	var centers = d3.select('#clusterlayer').selectAll('rect').data(data);
	var newCenters = centers.enter().append('rect');

	centers.merge(newCenters)
		.attr('x', function (d) {return scale.x(d.x)-1})
		.attr('y', function (d) {return scale.y(d.y)-1})
		.attr('width', 2)
		.attr('height', 2)
		.attr('fill', palette.pink);
}