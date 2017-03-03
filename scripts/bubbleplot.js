const d3 = require('d3');
const axis = require('./axis');

let scaleRadius = d3.scaleLinear().domain([-10, 10]).range([1, 10]);
let scaleX = d3.scaleLinear().domain([-10,10]).range([0,800]);
let scaleY = d3.scaleLinear().domain([-10,10]).range([800,0]);

const palette = require('./palette');

function bubbleplot(data) {
	circles = d3.select('#scene').selectAll('circle').data(data);
	newCircles = circles.enter().append('circle')

	circles.merge(newCircles)
		.transition(500)
	    .attr('cx', (d)=>(scaleX(d[axis.get('x')])))
	    .attr('cy', (d)=>(scaleY(d[axis.get('y')])))
	    .attr('r', (d)=>(scaleRadius(d[axis.get('z')])))
	    .attr('stroke', palette.orange)
	    .attr('stroke-opacity', '0.8')
	    .attr('fill-opacity', '0.0');

	circles.exit().remove();
}

exports.draw = bubbleplot;