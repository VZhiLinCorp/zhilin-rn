#!/usr/bin/env node
var THEME_KEY = 'theme'
var FONTS_KEY = 'fonts-path'

var path = require('path')
var fs = require('fs')
var cwd = process.cwd()
var repositoryPath = require.resolve('zhilin-rn')

var pkg = JSON.parse(fs.readFileSync(resolve('package.json')).toString('utf8'))

var customThemePath = resolve(pkg[THEME_KEY])
var fontsPath = resolve(pkg[FONTS_KEY])

//theme
var customTheme = require(customThemePath) || {}
var themePath = path.resolve(repositoryPath, '../../theme.js')
var theme = {}
var result = Object.assign({}, theme, customTheme)
if (fs.existsSync(themePath)) {
    fs.writeFileSync(themePath, `export default ${JSON.stringify(result)}`)
}

//iconfont
var generateIconSetFromCss = require('react-native-vector-icons/lib/generate-icon-set-from-css');
var iconfontCss = path.resolve(fontsPath, 'iconfont.css')
var iconfontJson = resolveRepository('icons/iconfont.json')
var sourceTtf = path.resolve(fontsPath, 'iconfont.ttf')
var targetTtf = path.resolve('node_modules/react-native-vector-icons/Fonts/iconfont.ttf')

var iconSet = generateIconSetFromCss(iconfontCss, 'icon-')
fs.writeFileSync(iconfontJson, iconSet)
fs.copyFileSync(sourceTtf, targetTtf)

console.log('______', targetTtf)

function resolve(p) {
    return path.resolve(cwd, p)
}
function resolveRepository(p) {
    return path.resolve(repositoryPath, '../..', p)
}
