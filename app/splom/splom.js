const d3 = require('d3');

const palette = require('../core/palette');
const scale = require('../core/plotscale');

let pointColor = function (datum, showClusters) {
	return showClusters ? palette.get(datum.v) : 'rgba(255, 255, 255, 0.8)'
}

exports.draw = function (data, showClusters) {
	debugger;
	let updatedData = buildFullData(data);
	let circles = d3.select('#scene').selectAll('circle').data(updatedData);
	let newCircles = circles.enter().append('circle');
	newCircles
		.attr('cx', (d) => ( scale.screenX( d.x ) ) )
	    .attr('cy', (d) => ( scale.screenY( d.y ) ) )

	circles.merge(newCircles)
		//.transition(500)
	    .attr('cx', (d) => ( scale.screenX( d.x ) ) )
	    .attr('cy', (d) => ( scale.screenY( d.y ) ) )
	    .attr('r', (d) => (7))
        .attr('fill', (d)=>(pointColor(d, showClusters)))
        .attr('fill-opacity', '1.0')
        //.attr('stroke-width', '2px')
        .attr('stroke-opacity', '0.0');
	    //.attr('stroke', 'red');

	circles.exit().remove();
}

exports.undraw = function () {
	circles = d3.select('#scene').selectAll('circle').data([]).exit().remove();
}

let buildFullData = function(data) {
	//	 x [1][2][4]
	//	    y [3][5]
	//	       z [6]
	//	          w
	let one = [];
	let two = [];
	let three = [];
	let four = [];
	let five = [];
	let six = [];

	let offset = 1;
	let n = data.length;

	data.forEach(function (datum, index) {
		let a = {}, b={}, c={}, d={}, e={}, f={};
		one.push(a);
		two.push(b);
		three.push(c);
		four.push(d);
		five.push(e);
		six.push(f);

		let color = d3.rgb(
			datum.x*datum.w*200+55,
			datum.y*datum.w*200+55,
			datum.z*datum.w*200+55).toString();

		a.x = datum.y;
		a.y = datum.x;
		a.v = datum.v; // transfer cluster id
		a.color = color;//d3.interpolateWarm(index/n);

		b.x = datum.z+offset;
		b.y = datum.x;
		b.v = datum.v; // transfer cluster id
		b.color = a.color;


		c.x = datum.z+offset;
		c.y = datum.y+offset;
		c.v = datum.v; // transfer cluster id
		c.color = a.color;

		d.x = datum.w+2*offset;
		d.y = datum.x;
		d.v = datum.v; // transfer cluster id
		d.color = a.color;

		e.x = datum.w+2*offset;
		e.y = datum.y+offset;
		e.v = datum.v; // transfer cluster id
		e.color = a.color;

		f.x = datum.w+2*offset;
		f.y = datum.z+2*offset;
		f.v = datum.v; // transfer cluster id
		f.color = a.color;
	});

	return one.concat(two.concat(three.concat(four.concat(five.concat(six)))));
}