/* required modules/files */

require("dotenv").config();

var axios =require("axios");

var moment = require("moment");

var chalk = require("chalk");

var keys= require("./keys");

var Spotify = require("node-spotify-api")

var fs= require("fs");

/* global variables */

var log = console.log;

var spotify = new Spotify(keys.spotify);

var searchType = process.argv[2];

var searchTerm = process.argv.splice(3).join(" ");

var spotifyArray =[];

var concertArray=[];

var movieArray=[];

var divider = "\n------------------------------------------------------------\n\n";

/* on screen instructions */

function instructions () {
    log(chalk.gray.bold("******************************************************************************"))
log(chalk.gray.bold("******************************************************************************"))
log("");
log(chalk.hex("#ff8800").inverse("************************ Welcome to Liri Bot *********************************"))

log("");
log(chalk.blue.bold("type "+ chalk.blue.inverse("node liri.js concert-this")) +(chalk.blue.bold(" + a band or artist name to search for concerts ")))
log(chalk.blue.bold("type "+ chalk.red.inverse("node liri.js spotify-this")) +(chalk.blue.bold(" + a song name to search for songs ")))
log(chalk.blue.bold("type "+ chalk.black.inverse("node liri.js movie-this")) +(chalk.blue.bold(" + a movie name to search for movies ")))
log(chalk.blue.bold("type "+ chalk.magenta.inverse("node liri.js do-what-it-says")) +(chalk.blue.bold(" to read from a local file list ")))
log("");

log(chalk.gray.bold("******************************************************************************"))
log(chalk.gray.bold("******************************************************************************"))

}

instructions();

/* begin switch logic */

if (searchType === undefined) {
    log(chalk.red.inverse("Please enter a command to begin a search"))
} else {
liriBot(searchType, searchTerm)

function liriBot(searchType, searchTerm) {

    fs.appendFile("log.txt", divider + "Search type was " + searchType + ", " + "Search term was " + searchTerm + "\n \n", function (err){
        if(err) {
            log(err);
        }
    })


switch(searchType) {

case "spotify-this":

if (searchTerm ==="") {
    spotifySearch("I saw the sign Ace of Base") 
} else {
spotifySearch(searchTerm)
}
break;

case "concert-this":
        if (searchTerm ==="") {
            concertSearch("Jonas Brothers") 
        } else {

concertSearch(searchTerm)
        }
break;

case "movie-this":

        if (searchTerm ==="") {
            movieSearch("Mr Nobody") 
        } else {
        movieSearch(searchTerm)
        }
break;

case "do-what-it-says":
  fs.readFile("random.txt", "utf8", function(error, data){
      if (error){
          return log(error);
      }

      var textArray = data.split(",");

      searchType=textArray[0];
      searchTerm=textArray[1];

 

     liriBot(searchType, searchTerm)

      
  })  

  break;

  default:
      log(chalk.inverse.red("Command not recognized. Please refer to the onscreen instructions for allowed commands"))

}
}
}






function spotifySearch (track) {
    spotify
    .search({ type: "track", query: track })
    .then(function(response) {
      log(chalk.red.inverse("Top Spotify search result for " + track))
      var prevLink =""

      if (response.tracks.items[0].preview_url !== null) {
      prevLink= "Preview link: " + response.tracks.items[0].preview_url;  
      } else {
          prevLink="Preview link not available"
      }
      spotifyArray = [
        "Artist name: " + response.tracks.items[0].artists[0].name,
        "Track name: " + response.tracks.items[0].name,
        "Album name: " + response.tracks.items[0].album.name,
        prevLink
      ].join("\n\n")
      
    
      fs.appendFile("log.txt", spotifyArray, function (err){
        if(err) {
            log(err);
        }
    })
      console.log(spotifyArray);
  
    })
    .catch(function(err) {
      log(err);
    });

}

function concertSearch (band) {
    axios.get("https://rest.bandsintown.com/artists/" + band+ "/events?app_id=codingbootcamp").then(
        function(response) {
        log(chalk.blue.inverse("Top concert result for " + band))

        concertArray=[
            "Concert name: " + response.data[0].lineup[0],
            "Venue name: " + response.data[0].venue.name,
            "Venue location: " + response.data[0].venue.city + " " + response.data[0].venue.region,
            "Concert date: " +moment(response.data[0].venue.datetime).format( "MM/DD/YYYY")
        ].join("\n \n")

        fs.appendFile("log.txt", concertArray, function (err){
            if(err) {
                log(err);
            }
        })
        log(concertArray)

         
        })
        .catch(function(err) {
            log(err);
        });
    

}

function movieSearch (movie) {

    axios.get("http://www.omdbapi.com/?t=" + movie +"&plot=short&apikey=trilogy").then(
        function(response) {
          log(chalk.black.inverse("Top Movie result for " + movie))

          movieArray= [
          "The movie's Title is: " + response.data.Title,
          "The movie's Year is: " + response.data.Year,
          "The movie's IMDB rating is: " + response.data.imdbRating,
          "The movie's RT rating is: " + response.data.Ratings[1].Value,
          "The movie's Country is: " + response.data.Country,
          "The movie's Language is: " + response.data.Language,
          "The movie's Plot is: " + response.data.Plot,
          "The movie's Actors are: " + response.data.Actors
          ].join("\n \n")

          fs.appendFile("log.txt", movieArray, function (err){
            if(err) {
                log(err);
            }
        })
          log(movieArray)
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            log("---------------Data---------------");
            log(error.response.data);
            log("---------------Status---------------");
            log(error.response.status);
            log("---------------Status---------------");
            log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            log("Error", error.message);
          }
          log(error.config);
        });
}





