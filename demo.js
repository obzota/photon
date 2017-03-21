const electron = require('electron')
const app = electron.app;

const win = require('./window');
const menu = require('./app/system/context_menu')


app.on('ready', () => (win.create('demo.html')));