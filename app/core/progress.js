const d3 = require('d3');

exports.launch = function (time) {
	d3.select('progress').transition().duration(time).attr('value', 100);
}

exports.reset = function () {
	d3.select('progress').transition().duration(300).attr('value', 0);
}