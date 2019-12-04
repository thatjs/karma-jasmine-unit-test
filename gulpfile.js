'use strict';

const { task, series, parallel } = require('gulp');

const startTime = +new Date(),
    colors = require('colors'),
    del = require('del'),
    log = require('fancy-log'),
    argv = require('minimist')(process.argv.slice(2)),

    karma = require('./config/tasks/karma'),

    paths = {
        target: 'target',
        summary: 'target/coverage/summary'
    };

const buildNumber = argv.build || 0;


// public tasks
// ============
function clean (done) {
    return del([paths.target]);
}
clean.description = 'Remove build directories and files';


function unitTests (done) {
    log(colors.green('Run Karma unit tests'));
    karma.test(done);
}
unitTests.description = 'Run Karma unit tests';


function build (done) {
    log(colors.green('build task'));
    done();
}
build.description = 'Build the project';
build.flags = { '-e': 'An example flag' };


function coverage (done) {
    karma.getCoverage(paths, done);
    done();
}
coverage.description = 'Compare branch coverage to trunk, if >= pass else fail build';


function totalTime (done) {
    let totalTime = new Date(+new Date() - startTime);
    log('===');
    log('=== total build time = ' + colors.green(totalTime / 1000) + ' sec ===');
    done();
}
totalTime.description = 'create an empty stream';


// aggregates
// ==========
const test = series(
    clean,
    unitTests,
    coverage,
    totalTime
);


// expose public api
// =================
exports.build = build;
exports.default = build;

exports.clean = clean;
exports.test = test;
exports.coverage = coverage;
