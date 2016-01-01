////////////
//Imports //
////////////

var getProfile = require("./get-profile");
var argv = require("yargs")
            .alias("h", "help")
            .alias("t", "topic")
            .demand(1)
            .describe("t", "Show total points in a single topic. (--topic [topic name])")
            .help("h")
            .usage("Usage: $0 [username(s)] [options]")
            .argv;



/////////////
//App Code //
/////////////

getProfile.getArguments(argv);
