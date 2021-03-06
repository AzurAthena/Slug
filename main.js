const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')
require('./index.js');

let win

function createWindow() {
   win = new BrowserWindow({width: 400, height: 600})
   win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))
}

app.on('ready', createWindow)
