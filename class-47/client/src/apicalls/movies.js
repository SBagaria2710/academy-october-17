import { axiosInstance } from ".";

// Get a single movie by its id
export const getMovieById = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/movies/movie/${id}`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

// Get All Movies
export const getAllMovies = async () => {
  try {
    const response = await axiosInstance.get("api/movies/get-all-movies");
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

// Add a movie
export const addMovie = async (values) => {
  try {
    const response = await axiosInstance.post("/api/movies/add-movie", values);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

// Update a movie
export const updateMovie = async (movieId, payload) => {
  try {
    const response = await axiosInstance.put(
      `/api/movies/update-movie/${movieId}`,
      payload
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

// Update a movie
export const deleteMovie = async (movieId) => {
  try {
    const response = await axiosInstance.delete(
      `/api/movies/delete-movie/${movieId}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
