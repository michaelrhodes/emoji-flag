var test = require('tape')
var decode = require('punycode2/ucs2/decode')
var flag = require('./')

test('it works', function (assert) {
  var emoji = flag('AU')
  assert.deepEqual(decode(emoji), [127462, 127482])
  assert.end()
})

test('it does not tolerate lowercase', function (assert) {
  var emoji = flag('au')
  assert.equal(emoji, void(0))
  assert.end()
})
