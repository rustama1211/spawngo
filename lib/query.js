'use strict'

const HELPERS = require('./helpers')

exports.import = function (data) {
  return `${HELPERS.generateHost(data)} --db ${data.db} ${HELPERS.generateAuth(data)} -c ${data.collection}
          ${HELPERS.generateDrop(data.drop)} ${HELPERS.generateInsertionWorkers(data.cpus)}
          ${HELPERS.generateType(data.file)} ${HELPERS.generateHeaderline(data)}
          ${HELPERS.generateJSONArray(data)} ${HELPERS.generateUpsertFields(data.upsertFields)}
          --file ${data.file}`.replace(/\s+/g, ' ')
}

exports.export = function (data) {
  return `${HELPERS.generateHost(data)} --db ${data.db} ${HELPERS.generateAuth(data)} -c ${data.collection}
          ${HELPERS.generateJSONArray(data)} ${HELPERS.generateType(data.file ?  data.file : `${data.collection}.json`)}
          -o ${data.file ? data.file : `${data.collection}.json` } ${HELPERS.generateCsvFields(data)}`.replace(/\s+/g, ' ')
}
