# [mollusc](https://github.com/Zertz/mollusc) [![Build Status](https://travis-ci.org/Zertz/mollusc.svg?branch=master)](https://travis-ci.org/Zertz/mollusc) [![NPM version](https://badge.fury.io/js/mollusc.png)](http://badge.fury.io/js/mollusc)

> Make strings url-safe and replace unicode symbols with their name

- respecting [RFC 3986](https://tools.ietf.org/html/rfc3986)
- Comprehensive tests
- No dependencies (except the unicode table)
- Not in coffee-script (except the tests lol)
- Coerces foreign symbols to their english equivalent
- Works in browser (window.slug) and AMD/CommonJS-flavoured module loaders (except the unicode symbols unless you use browserify but who wants to download a ~2MB js file, right?)

## Install

```
npm install mollusc
```

## Usage

```js
const slug = require('mollusc')

slug('i ♥ unicode')
//= i-love-unicode

slug('unicode ♥ is ☢')
//= unicode-love-is-radioactive

slug('i ♥ unicode', '_')) // If you prefer something else then `-` as seperator
//= i_love_unicode

slug.charmap['♥'] = 'freaking love' // change default charmap or use option {charmap:{…}} as 2. argument
slug('I ♥ UNICODE')
//= i-freaking-love-unicode

slug('☏-NUMBER', {
  lower: false
})
//= telephone-NUMBER
```

## API

```js
slug(input[, options])
```

### options

#### replacement

Replace spaces with value.

Type: `string`

Default: `-`

#### symbols

Replace unicode symbols with their name.

Type: `Boolean`

Default: `true`

#### remove

Regex to remove characters.

Type: `Boolean`

Default: `null`

#### lower

Convert result to lower case.

Type: `Boolean`

Default: `true`

#### charmap

Replace special characters.

Type: `Boolean`

Default: `slug.charmap`

#### multicharmap

Replace strings with another string.

Type: `Boolean`

Default: `slug.multicharmap`

## browser

When using browserify you might want to remove the symbols table from your bundle by using `--ignore` similar to this:
```bash
# generates a standalone slug browser bundle:
browserify slug.js --ignore unicode-json/category/So -s slug > slug-browser.js
```
