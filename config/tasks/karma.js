'use strict';

let colors = require('colors');
let karma = require('karma');
let log = require('fancy-log');
let path = require('path');

function test(done) {
    let karmaServer = new karma.Server({
        configFile: path.join(__dirname, '../../karma.conf.js'),
        singleRun: true
    }, (exitCode) => {
        exitCode ? process.exit(exitCode) : done();
    }).start();
}

exports.test = test;
