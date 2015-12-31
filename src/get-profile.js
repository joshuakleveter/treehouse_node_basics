///////////////////////
//Get-Profile Module //
///////////////////////

//Get a Treehouse user's badge count and points in each category from their profile
//Provide option to see total points of a single category



//Get username(s) and optional category arg from CLI
//Get user profile(s) from Treehouse
//Parse profile data
//Format data
//Output to CLI



/**
 * Return the module's publicAPI to the 'api' object.
 * @return {Object} - publicAPI
 */
var api = (function getProfile() {

    function getArguments(argv) {
        var args = {
            users: argv._,
            topic: argv.topic
        };
        return args;
    }

    /**
     * Public API object.
     * This references any public functions of the module.
     * @type {Object}
     */
    var publicAPI = {
        getArguments: getArguments
    };

    return publicAPI;

})();



///////////////////
//Module Exports //
///////////////////

export { api };
