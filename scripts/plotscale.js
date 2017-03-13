const d3 = require('d3');

const data = require('./data');

exports.screenX = d3.scaleLinear().domain([0,1]).range([0,3000]);
exports.screenY = d3.scaleLinear().domain([0,1]).range([3000,0]);
exports.radius = d3.scaleLinear().domain([0,1]).range([1, 20]);
