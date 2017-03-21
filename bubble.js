const electron = require('electron')
const app = electron.app

require('./app/exp/answer_main')
const win = require('./window')

app.on('ready', () => (win.create('bubble.html')));
