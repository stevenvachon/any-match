import anyMatch from './index.js';
import { expect, it } from 'vitest';

it('supports numbers', () => {
  const haystack = [0, 1];
  expect(anyMatch(0, haystack)).toBe(true);
  expect(anyMatch(1, haystack)).toBe(true);
  expect(anyMatch(2, haystack)).toBe(false);
});

it('supports strings', () => {
  const haystack = ['a', 'b'];
  expect(anyMatch('a', haystack)).toBe(true);
  expect(anyMatch('b', haystack)).toBe(true);
  expect(anyMatch('c', haystack)).toBe(false);
});

it('supports regular expressions', () => {
  const haystack = [/^[a-z]$/, /^[A-Z]$/, /^12\d+$/];
  expect(anyMatch('a', haystack)).toBe(true);
  expect(anyMatch('A', haystack)).toBe(true);
  expect(anyMatch('123', haystack)).toBe(true);
  expect(anyMatch('124', haystack)).toBe(true);
  expect(anyMatch(123, haystack)).toBe(false);
  expect(anyMatch(124, haystack)).toBe(false);
  expect(anyMatch('xyz', haystack)).toBe(false);
});

it('supports a mix of numbers, strings and regular expressions', () => {
  const haystack = ['a', /^[A-Z]$/, 123];
  expect(anyMatch('a', haystack)).toBe(true);
  expect(anyMatch('B', haystack)).toBe(true);
  expect(anyMatch(123, haystack)).toBe(true);
  expect(anyMatch('123', haystack)).toBe(false);
  expect(anyMatch(124, haystack)).toBe(false);
});

it('rejects non-array haystacks', () =>
  ['string', Symbol(), {}, /regex/, true, 1, 1n, function () {}, () => {}, null, undefined].forEach(
    erroneous => expect(() => anyMatch('a', erroneous)).toThrow(TypeError)
  ));
