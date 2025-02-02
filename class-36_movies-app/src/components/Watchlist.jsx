import { useState, useEffect } from "react";
import { getWatchlistFromLocalStorage } from "../util";
import { IMAGE_BASE_URL, WATCH_LIST_KEY } from "../constant";

function Watchlist() {
  const [watchList, setWatchList] = useState(getWatchlistFromLocalStorage());

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

  return (
    <>
      {watchList.length === 0 ? (
        <div>No Watchlisted Movies</div>
      ) : (
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
                    <tr key={id} className="bg-white border-b hover:bg-gray-50">
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
                        {genreIds.map((genreId) => genreId).join(", ")}
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
          </table>
        </div>
      )}
    </>
  );
}

export default Watchlist;
