'use strict'

const is = require('is-instance-of')

module.exports = x => { if (is(x, Error)) throw x; return x }
