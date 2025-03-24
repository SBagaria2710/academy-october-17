import { axiosInstance } from ".";

export const addShow = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/shows/add-show", payload);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const updateShow = async (showId, payload) => {
  try {
    const response = await axiosInstance.put(
      `/api/shows/update-show/${showId}`,
      payload
    );
    console.log(payload, response);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const getShowsByTheatre = async (theatreId) => {
  try {
    const response = await axiosInstance.get(
      `/api/shows/get-all-shows-by-theatre/${theatreId}`
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const deleteShow = async (showId) => {
  try {
    const response = await axiosInstance.post(
      `/api/shows/delete-show/${showId}`
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const getAllTheatresByMovie = async (movieId, date) => {
  try {
    const response = await axiosInstance.get(
      `/api/shows/get-all-theatres-by-movie/${movieId}/${date}`
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const getShowById = async (showId) => {
  try {
    const response = await axiosInstance.get(
      `/api/shows/get-show-by-id/${showId}`
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
};
