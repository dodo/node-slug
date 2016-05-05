# 1.0.0

* Default to RFC 3986 compliant options
* Removed `pretty` mode
* Removed `options.mode`
* Removed `replacement` as second argument, use `slug(input, { replacement: '' })`
* Removed default `multicharmap`, it was previously set to: `{ '<3': 'love', '&&': 'and', '||': 'or', 'w/': 'with' }`
* Dropped Node.js 0.10 support, now compatible with 0.12, 4, 5 and 6
