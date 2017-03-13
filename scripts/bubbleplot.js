const d3 = require('d3');
const axis = require('./axis_reduced');

const scale = require('./plotscale');
const palette = require('./palette');

let colorScale = function(value) {
    return d3.rgb(250-value*200, 250-value*200, value*200+50);
}

let colorDoubleScale = function(a,b) {
    return d3.rgb(250-a*200*b, a*200*b+50, 0);
}

function bubbleplot(data) {
    circles = d3.select('#scene').selectAll('circle').data(data);
    newCircles = circles.enter().append('circle')

    // permutation of variables
    let a = axis.get('a');
    let b = axis.get('b');
    let x = axis.get('x');
    let y = axis.get('y');
    let z = axis.get('z');

    circles.merge(newCircles)
        .transition(500)
        .attr('cx', (d)=>(scale.screenX(d[a])))
        .attr('cy', (d)=>(scale.screenY(d[b])))
        .attr('r', (d)=>(scale.radius(d[x])))
        .attr('stroke', (d)=>(colorScale(d[y])))
        .attr('stroke-opacity', '1.0')
        .attr('stroke-width', '4px')
        .attr('fill-opacity', '0.0');

    circles.exit().remove();
}

exports.draw = bubbleplot;