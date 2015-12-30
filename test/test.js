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
    context("public API", () => {
        it("should be an object", () => {
            expect(getProfile.api).to.be.an("object");
        });
    });
});
