const query = require('jquery')

const box = query('textbox')

exports.message = function (text) {
	box.html(text);
}

exports.clear = function () {
	box.html("");
}

