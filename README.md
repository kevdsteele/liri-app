# liri-app 
# Fully developed by Kevin Steele for GWU Full Stack Web Development BootCamp 

**Github repo**: https://github.com/kevdsteele/liri-app

## liri-app is a CLI application that is a play on Apple's Siri voice assistant. Type text commands in a terminal window to retrieve results. 

## liri-app Dependencies 

* **[Node.JS](https://nodejs.org/en/download/)** must be installed to run liri-app
> *[Axios](https://www.npmjs.com/package/axios), [Chalk](https://www.npmjs.com/package/chalk), [DotEnv](https://www.npmjs.com/package/dotenv), [Moment](https://www.npmjs.com/package/moment),[Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api) node packages must also be installed before running liri-app*

> Also uses the built in Node FS command to read an external text file 

#### The keys.js, .env file and DotEnv node package are used to process and protect the Spotify API key 

*!!!!You will need to create your own .env file and format it as below!!!!*

####SPOTIFY API KEYS

SPOTIFY_ID=your_spotify_ID <br/>
SPOTIFY_SECRET=your_spotify_secret <br/>

*Please create a free Spotify account if you do not already have one and then visit https://developer.spotify.com/my-applications/#!/ to create a new application which will provide your Spotify_ID and Sptofiy_Secret*


## This application is run by typing *node liri.js* with one of four command switches

1. **spotify-this**
> Search for a song/track on Spotify. Returns the top matching result. For increased accuracy, please include the full track name and consider adding the artist after the track name.

> Returns the artist, song name, song album and a Spotify preview link for the song if available 

* Example: *node liri.js spotify-this I Want It That Way* 
* Example: *node liri.js spotify-this I Want It That Way Backstreet Boys*

*If no search term is entered, a search for I Saw The Sign will be performed*

2.  **concert-this**
> Search Bands in Town for the next concert date for a band or artist.

> Returns the name of the concert venue, the venue location and date of the concert

* Example: *node liri.js concert-this BackStreet Boys*

*If no search term is entered, a search for Jonas Brothers will be performed*



3.  **movie-this**

> Search OMDB for infromation about a movie.

> Returns the following infor for the Movie: title, year made, IMDB rating, Rotten Tomatoes rating, language, plot, actors and the country where the movie was produced 

* Example: *node liri.js movie-this Star Wars*

*If no search term is entered, a search for Mr Nobody will be performed*

4.  **do-what-it-says**

> Accesses a text file named random.txt which contains a command switch and search term that is read and then executed

* Example: *node liri.js do-what-it-says*

### liri-app Organization

#### Logging
*All liri-app commands are logged in a local file named log.txt*
#### Functions
1. liriBot is the primary function that processes the search type and search term via argv values and calls one of 3 functions using a switch statement. 

2. spotifySearch uses node-spotify-api to search Spotify

3. concertSearch uses Axios to search Bands in Town API

4. movieSearch uses Axios to search OMDB API

#### Switch Statement to evaluate command line agruements and call the associated function

* The swich statement for **do-what-it-says** first uses FS to read the external text file values and then passes the values to the primary liriBot function


# Screenshots of liri-app in action 

### node liri.js - no command entered 

![Liri-no-command](liri1.png)

### node liri.js spotify-this i want it that way 

![Liri-spotify1](liri2.png)

### node liri.js spotify-this no search term

![Liri-spotify2](liri3.png)

### node liri.js concert-this backstreet boys

![Liri-concert1](liric1.png)

### node liri.js concert-this no search term

![Liri-concert2](liric2.png)

### node liri.js movie-this star wars

![Liri-movie1](lirim1.png)

### node liri.js movie-this no search term

![Liri-movie2](lirim2.png)

### node liri.js do-what-it-says

![Liri-do1](lirid1.png)

### node liri.js do-what-it-says random.txt file

![Liri-do2](lirid2.png)

### log.txt file showing search logging

![Liri-log](lirilog.png)




















