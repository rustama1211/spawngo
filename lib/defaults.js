'use strict'

const CPUs = require('os').cpus()

module.exports = function () {
  return Object.seal({
    'uri': '',
    'host': 'localhost',
    'user': '',
    'pwd': '',
    'db': '',
    'collection': '',
    'jsonArray': true,
    'upsertFields': undefined,
    'cpus': CPUs.length,
    'drop': false
  })
}
