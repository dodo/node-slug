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
```

[![Build Status](https://secure.travis-ci.org/dodo/node-slug.png)](http://travis-ci.org/dodo/node-slug)