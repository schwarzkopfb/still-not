[![view on npm](http://img.shields.io/npm/v/still-not.svg?style=flat-square)](https://www.npmjs.com/package/still-not)
[![downloads per month](http://img.shields.io/npm/dm/still-not.svg?style=flat-square)](https://www.npmjs.com/package/still-not)
[![node version](https://img.shields.io/badge/node-%3E=0.10-brightgreen.svg?style=flat-square)](https://nodejs.org/download)
[![build status](https://img.shields.io/travis/schwarzkopfb/still-not.svg?style=flat-square)](https://travis-ci.org/schwarzkopfb/still-not)
[![test coverage](https://img.shields.io/coveralls/schwarzkopfb/still-not.svg?style=flat-square)](https://coveralls.io/github/schwarzkopfb/still-not)
[![license](https://img.shields.io/npm/l/still-not.svg?style=flat-square)](/LICENSE)

# still-not

undefined is not a function and it's likely to remain so forever

## Usage

```js
require('still-not')

undefined()
```

And then stack traces related of uncaught exceptions will look similar to the following:

```
TypeError: undefined is _still_ not a function
    at Object.<anonymous> (/Users/schwarzkopfb1/Projects/still-not/test/basic.js:9:5)
    at Module._compile (module.js:460:26)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Function.Module.runMain (module.js:501:10)
    at startup (node.js:129:16)
    at node.js:814:3
```

## Installation

With npm:

    npm install still-not

## Tests

Run the unit test suite:

    npm test

Run unit tests and create coverage report:

    npm run cover && open ./coverage/lcov-report/index.html

## License

[MIT](/LICENSE)
