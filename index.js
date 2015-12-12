var encode = require('punycode2/ucs2/encode')

// The standard being ISO 3166-2 alpha-2.
var standard = /^[A-Z]{2}$/

// The decimal code for “Regional Indicator Symbol Letter A”
// minus the decimal code for “Latin Capital Letter A.”
var base = 127462 - 65

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
