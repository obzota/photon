const d3 = require('d3');

const axis = require('./axis');
const scale = require('./plotscale');

let greyscale = function(z) {
	let scale = d3.scaleLinear().domain([-10,10]).range([50, 250]);
	let x  = Math.floor(scale(z));
	//return "rgb("+(250-x)+","+(250-x)+","+x+")"
	return "rgb("+x+","+x+","+x+")"
}

function greyscaleplot(data) {

	let circles = d3.select('#scene').selectAll('circle').data(data);
	let newCircles = circles.enter().append('circle')

	circles.merge(newCircles)
		.transition(500)
	    .attr('cx', (d)=>(scale.x(d[axis.get('x')])))
	    .attr('cy', (d)=>(scale.y(d[axis.get('y')])))
	    .attr('r', (d)=>(3))
	    .attr('stroke-opacity', '0.0')
	    .attr('fill', (d)=>(greyscale(d[axis.get('z')])))
	    .attr('fill-opacity', '1.0');

	circles.exit().remove();
}

exports.draw = greyscaleplot;