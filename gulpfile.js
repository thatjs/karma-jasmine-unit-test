'use strict';

const { task, series, parallel } = require('gulp');

let colors = require('colors');
let del = require('del');
let log = require('fancy-log');

let karma = require('./config/tasks/karma');

let paths = {
    target: 'target'
};


// tasks
function clean (done) {
    return del([paths.target]);
}
clean.description = 'Remove build directories and files';

function test (done) {
    log(colors.green('Run Karma unit tests'));
    karma.test(done);
    done();
}
test.description = 'Run Karma unit tests';

function build (done) {
    log(colors.green('build task'));
    done();
}
build.description = 'Build the project';
build.flags = { '-e': 'An example flag' };


// expose gulp tasks
exports.build = build;
exports.default = build;

exports.clean = clean;
exports.test = test;
