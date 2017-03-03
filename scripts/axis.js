const XYZ = {
	x: 'x',
	y: 'y',
	z: 'z'
}
const YZX = {
	x: 'y',
	y: 'z',
	z: 'x'
}
const ZXY = {
	x: 'z',
	y: 'x',
	z: 'y'
}

let selectedMode = XYZ

exports.rotate = function() {
	switch(selectedMode) {
		case XYZ: selectedMode = YZX; break;
		case YZX: selectedMode = ZXY; break;
		case ZXY: selectedMode = XYZ; break;
		default: selectedMode = XYZ;
	}
}

exports.get = function (coord) {
	return selectedMode[coord];
}