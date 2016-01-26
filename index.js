var encode = require('punycode2/ucs2/encode')
var base = require('./base')

// The standard being ISO 3166-2 alpha-2.
var standard = /^[A-Z]{2}$/

function flag (country) {
  if (!standard.test(country)) {
    return
  }

  return encode(
    country.split('').map(function (letter) {
      return base + letter.charCodeAt(0)
    })
  )
}

module.exports = flag
