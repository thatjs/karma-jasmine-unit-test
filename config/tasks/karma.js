'use strict';

const { src, dest } = require('gulp');

const colors = require('colors'),
    argv = require('minimist')(process.argv.slice(2)),
    bufferToVinyl = require('buffer-to-vinyl'),
    karmaServer = require('karma').Server,
    log = require('fancy-log'),
    scan = require('gulp-scan'),
    path = require('path');

const buildNumber = argv.build || 0;

let testRun = {};

function test (done) {
    let debug = false;

    const server = new karmaServer({
        configFile: path.join(__dirname, '../../karma.conf.js'),
        singleRun: true
    }, (exitCode) => {
        log('Karma exited with ' + exitCode);
        done();
    });

    if (debug === false) {
        server.on('browser_error', (browser, err) => {
            log('Karma run failed due to browser error: ' + err);
        });
        server.on('run_complete', (browser, results) => {
            let failedTests = results.failed,
                message;

            testRun = {};
            testRun.browser = { name: browser.browsers[0].name };
            testRun.results = results;

            if (failedTests > 0) {
                message = 'Failed test count: ' + failedTests;
            } else {
                message = 'No failures';
            }

            log('Karma Run Complete: ' + colors.green(message));

            if (results.exitCode > 0) {
                log(colors.red('Failed test, exiting the build'));
                process.exit(1);
            }
        });
        // this executes before the callback on the karmaServer
        // server.on('coverage_complete', (coverageData) => {
        //     log('Karma coverage_complete event captured');
        //     log('Data: ' + coverageData);
        // });
        return server.start();
    }
}
test.description = 'execute unit tests';

function getCoverage (paths, done) {
    const fs = require('fs');
    let statements = 0,
        filename = 'statistics.json';

    src(paths.summary + '/data.txt')
        .pipe(scan({
            term: /[0-9.]{1,3}.[0-9.]{1,3}\%/,  // extract first (statements) coverage percentage
            fn: (match) => {
                statements = parseFloat(match);
                return bufferToVinyl.stream(Buffer.from(JSON.stringify({
                    build: buildNumber,
                    browser: testRun.browser.name,
                    tests: testRun.results,
                    statements: statements
                })), filename)
                .pipe(dest(paths.summary));

            }
        }));
}
getCoverage.description = 'parse statements coverage from text-summary, store in json';

exports.test = test;
exports.getCoverage = getCoverage;
