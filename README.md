# any-match [![NPM Version][npm-image]][npm-url] ![Build Status][ghactions-image] [![Coverage Status][codecov-image]][codecov-url]

> Determine if a single match exists with an array of strings, numbers, and/or `RegExp`s.

## Install

```shell
npm install any-match
```

## Usage

```js
import anyMatch from 'any-match';

anyMatch('a', ['a', 'b']); //-> true
anyMatch('c', ['a', 'b']); //-> false

anyMatch(1, [0, 1]); //-> true

anyMatch('abc', [/^abc$/]); //-> true
```

The following was changed from v2.x:

```js
anyMatch(1, ['0', '1']); //-> false
anyMatch('1', [0, 1]); //-> false
anyMatch(123, [/^123$/]); //-> false
```

[npm-image]: https://img.shields.io/npm/v/any-match
[npm-url]: https://npmjs.com/package/any-match
[ghactions-image]: https://img.shields.io/github/actions/workflow/status/stevenvachon/any-match/test.yml
[codecov-image]: https://img.shields.io/codecov/c/github/stevenvachon/any-match
[codecov-url]: https://app.codecov.io/github/stevenvachon/any-match
