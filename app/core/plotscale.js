const d3 = require('d3');

const data = require('./data');

exports.screenX = d3.scaleLinear().domain([0,1]).range([0,800]);
exports.screenY = d3.scaleLinear().domain([0,1]).range([800,0]);
exports.radius = d3.scaleLinear().domain([0,1]).range([0.5, 10]);
