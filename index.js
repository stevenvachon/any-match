"use strict";
const isRegExp = require("is-regexp");



const anyMatch = (needle, haystack) => haystack.some(strand =>
{
	return isRegExp(strand) ? strand.test(needle) : strand === needle;
});



module.exports = anyMatch;
