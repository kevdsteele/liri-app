# liri-app

## liri-app is a CLI application that is a play on Apple's Siri application. This application supports the base command of node liri.js with four command switches

1. **spotify-this**
* Search for a song/track on Spotify. Returns the top matching result. For increased accuracy, please include the full track name and consider adding the artist after the track name.

* Returns the artist, song name, song album and a Spotify preview link for the song if available 

* Example: *node liri.js spotify-this I Want It That Way* 
* Example: *node liri.js spotify-this I Want It That Way Backstreet Boys*

2.  **concert-this**
* Search Bands in Town for the next concert date for a band or artist.

* Returns the name of the concert venue, the venue location and date of the concert

* Example: *node liri.js concert-this BackStreet Boys*

3.  **movie-this**

* Search OMDB for infromation about a movie.

* Returns the following infor for the Movie: title, year made, IMDB rating, Rotten Tomatoes rating, language, plot, actors and the country where the movie was produced 

* Example: *node liri.js movie-this Star Wars*

4.  **do-what-it-says**

* Accesses a text file named random.txt which contains a command switch and search term that is read and then executed





