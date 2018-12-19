var fs = require('fs')
var path = require('path')
var writeJs = fs.createWriteStream(path.resolve(__dirname, '../styles/mp.js'))
var writeTs = fs.createWriteStream(path.resolve(__dirname, '../styles/mp.d.ts'))

var types = ['m', 'p']
var directions = ['t', 'r', 'b', 'l', 'v', 'p']
var size = ['xs', 'sm', 'n', 'md']

function getMorP(p, n, d = 'trbl') {
    var directionMap = {
        t: 'Top',
        r: 'Right',
        b: 'Bottom',
        l: 'Left'
    }
    var data = {}
    var prefix = ['margin', 'padding'][p]

    var _directions = d.split('')
    _directions.forEach(d => {
        data[prefix + directionMap[d]] = n
    })

    return data
}

var sizeMap = {
    xs: 5,
    sm: 10,
    n: 15,
    md: 20,
    big: 25,
    lg: 30
}

module.exports = function (done) {





    types.forEach((t, index) => {
        directions.forEach(d => {
            size.forEach(s => {
                writeJs.write(`export const ${t}${d}_${s} = ${JSON.stringify(getMorP(index, sizeMap[s], getRealDirection(d)))} \n`)
                writeTs.write(`export declare const ${t}${d}_${s}: object \n`)
            })
        })
    })
    function getRealDirection(d) {
        d = d === 'v' ? 'tb' : d
        d = d === 'p' ? 'lr' : d
        return d
    }
    done()
}
