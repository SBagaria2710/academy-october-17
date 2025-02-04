import { useState, useEffect } from "react";
import { getWatchlistFromLocalStorage } from "../util";
import { API_KEY, IMAGE_BASE_URL, WATCH_LIST_KEY } from "../constant";

function Watchlist() {
  const [isLoading, setIsLoading] = useState(true);
  const [genreMap, setGenreMap] = useState({});
  const [genreList, setGenreList] = useState([]);
  const [watchList, setWatchList] = useState(getWatchlistFromLocalStorage());
  const [searchQuery, setSearchQuery] = useState("");

  const removeMediaFromLocalStorage = (mediaId) => {
    if (watchList.length === 1) {
      localStorage.removeItem(WATCH_LIST_KEY);
      setWatchList([]);
      return;
    }

    let updatedWatchlist = watchList.filter((media) => media.id != mediaId);
    localStorage.setItem(WATCH_LIST_KEY, JSON.stringify(updatedWatchlist));
    setWatchList(updatedWatchlist);
  };

  const handleFilter = (event) => {
    const selectedGenre = event.target.value;

    if (selectedGenre === "All") {
      setWatchList(getWatchlistFromLocalStorage());
    } else {
      const filteredWatchList = getWatchlistFromLocalStorage().filter(
        ({ genreIds }) => genreIds.includes(Number(selectedGenre))
      );
      setWatchList(filteredWatchList);
    }
  };

  const sortByRating = () => {
    const temp = [...watchList];
    const updatedWatchlist = temp.sort((a, b) => b.voteAverage - a.voteAverage);
    setWatchList(updatedWatchlist);
  };

  const genreMapUrl = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${API_KEY}`;
  const options = { method: "GET", headers: { accept: "application/json" } };
  const getGenre = () => {
    setIsLoading(true);
    fetch(genreMapUrl, options)
      .then((res) => res.json())
      .then((data) => {
        const { genres } = data;
        const computeGenreMap = genres.reduce((acc, genreObj) => {
          const { id, name } = genreObj;
          return { ...acc, [id]: name };
        }, {});

        setGenreMap(computeGenreMap);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  const getUniqueGenres = () => {
    const genres = [];
    getWatchlistFromLocalStorage().forEach(({ genreIds }) => {
      genres.push(...genreIds);
    });
    setGenreList(Array.from(new Set(genres)));
  };

  useEffect(() => {
    getGenre();
    getUniqueGenres();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filteredWatchList = watchList.filter(({ title }) =>
        title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setWatchList(filteredWatchList);
    } else {
      setWatchList(getWatchlistFromLocalStorage());
    }
  }, [searchQuery]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {watchList.length === 0 && !searchQuery ? (
        <div>No Watchlisted Movies</div>
      ) : (
        <div className="px-4 mt-4">
          <div className="flex justify-between">
            <select
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-900 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              onChange={handleFilter}
            >
              <option value="All">All</option>
              {genreList.map((genreId) => (
                <option key={genreId} value={genreId}>
                  {genreMap[genreId]}
                </option>
              ))}
            </select>
            <button
              className="text-white bg-blue-700 hover:bg-blue-900 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              onClick={sortByRating}
            >
              Sort by Rating
            </button>
          </div>
          <div className="flex justify-start">
            <input
              className="border-2 border-black rounded-xl"
              placeholder="Search Watchlist"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="overflow-hidden rounded-lg border-gray-200 shadow-md-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 font-bold">
                <tr>
                  <th scope="col" className="text-xl px-6 py-3">
                    Poster
                  </th>
                  <th scope="col" className="text-xl px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="text-xl px-6 py-3">
                    Average Rating
                  </th>
                  <th scope="col" className="text-xl px-6 py-3">
                    Genre(s)
                  </th>
                  <th scope="col" className="text-xl px-6 py-3">
                    <span>Edit</span>
                  </th>
                </tr>
              </thead>
              {watchList.length === 0 ? (
                <tbody>
                  <tr>
                    <td>No entry for this search</td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {watchList.map(
                    ({
                      id,
                      title = "",
                      posterPath,
                      voteAverage,
                      genreIds = [],
                    }) => {
                      return (
                        <tr
                          key={id}
                          className="bg-white border-b hover:bg-gray-50"
                        >
                          <td className="px-6 py-4">
                            <img
                              className="w-[160px] h-[25vh] min-h-[200px]"
                              src={`${IMAGE_BASE_URL}/${posterPath}`}
                              alt={title}
                            />
                          </td>
                          <td className="text-xl px-6 py-4 items-center">
                            {title}
                          </td>
                          <td className="text-xl px-6 py-4">{voteAverage}</td>
                          <td className="text-xl px-6 py-4">
                            {genreIds
                              .map((genreId) => genreMap[genreId])
                              .join(", ")}
                          </td>
                          <td
                            onClick={() => removeMediaFromLocalStorage(id)}
                            className="text-xl, space-x-1 px-6 py-4 text-right cursor-pointer text-red-200 hover:text-red-500"
                          >
                            <span>Delete</span>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              )}
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Watchlist;
