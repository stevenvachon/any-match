# any-match [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][david-image]][david-url]

> Match a value against an Array of strings/numbers/regexes.


## Installation

[Node.js](http://nodejs.org/) `>= 4` is required. To install, type this at the command line:
```shell
npm install any-match
```


## Usage

```js
const anyMatch = require('any-match');

anyMatch('a', ['a','b']);  //-> true
anyMatch('c', ['a','b']);  //-> false

anyMatch(1, [0,1]);  //-> true

anyMatch('abc', [/^abc$/]);  //-> true
```


[npm-image]: https://img.shields.io/npm/v/any-match.svg
[npm-url]: https://npmjs.org/package/any-match
[travis-image]: https://img.shields.io/travis/stevenvachon/any-match.svg
[travis-url]: https://travis-ci.org/stevenvachon/any-match
[david-image]: https://img.shields.io/david/stevenvachon/any-match.svg
[david-url]: https://david-dm.org/stevenvachon/any-match
