// import { useEffect, useState } from "react";

// const tempMovieData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt0133093",
//     Title: "The Matrix",
//     Year: "1999",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt6751668",
//     Title: "Parasite",
//     Year: "2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//   },
// ];

// const tempWatchedData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     runtime: 148,
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: "tt0088763",
//     Title: "Back to the Future",
//     Year: "1985",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ];

// const KEY = "275a28d2";

// const average = (arr) =>
//   arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

// export default function App() {
//   const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [watched, setWatched] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const tempQuery = "interstellar";

//   useEffect(
//     function () {
//       // async function fetchMovies() {
//       //   try {
//       //     setIsLoading(true);
//       //     setError("");
//       //     const res = await fetch(
//       //       `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
//       //     );

//       //     if (!res.ok) throw new Error("Something went wrong");

//       //     const data = await res.json();
//       //     if (data.Response === "false") throw new Error("Movie not found");
//       //     setMovies(data.Search);
//       //   } catch (err) {
//       //     console.error(err.message);
//       //     setError(err.message);
//       //   } finally {
//       //     setIsLoading(false);
//       //   }
//       // }
//       async function fetchMovies() {
//         try {
//           /* Set a Loading State */
//           setIsLoading(true);

//           /*reset error*/
//           setError("");

//           /* Fetch an API */
//           const res = await fetch(
//             `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
//             { signal: controller.signal }
//           );

//           /* If API failed to fetch, throw an Error */
//           if (!res.ok) throw new Error("Failed to fetch, Please Try Again");

//           /* Set result into data, when Fetched*/
//           const data = await res.json();

//           /* If Results not found, throw an Error */
//           if (data.Response === "False") throw new Error("Movie Not Found!");

//           /* Input search results into setMovies */
//           setMovies(data.Search);

//           /*reset error*/
//           setError("");
//         } catch (err) {
//           /* Set the error message into a State */
//           if (err.message !== "The user aborted a request.") {
//             setError(err.message);
//           }
//         } finally {
//           setIsLoading(false);
//         }
//       }
//       if (!query.length) {
//         setMovies([]);
//         setError("");
//         return;
//       }

//       fetchMovies();
//     },
//     [query]
//   );

//   return (
//     <>
//       <NavBar>
//         {" "}
//         <Search query={query} setQuery={setQuery} />
//         <Numresults movies={movies} />
//       </NavBar>
//       <Main>
//         {/* <Box element={<MovieList movies={movies} />}/>
//         <Box element={<><WatchedSummary watched={watched} />
//           <WatchedMovieList watched={watched} /></>}/> */}
//         {/* <Box>
//           {isLoading ? <Loader/> : <MovieList movies={movies} />}
//         </Box> */}
//         <Box>
//           {isLoading && <Loader />}
//           {!isLoading && !error && <MovieList movies={movies} />}
//           {error && <ErrorMessage message={error} />}
//         </Box>
//         <Box>
//           <WatchedSummary watched={watched} />
//           <WatchedMovieList watched={watched} />
//         </Box>
//       </Main>
//     </>
//   );
// }

// function Loader() {
//   return <p className="loader">Loading...</p>;
// }

// function ErrorMessage({ message }) {
//   return (
//     <p className="error">
//       <span>⛔️</span> {message}
//     </p>
//   );
// }

// function NavBar({ children }) {
//   return (
//     <nav className="nav-bar">
//       <Logo />
//       {children}
//     </nav>
//   );
// }

// function Logo() {
//   return (
//     <div className="logo">
//       <span role="img">🍿</span>
//       <h1>usePopcorn</h1>
//     </div>
//   );
// }

// function Numresults({ movies }) {
//   return (
//     <p className="num-results">
//       Found <strong>{movies.length}</strong> results
//     </p>
//   );
// }
// function Search({ query, setQuery }) {
//   return (
//     <input
//       className="search"
//       type="text"
//       placeholder="Search movies..."
//       value={query}
//       onChange={(e) => setQuery(e.target.value)}
//     />
//   );
// }

// function Main({ children }) {
//   return <main className="main">{children}</main>;
// }

// function Box({ children }) {
//   const [isOpen, setIsOpen] = useState(true);
//   return (
//     <div className="box">
//       <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
//         {isOpen ? "–" : "+"}
//       </button>
//       {isOpen && children}
//     </div>
//   );
// }

// function MovieList({ movies }) {
//   return (
//     <ul className="list">
//       {movies?.map((movie) => (
//         <Movie movie={movie} key={movie.imdbID} />
//       ))}
//     </ul>
//   );
// }

// function Movie({ movie }) {
//   return (
//     <li>
//       <img src={movie.Poster} alt={`${movie.Title} poster`} />
//       <h3>{movie.Title}</h3>
//       <div>
//         <p>
//           <span>🗓</span>
//           <span>{movie.Year}</span>
//         </p>
//       </div>
//     </li>
//   );
// }

// function WatchedSummary({ watched }) {
//   const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
//   const avgUserRating = average(watched.map((movie) => movie.userRating));
//   const avgRuntime = average(watched.map((movie) => movie.runtime));
//   return (
//     <div className="summary">
//       <h2>Movies you watched</h2>
//       <div>
//         <p>
//           <span>#️⃣</span>
//           <span>{watched.length} movies</span>
//         </p>
//         <p>
//           <span>⭐️</span>
//           <span>{avgImdbRating}</span>
//         </p>
//         <p>
//           <span>🌟</span>
//           <span>{avgUserRating}</span>
//         </p>
//         <p>
//           <span>⏳</span>
//           <span>{avgRuntime} min</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// function WatchedMovieList({ watched }) {
//   return (
//     <ul className="list">
//       {watched.map((movie) => (
//         <WatchedMovie movie={movie} key={movie.imdbID} />
//       ))}
//     </ul>
//   );
// }

// function WatchedMovie({ movie }) {
//   return (
//     <li>
//       <img src={movie.Poster} alt={`${movie.Title} poster`} />
//       <h3>{movie.Title}</h3>
//       <div>
//         <p>
//           <span>⭐️</span>
//           <span>{movie.imdbRating}</span>
//         </p>
//         <p>
//           <span>🌟</span>
//           <span>{movie.userRating}</span>
//         </p>
//         <p>
//           <span>⏳</span>
//           <span>{movie.runtime} min</span>
//         </p>
//       </div>
//     </li>
//   );
// }

import { useEffect, useState } from "react";
// import "./spinner.css";
import StarRating from "./StarRating";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = "275a28d2";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(
    function () {
      /* Cleaning Data Fetching*/
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          /* Set a Loading State */
          setIsLoading(true);

          /*reset error*/
          setError("");

          /* Fetch an API */
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          /* If API failed to fetch, throw an Error */
          if (!res.ok) throw new Error("Failed to fetch, Please Try Again");

          /* Set result into data, when Fetched*/
          const data = await res.json();

          /* If Results not found, throw an Error */
          if (data.Response === "False") throw new Error("Movie Not Found!");

          /* Input search results into setMovies */
          setMovies(data.Search);

          /*reset error*/
          setError("");
        } catch (err) {
          /* Set the error message into a State */
          if (err.message !== "The user aborted a request.") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      /* If search query is empty*/
      if (!query.length) {
        setMovies([]);
        setError("");
        return;
      }

      handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>

      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} OnSelectMovie={handleSelectMovie} />
          )}

          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              watched={watched}
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
// Loader
function Loader() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}

// error message
function ErrorMessage({ message }) {
  return (
    <div className="error">
      <span>⛔</span>
      {message}
    </div>
  );
}

/* 
==================================================================
Navbar Component
==================================================================
*/

const Navbar = ({ children }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
};

//logo
function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

// search

function Search({ query, setQuery }) {
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <input
      id="search"
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={handleSearch}
    />
  );
}

//num--results
function NumResults({ movies }) {
  return (
    <p className="num-results">
      <strong>{movies.length}</strong> results
    </p>
  );
}

/* 
==================================================================
Main Component
==================================================================
*/

const Main = ({ children }) => {
  return <main className="main">{children}</main>;
};

// Box
function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "-" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
}

/*
// watched--box
function WatchedBox() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "-" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
    );
}
*/

// movie--list
function MovieList({ movies, OnSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} OnSelectMovie={OnSelectMovie} />
      ))}
    </ul>
  );
}

// movie
function Movie({ movie, OnSelectMovie }) {
  return (
    <li onClick={() => OnSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>📅</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
// Movie Details
function MovieDetails({ watched, selectedId, onCloseMovie, onAddWatched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);

  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  /* destructuring fetched API results*/
  const {
    Title: title,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
    Writer: writer,
    Language: language,
    Year: year,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };

    onAddWatched(newWatchedMovie);

    onCloseMovie();
  }

  /* 
  keypress Event: 
  Escape Key to close from movie
  */
  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Escape") {
          onCloseMovie();
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [onCloseMovie]
  );

  /* 
  Effect to fetch Movie from the API
  using the imdbID
  */
  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        /* Fetch an API */
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );

        /* Set result into data, when Fetched */
        const data = await res.json();

        /* data, into setMovie */
        setMovie(data);
        setIsLoading(false);
      }

      getMovieDetails();
    },
    [selectedId]
  );

  /* 
  Effect to change Page TItle 
  to current movie selected
  */

  useEffect(
    function () {
      /* Change Page TItle to current movie selected*/
      if (!title) return;
      document.title = `Movie | ${title}`;

      /* cleanup function*/
      return function () {
        document.title = "usePopcorn";
      };
    },

    [title]
  );

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie`} />

            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>Language(s): {language}</p>
              <p>
                <span>⭐</span> {imdbRating} iMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to List
                    </button>
                  )}
                </>
              ) : (
                <p className="rated">
                  You've previously rated this movie
                  <span>
                    <b> ⭒ {watchedUserRating}</b>
                  </span>
                </p>
              )}
            </div>

            <p>
              <em>{plot}</em>
            </p>

            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
            <p>Written by {writer}</p>
            <p>Year: {year}</p>
          </section>
        </>
      )}
    </div>
  );
}

// watched--summary
function WatchedSummary({ watched }) {
  const avgImdbRating = average(
    watched.map((movie) => movie.imdbRating)
  ).toFixed(2);
  const avgUserRating = average(
    watched.map((movie) => movie.userRating)
  ).toFixed(2);
  const avgRuntime = average(watched.map((movie) => movie.runtime)).toFixed(2);

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} </span>
        </p>
      </div>
    </div>
  );
}

// watched--movie--list
function WatchedMovieList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>

        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}
