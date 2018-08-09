# any-match [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Monitor][greenkeeper-image]][greenkeeper-url]

> Determine if a single match exists with an array of strings/numbers/regexes.


## Installation

[Node.js](http://nodejs.org/) `>= 6` is required. To install, type this at the command line:
```shell
npm install any-match
```


## Usage

```js
const anyMatch = require('any-match');

anyMatch('a', ['a', 'b']);  //-> true
anyMatch('c', ['a', 'b']);  //-> false

anyMatch(1, [0, 1]);  //-> true

anyMatch('abc', [/^abc$/]);  //-> true
```


[npm-image]: https://img.shields.io/npm/v/any-match.svg
[npm-url]: https://npmjs.com/package/any-match
[travis-image]: https://img.shields.io/travis/stevenvachon/any-match.svg
[travis-url]: https://travis-ci.org/stevenvachon/any-match
[greenkeeper-image]: https://badges.greenkeeper.io/stevenvachon/any-match.svg
[greenkeeper-url]: https://greenkeeper.io/
