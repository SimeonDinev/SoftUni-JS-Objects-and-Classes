function createMovieRepository(input) {
  let movies = [];

  input.reduce((acc, curr) => {
    if (curr.includes("addMovie")) {
      const movieName = curr.split("addMovie ");
      movies.push({
        name: movieName[1],
      });
    } else if (curr.includes("directedBy")) {
      const [movieName, director] = curr.split(" directedBy ");
      const x = movies.find((m) => m.name === movieName);
      if (x) {
        x.director = director;
      }
    } else if (curr.includes("onDate")) {
      const [movieName, date] = curr.split(" onDate ");
      const x = movies.find((m) => m.name === movieName);
      if (x) {
        x.date = date;
      }
    }

    return acc;
  }, {});

  movies.forEach((x) => {
    console.log(x);
  });
}

createMovieRepository([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
