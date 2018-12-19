var requireDir = require('require-dir');
const { series } = require('gulp');
var dir = requireDir('./tasks');
const { mp, test } = dir



function defaultTask(cb) {
    cb();
}

exports.default = series(mp, test, defaultTask)