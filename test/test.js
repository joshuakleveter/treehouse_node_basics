//////////////////
//Configuration //
//////////////////

//ESLint config
/*eslint-env mocha*/

//Imports and Global Vars
var chai = require("chai");
var expect = chai.expect;



////////////////
//Mocha Tests //
////////////////

describe("get-profile module", () => {
    context("public API", () => {
        it("should be an object", () => {
            expect(getProfile()).to.be.an("object");
        });
    });
});
