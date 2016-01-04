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

    var argv = {
        _: ["joshuakleveter", "calebkleveter"],
        topic: "HTML"
    };
    var args = getProfile.getArguments(argv);

    context("public API", () => {
        it("should be an object", () => {
            expect(getProfile).to.be.an("object");
        });
    });

    context("getArguments() function", () => {
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

    context("getUserProfiles() function", () => {
        var profiles = getProfile.getUserProfiles(args.users);
        it("should return an object", () => {
            expect(profiles).to.be.an("object");
        });
        it("should have a property for each user that is an object", () => {
            expect(profiles).to.have.property("joshuakleveter").that.is.an("object");
            expect(profiles).to.have.property("calebkleveter").that.is.an("object");
        });
    });

});
