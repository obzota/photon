const d3 = require('d3');

const axis = require('../core/axis');
const scale = require('../core/plotscale');
const palette = require('../core/palette');

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
    let x = axis.get('x');
    let y = axis.get('y');
    let z = axis.get('z');
    let w = axis.get('w');

    circles.merge(newCircles)
        .attr('cx', (d)=>(scale.screenX(d[x])))
        .attr('cy', (d)=>(scale.screenY(d[y])))
        .attr('r', (d)=>(scale.radius(d[z])))
        .attr('stroke', (d)=>(colorScale(d[w])))
        .attr('stroke-opacity', '1.0')
        .attr('stroke-width', '1px')
        .attr('fill-opacity', '0.0');

    circles.exit().remove();
}

function clear() {
    circles = d3.select('#scene').selectAll('circle').data([]).exit().remove();
}

exports.draw = bubbleplot;

exports.undraw = clear;