const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu
const MenuItem = electron.MenuItem
const ipc = electron.ipcMain
const app = electron.app

let menu = new Menu()

menu.append(new MenuItem({
	label: 'Bubble',
	type: 'radio',
	checked: true,
	click: function (item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.webContents.send("draw-bubble");
      }
    }
}));

menu.append(new MenuItem({
	label: 'Scatterplot matrix',
	type: 'radio',
	click: function (item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.webContents.send("draw-splom");
      }
    }
}));

menu.append(new MenuItem({
  type: 'separator'
}));

menu.append(new MenuItem({
  label: 'Show centers',
  click: function (item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.webContents.send("toggle-cluster");
      }
    }
}));

app.on('browser-window-created', function (event, win) {
  win.webContents.on('context-menu', function (e, params) {
    menu.popup(win, params.x, params.y)
  })
})
