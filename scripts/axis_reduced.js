const abxyz = {
	a: 'a',
	b: 'b',
	x: 'x',
	y: 'y',
	z: 'z'
}

const abyzx = {
	a: 'a',
	b: 'b',
	x: 'y',
	y: 'z',
	z: 'x'
}

const abzxy = {
	a: 'a',
	b: 'b',
	x: 'z',
	y: 'x',
	z: 'y'
}

let selected = abzxy;

exports.rotate = function() {
	switch(selected) {
		case abxyz: selected = abzxy; break;
		case abyzx: selected = abxyz; break;
		case abzxy: selected = abyzx; break;
		default: abxyz;
	}
}

exports.get = function (coord) {
	return selected[coord];
}