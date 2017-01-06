'use strict'

module.exports = undefined

process.on('uncaughtException', onuncaught)

function onuncaught(ex) {
    if (process.listeners('uncaughtException').length > 1)
        return

    if (ex instanceof TypeError && ex.message === 'undefined is not a function')
        ex.message = 'undefined is _still_ not a function'

    console.error(ex.stack)
    process.exit(1)
}
