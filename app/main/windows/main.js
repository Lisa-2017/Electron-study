const {BrowserWindow, screen} = require('electron')
const isDev = require('electron-is-dev')


let win
let willQuitApp = false
function create () {
	win = new BrowserWindow({
		width: 600,
		height: 300,
		webPreferences: {
			nodeIntegration: true, // 允许渲染进程使用node集成环境
			contextIsolation:false,  // 隔离上下文
			nodeIntegrationInWorker:true,
		}
	})
	// 设置窗口悬浮的初始位置
  const { left, top } = { left: screen.getPrimaryDisplay().workAreaSize.width - 400, top: screen.getPrimaryDisplay().workAreaSize.height - 250 }
  win.setPosition(left, top)
	// //关闭默认鼠标右键菜单（ 由于配置可拖拽属性-webkit-app-region: drag引起的）
	// win.hookWindowMessage(278,function(e){
	// 	win.setEnabled(false);
	// 	setTimeout(()=>{
	// 		win.setEnabled(true);
	// 	},100);
	// 	return true;
	// })


	win.on('close', (e) => {
			if(willQuitApp) {
					win = null
			} else {
					e.preventDefault()
					win.hide()
			}
	})

	if (isDev) {
			win.loadURL('http://localhost:3000')
	} else {
			//加载配置好的页面，约定再pages下
			win.loadFile(path.resolve(__dirname,'../../renderer/pages/main/index.html')) // 找到生产环境的path
	}
}

function send(channel, ...args) {
	win.webContents.send(channel, ...args)
}

function show() {
	win.show()
}

function close() {
	willQuitApp = true
	win.close()
}

module.exports = {create, send, show, close}
