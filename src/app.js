///////////////////
//Import modules //
///////////////////

import profile from "./profile.js";



/////////////
//App code //
/////////////

//Get arguments from CLI
var users = process.argv.slice(2);

//Get profile info
users.forEach(profile.get);
