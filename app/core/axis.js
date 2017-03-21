const wxyz = {
	w: 'w',
	x: 'x',
	y: 'y',
	z: 'z'
}
const wxzy = {
	w: 'w',
	x: 'x',
	y: 'z',
	z: 'y'
}
const wyzx = {
	w: 'w',
	x: 'y',
	y: 'z',
	z: 'x'
}
const xyzw = {
	w: 'x',
	x: 'y',
	y: 'z',
	z: 'w'
}
const xywz = {
	w: 'x',
	x: 'y',
	y: 'w',
	z: 'z'
}
const xzwy = {
	w: 'x',
	x: 'z',
	y: 'w',
	z: 'y'
}
const yzwx = {
	w: 'y',
	x: 'z',
	y: 'w',
	z: 'x'
}
const yzxw = {
	w: 'y',
	x: 'z',
	y: 'x',
	z: 'w'
}
const ywxz = {
	w: 'y',
	x: 'w',
	y: 'x',
	z: 'z'
}
const zwxy = {
	w: 'z',
	x: 'w',
	y: 'x',
	z: 'y'
}
const zwyx = {
	w: 'z',
	x: 'w',
	y: 'y',
	z: 'x'
}
const zxyw = {
	w: 'z',
	x: 'x',
	y: 'y',
	z: 'w'
}

let selected = 0;

let modes = [ wxyz, wxzy, wyzx, xyzw, xywz, xzwy, yzwx, yzxw, ywxz, zwxy, zwyx, zxyw ];
let n = 12;

exports.rotate = function() {
	selected = (selected + 1) % 12;
}

exports.unrotate = function() {
	if (selected == 0) selected = 12
	selected -= 1;
}

exports.get = function (coord) {
	return modes[selected][coord];
}







