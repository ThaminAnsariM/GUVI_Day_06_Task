class Movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating || "pg";
    }
  
    static getPG(movies) {
      const pgMovies = [];
      for (const movie of movies) {
        if (movie.rating.toUpperCase() === "PG") {
          pgMovies.push(movie);
        }
      }
      return pgMovies;
    }
  }
  
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "pg-13");
  const toyStory = new Movie("Toy Story", "Pixar", "pg");
  const findingNemo = new Movie("Finding Nemo", "Pixar", "pg");


  
  const movies = [casinoRoyale, toyStory, findingNemo];
  
  
  console.log(Movie.getPG(movies));
  