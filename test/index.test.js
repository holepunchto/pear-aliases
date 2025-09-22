'use strict'
const test = require('brittle')
const { ALIASES, EOLS } = require('..')
test('ALIASES contains key buffers', (t) => {
  t.ok(Object.values(ALIASES).every((key) => key instanceof Buffer))
})
test('EOLS contains arrays of buffers', (t) => {
  t.ok(
    Object.values(EOLS).every(
      (arr) => Array.isArray(arr) && arr.every((key) => key instanceof Buffer)
    )
  )
})
