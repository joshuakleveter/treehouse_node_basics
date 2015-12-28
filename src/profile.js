//Get a Treehouse user"s badge count and JavaScript points and display to console

///////////////////
//Import modules //
///////////////////

import https from "https";
import http from "http";

/**
* Print profile info
* @param  {String} username   - Treehouse username
* @param  {Number} badgeCount - User Treehouse badge count
* @param  {Number} points     - User Treehouse JavaScript points
* @return {String}            - Output message
*/
function printMessage(username, badgeCount, points) {
    "use strict";

    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript.";

    process.stdout.write(message + "\n");

    return message;
}



/**
 * Print error messages to console.
 * @param  {Error} error - JS error object
 * @return {undefined}
 */
function printErrorMessage(error) {
    process.stderr.write(error.message + "\n");
}



/**
 * Get the user's profile from Treehouse
 * @param  {String} username - User's Treehouse account name
 * @return {undefined}
 */
function get(username) {
    //Connect to the Treehouse user profile API (http://teamtreehouse.com/[username].json)
    var request = https.get("https://teamtreehouse.com/" + username + ".json", function getResponseHandler(response) {

        var body = "";

        //Read the JSON data
        response.on("data", function readData(chunck) {
            body += chunck;
        });

        //Parse the JSON data
        response.on("end", function parseData() {
            if (response.statusCode === 200) {
                try {
                    var profile = JSON.parse(body);
                    //Output the badge count and total JS points to the console
                    printMessage(username, profile.badges.length, profile.points.JavaScript);
                } catch (error) {
                    //Handle parse error(s)
                    printErrorMessage(error);
                }
            } else {
                //Handle status code error(s)
                printErrorMessage({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
            }
        });
    });

    //Handle connection error(s)
    request.on("error", printErrorMessage);
}

module.exports.get = get;
