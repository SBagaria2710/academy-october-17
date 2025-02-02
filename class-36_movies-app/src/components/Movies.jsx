import { useEffect, useState } from "react";
import { API_KEY, IMAGE_BASE_URL, WATCH_LIST_KEY } from "../constant";
import { getWatchlistFromLocalStorage } from "../util";

function Movies() {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState(getWatchlistFromLocalStorage());

  const trendingMoviesUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page}`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  const getMovies = () => {
    if (!isLoading) {
      setIsLoading(true);
    }

    fetch(trendingMoviesUrl, options)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  const isMediaPresentInWatchlist = (mediaId, watchlistMovies) => {
    return watchlistMovies.find((movie) => movie.id === mediaId);
  };

  const saveMediaToLocalStorage = (movieObj) => {
    let currentWatchList = getWatchlistFromLocalStorage();

    // if (isMediaPresentInWatchlist(movieObj.id, currentWatchList)) return;
    currentWatchList = [
      ...currentWatchList,
      {
        id: movieObj.id,
        title: movieObj.title,
        posterPath: movieObj.poster_path,
        voteAverage: movieObj.vote_average,
        genreIds: movieObj.genre_ids,
      },
    ];

    localStorage.setItem(WATCH_LIST_KEY, JSON.stringify(currentWatchList));
    setWatchList(currentWatchList);
  };

  const removeMediaFromLocalStorage = (mediaId) => {
    if (watchList.length === 1) {
      localStorage.removeItem("WATCHLIST_KEY");
      setWatchList([]);
      return;
    }

    let updatedWatchlist = watchList.filter((media) => media.id != mediaId);
    localStorage.setItem("WATCHLIST_KEY", updatedWatchlist);
    setWatchList(updatedWatchlist);
  };

  const handleMovieClick = (movieObj) => {
    const { id: mediaId } = movieObj || {};

    if (isMediaPresentInWatchlist(mediaId, watchList)) {
      removeMediaFromLocalStorage(mediaId);
    } else {
      saveMediaToLocalStorage(movieObj);
    }
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  const handlePrevious = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };
  return (
    <div className="mt-6 px-4">
      <h2 className="text-2xl mb-4 font-bold underline">Trending Movies</h2>
      {isLoading ? (
        <div>Content is loading...</div>
      ) : (
        <div className="flex justify-start flex-wrap gap-8">
          {movies.map((movie, index) => {
            return (
              <div
                key={index}
                className="w-[160px] h-[200px] bg-cover rounded-xl p-4 m-4 hover:scale-110 duration-300 hover:cursor-pointer relative"
                style={{
                  backgroundImage: `url(${IMAGE_BASE_URL}/${movie.poster_path})`,
                }}
              >
                <div
                  className="p-2 m-2 absolute right-0 bottom-0 text-xl bg-opacity-60 bg-gray-900 rounded-xl"
                  onClick={() => handleMovieClick(movie)}
                >
                  {isMediaPresentInWatchlist(movie.id, watchList) ? "❤️" : "🤍"}
                </div>
                <div className="text-white text-center w-full p-2 bg-gray-900 bg-opacity-60 font-semibold">
                  {movie.title}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex justify-between space-x-2 my-5">
        <button onClick={handlePrevious} disabled={page === 1}>
          Previous
        </button>
        <div>{page}</div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Movies;
