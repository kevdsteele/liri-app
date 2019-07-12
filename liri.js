require("dotenv").config();

var axios =require("axios");

var moment = require("moment");

var chalk = require("chalk");

var log = console.log;

var keys= require("./keys");

var Spotify = require("node-spotify-api")

var spotify = new Spotify(keys.spotify);

var searchType = process.argv[2];

var searchTerm = process.argv.splice(3).join(" ");

switch( searchType) {

case "spotify-this":

spotifySearch(searchTerm)
break;

case "concert-this":
concertSearch(searchTerm)
break;

case "movie-this":
movieSearch(searchTerm)

}




log(chalk.gray.bold("********************************************************************"))
log(chalk.gray.bold("********************************************************************"))
log("");
log(chalk.blue.inverse("******************* Welcome to Liri Bot ****************************"))

log("");
log(chalk.blue.bold("type "+ chalk.blue.inverse("node liri.js concert-this")) +(chalk.blue.bold(" + a band or artist name to search for concerts ")))
log(chalk.blue.bold("type "+ chalk.red.inverse("node liri.js spotify-this")) +(chalk.blue.bold(" + a band or artist name to search for concerts ")))
log(chalk.blue.bold("type "+ chalk.black.inverse("node liri.js movie-this")) +(chalk.blue.bold(" + a band or artist name to search for concerts ")))
log(chalk.blue.bold("type "+ chalk.magenta.inverse("node liri.js do-what-it-says")) +(chalk.blue.bold(" + a band or artist name to search for concerts ")))
log("");

log(chalk.gray.bold("********************************************************************"))
log(chalk.gray.bold("********************************************************************"))


function spotifySearch (track) {
    spotify
    .search({ type: "track", query: track })
    .then(function(response) {
      console.log(response.tracks.items[0].artists[0].name);  
      console.log(response.tracks.items[0].name);  
      console.log(response.tracks.items[0].album.name);  
      console.log(response.tracks.items[0].preview_url);  
      
  
    })
    .catch(function(err) {
      console.log(err);
    });

}

function concertSearch (band) {
    axios.get("https://rest.bandsintown.com/artists/" + band+ "/events?app_id=codingbootcamp").then(
        function(response) {
          console.log(response.data[0].lineup[0])
         console.log(response.data[0].venue.name)
         console.log(response.data[0].venue.city + " " + response.data[0].venue.region)
         console.log(moment(response.data[0].venue.datetime).format( "MM/DD/YYYY"));
        }
      );

}

function movieSearch (movie) {

    axios.get("http://www.omdbapi.com/?t=" + movie +"&plot=short&apikey=trilogy").then(
        function(response) {
          console.log("The movie's Title is: " + response.data.Title);
          console.log("The movie's Year is: " + response.data.Year);
          console.log("The movie's IMDB rating is: " + response.data.imdbRating);
          console.log("The movie's RT is: " + response.data.Ratings[1].Value );
          console.log("The movie's Country is: " + response.data.Country);
          console.log("The movie's Language is: " + response.data.Language);
          console.log("The movie's Plot is: " + response.data.Plot);
          console.log("The movie's Actors are: " + response.data.Actors);
      
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
}





