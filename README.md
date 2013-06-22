# slugify string

slugifies every string, even when it contains unicode!

## example

```bash
master//node-slug » node
> slug = require ('./slug')
> slug('i ♥ unicode')
 'i-love-unicode'
> slug('i ♥ unicode', '_') # If you prefer something else then `-` as seperator
 'i_love_unicode'
> slug.charmap['♥'] = 'freaking love' # change default charmap or use option {charmap:{…}} as 2. argument
> slug('I ♥ UNICODE').toLowerCase() # If you prefer lower case
 'i-freaking-love-unicode'
```

[![Build Status](https://secure.travis-ci.org/dodo/node-slug.png)](http://travis-ci.org/dodo/node-slug)