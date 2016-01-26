# emoji-flag

This is a simple module that takes an [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) and returns the [regional indicator symbol](https://en.wikipedia.org/wiki/Regional_Indicator_Symbol) pair that corresponds to a given emoji flag.

[![Build status](https://travis-ci.org/michaelrhodes/emoji-flag.png?branch=master)](https://travis-ci.org/michaelrhodes/emoji-flag)

## Install

```sh
$ npm install emoji-flag
```

## Usage

```js
var flag = require('emoji-flag')
var code = require('emoji-flag/to-country-code')

flag('AU')
=> 🇦🇺

flag('CA')
=> 🇨🇦

code('🇦🇺')
=> 'AU'

code('🇨🇦')
=> 'CA'

code(flag('AU'))
=> 'AU'

// and so on…
```

## Example

```js
var flag = require('emoji-flag')
var countries = require('country-list/data')

countries.slice(0, 5).forEach(function (country) {
  console.log(
    country.code, flag(country.code), country.name
  )
})

=>
AF 🇦🇫   Afghanistan
AX 🇦🇽  Åland Islands
AL 🇦🇱   Albania
DZ 🇩🇿   Algeria
AS 🇦🇸   American Samoa
```

### Page weight (browserified)

| compression          |    size |
| :------------------- | ------: |
| emoji-flag.js        | 1.76 kB |
| emoji-flag.min.js    |   925 B |
| emoji-flag.min.js.gz |   502 B |


## What about the `emoji-flags` module?!

This has a simpler implementation and API. You should use `emoji-flags` if you need meta information about a given flag.

## License

[MIT](http://opensource.org/licenses/MIT)
