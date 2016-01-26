var decode = require('punycode2/ucs2/decode')
var base = require('./base')

var flag = /^\ud83c[\udde6-\uddff]\ud83c[\udde6-\uddff]$/

function code (emoji) {
  if (!flag.test(emoji)) {
    return
  }

  return decode(emoji).map(function (charCode) {
    return String.fromCharCode(charCode - base)
  }).join('')
}

module.exports = code
