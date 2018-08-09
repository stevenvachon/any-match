"use strict";
const anyMatch = require("./");
const {expect} = require("chai");
const {it} = require("mocha");



it("supports numbers", () =>
{
	const haystack = [0, 1];

	expect( anyMatch(0,haystack) ).to.be.true;
	expect( anyMatch(1,haystack) ).to.be.true;
	expect( anyMatch(2,haystack) ).to.be.false;
});



it("supports strings", () =>
{
	const haystack = ["a", "b"];

	expect( anyMatch("a",haystack) ).to.be.true;
	expect( anyMatch("b",haystack) ).to.be.true;
	expect( anyMatch("c",haystack) ).to.be.false;
});



it("supports regular expressions", () =>
{
	const haystack = [/a/, /b/, /123/];

	expect( anyMatch("a",haystack) ).to.be.true;
	expect( anyMatch("b",haystack) ).to.be.true;
	expect( anyMatch(123,haystack) ).to.be.true;

	expect( anyMatch("c",haystack) ).to.be.false;
	expect( anyMatch(124,haystack) ).to.be.false;
});



it("supports a mix of numbers, strings and regular expressions", () =>
{
	const haystack = ["a", /b/, 123];

	expect( anyMatch("a",haystack) ).to.be.true;
	expect( anyMatch("b",haystack) ).to.be.true;
	expect( anyMatch(123,haystack) ).to.be.true;

	expect( anyMatch("c",haystack) ).to.be.false;
	expect( anyMatch(124,haystack) ).to.be.false;
});



it("rejects non-array haystacks", () =>
{
	expect(() => anyMatch("a","a")).to.throw();
	expect(() => anyMatch("a",true)).to.throw();
	expect(() => anyMatch("a",1)).to.throw();
	expect(() => anyMatch("a",{})).to.throw();
	expect(() => anyMatch("a",function(){})).to.throw();
});
