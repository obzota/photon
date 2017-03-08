const d3 = require('d3');

exports.x = d3.scaleLinear().domain([-10,10]).range([0,800]);
exports.y = d3.scaleLinear().domain([-10,10]).range([800,0]);