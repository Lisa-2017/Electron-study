const fs = require('fs-extra')
const dest = '../../pages/main'
fs.removeSync(dest) // 清空目标目录
fs.moveSync('./build', dest) // 将build目录中的内容移动到目标目录
// fs.moveSync('./build', '../../pages/main') // 将build目录中的内容移动到目标目录
