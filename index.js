import isRegExp from 'is-regexp';

/**
 * Determine if a single match exists with an array of strings, numbers, and/or `RegExp`s.
 * @param {number | string} needle The value to find in `haystack`.
 * @param {(number | string | RegExp)[]} haystack The values to search.
 */
export default (needle, haystack) =>
  haystack.some(strand =>
    isRegExp(strand) && typeof needle === 'string' ? strand.test(needle) : strand === needle
  );
