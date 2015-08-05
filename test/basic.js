var lib = require('../')
var test = require('tape')

test('Are feross and mafintosh stuck in an elevator?', function (t) {
  t.plan(1)

  t.equal(lib(), false)
})
