import profile from "./profile.js";

var users = process.argv.slice(2);

users.forEach(profile.get);
