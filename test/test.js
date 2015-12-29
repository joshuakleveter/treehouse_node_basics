/*eslint-env mocha*/
/*global error*/

var chai = require("chai");
var expect = chai.expect;

describe("Array", function() {
    before(function() {
        // ...
    });

    describe("#indexOf()", function() {
        context("when not present", function() {
            it("should return -1", function() {
                expect( [ 1, 2, 3 ].indexOf( 4 ) ).to.deep.equal(-1);
            });
        });
        context("when present", function() {
            it("should return the index where the element first appears in the array", function() {
                expect( [ 1, 2, 3 ].indexOf( 3 ) ).to.equal( 2 );
            });
        });
    });
});
