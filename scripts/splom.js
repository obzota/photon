const d3 = require('d3');
const axis = require('./axis');
const palette = require('./palette');

let scaleX = d3.scaleLinear().domain([-10,10]).range([0,800]);
let scaleY = d3.scaleLinear().domain([-10,10]).range([800,0]);

exports.draw = function (data) {
	let circles = d3.select('#scene').selectAll('circle').data(buildFullData(data));
	let newCircles = circles.enter().append('circle');

	newCircles
		.attr('cx', (d) => ( scaleX( d[axis.get('x')] ) ) )
	    .attr('cy', (d) => ( scaleY( d[axis.get('y')] ) ) )
	    .attr('r', (d) => ( 0 ) )

	circles.merge(newCircles)
		.transition(500)
	    .attr('cx', (d) => ( scaleX( d[axis.get('x')] ) ) )
	    .attr('cy', (d) => ( scaleY( d[axis.get('y')] ) ) )
	    .attr('r', (d) => (3))
	    .attr('fill', (d)=>(d.color ? d.color:palette.gray))
	    .attr('fill-opacity', 0.8)
	    .attr('stroke-opacity', 0.0);

	circles.exit().remove();
}

let buildFullData = function(data) {
	let two = [];
	let three = [];

	let minZ = d3.min(data, (d)=>(d[axis.get('z')]));
	let maxX = d3.max(data, (d)=>(d[axis.get('x')]));
	let maxY = d3.max(data, (d)=>(d[axis.get('y')]));

	let offsetX = maxX - minZ+1;
	let offsetY = maxY - minZ+1;

	data.forEach(function (d) {
		let a = {};
		a[axis.get('x')] = d[axis.get('z')]+offsetX;
		a[axis.get('y')] = d[axis.get('y')];
		a.color = palette.blue;
		let b = {};
		b[axis.get('x')] = d[axis.get('x')];
		b[axis.get('y')] = d[axis.get('z')]+offsetY;
		b.color = palette.orange;

		two.push(a);
		three.push(b);
	});

	return data.concat(two.concat(three));
}