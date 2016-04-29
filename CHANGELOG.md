# 1.0.0

* Default to RFC 3986 compliant options
* Removed `pretty` mode
* Removed `options.mode`
* Removed `replacement` as second argument, use `slug(input, { replacement: '' })`
* Removed default `multicharmap`, it was previously set to: `{ '<3': 'love', '&&': 'and', '||': 'or', 'w/': 'with' }`
