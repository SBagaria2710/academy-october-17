import { useState } from "react";

function Movies() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([
    {
      imageUrl:
        "https://images-cdn.ubuy.co.in/6356a05daebb735896567139-premiumprints-marvel-iron-man-original.jpg",
      title: "Movie 1",
    },
    { imageUrl: "https://placehold.co/400x800", title: "Movie 2" },
    { imageUrl: "https://placehold.co/400x800", title: "Movie 3" },
    { imageUrl: "https://placehold.co/400x800", title: "Movie 4" },
    { imageUrl: "https://placehold.co/400x800", title: "Movie 5" },
    { imageUrl: "https://placehold.co/400x800", title: "Movie 6" },
  ]);

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
      <div className="flex justify-evenly flex-wrap gap-8">
        {movies.map((movie, index) => {
          return (
            <div
              key={index}
              className="w-[160px] h-[200px] bg-cover rounded-xl p-4 m-4 hover:scale-110 duration-300 hover:cursor-pointer"
              style={{ backgroundImage: `url(${movie.imageUrl})` }}
            >
              <div className="text-white text-center w-full p-2 bg-gray-900 bg-opacity-60 font-semibold">
                {movie.title}
              </div>
            </div>
          );
        })}
      </div>
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
