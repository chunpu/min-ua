min-ua
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]

[npm-image]: https://img.shields.io/npm/v/min-ua.svg?style=flat-square
[npm-url]: https://npmjs.org/package/min-ua
[downloads-image]: http://img.shields.io/npm/dm/min-ua.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/min-ua
[david-image]: http://img.shields.io/david/chunpu/min-ua.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/min-ua


Mini Javascript User Agent Detect Library

Installation
---

```sh
npm i min-ua
```

Inspired by [ua-device](https://github.com/fex-team/ua-device)

Get raw user agent string from [useragentstring](http://www.useragentstring.com/pages/useragentstring.php)

Support **IE6+**

### Browser Name

- IE
- Edge
- Chrome
- Firefox
- Safari

### Example

```js
var UA = require('min-ua')

var userAgent = UA.detect(navigator.userAgent)

console.log(userAgent)
// => {browserName: 'IE', browserVersion: 8}
```

License
---

[![License][license-image]][license-url]

[license-image]: http://img.shields.io/npm/l/min-ua.svg?style=flat-square
[license-url]: #
