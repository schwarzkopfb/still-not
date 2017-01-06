'use strict'

var test = require('tap')

process.on('uncaughtException', function (ex) {
    test.equal(
        ex.message, 'undefined is not a function',
        'error message should not be updated if user has an exception handler'
    )
})

require('../')

undefined()
