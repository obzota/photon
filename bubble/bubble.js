const electron = require('electron')
const app = electron.app

require('../app/exp/answer_main')
const win = require('../window')

app.on('ready', () => (win.create('./bubble/bubble.html')));


// function main() {
// 	// loop
// 	while(true) {
// 		// send number

// 		// receive time
// 		// ask answer
// 	}
// }

//   process.stdin.resume();
//   process.stdin.setEncoding('utf8');
//   var util = require('util');

//   process.stdin.on('data', function (text) {
//     console.log('received data:', util.inspect(text));
//     if (text === 'quit\n') {
//       done();
//     }
//   });

//   function done() {
//     console.log('Now that process.stdin is paused, there is nothing more to do.');
//     process.exit();
//   }
