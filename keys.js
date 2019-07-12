var log = console.log

var chalk = require("chalk");

/*log(chalk.blue ("This file is loaded")); commnted out after testing file does load*/

exports.spotify = {

    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET

}
