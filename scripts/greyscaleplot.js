const d3 = require('d3');
const axis = require('./axis');

let greyscale = function(z) {
	let scale = d3.scaleLinear().domain([-10,10]).range([50, 250]);
	let x  = Math.floor(scale(z));
	return "rgb("+x+","+x+","+x+")"
}

let scaleX = d3.scaleLinear().domain([-10,10]).range([0,800]);
let scaleY = d3.scaleLinear().domain([-10,10]).range([800,0]);

function greyscaleplot(data) {

	let circles = d3.select('#scene').selectAll('circle').data(data);
	let newCircles = circles.enter().append('circle')

	circles.merge(newCircles)
		.transition(500)
	    .attr('cx', (d)=>(scaleX(d[axis.get('x')])))
	    .attr('cy', (d)=>(scaleY(d[axis.get('y')])))
	    .attr('r', (d)=>(3))
	    .attr('stroke-opacity', '0.0')
	    .attr('fill', (d)=>(greyscale(d[axis.get('z')])))
	    .attr('fill-opacity', '1.0');

	circles.exit().remove();
}

exports.draw = greyscaleplot;