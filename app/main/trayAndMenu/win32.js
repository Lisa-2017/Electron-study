const { app, Menu, Tray  } = require('electron')
const path = require('path')
const {show: showMainWindow} = require('../windows/main')
const {create: createAboutWindow}= require('../windows/about')

// let tray = null;
app.whenReady().then(() => {
    tray = new Tray(path.resolve(__dirname, './icon_win32.png'))
    const contextMenu = Menu.buildFromTemplate([
        { label: '打开OCR',click: showMainWindow},
        { label: '关于OCR', click: createAboutWindow},
        { type: 'separator' },
        { label: '退出', click: () => {app.quit()}}
    ])
    tray.setContextMenu(contextMenu)
    tray.on('click',()=>{
        showMainWindow()
    })
    menu = Menu.buildFromTemplate([])
    app.applicationMenu = menu;
})
