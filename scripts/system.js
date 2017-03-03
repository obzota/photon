const electron = require('electron');

const ipc = electron.ipcMain;
const globalShortcut = electron.globalShortcut;
const dialog = electron.dialog;
const app =

mainWindow = null;

// to select file from the system
exports.register = function (mw) {
	mainWindow = mw;

	globalShortcut.register('Shift+CommandOrControl+O', function () {
		dialog.showOpenDialog({
			properties: ['openFile', 'openDirectory']
		}, function (files) {
			if (files) mainWindow.webContents.send('selected-directory', files)
		})
	});

	ipc.on('data-loaded', function (event) {
		mainWindow.webContents.send('command-render');
	});

	globalShortcut.register('Shift+CommandOrControl+R', function() {
		mainWindow.webContents.send('command-rotate');
	});
}