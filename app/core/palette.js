
exports.yellow = "rgb(98%, 77%, 13%)";
exports.orange = "rgb(94%, 38%, 13%)";
exports.swampgreen = "rgb(77%, 83%, 13%)";
exports.teal = "rgb(13%, 84%, 80%)";
exports.grey = "rgb(38%, 48%, 53%)";
exports.pink = "rgb(92%, 13%, 39%)";
exports.green = "rgb(47%, 77%, 38%)";
exports.blue = "rgb(13%, 72%, 80%)";



let colors = [
	"rgb(90%, 90%, 90%)",
	"rgb(99%, 85%, 19%)",
	"rgb(16%, 99%, 47%)",
	"rgb(99%, 26%, 24%)",
	"rgb(60%, 60%, 60%)",
	"rgb(25%, 60%, 44%)",
	"rgb(51%, 86%, 99%)",
	"rgb(99%, 52%, 18%)",
	"rgb(22%, 79%, 29%)"];

exports.get = function (num) {
	return colors[num-1];
}