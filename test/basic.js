'use strict'

var dirname = require('path').dirname,
    exec    = require('child_process').exec,
    test    = require('tap')

require('../')

if (process.env.TEST_STILL_NOT_A_FUNCTION)
    undefined()
else {
    test.plan(2)

    var args = [ 'cover', __filename, '--report', 'none', '--print', 'none', '--include-pid' ].join(' ')

    exec('./node_modules/.bin/istanbul ' + args, {
        env: {
            PATH: process.env.PATH,
            TEST_STILL_NOT_A_FUNCTION: 1
        }
    }, onexit)
}

function onexit(err, stdout, stderr) {
    test.type(err, Error, 'process should fail')
    test.match(stderr, /undefined is _still_ not a function/i, 'error message should be overridden')
}
