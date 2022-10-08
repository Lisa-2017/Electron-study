// const {app, BrowserWindow} = require('electron')
// const path = require('path')
// const handleIPC = require('./ipc')
// const {create: createMainWindow} = require('./windows/main')
// // const {create: createControlWindow} = require('./windows/control')

// app.on('ready', () => {
//     // createControlWindow()
//     createMainWindow()
//     handleIPC()
//     require('./robot.js')()
// })


const {app, BrowserWindow} = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
let win
app.on('ready',()=>{
  win = new BrowserWindow({
    width:600,
    height:300,
    webPreferences:{
      nodeIntegration:true,
      contextIsolation: false,
    }
  })

  if(isDev){
    win.loadURL('http://localhost:3000')
  }else{
    //加载配置好的页面，约定再pages下
    win.loadFile(path.resolve(__dirname,'../renderer/pages/main/index.html')) // 找到生产环境的path
  }

})