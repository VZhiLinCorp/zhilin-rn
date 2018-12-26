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
function getPath(p) {
    return path.resolve(__dirname, '..', p)
}
module.exports = function (done) {

    fs.readdir(getPath('src'), function (err, files) {
        files.forEach(function (f) {
            fs.rmdir(getPath(f), function (err) {
                copyDir(getPath('src/' + f), getPath(f))
            })
        })
    })

    done()
}

function removeDir(dir) {
    var files = fs.readdirSync(dir)
    files.forEach(function (f) {
        f = path.resolve(dir, f)
        var stat = fs.statSync(f)
        if (stat.isDirectory()) {
            removeDir(f)
        } else {
            fs.unlinkSync(f)
        }
    })
    fs.rmdirSync(dir)
}

var child_process = require('child_process');


// function copyDir(src, dist) {
//     var child = child_process.spawn('cp', ['-r', src, dist]);
//     child.stdout.on('data', (data) => {
//         console.log(`stdout: ${data}`);
//     });
//     child.stderr.on('data', (data) => {
//         console.log(`stderr: ${data}`);
//     });

//     child.on('exit', function (code, signal) {
//         console.log('child process exited with ' +
//             `code ${code} and signal ${signal}`);
//     });
// }

function copyDir(src, dist) {
    fs.stat()
    var files = fs.readdirSync(src)
    files.forEach(function (f) {
        var _src = path.resolve(src, f)
        var _dist = path.resolve(dist, f)

        var stat = fs.statSync(_src)
        if (stat.isDirectory()) {
            copyDir(_src, _dist)
        } else {
            // fs.copyFileSync(_src, _dist)
            fs.createReadStream(_src).pipe(fs.createWriteStream(_dist));
        }
    })
}