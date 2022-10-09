const openAboutWindow = require('about-window').default
const path = require('path')

const create = () => openAboutWindow({
    icon_path: path.join(__dirname, 'icon.png'),
    copyright: 'Copyright (c) 2022 dragon',
    package_json_dir: path.resolve(__dirname, './../../../'),
})

module.exports = {create}
