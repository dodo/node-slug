// FIXME nodejs only atm
var slug = require('./slug');

// remove periods and quotation marks to be SEO friendly
slug.defaults.remove = /[.'"]/g;

module.exports = slug;
