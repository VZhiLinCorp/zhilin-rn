#!/usr/bin/env node
var path = require('path')
var fs = require('fs')

var TAGET = 'theme'
// var root = path.resolve(__dirname, '../../')

var pkg = fs.readFileSync(path.resolve('package.json')).toString('utf8')
var pkgThemePath = JSON.parse(pkg)[TAGET]
var customThemePath = path.resolve(pkgThemePath)

var customTheme = require(customThemePath) || {}
var themePath = path.resolve(require.resolve('zhilin-rn'), '../../theme.js')
// var theme = require(themePath)
var theme = {}
var result = Object.assign({}, theme, customTheme)
if (fs.existsSync(themePath)) {
    fs.writeFileSync(themePath, `export default ${JSON.stringify(result)}`)
}
console.log('_________',__dirname)