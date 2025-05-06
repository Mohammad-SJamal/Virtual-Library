// import the Media class:
const Media = require("./Media");

// create your Movie class:
class Movie extends Media {
  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre); // Call the parent constructor with title, year, and genre
    this.director = director;
    this.rating = rating;
    this.duration = duration;
  }

  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }

  static longestMovie(movies) {
    let longestMovie = null;
    let longestDuration = 0;
    for (const movie of movies) {
      if (movie.duration > longestDuration) {
        longestDuration = movie.duration;
        longestMovie = movie;
      }
    }
    return longestMovie;
  }
}

// don't change below
module.exports = Movie;
