"use strict";
const isRegExp = require("is-regexp");



function anyMatch(needle, haystack)
{
	return haystack.some(strand => isRegExp(strand) ? strand.test(needle) : strand === needle);
}



module.exports = anyMatch;
