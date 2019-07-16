# liri-app 
# developed by Kevin Steele for GWU Full Stack Web Development BootCamp 

*Github repo: https://github.com/kevdsteele/liri-app

## liri-app is a CLI application that is a play on Apple's Siri voice assistant. Type text commands in a terminal window to retrieve results. 

## liri-app dependencies 

* **Node.JS** must be installed to run liri-app
> *Axios, Chalk, DotEnv, Moment, Node-Spotify-API node packages must also be installed before running liri-app*

> Also uses the built in Node FS command to read an external text file 

## This application is run by typing node liri.js with one of four command switches

1. **spotify-this**
> Search for a song/track on Spotify. Returns the top matching result. For increased accuracy, please include the full track name and consider adding the artist after the track name.

> Returns the artist, song name, song album and a Spotify preview link for the song if available 

* Example: *node liri.js spotify-this I Want It That Way* 
* Example: *node liri.js spotify-this I Want It That Way Backstreet Boys*

2.  **concert-this**
> Search Bands in Town for the next concert date for a band or artist.

> Returns the name of the concert venue, the venue location and date of the concert

* Example: *node liri.js concert-this BackStreet Boys*

3.  **movie-this**

> Search OMDB for infromation about a movie.

> Returns the following infor for the Movie: title, year made, IMDB rating, Rotten Tomatoes rating, language, plot, actors and the country where the movie was produced 

* Example: *node liri.js movie-this Star Wars*

4.  **do-what-it-says**

> Accesses a text file named random.txt which contains a command switch and search term that is read and then executed

### liri-app Organization
#### Functions
1. liriBot is the primary function that processes the search type and search term processed via argv values and calls one of 3 functions using a switch statement. 

2. spotifySearch uses node-spotify-api to search Spotify

3. concertSearch

4. movieSearch 

#### Switch Statement to evaluate command line agruements and call the associated function

* The swich statement for **do-what-it-says** first uses FS to read the external text file values and then passes the values to the liriBot function

#### keys.js, .env file and DotEnv node package used to process and protect the Spotify API key 












