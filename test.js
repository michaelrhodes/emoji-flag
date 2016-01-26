var test = require('tape')
var decode = require('punycode2/ucs2/decode')
var flag = require('./')
var code = require('./to-country-code')

test('emoji-flag works', function (assert) {
  var emoji = flag('AU')
  assert.deepEqual(decode(emoji), [127462, 127482])
  assert.end()
})

test('emoji-flag does not tolerate lowercase', function (assert) {
  var emoji = flag('au')
  assert.equal(emoji, void(0))
  assert.end()
})

test('to-country-code works', function (assert) {
  assert.equal(code('🇦🇺'), 'AU')
  assert.end()
})

test('to-country-code does not tolerate non-flag emoji', function (assert) {
  assert.equal(code('💻'), void(0))
  assert.end()
})

test('both function interoperate', function (assert) {
  assert.equal(code(flag('AU')), 'AU')
  assert.end()
})
