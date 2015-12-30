//////////////////
//Configuration //
//////////////////

//ESLint config
/*eslint-env mocha*/

//Imports and Global Vars
var chai = require("chai");
var expect = chai.expect;
var getProfile = require("../dist/get-profile.js");



////////////////
//Mocha Tests //
////////////////

describe("get-profile module", () => {
    'use strict';

    context("public API", () => {
        it("should be an object", () => {
            expect(getProfile.api).to.be.an("object");
        });
    });

    context("getArguments() function", () => {
        var args = getProfile.api.getArguments();
        it("should return an object", () => {
            expect(args).to.be.an("object");
        });
        it("should return a 'users' property that is an array with a minimum length of 1", () => {
            expect(args).to.have.property("users");
            expect(args.users).to.be.an("array");
            expect(args.users.length).to.be.above(0);
        });
        it("should return a 'topic' property that is a string", () => {
            expect(args).to.have.property("topic");
            expect(args.topic).to.be.a("string");
        });
    });

});
