#!/usr/bin/env node
var path = require('path')
var fs = require('fs')

var TAGET = 'theme'
var root = path.join(__dirname, '../../../')
var pkg = fs.readFileSync(path.resolve(root, 'package.json')).toString('utf8')
var pkgThemePath = JSON.parse(pkg)[TAGET]
var customThemePath = path.resolve(root, pkgThemePath)

var customTheme = require(customThemePath) || {}
var themePath = path.resolve(require.resolve('zhilin-rn'), '../../theme.js')
// var theme = require(themePath)
var theme = {}
var result = Object.assign({}, theme, customTheme)
if (fs.existsSync(themePath)) {
    fs.writeFileSync(themePath, `export default ${JSON.stringify(result)}`)
}