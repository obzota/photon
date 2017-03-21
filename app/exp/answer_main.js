const ipc = require('electron').ipcMain
const dialog = require('electron').dialog

ipc.on('exp-ask-user', function (event) {
  const options = {
    type: 'info',
    title: 'Information',
    message: "Please choose your answer",
    buttons: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  }
  dialog.showMessageBox(options, function (index) {
    event.sender.send('exp-user-answer', index+1)
  })
})